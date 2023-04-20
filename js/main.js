// добавляем элементы
const form = document.getElementById('form')
const taskInput = document.getElementById('taskInput')
const tasksList = document.getElementById('tasksList')
const emptyList = document.getElementById('emptyList');

let tasks = [];

if (localStorage.getItem('tasks')){
tasks = JSON.parse(localStorage.getItem('tasks'))
 //для вывода каждой задачи из хранилища
tasks.forEach((task) => renderTask(task));
}

checkEmptyList();

//добавление задачи
form.addEventListener('submit', addTask);

//Удаление задачи
tasksList.addEventListener('click', deleteTask);

//отмечаем задачу завершенной
tasksList.addEventListener('click', doneTask);

//функции
function addTask (event) {
  //Отменяем отправку формы
  event.preventDefault()

  //достаем текст задачи из поля ввода
  const taskText = taskInput.value

  //описываем задачу в виде объекта
  const newTask = {
	id: Date.now(),
	text: taskText,
	done: false,
  }
  //добавляем задачу в массив с задачами
  tasks.push(newTask)

  //добавляем задачу в хранилище браузера LocalStorage
  saveToLocalStorage();

  //добавляем разметку для задач
  renderTask(newTask);
 

//очищаем поле Input и возвращаем фокус на него
taskInput.value = '';
taskInput.focus();

// //Проверка. Если в списке задач более 1 элемента скрываем блок "Список задач пуст"
checkEmptyList();


}

function deleteTask (event) {

//проверяем что клик был по кнопке "удалить задачу"
if(event.target.dataset.action === 'delete') {
const parentNode =	event.target.closest('.list-group-item');

//Определяем ID задачи
const id = Number(parentNode.id);

//удаляем задачу через фильтрацию массива
tasks = tasks.filter((task) => task.id !== id)

//добавляем функцию для созранения удаления в LocalStorage
saveToLocalStorage();

//удаляем задачу из разметки
parentNode.remove();


//проверка! Если в списке задачи, если нет, показываем блок "список дел пуст" с помощью функции
checkEmptyList();
}
}

function doneTask (event) {
//проверяем, что клик был по кнопке "задача выполнена"
if (event.target.dataset.action === "done"){
	const parentNode = event.target.closest('.list-group-item');

//определяем id задачи
const id = Number(parentNode.id);

//находим id в массиве 
const task = tasks.find((task) => task.id === id)

//проверяем что задача была найдена в массиве
if (task){
  task.done = !task.done;
}


//добавляем функцию для созранения удаления в LocalStorage
saveToLocalStorage();

	const taskTitle = parentNode.querySelector('.task-title');
	taskTitle.classList.toggle('task-title--done');
}
}

//создаем функцию для отражения "Списка дел"
function checkEmptyList() {
  if (tasks.length === 0){
    const emptyListHTML = `<li id="emptyList" class="list-group-item empty-list">
    <img src="./img/leaf.jpg" alt="Empty" width="50%" class="mt-3">
    <div class="empty-list__title">Список дел пуст</div>
  </li>`;
  tasksList.insertAdjacentHTML('afterbegin', emptyListHTML);
  }
  if (tasks.length > 0){
    const emptyListElement = document.getElementById('emptyList');
    //если элемент не найден в переменную будет помещен null
    emptyListElement ? emptyListElement.remove() : null;
  }
}

function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTask(task) {
     //формируем CSS класс
     const cssClass = task.done
     ? 'task-title task-title--done' : 'task-title';
     
       //формируем разметку для новой задачи
       const taskHTML = `<li id="${task.id}" class="list-group-item d-flex justify-content-between task-item">
       <span class="${cssClass}">${task.text}</span>
       <div class="task-item__buttons">
         <button type="button" data-action="done" class="btn-action">
           <img src="./img/tick.svg" alt="Done" width="18" height="18">
         </button>
         <button type="button" data-action="delete" class="btn-action">
           <img src="./img/cross.svg" alt="Done" width="18" height="18">
         </button>
       </div>
     </li>`;
     
     //Добавляем задачу на страницу
     tasksList.insertAdjacentHTML('beforeend', taskHTML);
}