import { membersPage } from "./members/membersPage";

const webpage = function() {

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
    const memberNav = document.createElement('li');
    memberNav.textContent = 'Members';
    // memberNav.addEventListener('click', membersPage.render);
    const communityNav = document.createElement('li');
    communityNav.textContent = 'Communities';
    const pageLayoutNav = document.createElement('li');
    pageLayoutNav.textContent = 'Pae Layout';
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
    main.appendChild(membersPage.createUploadForm());
    main.appendChild(membersPage.createDownloadSection());
    return main;
  }
  function createFooter() {
    const footer = document.createElement('footer');
    footer.id = 'footer';
    return footer;
  }
  
}();

export {webpage};