import {ViewElement} from './viewelement.js';

class NavigationBar {
    /**
     * @type {{ viewElement: ViewElement, button: HTMLButtonElement }[]}
     */
    #items = [];

    constructor() {
        this.navbar = document.createElement('div');
        this.navbar.id = 'navbar';
        document.body.appendChild(this.navbar);

        this.buttonbar = document.createElement('div');
        this.buttonbar.className = 'buttonbar';
        this.navbar.appendChild(this.buttonbar);

        this.content = document.createElement('div');
        this.content.className = 'content';
        this.navbar.appendChild(this.content);

        this.placeholder = document.createElement('div');
        this.placeholder.textContent = 'Kattints valamelyik gombra!';
        this.content.appendChild(this.placeholder);
    }

    /**
     *
     * @param {string} label
     * @param {ViewElement} viewElement
     */
    addViewElement(label, viewElement) {
        this.#items.push({ viewElement, button: this.#createButton(label, viewElement.id) });
        viewElement.appendTo(this.content);
    }

    /**
     *
     * @param {string} label
     * @param {string} id
     */
    #createButton(label, id) {
        const button = document.createElement('button');
        button.textContent = label;
        button.addEventListener('click', () => this.activate(id));
        this.buttonbar.appendChild(button);
        return button;
    }

    /**
     *
     * @param {string} id
     */
    activate(id) {
        let activeFound = false;

        for (const { viewElement, button } of this.#items) {
            viewElement.activate(id);
            const isActive = viewElement.id === id;
            button.classList.toggle('active', isActive);
            activeFound ||= isActive;
        }

        this.placeholder.classList.toggle('hidden', activeFound);
    }
}

export { NavigationBar };
