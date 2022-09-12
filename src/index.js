import mainPage from './modules/initialPage';
import {createButton} from './modules/initialPage';
import showMenu from './modules/displayMenu';
import showContacts from './modules/displayContacts';
import showHome from './modules/displayHome';

mainPage();
console.log("Hello rom ndex.js");

const main = document.getElementById('main');

const menu = createButton('Menu');
const home = createButton('Home');
const contacts = createButton('Contacts');
content.appendChild(menu);
content.appendChild(home);
content.appendChild(contacts);

menu.onclick = function (){showMenu(main)};
home.onclick = function (){showHome(main)};
contacts.onclick = function (){showContacts(main)};




