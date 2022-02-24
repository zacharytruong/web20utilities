import FileSaver, { saveAs } from 'file-saver';
import { memberPage } from './members/membersPage.js';
import xmlStart from './xmlStart.xml';
import xmlEnd from './xmlEnd.xml';

// ( function localStorage() {
//   const localStorage = window.localStorage;
//   const AgentsArr = [];
//   localStorage.setItem('AgentsArr', JSON.stringify(AgentsArr));
// })();

( function () {
  _init();

  function _init() {
    memberPage.render();
  }
})();


