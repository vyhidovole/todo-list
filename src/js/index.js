/**
 * Форма для добавления задач.
 * @type {HTMLFormElement}
 */
const form = document.querySelector('#todo-list-form');

/**
 * Поле ввода заголовка задачи.
 * @type {HTMLInputElement}
 */
const title = document.querySelector('#todo-title');

/**
 * Чекбокс завершения задачи.
 * @type {HTMLInputElement}
 */
const completed = document.querySelector('#todo-completed');

/**
 * Поле выбора категории.
 * @type {HTMLSelectElement}
 */
const category = document.querySelector('#todo-category');

/**
 * Список задач.
 * @type {HTMLUListElement}
 */
const list = document.querySelector('#todo-list');

/**
 * Рендерит одну задачу в списке.
 * 
 * @param {Object} todo - Объект задачи
 * @param {string} todo.title - Заголовок задачи
 * @param {boolean} todo.completed - Завершена ли задача
 * @param {string} todo.category - Категория задачи
 * @param {Object} todo.author - Автор задачи
 * @param {string} todo.author.firstName - Имя автора
 * @param {string} todo.author.lastName - Фамилия автора
 */
function render(todo) {
    const li = document.createElement('li');
    const card = document.createElement('div');
    card.classList.add('card');

    // Определяем иконку по статусу
    const icon = todo.completed ? '✅' : '⏳';

    // Формируем текст задачи
    card.innerHTML = `
    ${icon} &nbsp;
    <strong>${todo.title}</strong>
    - by
    <strong>${todo.author.firstName} ${todo.author.lastName}</strong>
    in ${todo.category || 'Uncategorized'}
  `;

    li.appendChild(card);
    list.appendChild(li);
}

/**
 * Обработчик отправки формы.
 * @param {Event} event - Событие отправки формы
 */
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Проверка: заголовок не пустой
    const trimmedTitle = title.value.trim();
    if (!trimmedTitle) {
        alert('Please enter a task title!');
        return;
    }

    // Данные задачи
    const todo = {
        title: trimmedTitle,
        completed: completed.checked,
        category: category.value,
        author: {
            firstName: 'Sam',
            lastName: 'Blue'
        }
    };

    // Очистка формы
    title.value = '';
    completed.checked = false;
    category.value = '';

    // Рендерим задачу
    render(todo);
});
