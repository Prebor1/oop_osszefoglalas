class InheritedClass {
    /**
     * @type {string}
     */
    #id;
    /**
     * @type {HtmlDivElement}
     */
    #div;

    /**
     *
     * @param {string} id
     */

    constructor(id) {
    this.#id = id;

    this.#div = document.createElement("div");
    this.#div.classList.add("card");

    this.head = document.createElement("div");
    this.head.classList.add("head");
    this.head.innerText = `id: ${id}`;

    this.body = document.createElement("div");
    this.body.classList.add("body");

    this.#div.appendChild(this.head);
    this.#div.appendChild(this.body);
    }
 
    get div() {
        return this.#div;
    }
 
    appendTo(parent) {
        parent.appendChild(this.#div);
    }
}
 
class A extends InheritedClass {
    constructor(id) {
    super(id);
    this.body.innerText = "ChildA";
  }
}
 
class B extends InheritedClass {
    constructor(id) {
    super(id);
    this.body.innerText = "ChildB";
  }
}
 
const div = document.createElement("div");
 
const a = new A("child");
const b = new B("childB");
 
a.appendTo(div);
b.appendTo(div);
 
document.body.appendChild(div);