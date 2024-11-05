
# Простое приложение Clicker на React

Здесь ты познакомишься с основными концепциями, такими как работа с пользовательским вводом, обновление состояния и динамическое отображение компонентов.
Работать ты будешь исключительно с функциональными компонентами, так как это более современная парадигма в React.

## Что стоит прочитать
Перед тем как приступить к выполнению задания, рекомендуется ознакомиться с основными концепциями React, чтобы лучше понимать, как работает фреймворк:

1. **Как происходит верстка в React (JSX)**:
   - Ознакомься с тем, как используется JSX для написания разметки в React-компонентах. JSX напоминает HTML, но добавляет возможности JavaScript.
   - Подробнее о [JSX](https://ru.reactjs.org/docs/introducing-jsx.html)

2. **Обработчики событий**:
   - Узнай, как в React обрабатываются события, такие как клики или ввод текста. Это похоже на работу с событиями в обычном JavaScript, но с небольшими особенностями.
   - Руководство по [обработчикам событий](https://ru.reactjs.org/docs/handling-events.html)

3. **Что такое хук**:
   - Пойми, что такое хуки в React и почему они нужны. Хуки позволяют использовать состояние и другие функции React в функциональных компонентах.
   - Введение в [хуки](https://ru.reactjs.org/docs/hooks-intro.html)
Не переживай если сначала будет не очень понятно, на практике это понимается быстрее. Особенно проблема в том, что в русской документации хуки описываются в сравнении со
старыми принципами классовых компонентов.

4. **useState**:
   - Изучи хук `useState`, который используется для управления состоянием внутри функциональных компонентов. Это основной инструмент для создания интерактивных компонентов.
   - Документация по [useState](https://ru.reactjs.org/docs/hooks-state.html)

---

## Описание проекта
Тебе предстоит создать простое приложение, которое включает:
- Поле ввода, в которое можно ввести текст.
- Кнопку, которая увеличивает счётчик при каждом нажатии.
- Отображение количества нажатий на кнопку и значения в поле ввода.

### Цели
- Освоить использование хука `useState` для управления состоянием.
- Научиться обрабатывать события, такие как `onChange` и `onClick`.
- Попрактиковаться в написании простых функциональных компонентов на React.

---

## Подготовка к написанию кода

### 1. Установка Create React App (CRA)
1. **Убедись, что у тебя установлен Node.js**. Если нет, скачай и установи его с [официального сайта](https://nodejs.org/).
2. **Создай новый проект с помощью Create React App**:
   ```bash
   npx create-react-app simple-clicker
   ```
3. **Перейди в папку проекта**:
   ```bash
   cd simple-clicker
   ```
4. **Установи зависимости** (это делается автоматически при создании проекта, но можно проверить):
   ```bash
   npm install
   ```

### 2. Запуск проекта
1. **Запусти сервер разработки**:
   ```bash
   npm start
   ```
2. **Открой браузер**:
   - Перейди по адресу `http://localhost:3000`, чтобы увидеть шаблонное приложение React.
Изменения в проекте будут отображаться в реальном времени здесь.

---

## Инструкции по выполнению задания

### 1. Создание компонента Clicker
1. **Создай новый файл**:
   - В папке `src` создай файл с именем `Clicker.js`.
2. **Определи структуру компонента**:
   - Используй функциональный компонент.
   - Добавь два состояния с помощью хука `useState`: одно для отслеживания значения ввода, другое — для счётчика кликов.
   - Определи обработчики событий:
     - Один для отслеживания изменений в поле ввода.
     - Второй для увеличения счётчика при нажатии на кнопку.

### 2. Подключение компонента Clicker
1. **Открой файл `src/App.js`**.
2. **Импортируй компонент Clicker**.
3. **Добавь компонент в разметку внутри `App`**, чтобы он отобразился на странице.

---

## Требования к реализации
1. Поле ввода должно обновлять своё значение при вводе текста.
2. Кнопка должна увеличивать счётчик при каждом нажатии.
3. В интерфейсе должно отображаться текущее значение счётчика и значение поля ввода.

---

## Полезные ресурсы
- [Документация React](https://ru.reactjs.org/docs/getting-started.html)
- [Понимание `useState`](https://ru.reactjs.org/docs/hooks-state.html)
