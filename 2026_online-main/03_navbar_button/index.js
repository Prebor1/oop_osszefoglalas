import {NavigationBar} from './navbar.js';
import {ClassA} from './A.js';
import {ClassB} from './B.js';

const navbar = new NavigationBar();

const classA = new ClassA();
const classB = new ClassB();

navbar.addViewElement('Class A oldala', classA);
navbar.addViewElement('Class B oldala', classB)
