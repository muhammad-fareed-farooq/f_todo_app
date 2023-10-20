function addtodo(){
    var input = document.getElementById("inputField")
    
    var liElement = document.createElement("li")

    var litext = document.createTextNode(input.value)

    liElement.appendChild(litext)

  var edit = document.createElement("button")

  var edittext = document.createTextNode("edit")

  edit.setAttribute("class", "btna")

   edit.appendChild(edittext)

   edit.setAttribute("onclick", "editItem(this)")

   liElement.appendChild(edit)

   
  var del = document.createElement("button")

  var deltext = document.createTextNode("delet")
  
  del.setAttribute("class", "btnd")


   del.appendChild(deltext)

    del.setAttribute("onclick", "deletItem(this)")

   liElement.appendChild(del)

    var list =  document.getElementById("list")
     
    list.appendChild(liElement)
    
    console.log(liElement)
    
    input.value = ""
}

function deletall(){
    var list = document.getElementById("list")
    list.innerHTML = ""
}

function deletItem(v){
    console.log(v.parentNode.remove())
}

function editItem(x){
      var input = prompt("Enter your value...")

      x.parentNode.firstChild.nodeValue = input
}

