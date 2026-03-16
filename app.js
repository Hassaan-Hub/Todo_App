function addTodo(){
    var input = document.getElementById("input")
    var list = document.getElementById("list")

    var li = document.createElement("li")
    var p = document.createElement("p")
    var delBtn = document.createElement("button")
    var editBtn = document.createElement("button")

    var liText = document.createTextNode(input.value)
    var delBtnText = document.createTextNode("Delete")
    var editBtnText = document.createTextNode("Edit")

    delBtn.setAttribute("class", "btn1")
    editBtn.setAttribute("class", "btn1")
    delBtn.setAttribute("onclick", "delBtn()")
    editBtn.setAttribute("onclick", "editBtn(this)")

    li.appendChild(liText)
    delBtn.appendChild(delBtnText)
    editBtn.appendChild(editBtnText)
    p.appendChild(delBtn)
    p.appendChild(editBtn)
    li.appendChild(p)
    list.appendChild(li)

    input.value = ""
}

function delBtn(){
    event.target.parentNode.parentNode.remove();
}

function editBtn(e){
    var li = e.parentNode.parentNode;
    var oldText = li.firstChild.nodeValue;

    var newText = prompt("Enter your new Text", oldText)

    if(newText != "" && newText != null){
        li.firstChild.nodeValue = newText;
    }
}