function getResult(a, b, c) {
    "use strict";
    let discr;
    let x = [];
      
    if (a === 0) {
      return alert(`Аргумент (a) = ${a}. Данные заданы некорректно. Введите заново`)
    }
    
    discr = Math.pow(b, 2) - 4 * a * c;
      
    if (discr < 0) {
      alert(`Дискриминант меньше нуля и = ${discr}. Корней нет! Массив пустой!`);
    } else {
      x[0] = (-b + Math.sqrt(discr)) / (2 * a);
      if (discr > 0) {
        alert(`Дискриминант = ${discr}`);
        x[1] = (-b - Math.sqrt(discr)) / (2 * a);
      }
    }
  
    return x;
  }
  
  function getAverageMark(marks) {
    "use strict";
    let sumMarks = 0;
    let averageMark;
  
    if (marks.length === 0) {
      averageMark = 0;
    } else {
      alert(`Массив не пустой`);
      
      if (marks.length > 5) {
        alert(`Количество оценок превышает 5. Общее количество введенных оценок = ${marks.length}`);
        marks.splice(5, (marks.length - 5));
      }
      
      for (let i = 0; i < marks.length; i++) {
        sumMarks = marks[i] + sumMarks;
      }
      averageMark = sumMarks / marks.length;
    }
    return averageMark;
  }
  
  function askDrink(name, dateOfBirthday) {
    "use strict";  
    const currentYear = new Date().getFullYear();
    const yearOfBirthday = dateOfBirthday.getFullYear();
  
    const usersAge = currentYear - yearOfBirthday;
    
    let result = usersAge >= 18 ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу Вам продать алкоголь. Могу предложить Вам замечательный клюквенный компот!`
    
    alert(result);
    
    return result;
  }
  