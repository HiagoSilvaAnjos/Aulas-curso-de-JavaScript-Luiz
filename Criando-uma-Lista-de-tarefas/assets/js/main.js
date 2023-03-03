document.addEventListener('DOMContentLoaded', () => {

    const sectionContainer = document.querySelector('.container');
    const divTaskContent = document.querySelector('.taskElement');
    const inputTask = document.querySelector('.input-task');
    const buttonTaks = document.querySelector('.createTask');

    function handleClickTask() {
        const task = inputTask.value;

        if (!validateInput(task)) {return inputInvalid()}
        inputTask.value = '';
        inputTask.classList.remove('inputiInvalid');

        const taskContent = createTask(task);
        divTaskContent.appendChild(taskContent);
        sectionContainer.appendChild(divTaskContent);
        

        const getElementDeleteTask = taskContent.childNodes[1];
        getElementDeleteTask.addEventListener('click', () => deleteTask(taskContent));
    }

    function validateInput(inputValue) { return inputValue.length > 0}

    function createTask(taskValue) { return createTaskContainer(taskValue) }

    function createTaskContainer(task) {

        function containerTask() {
            const divElement = document.createElement('div');
            divElement.classList.add('task-container');

            return divElement;
        };

        function textTask() {
            const paragraphElement = document.createElement('p');
            paragraphElement.innerHTML = task;

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

    function deleteTask(taskElement) {
        taskElement.remove();
    }

    // input vazio
    function inputInvalid() {
        inputTask.classList.add('inputiInvalid');
    }

    buttonTaks.addEventListener('click', handleClickTask);
});