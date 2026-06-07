function openFeatures() {
    let allElems = document.querySelectorAll('.card .elem')
    let fullElemPage = document.querySelectorAll('.fullElem')
    let fullElemPageBackBtn = document.querySelectorAll('.fullElem .back')


    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {

            fullElemPage[elem.id].style.display = 'block'
        })
    })

    fullElemPageBackBtn.forEach(function (back) {
        back.addEventListener('click', function () {
            fullElemPage[back.id].style.display = 'none'
        })
    })
}
openFeatures();

function todolist() {
    var currentTask = [];

    if (localStorage.getItem('currentTask')) {
        currentTask = JSON.parse(localStorage.getItem('currentTask'));
    } else {
        console.log("Task list is empty");
    }

    function renderTask() {
        var allTask = document.querySelector('.allTask');

        var sum = '';
        currentTask.forEach((val, id) => {
            sum += `<div class="task">
                        <h5>${val.task}
                        <span class=${val.imp}>Imp</span></h5>
                        <button id=${id}>Mark as Completed</button>
                        </div>`
        })
        allTask.innerHTML = sum;

        localStorage.setItem('currentTask', JSON.stringify(currentTask));
        let markCompletionButton = document.querySelectorAll('.task button');
        markCompletionButton.forEach((btn) => {
            btn.addEventListener("click", () => {
                currentTask.splice(btn.id, 1);
                renderTask();
            })
        })
    }


    renderTask();

    let form = document.querySelector(".addTask form");
    let taskInput = document.querySelector("#task-input");
    let taskDetailsInput = document.querySelector(".addTask form textarea");
    let taskCheckbox = document.querySelector("#checkbox");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        currentTask.push({
            task: taskInput.value,
            taskdetail: taskDetailsInput.value,
            imp: taskCheckbox.checked,
        });
        renderTask();
        taskInput.value = '';
        taskDetailsInput.value = '';
        taskCheckbox.checked = false;

    })


}

todolist();

function dayPlanner() {
    var dayPlanner = document.querySelector('.day-planner');
    var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {};
    var hours = Array.from({ length: 18 }, function (_, idx) {
        return `${6 + idx}:00 - ${7 + idx}:00`
    })
    var wholeDaySum = '';
    hours.forEach(function (eleml, idx) {
        var savedData = dayPlanData[idx] || '';
        wholeDaySum += `
                <div class="day-planner-time">
                    <p>${eleml}</p>
                    <input id=${idx} type="text" placeholder="..." value=${savedData}>
                </div>`

    })


    dayPlanner.innerHTML = wholeDaySum;

    var dayPlannerInput = document.querySelectorAll('.day-planner input');
    dayPlannerInput.forEach(function (elem) {
        elem.addEventListener('input', () => {
            dayPlanData[elem.id] = elem.value;

            localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))

        })
    })

}

dayPlanner();

function motivationalQuote() {
    var motivationQuoteContent = document.querySelector('.motivation-2 h1');
    var motivationAuthor = document.querySelector('.motivation-3 h2');

    async function fetchQuote() {
        let response = await fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random');
        let data = await response.json();
        motivationQuoteContent.innerHTML = data[0].q;
        motivationAuthor.innerHTML = '- ' + data[0].a;
    }
    fetchQuote();
}
motivationalQuote();

function pomodoroTimer() {
    let totalSeconds = 1500;
    let timerInterval = null;

    let timer = document.querySelector('.pomo-timer h1')

    let startButton = document.querySelector('.pomo-timer .start-timer');
    let pauseButton = document.querySelector('.pomo-timer .pause-timer');
    let resetButton = document.querySelector('.pomo-timer .reset-timer');
    var session = document.querySelector('#pomodore_timer_page .session');

    var isWorkSession = true;



    function updateTimer() {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        timer.innerHTML = `${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')}`;

    }

    function startTimer() {
        clearInterval(timerInterval)
        if (isWorkSession) {
            timerInterval = setInterval(() => {

                if (totalSeconds > 0) {
                    totalSeconds--
                    updateTimer();
                } else {
                    isWorkSession = false;
                    clearInterval(timerInterval);
                    timer.innerHTML = `05:00`
                    session.innerHTML = 'Break Session';
                    session.style.backgroundColor = 'blue';
                    totalSeconds = 5 * 60;
                }

            }, 1000);
        } else {
            timerInterval = setInterval(() => {

                if (totalSeconds > 0) {
                    totalSeconds--
                    updateTimer();
                } else {
                    isWorkSession = true;
                    clearInterval(timerInterval);
                    timer.innerHTML = `25:00`
                    session.innerHTML = 'Work Session';
                    session.style.backgroundColor = 'green';
                    totalSeconds = 25 * 60;
                }

            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        totalSeconds = 25 * 60;
        updateTimer();

    }
    startButton.addEventListener('click', () => {
        startTimer();
    })
    pauseButton.addEventListener('click', () => {
        pauseTimer();
    })
    resetButton.addEventListener('click', () => {
        resetTimer();
    })

}
pomodoroTimer();

function homeDayTime() {
    data = null;
    apikey = '933e20f5e3db46309f885345260706';
    async function weatherApiCall() {
        var response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q='varanasi'`)
        var data = await response.json();
        console.log(data.current.temp_c);
        console.log(data);
        temp.innerHTML = `${Math.floor(data.current.temp_c)}°C`;
        temp_detail.innerHTML = `${data.current.condition.text}`
        precipitaion_value.innerHTML = `${data.current.heatindex_c}°C`
        humidity_value.innerHTML = `${data.current.humidity}%`
        wind_value.innerHTML = `${data.current.wind_kph}km/h`
        
    }
    weatherApiCall();

    let temp = document.querySelector('.weather-container .sub-container .temp');
    let temp_detail = document.querySelector('.weather-container .sub-container .temp-info');
    let precipitaion_value = document.querySelector('#preci-val');
    let humidity_value = document.querySelector('#humidity-val');
    let wind_value = document.querySelector('#wind-val');

    function tyme() {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let date = document.querySelector('#date12');
        let time_ = document.querySelector('.time-container .time')
        let day = document.querySelector('.time-container .day')
        let city = document.querySelector('.time-container .location')

        current = new Date();

        day.innerHTML = `${days[current.getDay()]}`
        date.innerHTML = `${current.getDate()} ${months[current.getMonth()]}, ${current.getFullYear()}`
        time_.innerHTML = `${String(current.getHours() > 12 ? current.getHours() - 12 : current.getHours()).padStart('2', '0')}:${String(current.getMinutes()).padStart('2', '0')}:${String(current.getSeconds()).padStart('2', '0')}  ${current.getHours() >= 12 ? 'PM' : 'AM'}`
        a = current.getHours() > 12 ? current.getHours() - 12 : current.getHours();
        console.log(String(a).padStart('2', '0'));

    }

    setInterval(() => {
        tyme();
    }, 1000)
}
homeDayTime();