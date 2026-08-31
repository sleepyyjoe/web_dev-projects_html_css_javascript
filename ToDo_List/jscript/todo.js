let todolist = [{item : '',
    dueDate : '',
}];
function addtodo(){
    let todotask = document.querySelector('.task_discription');
    let todoitem = todotask.value;
    let dateelement = document.querySelector('.timing');
    let tododate = dateelement.value;
    
    todolist.push({item: todoitem, dueDate: tododate});
    todotask.value = '';
    dateelement.value = '';
    display();
}
function display(){
    let containerelement = document.querySelector('.todo_container');
    let newhtml ='';
    for (let index = 1; index < todolist.length; index++) {
        let item = todolist[index].item;
        let duedate = todolist[index].dueDate;
        newhtml += `
            
                <span>${item}</span>
                <span>${duedate}</span>
                <button  class="butn_del" onclick="todolist.splice(${index},1);
                display()">Delete</button>
            

        `;
    }
    containerelement.innerHTML = newhtml;
} 