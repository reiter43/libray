import $ from '../core';

$.prototype.addAttr = function(attrName, attrValue) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].attributes) {
            continue;
        }
        
        this[i].setAttribute(attrName, attrValue);
    }    

    return this;
}

$.prototype.removeAttr = function(attrName) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].attributes) {
            continue;
        }
        
        this[i].removeAttribute(attrName);
    }    

    return this;
}

$.prototype.getAttr = function(attrName) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].attributes) {
            continue;
        }
        
        this[i] = this[i].getAttribute(attrName);         
    } 
    
    return this;
}