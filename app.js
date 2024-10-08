let txtInvite = document.querySelector(".invite-someone");
let btnSubmit = document.querySelector(".submit");
let listInvite = document.querySelector("#invitedList");

btnSubmit.addEventListener("click", (e) => {

    if (txtInvite.value == "") {
        errorInsert();
    }else{
        createItem();
        removeError();
    }


});

listInvite.addEventListener("click", (e) => {

    let elem = e.target;

    if (elem.classList.contains("edit")) {

        if (elem.textContent == "Edit") {
            edit(elem);
        }
        else {
            elem.textContent = "Edit";
            save(elem);
        }

    }else if(elem.classList.contains("remove")){
        remove(elem);
    }

});



const edit = function (elem) {
    elem.textContent = "Save";
    let parent = elem.parentElement;
    let firstChild = parent.firstElementChild;

    let txtEdit = document.createElement("input");
    txtEdit.type = "text";

    txtEdit.value = firstChild.textContent;
    firstChild.style.display = "none";
    parent.insertBefore(txtEdit, firstChild);
}

const save = function (elem) {
    elem.textContent = "Edit";
    let parent = elem.parentElement;
    let firstChild = parent.firstElementChild;
    let brother = firstChild.nextElementSibling;
    brother.textContent = firstChild.value;
    brother.style.display = "";
    firstChild.style.display = "none";

    if(firstChild.type == "text"){
        parent.removeChild(firstChild);
        console.log("Asd");
    }
}

const remove = function(elem){

    let elmeRemove = elem.parentElement;
    let parent = elem.parentElement.parentElement;

    parent.removeChild(elmeRemove);

}




const createItem = () => {


    let item = document.createElement("li");

    item.innerHTML = `
<span>${txtInvite.value}</span><label>Confirmed<input type="checkbox"></label><button class="edit">Edit</button><button class="remove">Remove</button>
`

    listInvite.append(item);

    txtInvite.value = "";

}

const errorInsert = () => {

    let errorText = btnSubmit.parentElement.parentElement.lastElementChild;
    // console.log(errorText);
  if(errorText.tagName == "P")
         return;

    let error = document.createElement("p");
    error.textContent = "Enter the name!";
    error.style.color = "Red";

    let parent = btnSubmit.parentElement.parentElement;

    parent.append(error);
  
}

const removeError=()=>{
    let errorText = btnSubmit.parentElement.parentElement.lastElementChild;

    if(errorText.tagName== "P")
    errorText.style.display = "none";
}