import './reset.css';
import './style.css';
import FileSaver, { saveAs } from 'file-saver';
import memberProfilesXMLSkeleton from './memberProfilesXMLSkeleton.xml';
import memberProfilesLayout from './memberProfilesLayout.xml';


// var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
// FileSaver.saveAs(blob, "hello world.txt");

(function basicLayout() {
  class Element {
    constructor(style) {
      this.style = style;
    }
  }
  class Styles {
    constructor(background,
      boxShadown,
      backdropFilter,
      webkitBackdropFilter,
      border,
      minWidth,
      minHeight) {
        this.background = background;
        this.boxShadown = boxShadown;
        this.backdropFilter = backdropFilter;
        this.webkitBackdropFilter = webkitBackdropFilter;
        this.border = border;
        this.minHeight = minHeight;
        this.minWidth = minWidth;
    }
  }
  const mainContentStyle = new Styles('rgba( 255, 255, 255, 0.25 )',
    '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    'blur( 4px )',
    'blur( 4px )',
    '.1rem solid rgba( 255, 255, 255, 0.18 )',
    '100vh',
    '100vw');

  const mainContentEle = new Element(mainContentStyle);
  // console.log(mainContentEle.style.backdropFilter);

  document.body.style.background = '#3f4241';
  // mainContent.style.background = 'rgba( 255, 255, 255, 0.25 )';
  // mainContent.style.boxShadown = '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )';
  // mainContent.style.backdropFilter = 'blur( 4px )';
  // mainContent.style['-webkit-backdrop-filter'] = 'blur( 4px )';
  // mainContent.style.border = '.1rem solid rgba( 255, 255, 255, 0.18 )';
  // mainContent.style.display = 'flex';
  // mainContent.style['align-items'] = 'center';
  // mainContent.style['justify-content'] = 'center';
  // mainContent.style.minWidth = '100vw';
  // mainContent.style.minHeight = '100vh';
})();


(function downloadBtn() {
  const downloadBtn = document.createElement('button');
  downloadBtn.textContent = 'Download';
  downloadBtn.style.padding = `1.5rem 3rem`;
  downloadBtn.style.cursor = 'pointer';
  downloadBtn.style.background = '#FFFFF';
  downloadBtn.style['border-radius'] = '.7rem';
  mainContent.appendChild(downloadBtn);

  // const blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
  // downloadBtn.onclick = (() => FileSaver.saveAs(blob, "Hello World.xml"));

})();

( function createPartners() {
  const PartnersArr = [];
  
    
  
})();

( function createPartnerProfiles() {

})();