import FileSaver, { saveAs } from 'file-saver';
import xmlStart from './../../dist/resources/xmlStart.xml';
import xmlEnd from './../../dist/resources/xmlEnd.xml';
import { memberProfiles } from './memberProfiles.js';
import { container } from 'webpack';

const membersPage = ( function() {

  
  
  // const uploadForm = (function() {
  //   const uploadForm = document.createElement('form');
  //   uploadForm.id = 'uploadForm';
  //   const uploadBtn = document.createElement('input');
  //   uploadBtn.id = 'upload';
  //   uploadBtn.type = 'file';
  //   uploadBtn.addEventListener('change', handleUploadFile);
    
  //   uploadForm.appendChild(uploadBtn);
  //   membersPage.appendChild(uploadForm);
    
    
  //   // Reading uploaded file
  //   let reader = new FileReader();
  //   reader.addEventListener('load', handleFileRead);

  //   // Function to convert csv file to readable objects
  //   function strToArr(str, delimiter = ',') {
  //     str = str.replace(/"/g, '');
  //     const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  //     const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  //     const arr = rows.map(function (row) {
  //       const values = row.split(delimiter);
  //       const el = headers.reduce(function (object, header, index) {
  //         object[header] = values[index];
  //         return object;
  //       }, {});
  //       return el;
  //     });
  //     return arr;
  //   }
  //   function handleUploadFile(e) {
  //     let file = e.target.files[0];
  //     // Trigger change event
  //     reader.readAsText(file);
  //   }
  //   function handleFileRead(e) {
  //     const save = e.target.result;
  //     // Convert uploaded file to readable objects
  //     const uploadedData = strToArr(save);
  //     localStorage.setItem('uploadedData', JSON.stringify(uploadedData));
  //     // Clear local storage after 120s for security purposes
  //     setTimeout(( () => localStorage.removeItem('uploadedData')), 90000)
  //   }
  
  // });
  // const mpDownload = (function() {
  
  //   const mpDownloadBtn = document.createElement('button');
  //   mpDownloadBtn.textmembersPage = 'Download';
  //   membersPage.appendChild(mpDownloadBtn);
    
  //   mpDownloadBtn.onclick = (() => {
  //     if (localStorage.getItem('uploadedData')) {
  //       // Generate Data
  //       const uploadedData = JSON.parse(localStorage.getItem('uploadedData'));
  //       const AgentsArr = memberProfiles.createAgents(uploadedData, []);
  //       const data = memberProfiles.createAgentsArrayData(AgentsArr);
  
  //       // Download functionality
  //       const blobData = createBlobData([], xmlStart ,data, xmlEnd);
  //       const blob = new Blob(blobData, {type: "text/plain;charset=utf-8"});
  //       FileSaver.saveAs(blob, "memberProfiles.xml");
  //       localStorage.removeItem('uploadedData');
  //      } else return;
  //   });
  //     function createBlobData(arr, ...args) {
  //       for (let arg of args) {
  //         arr.push(arg);
  //       }
  //       return arr;
  //     }
  // });
  
  function render() {
    // uploadForm();
    // mpDownload();
  }
  return {
    render,
  }
})();

export {membersPage};
