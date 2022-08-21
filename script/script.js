let localDate = document.getElementById('localDate');
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho','Julho','Agosto','Setembro',
        'Outubro','Novembro','Dezembro'];

    function showDate () {

        let date = new Date();
        
        date.date = date.getDate();
        date.month = months[date.getMonth()];
        date.year = date.getFullYear();

        let showDate = `Hoje, ${date.date} de ${date.month} de ${date.year}`;

        localDate.innerHTML = showDate;
    }

    setInterval(showDate, 1000);

let localClock = document.getElementById('localClock');

    function showClock () {

        let clock = new Date();

        clock.hours = clock.getHours() < 10? '0'+ clock.getHours() : clock.getHours();
        clock.minutes = clock.getMinutes() < 10? '0'+ clock.getMinutes() : clock.getMinutes();
        clock.seconds = clock.getSeconds() < 10? '0'+ clock.getSeconds() : clock.getSeconds();

        let showClock = `Hora: ${clock.hours}:${clock.minutes}:${clock.seconds}`;
        localClock.innerHTML = showClock;

    };

    setInterval(showClock, 1000);

let messageSalutation = document.getElementById('messageSalutation');

    function salutation(){
        let clock = new Date();
        let clockElement = clock.getHours();

        if(clockElement >= 0 && clockElement < 5){
            messageSalutation.innerHTML = 'Boa Madrugada';
            messageSalutation.style.textShadow = '#277BC0';
            insertImage('./assets/moon2.png', messageSalutation);
            } else if (clockElement >= 5 && clockElement < 12){
                messageSalutation.innerHTML = 'Bom dia';
                insertImage('./assets/sun.png', messageSalutation);
                } else if(clockElement >= 12 && clockElement < 18){
                    messageSalutation.innerHTML = 'Boa tarde';
                    insertImage('./assets/sun.png', messageSalutation);
                    } else{
                        messageSalutation.innerHTML = 'Boa noite';
                        insertImage('./assets/moon.png', messageSalutation);
                    }
    }

    setInterval(salutation, 1000);


    function insertImage(url, element){
        const image = document.createElement('img');

            image.src = url;
            element.appendChild(image);
            image.style.width = '20px';
            image.style.height = '20px';
            image.style.boxShadow = '1px 1px 10px yellow';
            image.style.borderRadius = '50%';
    }


const addNameNewTask = document.querySelector('input#addNameNewTask');
const btnAddNewTask = document.getElementById('btnAddNewTask');
    btnAddNewTask.addEventListener('click', addNewTask);

let arr = [];

    function addNewTask(){
        if(localStorage.toDoArr){
            arr = JSON.parse(localStorage.getItem('toDoArr'));
        }

        let newTask = addNameNewTask.value;
        addNameNewTask.value = '';
        arr.push(newTask);
        localStorage.toDoArr = JSON.stringify(arr);

        handlingTasks(newTask);
    }


const containerTodoList = document.getElementById('containerTodoList');

        function handlingTasks(task){

            let item = document.createElement('p');

            containerTodoList.appendChild(item);
            item.innerHTML = task;

            item.addEventListener('click', function selectTask(){
            item.classList.toggle("selectedTask")});

            buttonDelTask.addEventListener('click', delSelectedTask);
                function delSelectedTask(){
                    if(item.classList.contains("selectedTask")){
                        containerTodoList.removeChild(item);

                    if(localStorage.toDoArr){
                        arr = JSON.parse(localStorage.getItem('toDoArr'));
                    }
                        arr.splice(arr.indexOf(task), 1)
                        localStorage.toDoArr = JSON.stringify(arr);
                    }
                }
            }

const buttonDelTask = document.getElementById('delTask');

        function loadToDoList(){

            if(localStorage.toDoArr){
                arr = JSON.parse(localStorage.toDoArr);
                for(let index in arr){
                    handlingTasks(arr[index]);
                }
            }
        }

const btnClearList = document.getElementById('btnClearList');
    btnClearList.addEventListener('click', clearList);

        function clearList(){
            if(localStorage.toDoArr){

                localStorage.clear('toDoArr');
                containerTodoList.innerHTML = '';
            }
        }

