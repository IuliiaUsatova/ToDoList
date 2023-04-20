#Todo List Application
Этот код создает простое веб-приложение для управления списком задач (Todo List). Пользователи могут добавлять новые задачи, удалять их и отмечать их как выполненные. Все задачи сохраняются в LocalStorage браузера, что позволяет сохранять состояние списка задач при перезагрузке страницы.

##Основные функции приложения
#####Добавление задачи:
 Пользователь может добавить новую задачу, введя текст в поле ввода и нажав кнопку отправки формы. Задача сохраняется в массив tasks и в LocalStorage, а также отображается на странице.

#####Удаление задачи:
 Пользователь может удалить задачу, нажав кнопку удаления рядом с ней. Задача удаляется из массива tasks и из LocalStorage, а также удаляется из разметки страницы.

#####Отметка задачи как выполненной: 
Пользователь может отметить задачу как выполненную, нажав кнопку "выполнено" рядом с задачей. Это изменит состояние задачи в массиве tasks и в LocalStorage, а также добавит стиль зачеркнутого текста для заголовка задачи на странице.

#####Проверка пустого списка: 
Приложение проверяет, пуст ли список задач, и отображает соответствующее сообщение, если список пуст.

##Структура кода
Код состоит из следующих основных частей:

#####Инициализация переменных: 
Код начинается с инициализации переменных, которые содержат ссылки на основные элементы DOM (форму, поле ввода, список задач и т.д.).

#####Загрузка задач из LocalStorage: 
Если в LocalStorage есть сохраненные задачи, они загружаются, парсятся в массив объектов и отображаются на странице.

#####Обработчики событий: 
Код содержит обработчики событий для добавления, удаления и отметки задач как выполненных.

#####Функции: 
Основная логика приложения реализована в функциях, таких как addTask, deleteTask, doneTask, checkEmptyList, saveToLocalStorage и renderTask.
