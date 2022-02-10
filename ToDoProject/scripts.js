let taskArr=[
    {
        text:'learn js',
        completed:true
    },
    {
        text:'wash laundry',
        completed:false
    },
    {
        text:'fuck bitches get money',
        completed:false
    }
    ];

function emptyArr(){
    //1. empty taskArr
    document.getElementById('taskUl').innerHTML='';    
}

let filterTodos = document.createElement('button');
filterTodos.setAttribute('class','filterTodos');
let filterText = document.createTextNode('Hide Completed');
filterTodos.appendChild(filterText);
document.getElementById('hideCompleted').appendChild(filterTodos);
let filterTodoButton=false;

function renderTaskItems(item,index){
    
    let liEl = document.createElement('li');

    if (item.completed === true){
        liEl.classList.add("completed");
        liEl.setAttribute('id','completedID');
    }
    //toggle between completed and incompleted task

    let completedBut = document.createElement("button");
    completedBut.textContent= "complete task";
    // to be changed.

    completedBut.onclick= function (){
        if (item.completed === true){
            item.completed=false;
        } else {
            item.completed=true;
        }
        renderTodos();
    }
    let textEl= document.createTextNode(item.text);
    liEl.appendChild(textEl);
    liEl.appendChild(completedBut);
    document.getElementById('taskUl').appendChild(liEl);
    completedBut.setAttribute('class','completedBut');
};

function renderTodos(){
    emptyArr();
    if (filterTodoButton==true){
        taskArr.forEach(renderTaskItems);
        filterVisibilty();
    }else{
        taskArr.forEach(renderTaskItems);
    }
}

function displayTodos(){
    emptyArr();
    if (taskArr.length>0){
        //iterate thru taskArr and if there are todos, display them.
        renderTodos();
    } else {
        renderWelcome();
        //Display a welcome message
    }
}
displayTodos();

// Create a new task, cannot enter '' as a task or there is an alert.
document.getElementById('taskToAdd').addEventListener('keypress', function(e) {
    if (e.key === 'enter') {
        addTodos();
    }
});   
document.getElementById('submitTask').onclick=function addTodos(){  
    
    let taskToAdd= document.getElementById('taskToAdd').value;
    
    if (taskToAdd!=0){
        taskArr.push({
        text:taskToAdd,
        completed:false
        })
    } else {
        alert('You need to enter a task to add!');
    } 
    ;
    document.getElementById('taskToAdd').value="";
    renderTodos();
    return false;
};

function filterVisibilty(){
    const visibleItems=document.querySelectorAll('#completedID');
    console.log(visibleItems);
    if (filterTodoButton==false){
    
        renderTodos();
    } else {
        visibleItems.forEach(function(item){
            item.style.display='none';
        });
        
    }
};

filterTodos.onclick= function filter(){
    if (filterTodoButton==false){
        console.log('false');
        filterTodoButton=true;
    } else {
        console.log('true');
        
        filterTodoButton=false;
    }
    filterVisibilty();
};   