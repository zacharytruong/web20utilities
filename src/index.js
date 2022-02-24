import {header} from './header.js';
import {footer} from './footer.js';
import {membersPage} from './members/membersPage.js';
import {memberProfiles} from './members/memberProfiles.js';


( function () {
  _init();

  function _init() {
    header;
    membersPage.render();
    footer;
  }
})();


