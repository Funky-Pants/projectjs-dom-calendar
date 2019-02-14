var myDOM = {

    element: null,

    showHTML: function() {
      return document.documentElement.outerHTML;
    },

    //Returns HTML content from element
    getHTML: function(id) {
      return this.getElement(id).innerHTML;
    },

    //Taking existing DOM element
    getElement: function(id) {
      return document.querySelector(id);
    },

    //Add new element
    addElement: function(element, elementId) {
        var element = this.element;
        var newElement = document.createElement(elementId);
        element.appendChild(newElement);
        return newElement;
    },

    //Delete element
    deleteElement: function(id) {
      this.getElement(id).remove();
    },

    //Add attribute
    appendAttr: function(attr, attrValue) {
        this.element.setAttribute(attr, attrValue);
    },
    
    //Add class
    appendClass: function(className) {
        this.element.classList.add(className);
    },

    //Delete class
    removeClass: function(className) {
        this.element.classList.remove(className);
    },

    //Adds style
    setStyle: function(styleCollection) {
        for(var i=0; i<styleCollection.length; i++) {
            this.element.style.setProperty(styleCollection[i].property, styleCollection[i].value);
        }
    },

    //Changes text
    setText: function(id, text) {
        text = this.getElement(id).textContent;
      return text;
    },

    //Returns text
    getText: function(id) {
      return this.getElement(id).innerText;
    },

    //Changes HTML content in elemnt.
    setHTML: function(id, newContent, isAdd = false) {
      if (isAdd) {
        this.getElement(id).innerHTML += newContent;
      } else {
        this.getElement(id).innerHTML = newContent;
      }
      return this;
    },

    //Add event
    addEvent: function(id, event, callback) {
      this.getElement(id).addEventListener(event, callback);
    },

    //Change styles
    setStyle: function(styleCollection) {
        for(var i = 0; i < styleCollection.length; i++) {
            this.element.style.setProperty(styleCollection[i].property, styleCollection[i].value);
        }
    },

    //Gets parent element
    getParentElement: function(id) {
        return this.getElement(id).parentElement;
    },
  
    //Gets previous sibling element
    getPreviousSibling: function(id) {
        return this.getElement(id).previousSibling;
    },
  
    //Gets next sibling element
    getnNextSibling: function(id) {
        return this.getElement(id).nextSibling;
    },
    
    //Children elements
    getChildren: function(id) {
        return this.getElement(id).children
    },
  };
  