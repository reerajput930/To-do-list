// selector
let todoinput = document.querySelector(".todo_input")
let btn1  = document.querySelector(".btn1")
let todolist = document.querySelector(".todo_list")

// event listener
document.addEventListener("DOMContentLoaded",showstorage)
btn1.addEventListener('click',submit)
todolist.addEventListener('click',deltodo)


// function
function submit(event){
    
    event.preventDefault();
    
    let newdiv = document.createElement("div");
    newdiv.classList.add("new-div")
    
    let newli = document.createElement("li");
    newli.innerHTML = todoinput.value
    newli.classList.add("new-li")
    newdiv.appendChild(newli);

    // storing in local storage
    locstorage(todoinput.value);
    
    
    let checkbtn = document.createElement("button")
    checkbtn.innerHTML = `<i class="fas fa-check"></i>`;
    checkbtn.classList.add("check-btn")
    newdiv.appendChild(checkbtn)
    
    let trashbtn = document.createElement("button")
    trashbtn.innerHTML = `<i class="fas fa-trash"></i>`;
    trashbtn.classList.add("trash-btn")
    newdiv.appendChild(trashbtn)
    
    todolist.appendChild(newdiv);
    todoinput.value="";
    

    // listen event delete
    trashbtn.addEventListener('click',deltodo)
}


// deleting the to do list
function deltodo(event){
  let item = event.target

  if(item.classList == 'trash-btn'){
    let todo = item.parentElement;

    // delete from the local storage
     deletestorage(todo)

    todo.classList.add("fall")
    todo.addEventListener("transitionend",function(){
     todo.remove();
    })
 }
  if(item.classList == 'check-btn'){
    let todo = item.parentElement;
    markstorage(todo)
    todo.classList.toggle('complete')
 }


}

function locstorage(todo){
  let todos;
  // check if the element present in the local storage
  // if not present than make todos array
  if(localStorage.getItem('todos')== null){
    todos=[];//this is an empty array
    }
  
    // if present get the element
  else{
    todos = JSON.parse(localStorage.getItem('todos')) 
  }  
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos))
}

function showstorage(){
  let todos;
  // check if the element present in the local storage
  // if not present than make todos array
  if(localStorage.getItem('todos')== null){
    todos=[];//this is an empty array
    }
  
    // if present get the element
  else{
    todos = JSON.parse(localStorage.getItem('todos')) 
  }  
  todos.forEach(function(todo) {
    
    let newdiv = document.createElement("div");
    newdiv.classList.add("new-div")
    
    let newli = document.createElement("li");
    newli.innerHTML = todo;
    newli.classList.add("new-li")
    newdiv.appendChild(newli);
    
    
    let checkbtn = document.createElement("button")
    checkbtn.innerHTML = `<i class="fas fa-check"></i>`;
    checkbtn.classList.add("check-btn")
    newdiv.appendChild(checkbtn)
    
    let trashbtn = document.createElement("button")
    trashbtn.innerHTML = `<i class="fas fa-trash"></i>`;
    trashbtn.classList.add("trash-btn")
    newdiv.appendChild(trashbtn)
    
    todolist.appendChild(newdiv);

  });
}

function deletestorage(todo){
  let todos;
  // check if the element present in the local storage
  // if not present than make todos array
  if(localStorage.getItem('todos')== null){
    todos=[];//this is an empty array
    }
  
    // if present get the element
  else{
    todos = JSON.parse(localStorage.getItem('todos')) 
  }  
  let element =todo.children[0].innerHTML;
   todos.splice(todos.indexOf(element),1);
  localStorage.setItem("todos",JSON.stringify(todos));
  
  
}
