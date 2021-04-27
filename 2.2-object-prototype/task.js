"use strict";

String.prototype.isPalindrome = function() {
  let text = this.replace(/ /g, "").toLowerCase().split(""); // В строке удаляем все пробелы и делаем её массивом
  
  for (let i = 0; i < text.length; i++) {
    if (text[i] != text[(text.length - 1) - i]) return false;
  }
  return true;
};


function getAverageMark(marks) {
  
  let sumMarks = 0; // Определяем сумму оценок предмета/предметов
  
  if (marks.length === 0) return 0; // Проверяем массив на наличие оценок
  
  for (let i = 0; i < marks.length; i++) {
    sumMarks = marks[i] + sumMarks;
  }
  let averageMark = Math.round(sumMarks / marks.length);
  
  return averageMark;
}

function checkBirthday(birthday) {

  const now = +new Date();
  const dateOfBirthday = +new Date(birthday);
  const diff = now - dateOfBirthday;

  const age = diff / (365.25 * 24 * 60 * 60 * 1000); // Расчет возраста по равновисокосному году

  let result = age >= 18 ? true : false;
    
  return result;
}