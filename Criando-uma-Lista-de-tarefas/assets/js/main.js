document.addEventListener('DOMContentLoaded', () => {

    const divTaskContent = document.querySelector('.taskElement');
    const inputTask = document.querySelector('.input-task');
    const buttonTaks = document.querySelector('.createTask');
    const buttonClear = document.querySelector('.clear');

    function handleClickTask(e) {
        // console.log(e)
        // if(e.keyCode === 13) {
            
        // }
        const task = inputTask.value;
        const lengthTasks = divTaskContent.childNodes.length;

        if (!validateInput(task)) { return inputInvalid() }
        inputTask.value = '';
        inputTask.classList.remove('inputiInvalid');

        if (lengthTasks >= 1) { buttonClear.style.display = 'block'; }

        const taskContent = createTask(task);
        divTaskContent.appendChild(taskContent);

        const getElementDeleteTask = taskContent.querySelector('.deleteTask');
        getElementDeleteTask.addEventListener('click', () => deleteTask(taskContent));

    }

    buttonClear.addEventListener('click', () => {

        const tasks = divTaskContent.querySelectorAll('.task-container');

        tasks.forEach(task => {
            task.remove();
        })

        buttonClear.style.display = 'none';
    })

    function validateInput(inputValue) { return inputValue.length > 0 }

    function createTask(taskValue) {
        function containerTask() {
            const divElement = document.createElement('div');
            divElement.classList.add('task-container');

            return divElement;
        };

        function textTask() {
            const paragraphElement = document.createElement('p');
            paragraphElement.innerHTML = taskValue;

            return paragraphElement;
        };

        function deleteTask() {
            const deleteElement = document.createElement('p');
            deleteElement.innerHTML = 'x';
            deleteElement.classList.add('deleteTask');

            return deleteElement;
        };

        const divTask = containerTask();
        const valueTask = textTask();
        const deleteTaskElement = deleteTask();

        divTask.appendChild(valueTask);
        divTask.appendChild(deleteTaskElement);

        return divTask;
    }

    // deletar tarefa
    function deleteTask(taskElement) {
        const lengthTasks = divTaskContent.childNodes.length;

        taskElement.remove();
        if (lengthTasks <= 2) { buttonClear.style.display = 'none'; }
    }

    // input vazio
    function inputInvalid() {
        inputTask.classList.add('inputiInvalid');
    }

    // buttonTaks.addEventListener('keypress', handleClickTask);
    buttonTaks.addEventListener('click', handleClickTask);
});