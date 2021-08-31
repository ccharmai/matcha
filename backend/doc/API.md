## API Schema

##### BASE URL ```http://127.0.0.1:5000/api/```

- #### ```login```
Авторизация пользователя по логину и паролю.
В ответ выдается токен и основная информация о пользователе.

*Request*
|param|required|default|description|
|:---:|:------:|:-----:|-----------|
|login|yes|`-`|Логин пользователя из формы авторизации|
|password|yes|`-`|Пароль пользователя из формы авторизации|

*Responce*
|param|required|description|
|:---:|:------:|:---------:|
|status|yes|**true**/**false** в зависимости от успеха авторизации|
|msg|*Если **false***|Сообщение пользователю об ошибке|
|login|*Если **true***|Логин пользователя|
|name|*Если **true***|Имя пользователя|
|lastname|*Если **true***|Фамилия пользователя|
|admin|*Если **true***|Является ли пользователь администрацией|
|guide|*Если **true***|Нужно ли перенаправить пользователя на экран заполнения информации о себе|


- #### ```signup```
Создание нового пользователя

- #### ```available```
Проверка доступности логина или почты пользователя

*Request*
|param|required|default|description|
|:---:|:------:|:-----:|-----------|
|login|No **if** provided email|`null`|Логин для проверки|
|email|No **if** provided login|`null`|Почта для проверки|

*Responce*
|param|required|description|
|:---:|:------:|:---------:|
|login|no|**true** if login available, else **false**|
|email|no|**true** if email available, else **false**|
