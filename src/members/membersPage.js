import FileSaver, { saveAs } from 'file-saver';
import xmlStart from './../../dist/resources/xmlStart.xml';
import xmlEnd from './../../dist/resources/xmlEnd.xml';
import { memberProfiles } from './memberProfiles';
const membersPage = ( function() {
  
  
  function createDownloadSection() {
    const downloadDiv = document.createElement('div');
    downloadDiv.classList.add('mpContainer');
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('column');
    memberDiv.classList.add('third');
    const memberProfileDiv = document.createElement('div');
    memberProfileDiv.classList.add('column');
    memberProfileDiv.classList.add('third');
    const memberComboDiv = document.createElement('div');
    memberComboDiv.classList.add('column');
    memberComboDiv.classList.add('third');
    
    const mpTitle = document.createElement('h3');
    mpTitle.textContent = 'Member Profile XML';
    memberProfileDiv.appendChild(mpTitle);
    memberProfileDiv.appendChild(createMPDownloadBtn());

    downloadDiv.appendChild(memberDiv);
    downloadDiv.appendChild(memberProfileDiv);
    downloadDiv.appendChild(memberComboDiv);

    return downloadDiv;
    
  }
  function createMPDownloadBtn() {
    const mpDownloadBtn = document.createElement('button');
      mpDownloadBtn.textContent = 'Download';
      
      mpDownloadBtn.onclick = (() => {
        if (localStorage.getItem('uploadedData')) {
          // Generate Data
          const uploadedData = JSON.parse(localStorage.getItem('uploadedData'));
          const AgentsArr = memberProfiles.createAgents(uploadedData, []);
          const data = memberProfiles.createAgentsArrayData(AgentsArr);

          // Download functionality
          const blobData = createBlobData([], xmlStart ,data, xmlEnd);
          const blob = new Blob(blobData, {type: "text/plain;charset=utf-8"});
          FileSaver.saveAs(blob, "memberProfiles.xml");
          localStorage.removeItem('uploadedData');
          } else return;
      });
    function createBlobData(arr, ...args) {
      for (let arg of args) {
        arr.push(arg);
      }
      return arr;
    }
    return mpDownloadBtn;
  }
  return {
    createDownloadSection,
  }
})();




export {membersPage};
