<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Effective Mobile Тестовое задание</title>
</head>
<body>
    <h1>Effective Mobile Тестовое задание</h1>
    <h2>Описание</h2>
    <p>Это тестовое задание для Effective Mobile задние2. Проект использует Docker Compose для оркестрации сервисов и предоставляет API для работы с историей и пользователями.</p>
    <p>Покачто без миграций он циклом записи добавляет разбираюсь с миграциями у nest'а</p>
    <h2>Запуск проекта</h2>
    <ol>
        <li>Склонируйте репозиторий:
            <pre><code>git clone &lt;repository_url&gt;
cd &lt;repository_name&gt;
            </code></pre>
        </li>
        <li>Запустите Docker Compose:
            <pre><code>docker-compose up
            </code></pre>
        </li>
    </ol>
    <h2>Тестирование API</h2>
    <p>Вы можете тестировать API с помощью Postman. Ниже приведены доступные эндпоинты:</p>
    <h3>History</h3>
    <ul>
        <li>Для изменения статуса проблем и получения ко-во с true:
            <pre><code>GET http://localhost:3001/problem</code></pre>
        </li>
        <li>Если хотите добавить свою запись:
            <pre><code>GET http://localhost:3001/problem/create</code></pre>
            в body передавать(пример)
            <pre><code>{
    "name": "test3",
    "age": "21",
    "gender": "Woman",
    "problem": "true"
}</code></pre>
        </li>
    </ul>
</body>
</html>
