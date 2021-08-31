## Models Schema

#### User
|field|type|description|
|:---:|:--:|-----------|
|id|serial/int|id|
|login|string|Логин пользователя|
|email|string|Email пользователя|
|password|string|Соленый хэш пароля|
|name|string|Имя пользователя|
|lastname|string|Фамилия пользователя|
|sex|string|Пол пользователя. Выбор из мужского, женского и неопределившегося|
|orientation|string|Ориентация пользователя. Выбирается из предложенного списка|
|admin|Boolean|Является ли пользователь администрацией|

#### Token
|field|type|description|
|:---:|:--:|-----------|
|id|serial/int|id|
|person|*FK:USER*|Пользователь, которому принадлежит токен|
|token|string|Токен пользователя|
|active|boolean|Активен ли токен. Мы не удаляем токены, а помечаем их как неактивные|
