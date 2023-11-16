
const toDoList=[]
function addToDo(){
    let inner=document.querySelector('#inputText')
    let innerDate=document.querySelector('#inputDate')
    let dateval=innerDate.value;
    let innerVal=inner.value
    toDoList.push({item:innerVal, dueDate:dateval})
     inner.value=''
     innerDate.value=''
     displayItems()
}
function displayItems(){
    let innerElement= document.querySelector('.container')
   let newHtml=''
for (let i = 0; i < toDoList.length; i++) {
   let item= toDoList[i].item
   let dueDate=toDoList[i].dueDate
    newHtml+=`
    <span>${item}</span>
    <span>${dueDate}</span>
         <button id='delete' onclick='toDoList.splice(${i},1); displayItems()'>Delete</button>
    `
}
innerElement.innerHTML=newHtml
}