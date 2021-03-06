// ==UserScript==
// @name         Reverse year in table
// @namespace    ucoin
// @version      0.1
// @description  Переключает порядок сортировки по году в таблице
// @author       Prazeodium george-eclipse@yandex.ru
// @match        https://ru.ucoin.net/table/*
// @grant        none
// ==/UserScript==

;(function () {
  let $ = window.jQuery;
  let table = document.querySelector('.table');
  if (table !== null) {
    let theadArr = table.getElementsByTagName('THEAD')[0].firstChild.childNodes;
    let thFirst = theadArr[0];
    thFirst.innerHTML =
      '<span style="display:none;" class="yearUp">⯅ Год</span>' +
       '<span class="yearDown">⯆ Год </span>';
    let thLast = theadArr[theadArr.length - 1];
    thLast.innerHTML =
      '<span style="display:none;" class="yearUp">⯅ Год</span>' +
       '<span class="yearDown">⯆ Год </span>';
  } else return;

  function reverseYear(table) {

    let tbody = table.getElementsByTagName('tbody')[0];
    let rowsArray = [].slice.call(tbody.rows)
    rowsArray.reverse();
    table.removeChild(tbody);

    for (var i = 0; i < rowsArray.length; i++) {
      tbody.appendChild(rowsArray[i]);
    }
    table.appendChild(tbody);
  }
  if (table !== null) {
    table.onclick = function (e) {
      if (e.target.tagName != 'SPAN') return;
      reverseYear(table);
      $('.yearUp').toggle();
      $('.yearDown').toggle();
    }
  } else return;;
}());