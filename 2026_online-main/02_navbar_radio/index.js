import {NavigationBar} from './navbar.js';
import {ClassA} from './A.js';
import {ClassB} from './B.js';

const navbar = new NavigationBar();

const classA = new ClassA();
classA.appendTo(document.body);

const classB = new ClassB();
classB.appendTo(document.body);

navbar.addViewElement('ClassA oldala', classA);
navbar.addViewElement('ClassB oldala', classB);