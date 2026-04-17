import {ViewElement} from './viewelement.js';

class ClassB extends ViewElement {
    
    constructor() {
        super('classB');
        this.div.textContent = 'ClassBDiv';
    }
}

export { ClassB };
