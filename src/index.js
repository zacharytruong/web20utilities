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
  mainContent.style.background = 'rgba( 255, 255, 255, 0.25 )';
  mainContent.style.boxShadown = '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )';
  mainContent.style.backdropFilter = 'blur( 4px )';
  mainContent.style['-webkit-backdrop-filter'] = 'blur( 4px )';
  mainContent.style.border = '.1rem solid rgba( 255, 255, 255, 0.18 )';
  mainContent.style.display = 'flex';
  mainContent.style['align-items'] = 'center';
  mainContent.style['justify-content'] = 'center';
  mainContent.style.minWidth = '100vw';
  mainContent.style.minHeight = '100vh';

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