document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container');
    const inputTask = document.querySelector('.input-task');
    const buttonTaks = document.querySelector('.createTask');

    function handleClickTask() {
        const taskContent = createTask(inputTask.value);
        container.appendChild(taskContent);
    }

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
            deleteElement.addEventListener('click', deleteTaskContent);

            return deleteElement;
        };


        const divTask = containerTask();
        const valueTask = textTask();
        const deleteTaskElement = deleteTask();

        divTask.appendChild(valueTask);
        divTask.appendChild(deleteTaskElement);

        return divTask;
    }

    function deleteTaskContent() {
        alert('deletar tarefa')
    }

    buttonTaks.addEventListener('click', handleClickTask);
});