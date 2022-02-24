import FileSaver, { saveAs } from 'file-saver';
import xmlStart from './../xmlStart.xml';
import xmlEnd from './../xmlEnd.xml';
import { memberProfiles } from './memberProfiles.js';

const domObject = ( function() {
  const html = document.documentElement;
  html.style.fontSize = '10px';
  const mainContent = document.getElementById('mainContent');
  class Style {
    // constructor(display, margin, padding, height, width, fontSize) {
    //   this.display = display || 'block';
    //   this.margin = margin || 0;
    //   this.padding = padding || 0;
    //   this.height = height || '';
    //   this.width = width || '';
    //   this.fontSize = fontSize || '10px';
    // }
    setDisplay(display) {
      this.display = display;
    }
    setMargin(margin) {
      this.margin = margin;
    }
    setPadding(padding) {
      this.padding = padding;
    }
    setHeight(height) {
      this.height = height;
    }
    setWidth(width) {
      this.width = width;
    }
    setFontSize(fontSize) {
      this.fontSize = fontSize;
    }
    setBorderRadius(radius) {
      this.borderRadius = radius;
    }
  }
  class Attr {
    constructor() {}
    setAttribute(name, data) {
      this[name] = data;
    }
  }
  class domObject {
    constructor(objID, objClass) {
      this.id = objID || '';
      this.class = objClass || '';
      this.style = new Style();
      this.attr = new Attr();
    }
    addToDOM(node) {
      const el = document.createElement(this.type);
      for (let key in this) {
        if (key === 'id') {
          el.id = this['id'];
        } else if (key === 'class') {
          el.classList.add(this['class']);
        } else if (key === 'style') {
            for (let cssStyle in this[key]) {
              el.style[cssStyle] = this[key][cssStyle];
            }
        } else if (key === 'attr') {
          for (let cssAttr in this[key]) {
            el.setAttribute(cssAttr, this[key][cssAttr]);
          }
        }
      }
      return node.appendChild(el);
    }
    addTextContent(content) {
      
    }
  }
  class domDiv extends domObject{
    constructor(objID, objClass) {
      super(objID, objClass);
      this.type = 'div';
    }
  }
  class domH2 extends domObject{
    constructor(objID, objClass) {
      super(objID, objClass);
      this.type = 'h2';
    }
  }
  class domH3 extends domObject{
    constructor(objID, objClass) {
      super(objID, objClass);
      this.type = 'h3';
    }
  }
  class domPara extends domObject{
    constructor(objID, objClass) {
      super(objID, objClass);
      this.type = 'p';
    }
  }
  class domButton extends domObject{
    constructor(objID, objClass) {
      super(objID, objClass);
      this.type = 'button';
      this.style.borderRadius = '.7rem';
    }
  }
  const header = new domDiv('header', 'header');
  header.addToDOM(mainContent);

  const btn = new domButton('demoBtn', 'demoBtn');
  btn.addTextContent = 'DEMO';
  btn.style.setPadding('1rem 3rem');
  btn.addToDOM(mainContent);
  console.log(btn);
  return {
    
  }
})();

const memberPage = ( function() {

  const uploadForm = (function() {

    const uploadForm = document.createElement('form');
    mainContent.appendChild(uploadForm);
    
    const uploadBtn = document.createElement('input');
    uploadBtn.id = 'upload';
    uploadBtn.type = 'file';
    uploadBtn.addEventListener('change', handleUploadFile);
    uploadForm.appendChild(uploadBtn);
    mainContent.appendChild(uploadForm);
  
    // const dropArea = document.createElement('div');
    // dropArea.id = 'drop-area';
    // dropArea.style.width = '30rem';
    // dropArea.style.height = '30rem';
    // dropArea.style.background = 'rgba(63, 66, 65, .5)';
    // dropArea.style.borderRadius = '1rem';
    // const dropNotice = document.createElement('p');
    // dropNotice.textContent = 'Drop Your File Here';
    // dropNotice.style.fontSize = '2rem';
    // dropNotice.style.textAlign = 'center';
    // dropNotice.style.padding = '2rem';
    // dropNotice.style.userSelect = 'none';
    // dropArea.appendChild(dropNotice);
    // mainContent.appendChild(dropArea);
    
    // Reading uploaded file
    let reader = new FileReader();
    reader.addEventListener('load', handleFileRead);
  
    // dropArea.addEventListener('dragover', (event) => {
    //   event.stopPropagation();
    //   event.preventDefault();
    //   // Style the drag-and-drop as a "copy file" operation.
    //   event.dataTransfer.dropEffect = 'copy';
    // });
    
    // dropArea.addEventListener('drop', (event) => {
    //   event.stopPropagation();
    //   event.preventDefault();
    //   const file = event.dataTransfer.files[0];
    //   const fileType = file.type;
    //   fileType === 'text/csv' ? dropNotice.textContent = file.name : dropNotice.textContent = 'Unsupported file, please add csv file only.'
    //   // dropNotice.textContent = file.name
    //   // Trigger change event
    //   reader.readAsText(file);
    // });
    // Function to convert csv file to readable objects
    function strToArr(str, delimiter = ',') {
      str = str.replace(/"/g, '');
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
    function handleUploadFile(e) {
      let file = e.target.files[0];
      // Trigger change event
      reader.readAsText(file);
    }
    function handleFileRead(e) {
      const save = e.target.result;
      // Convert uploaded file to readable objects
      const uploadedData = strToArr(save);
      localStorage.setItem('uploadedData', JSON.stringify(uploadedData));
      // Clear local storage after 120s for security purposes
      setTimeout(( () => localStorage.removeItem('uploadedData')), 90000)
    }
  
  });
  const mpDownload = (function() {
  
    const mpDownloadBtn = document.createElement('button');
    mpDownloadBtn.textContent = 'Download';
    mpDownloadBtn.style.padding = `1.5rem 3rem`;
    mpDownloadBtn.style.cursor = 'pointer';
    mpDownloadBtn.style.fontSize = '2rem';
    mpDownloadBtn.style.background = '#3f4241';
    mpDownloadBtn.style.color = '#FFFFFF';
    mpDownloadBtn.style['border-radius'] = '.7rem';
    mainContent.appendChild(mpDownloadBtn);
    
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
  });
  function render() {
    uploadForm();
    mpDownload();
  }
  return {
    render,
  }
})();

export {memberPage};
