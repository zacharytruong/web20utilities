import './style.css';
import FileSaver, { saveAs } from 'file-saver';
import {memberProfilesXML} from './memberProfiles/memberProfilesXML.js';



( function() {


  function _init() {
    mPXMLImport();
  }

})();


(function basicLayout() {
  
  const mainContent = document.getElementById('mainContent');
  
  // mainContent.style.background = 'rgba( 255, 255, 255, 0.25 )';
  // mainContent.style.boxShadown = '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )';
  // mainContent.style.backdropFilter = 'blur( 4px )';
  // mainContent.style['-webkit-backdrop-filter'] = 'blur( 4px )';
  // mainContent.style.border = '.1rem solid rgba( 255, 255, 255, 0.18 )';
  mainContent.style.display = 'flex';
  mainContent.style['align-items'] = 'center';
  mainContent.style['justify-content'] = 'center';
  mainContent.style.minWidth = '100vw';
  mainContent.style.minHeight = '100vh';

})();

(function uploadForm() {

  // const mainContent = document.getElementById('mainContent');
  const uploadForm = document.createElement('form');
  mainContent.appendChild(uploadForm);
  const uploadBtn = document.createElement('input');
  uploadBtn.id = 'upload';
  uploadBtn.type = 'file';
  uploadBtn.addEventListener('change', handleUploadFile);
  uploadForm.appendChild(uploadBtn);
  uploadBtn.style.padding = `1.5rem 3rem`;
  uploadBtn.style.cursor = 'pointer';
  uploadBtn.style.fontSize = '2rem';
  uploadBtn.style.background = '#3f4241';
  uploadBtn.style.color = '#FFFFFF';
  uploadBtn.style['border-radius'] = '.7rem';
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
  uploadForm.appendChild(dropArea);

  function handleUploadFile(e) {
    console.log(e.target.files)
  }
  
  dropArea.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Style the drag-and-drop as a "copy file" operation.
    event.dataTransfer.dropEffect = 'copy';
  });
  
  dropArea.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    dropNotice.textContent = fileList[0].name;
    console.log(fileList);
  });
})();

(function dropFile() {

    


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

// (function downloadBtn() {

//   const downloadBtn = document.createElement('button');
//   downloadBtn.textContent = 'Download';
//   downloadBtn.style.padding = `1.5rem 3rem`;
//   downloadBtn.style.cursor = 'pointer';
//   downloadBtn.style.fontSize = '2rem';
//   downloadBtn.style.background = '#3f4241';
//   downloadBtn.style.color = '#FFFFFF';
//   downloadBtn.style['border-radius'] = '.7rem';
//   mainContent.appendChild(downloadBtn);

//   const blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
//   downloadBtn.onclick = (() => FileSaver.saveAs(blob, "Hello World.xml"));

// })();