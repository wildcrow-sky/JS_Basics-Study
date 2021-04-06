"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  let bodyOfCredit = amount - contribution; // Тело кредита
  let monthlyRate = percent / 100 / 12; // Месячная процентная ставка
  let numberOfMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth(); // Количество месяцев

  //let monthlyPayment = Math.abs((bodyOfCredit * (monthlyRate + monthlyRate / (Math.pow((1 + monthlyRate), numberOfMonths) - 1))).toFixed(2));
  let monthlyPayment = bodyOfCredit * (monthlyRate + monthlyRate / (Math.pow((1 + monthlyRate), numberOfMonths) - 1));

  let totalAmount = Math.abs((monthlyPayment * numberOfMonths).toFixed(2));
  alert(`Общая сумма, которую необходимо выплатить клиенту = ${totalAmount} за ${numberOfMonths} месяцев!!!`);

  return totalAmount;
}

function getGreeting(name) {
  
  let greeting = (Number(name) === 0 || name === undefined) ? `Привет, мир! Меня зовут Аноним.` : `Привет, мир! Меня зовут ${name}.`;
  return greeting;

}