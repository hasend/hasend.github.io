const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const todoForm = document.querySelector(".bottom-center #todo-form");
const todoList = document.querySelector("#todo-list");
const loginImg = document.querySelector(".screen #out-screen");
const loginIcon = document.querySelector(".bottom-left #login-icon");
const logoutIcon = document.querySelector(".bottom-left #logout-icon");
const logoutBtn = document.querySelector(".bottom-left #btn");

const loginClock = document.querySelector("#clock");
const loginWeather = document.querySelector("#weather");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnSubmit(event) {
    event.preventDefault();
    loginIcon.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginImg.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `❤ Hello ❤
    ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    logoutIcon.classList.remove(HIDDEN_CLASSNAME);
    loginClock.classList.remove(HIDDEN_CLASSNAME);
    loginWeather.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginImg.classList.remove(HIDDEN_CLASSNAME);
    loginIcon.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginBtnSubmit)
} else {
    paintGreetings(savedUsername);
}

function userLogout(){
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    
    if (savedUsername !== null){
        localStorage.removeItem(USERNAME_KEY);
        localStorage.removeItem(TODOS_KEY);
        window.location.reload();
    }
}

logoutBtn.addEventListener("click", userLogout);