import { membersPage } from "./members/membersPage";

const header = ( function() {

  const content = document.getElementById('content');
  content.classList.add('fadeIn');

  const header = document.createElement('header');
  header.classList.add('header');
  content.appendChild(header);

  const siteTitle = document.createElement('h2');
  siteTitle.classList.add('title');
  siteTitle.textContent = 'Side Website Automation Tool';
  header.appendChild(siteTitle);

  const nav = document.createElement('nav');
  const menu = document.createElement('ul');
  const memberNav = document.createElement('li');
  memberNav.textContent = 'Members';
  memberNav.addEventListener('click', membersPage.render);
  const communityNav = document.createElement('li');
  communityNav.textContent = 'Communities';
  const pageLayoutNav = document.createElement('li');
  pageLayoutNav.textContent = 'Pae Layout';
  menu.appendChild(memberNav);
  menu.appendChild(communityNav);
  menu.appendChild(pageLayoutNav);
  nav.appendChild(menu);
  header.appendChild(nav);

})();

export {header};