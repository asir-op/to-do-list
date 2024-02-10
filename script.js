todoList = [
    {item: 'Buy Milk', 
    dueDate: '2024-02-11',
    time: '07:30', },
    {item: 'Go to College', 
    dueDate: '2025-03-08',
    time: '08:30', }
];
displayTodo();
function addTodo(){
    let todoInput = document.querySelector('#todo-value');
    let dueDate = document.querySelector('#due');
    let getTime = document.querySelector('#time');
    let tookTime = getTime.value;
    let date = dueDate.value;
    let todoVal = todoInput.value;
    todoList.push({item: todoVal, dueDate: date, time: tookTime});
    dueDate.value = '';
    todoInput.value = '';
    tookTime.value = '';
    displayTodo();

};

function displayTodo(){
    let containerElement = document.querySelector('#todo-container');
    
    let newHtml = ''
    for(let i = 0; i < todoList.length; i++){
        let Item1 = todoList[i].item;
        let Date1 = todoList[i].dueDate;
        let time1 = todoList[i].time;
        newHtml += `
            <span class="items1">${Item1}</span>
            <span class="items1">${Date1}</span>
            <span class="items1" >${time1}</span>
            <button class="delete-btn" onclick="
            todoList.splice(${i},1);
            displayTodo();
            
            ">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}

