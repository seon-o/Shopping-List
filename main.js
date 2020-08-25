'use strict';
const itemRow = document.querySelector('item__row');
const footerInput = document.querySelector('footer__input');
const inputValue = document.createTextNode(footerInput);
const icoPlus = document.querySelector('ico-plus');


// Create a new list item when clicking on the "Add" button
function newElement() {
    var itemRow = document.createElement("li");
    var footerInput = document.querySelector("footer__input'").value;
    var inputValue = document.createTextNode(footerInput);
    li.appendChild(inputValue);
    if (footerInput === '') {
        alert("리스트를 입력해주세요");
    } else {
        document.querySelector("items").appendChild(li);
    }
    document.querySelector("footerInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}