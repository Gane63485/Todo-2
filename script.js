let todoData = document.getElementById('todo-data');
let inputData = document.getElementById('input-data');
let addButton = document.getElementById('todo-add-btn');
let todoTask = document.getElementById('todo-task');
let todoTaskCotainor = document.getElementsByClassName('todo-task-containor');
let todoText = document.getElementById('todo-text');
console.log()
let data = [];

let returnData = localStorage.getItem("Todo Data");
console.log(returnData)

function saveData(data){
    let returnData = localStorage.getItem("Todo Data");
  if(returnData === null){
  data.push(inputData.value);
  let strinData = JSON.stringify(data);
  console.log(strinData)
  localStorage.setItem("Todo Data", strinData); 
  }else{
    let newArr = JSON.parse(returnData);
    console.log(newArr)
    newArr.push(inputData.value);
    secondData = JSON.stringify(newArr);
    console.log(secondData)
    localStorage.setItem("Todo Data", secondData);
  }
};

addButton.addEventListener('click', () => {
 saveData(data);
location.reload();
});

let finalData = localStorage.getItem("Todo Data");
console.log(finalData)
if(finalData !== '[]'){
  todoText.textContent = "Your Task Is Here:-";
 }
let newFinalData = JSON.parse(finalData);
console.log(newFinalData)
for(let i = 0; i < newFinalData.length; i++){
  let containorDiv = document.createElement('div');
containorDiv.classList.add("todo-task-containor");
containorDiv.innerHTML = `<h2 id="todo-text">${newFinalData[i]}</h2><button name="${i}" class="delete-task">Delete</button>`;
console.log(containorDiv)
todoTask.append(containorDiv);
}

function deleteTask(callback){
  let dataTask = localStorage.getItem("Todo Data");
  let parseData = JSON.parse(dataTask);
  console.log(parseData)
  var element = document.getElementsByClassName('delete-task');
  console.log(element)
  
  for(let i = 0; i <= parseData.length; i++){
    element[i].addEventListener('click', (e) => {
    if(e.target.name !== ''){
       let number = e.target.name;
       callback(number)
     }
  });
  };
};
deleteTask(function(number){
  let newNumber = Number(number);
  let newData = localStorage.getItem("Todo Data");
  let parsedData = JSON.parse(newData);
  finalArray = parsedData.splice(newNumber,1);
  let stringifyed = JSON.stringify(parsedData)
  localStorage.setItem("Todo Data", stringifyed);
  location.reload();
});