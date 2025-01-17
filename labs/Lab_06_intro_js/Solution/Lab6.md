﻿# Введение JavaScript
___________________________________________________
## Лабораторная работа №6
***Ляпин В.В. [АСБ-3-036]***
___________________________________________________
### Ответы на вопросы:

**Через какой оператор Вы объявили переменую?**
- Переменная была объявлена через оператор "var".

**Какие доступны операторы для объявления переменных? В чём их отличия?**
- Операторы для объявления переменных в JavaScript включают "var", "let" и "const". 
- Отличия между ними заключаются в области видимости и возможности переопределения значений.

**Что происходит при вызове alert()?**
- Функция alert(), отображает модальное диалоговое окно с указанным сообщением, предназначенное для уведомления пользователя.

**Как Вы думаете для чего может использоваться console.log()**
- Функция console.log() используется для вывода информации в консоль разработчика браузера.

### Код:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JS</title>
</head>
<body>
    <script>
        //1
        // создание переменной apple со значением 10
        var apple = 10;

        // вывод переменной apple с помощью операторов: alert(); console.log();
        alert(apple);
        console.log(apple);

        // создание переменной condition со случайным значением
        var condition = 'great';

        // вывод результата операции console.log('Good game is ' + condition)
        console.log('Good game is ' + condition);

        //2
        // создание произвольной целочисленной переменной
        var someInt = 5;

        // создание строковой переменной со значением '100'
        var someString = '100';

        // создание произвольной булевой переменной
        var someBool = true;

        // конкатенация переменных и вывод в консоль
        console.log(someInt + someString);
        console.log(someInt + someBool);
        console.log(someString + someBool);
        console.log(someString + someInt);
        console.log(someBool + someInt);
        console.log(someBool + someString);

        //3
        // создание пустого массива
        var arr = [];

        // заполнение массива рандомными числами с помощью оператора for
        for (var i = 0; i < 10; i++) {
            arr[i] = Math.floor(Math.random() * 20) - 10;
        }

        // используя метод filter убираем из массива числа меньше 0
        var filteredArr = arr.filter(function (num) {
            return num >= 0;
        });

        // вывод исходного и отфильтрованного массива в консоль для проверки
        console.log('Исходный массив:', arr);
        console.log('Отфильтрованный массив:', filteredArr);

        //4
        // создание функции, возвращающей случайное число
        function getRandomNumber() {
            return Math.floor(Math.random() * 100);
        }

        // проверка работы функции и вывод в консоль
        var randomNumber = getRandomNumber();
        console.log('Случайное число:', randomNumber);

        // создание функции умножения каждого элемента массива на число
        function multiplyArrayByNumber(arr, num) {
            return arr.map(function (elem) {
                return elem * num;
            });
        }

        var testArray = [1, 2, 3, 4, 5];
        var multipliedArray = multiplyArrayByNumber(testArray, 2);

        console.log('Умноженный массив:', multipliedArray);

        // создание анонимной функции, генерирующей случайное слово
        var generateRandomWord = function () {
            var words = ["apple", "banana", "orange", "watermelon", "kiwi"];
            return words[Math.floor(Math.random() * words.length)];
        };

        // вывод в консоль сгенерированного слова
        console.log('Сгенерированное слово:', generateRandomWord());

        //5
        // создание пустого объекта
        var person = {};

        // добавление полей в объект
        person.firstName = 'Ляпин';
        person.surname = 'Владислав';
        person.patronymic = 'Владимирович';
        person.birthday = '11.04.2003';
        person.hobby = 'Футбол';
        person.group = 'AСБ-036';

        // добавление метода для объекта
        person.getInfo = function () {
            var fullName = this.surname + ' ' + this.firstName + ' ' + this.patronymic;
            var birthYear = this.birthday.split('.')[2];
            var currentYear = new Date().getFullYear();
            var age = currentYear - birthYear;
            return fullName + ', ' + birthYear + ', ' + this.hobby + ', ' + age + ' лет';
        };

        // вызов метода и вывод результата через alert
        alert(person.getInfo());

        // создание объекта с зарплатами сотрудников
        var salaries = {
            "Иванов": 30000,
            "Петров": 35000,
            "Сидоров": 40000,
            "Козлов": 32000,
            "Николаев": 28000,
            "Иванова": 31000,
            "Петрова": 34000,
            "Сидорова": 38000,
            "Козлова": 29000,
            "Николаева": 33000
        };

        // вычисление общей зарплаты сотрудников
        var totalSalary = Object.values(salaries).reduce(function (acc, curr) {
            return acc + curr;
        }, 0);

        console.log('Общая зарплата сотрудников:', totalSalary);
    </script>
</body>
</html>
```

### Результат:
![](img/r1.png)
![](img/r2.png)
![](img/r3.png)