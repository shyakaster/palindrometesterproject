(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

module.exports = Phrase;
//Modifies a String native object
String.prototype.reverse = function reverseFunction(){
    //the first alternative preserves emoji characters in a string
    return Array.from(this).reverse().join("");
    //return string.split("").reverse().join("");
}

function Phrase(content){
    this.content = content;
    this.processContent = function processContent(){
        return this.letters().toLowerCase();
    }
    this.palindrome = function palindrome(){
        return this.processContent() === this.processContent().reverse();
    }
    //Return the content without punctuation
    this.letters = function letters(){
        //this is beautiful peace of functional programming
        return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
    }
}



},{}],2:[function(require,module,exports){
let Phrase = require("shyakaster-palindrome");

let string = prompt("Please enter a string for palindrome testing");

let phrase = new Phrase(string);

if(phrase.palindrome()){
    alert(`"${phrase.content}" is a palindrome!`);
}else{
    alert(`"${phrase.content}" is not a palindrome!`)
}

},{"shyakaster-palindrome":1}]},{},[2]);
