# Работа с HTML и CSS. Простые приёмы работа с DOM и BOM.
___________________________________________________
## Лабораторная работа №5
***Ляпин В.В. [АСБ-3-036]***
___________________________________________________

### 1. Стиль мобильной версии

![](img/Res1.png)

### 2. Адаптация под десктопы

![](img/Res2.png)


### HTML
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styel.css">
    <title>Лабораторная работа №5</title>
    <script src="sctipt.js"></script>
</head>
<body>
    <section>
        <header class="header">
            <a href="#">
                <img src="img/logo.png" alt="logo">
            </a>
            <nav>
                <ul class="menu">
                    <li><a href="#main">Содержимое</a></li>
                    <li><a target="_blank" href="https://www.rgups.ru/sved-obr/usloviia-pitaniia/">Сайт</a></li>
                </ul>
            </nav>
        </header>
    </section>
    <main class="container">
        <h1>Каталог лабораторной №5</h1>
        <div class="main-catalog">
            <div class="item">
                <img src="img/Photo_1.png" alt="item image">
                <h2>Хинкали с сыром</h1>
            </div>
            <div class="item">
                <img src="img/Photo_2.png" alt="item image">
                <h2>Карбонара</h1>
            </div>
            <div class="item">
                <img src="img/Photo_3.png" alt="item image">
                <h2>3вездочка с клубникой</h1>
            </div>
            <div class="item">
                <img src="img/Photo_4.png" alt="item image">
                <h2>Оладики</h1>
            </div>
            <div class="item">
                <img src="img/Photo_5.png" alt="item image">
                <h2>Запеканка</h1>
            </div>
            <div class="item">
                <img src="img/Photo_6.png" alt="item image">
                <h2>Супчик</h1>
            </div>
        </div>
        <h1>Популярные товары</h1>
        <div class="promo-catalog">
            <div class="item">
                <img src="img/Photo_1.png" alt="item image">
                <h2>Хинкали с сыром</h1>
</div>
            <div class="item">
                <img src="img/Photo_2.png" alt="item image">
                <h2>Карбонара</h1>
</div>
            <div class="item">
                <img src="img/Photo_3.png" alt="item image">
                <h2>3вездочка с клубникой</h1>
</div>
            <div class="item">
                <img src="img/Photo_4.png" alt="item image">
                <h2>Оладики</h1>
</div>
            <div class="item">
                <img src="img/Photo_5.png" alt="item image">
                <h2>Запеканка</h1>
</div>
            <div class="item">
                <img src="img/Photo_6.png" alt="item image">
                <h2>Супчик</h1>
</div>
            <div class="item">
                <img src="img/Photo_1.png" alt="item image">
                <h2>Хинкали с сыром</h1>
</div>
            <div class="item">
                <img src="img/Photo_2.png" alt="item image">
                <h2>Карбонара</h1>
</div>
            <div class="item">
                <img src="img/Photo_3.png" alt="item image">
                <h2>3вездочка с клубникой</h1>
</div>
            <div class="item">
                <img src="img/Photo_4.png" alt="item image">
                <h2>Оладики</h1>
</div>
            <div class="item">
                <img src="img/Photo_5.png" alt="item image">
                <h2>Запеканка</h1>
</div>
            <div class="item">
                <img src="img/Photo_6.png" alt="item image">
                <h2>Супчик</h1>
</div>
        </div>
    </main>
</body>
</html>
```


### CSS
```shell
* {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
}

body {
    background-color: white;
}

img {
    width: 100%;
}

h2 {
    font-weight: 100;
    color: rgb(100, 100, 100);
}

@media (max-width: 650px) {

    h1 {
        margin: 30px;
        margin-left: 0px;
    }

    h2 {
        font-weight: 100;
        color: rgb(100, 100, 100);
    }

    .header {
        align-items: center;
        margin: 12px;
        margin-bottom: 0;
    }

    .menu {
        list-style: none;
        margin: 10px 0 0 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .main-catalog {
        display: grid;
        grid-template-columns: 100%;
        row-gap: 20px;
        justify-content: center;
    }

    .promo-catalog {
        display: grid;
        grid-template-columns: repeat(2, calc(50% - 6px));
        gap: 20px 12px;
    }

    .container {
        width: calc(100% - 24px);
        margin: 0 auto;
    }

    .item {
        width: 100%;
        place-self: center;
    }

        .item:hover {
            opacity: 40%;
        }
}

@media (min-width: 650px) {

    h1 {
        margin: 70px;
        margin-left: 0px;
    }

    .header {
        margin: 40px;
        margin-bottom: 0px;
        max-height: 200px;
        display: grid;
        align-items: center;
        grid-template-columns: 20% 80%;
    }

    .menu {
        display: grid;
        list-style: none;
        grid-template-columns: repeat(2, 10%);
        gap: 10%;
        justify-items: right;
        justify-content: end;
    }

    .main-catalog {
        max-width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 30%);
        column-gap: 5%;
        row-gap: 24px;
    }

    .promo-catalog {
        max-width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 22%);
        column-gap: 4%;
        row-gap: 20px;
    }

    .container {
        width: calc(100% - 80px);
        margin: 0 auto;
    }

    .main-catalog.item {
        width: 30%;
    }

    .promo-catalog.item {
        width: 22%;
    }
}

.menu li a {
    font-size: large;
    color: rgb(63, 63, 63);
    text-decoration: underline;
}

    .menu li a:hover {
        color: red;
        text-decoration: none;
    }

.item {
    display: inline-block;
    margin: 0;
    padding: 0;
}

.main-catalog .item h2 {
    text-transform: uppercase;
    margin: 0;
}
```