import './style.css';
import FileSaver, { saveAs } from 'file-saver';
import {memberProfilesXML} from './memberProfiles/memberProfilesXML.js';

( function init() {

  function _init() {
    mPXMLImport();
  }

})();

(function basicLayout() {
  
  const mainContent = document.getElementById('mainContent');
  mainContent.style.display = 'flex';
  mainContent.style['flex-direction'] = 'column';
  mainContent.style['align-items'] = 'center';
  mainContent.style['justify-content'] = 'center';
  mainContent.style.minWidth = '100vw';
  mainContent.style.minHeight = '100vh';

})();

(function uploadForm() {

  const uploadForm = document.createElement('form');
  mainContent.appendChild(uploadForm);
  
  const uploadBtn = document.createElement('input');
  uploadBtn.id = 'upload';
  uploadBtn.type = 'file';
  uploadBtn.accept = '.csv';
  uploadBtn.style.display = 'none';
  uploadBtn.addEventListener('change', handleUploadFile);
  uploadForm.appendChild(uploadBtn);
  const uploadBtnLabel = document.createElement('label');
  uploadBtnLabel.setAttribute('for', 'upload');
  uploadBtnLabel.textContent = 'Browse';
  uploadBtnLabel.style.padding = '1.5rem 3rem';
  uploadBtnLabel.style.background = '#3f4241';
  uploadBtnLabel.style['border-radius'] = '.7rem';
  uploadBtnLabel.style.margin = '1rem';
  uploadBtnLabel.style.color = '#FFFFFF';
  uploadForm.appendChild(uploadBtnLabel);
  mainContent.appendChild(uploadForm);

  const dropArea = document.createElement('div');
  dropArea.id = 'drop-area';
  dropArea.style.width = '30rem';
  dropArea.style.height = '30rem';
  dropArea.style.background = 'rgba(63, 66, 65, .5)';
  dropArea.style.borderRadius = '2rem';
  dropArea.style.margin = '1rem';
  const dropNotice = document.createElement('p');
  dropNotice.textContent = 'Drop Your File Here';
  dropNotice.style.fontSize = '2rem';
  dropNotice.style.textAlign = 'center';
  dropNotice.style.padding = '2rem';
  dropNotice.style.userSelect = 'none';
  dropArea.appendChild(dropNotice);
  mainContent.appendChild(dropArea);
  
  let reader = new FileReader();
  reader.addEventListener('load', handleFileRead);

  dropArea.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Style the drag-and-drop as a "copy file" operation.
    event.dataTransfer.dropEffect = 'copy';
  });
  
  dropArea.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const fileType = file.type;
    fileType === 'text/csv' ? dropNotice.textContent = file.name : dropNotice.textContent = 'Unsupported file, please add csv file only.'
    reader.readAsText(file);
  });
  
  function handleUploadFile(e) {
    console.log('uploading');
    let file = e.target.files[0];
    reader.readAsText(file);
  }
  function handleFileRead(e) {
    const save = e.target.result;
    const arr = strToArr(save);
    const localStorage = window.localStorage;
    localStorage.setItem('uploadedFile', JSON.stringify(arr));
    // const agent = JSON.parse(localStorage.getItem('uploadedFile'))[0];
    // console.log(agent['"Email"'].slice(1, agent['"Email"'].length - 1));
    localStorage.clear()
  }
  function strToArr(str, delimiter = ',') {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
    return arr;
  }
})();

(function downloadBtn() {

  const downloadBtn = document.createElement('button');
  downloadBtn.textContent = 'Download';
  downloadBtn.style.padding = `1.5rem 3rem`;
  downloadBtn.style.cursor = 'pointer';
  downloadBtn.style.fontSize = '2rem';
  downloadBtn.style.background = '#3f4241';
  downloadBtn.style.color = '#FFFFFF';
  downloadBtn.style['border-radius'] = '.7rem';
  mainContent.appendChild(downloadBtn);

  const blob = new Blob([], {type: "text/plain;charset=utf-8"});
  downloadBtn.onclick = (() => FileSaver.saveAs(blob, "memberProfilesXML.xml"));

})();