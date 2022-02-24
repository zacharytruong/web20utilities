import { membersPage } from "./members/membersPage";

const webpage = function() {
  const localStorage = window.localStorage;
  const content = document.getElementById('content');
  content.classList.add('fadeIn');
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
  
    const siteTitle = document.createElement('h2');
    siteTitle.classList.add('title');
    siteTitle.textContent = 'Side Website Automation Tool';
    header.appendChild(siteTitle);
  
    const nav = document.createElement('nav');
    const menu = document.createElement('ul');
    menu.classList.add('navList');
    const memberNav = document.createElement('li');
    memberNav.classList.add('navItem');
    memberNav.textContent = 'Members';
    // memberNav.addEventListener('click', membersPage.render);
    const communityNav = document.createElement('li');
    communityNav.classList.add('navItem');
    communityNav.textContent = 'Communities';
    const pageLayoutNav = document.createElement('li');
    pageLayoutNav.classList.add('navItem');
    pageLayoutNav.textContent = 'Page Layout';
    menu.appendChild(memberNav);
    menu.appendChild(communityNav);
    menu.appendChild(pageLayoutNav);
    nav.appendChild(menu);
    header.appendChild(nav);

    return header;
  }
  function createMain() {
    const main = document.createElement('main');
    main.id = 'main';
    main.appendChild(createUploadForm());
    main.appendChild(membersPage.createDownloadSection());
    return main;
  }
  function createFooter() {
    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.appendChild(createFooterCopyright());
    return footer;
  }
  function createFooterCopyright() {
    const para = document.createElement('p');
    para.textContent = '© by Zach Truong';
    para.classList.add('copyright');
    return para;
  }
  function createUploadForm() {
    const uploadForm = document.createElement('form');
    uploadForm.id = 'uploadForm';
    const uploadBtn = document.createElement('input');
    uploadBtn.id = 'upload';
    uploadBtn.type = 'file';
    uploadBtn.addEventListener('change', handleUploadFile);
    uploadForm.appendChild(uploadBtn);
    const uploadBtnLabel = document.createElement('label');
    uploadBtnLabel.textContent = 'Browse';
    uploadBtnLabel.classList.add('uploadLabel');
    uploadBtnLabel.classList.add('button');
    uploadBtnLabel.setAttribute('for', 'upload');
    uploadForm.appendChild(uploadBtnLabel);
    const uploadNotification = document.createElement('span');
    uploadNotification.classList.add('uploadNotification');
    uploadNotification.textContent = 'Please choose your data, only csv is supported.';
    uploadForm.appendChild(uploadNotification);

    function handleUploadFile(e) {
      let file = e.target.files[0];
      uploadNotification.textContent = file.name;
      // Trigger load event
      reader.readAsText(file);
    }
    // Reading uploaded file
    let reader = new FileReader();
    reader.addEventListener('load', handleFileRead);
    function handleFileRead(e) {
      const save = e.target.result;
      // Convert uploaded file to readable objects
      const uploadedData = strToArr(save);
      localStorage.setItem('uploadedData', JSON.stringify(uploadedData));
      // Clear local storage after 120s for security purposes
      setTimeout(( () => localStorage.removeItem('uploadedData')), 60000)
    }
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
    return uploadForm;
  }
  
  
  
}();

export {webpage};