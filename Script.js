function isEmpty(){
    isempty = false;
    if(document.querySelector('#newHobby').value==""){
        alert('No Hobby entered');
        return isempty;
    }
    else return isempty = true;
}
function addHobby() {
    if(isEmpty()){
    var a = document.getElementById("list");
    var newHobby = document.getElementById("newHobby");

    var li = document.createElement("li");
    li.setAttribute('id',newHobby.value);


    var label = document.createElement("label");
    label.setAttribute('for', newHobby.value);
    label.innerText = (newHobby.value + "\t");

    var button = document.createElement("input");
    button.type='button';
    button.value = 'Remove';
    button.className = 'btn btn-danger';
    button.style = 'margin: 1rem; color: white;';
    button.id = newHobby.value;
    button.setAttribute("onclick",'removeHobby(this.id)');
    
    li.appendChild(label);
    li.appendChild(button);
    a.appendChild(li);

    document.querySelector('#newHobby').value="";}
}


function removeHobby(clickedId) {
    var a = document.getElementById('list');
    var Hobby = document.getElementById(clickedId);
    a.removeChild(Hobby);
}

function seePassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function createAccount() {
    image = document.getElementById("profile")
    sname = document.getElementById("sname")
    personalStatement = document.getElementById("personalStatement")
    stdno = document.getElementById("stdno")
    course = document.getElementById("course")
    year = document.getElementById("year")
    alevel = document.getElementById("alevel")
    olevel = document.getElementById("olevel")
    primary = document.getElementById("primary")
    password = document.getElementById("password")
    user = {
        img: image.src,
        sname: sname.value,
        personalStatement: personalStatement.value,
        stdno: stdno.value,
        course: course.value,
        year: year.value,
        alevel: alevel.value,
        olevel: olevel.value,
        primary: primary.value,        
        password: password.value
    }
    
    if (JSON.parse(sessionStorage.getItem("users")) !== null) {
        users = JSON.parse(sessionStorage.getItem("users"))
        users.push(user)
        sessionStorage.setItem("users",JSON.stringify(users))
    }else{
        users = []
        users.push(user)
        sessionStorage.setItem("users",JSON.stringify(users))
    }
    sessionStorage.setItem("currentUser",sname.value)
    sessionStorage.setItem("currentUserDetails",JSON.stringify(user))
    console.log(JSON.parse(sessionStorage.getItem("users")))
    window.location = "./homepage.html"
}
function signout() {
    sessionStorage.removeItem("currentUserDetails")
    window.location = "../Login.html"
}
function checker() {
    username = document.getElementById("stdno")
    password = document.getElementById("password")
    usersList = JSON.parse(sessionStorage.getItem("users"))
    usersList.forEach((x,i) => {
        if(x.name === username.value) {
            if (x.password === password.value) {
                sessionStorage.setItem("currentUserDetails",JSON.stringify(x))
                window.location = "./homepage.html"
            }
            else{
                console.log("Wrong password!")
            }
        }
        else {
            console.log("User doesn't exist")
        }
    })
         
}

function imagepreview() {
    image = document.getElementById("profile")
    reader = new FileReader()
    reader.onload = () => {
        if(reader.readyState === 2) {
            image.src = reader.result;
        }
    }
    reader.readAsDataURL(event.target.files[0])
}


function openOptions(a){
    if(a==1){
    customize1.style.display = 'grid';
    }else customize2.style.display = 'grid'
}

function closeOptions(a){
    if(a==1){
        customize1.style.display = 'none';
        }else customize2.style.display = 'none'
    }

function changeSize(a){

    let fontSize

    if(a===1){
        fontSize = '10px'
    }else if(a===2){
        fontSize = '13px'
    }else if(a===3){
        fontSize = '16px'
    }
    document.querySelector('html').style.fontSize = fontSize
    closeOptions(2)
}

root = document.querySelector(':root')

function changeColor(a){

    let color

    if(a===1){
        root.style.setProperty('--danger', 'hsl(252, 73%, 55%)')
    }else if(a===2){
        root.style.setProperty('--danger', 'hsl(41, 100%, 50%)')
    }else if(a===3){
        root.style.setProperty('--danger', 'hsl(0, 95%, 65%)')
    }else if(a===4){
        root.style.setProperty('--danger', 'hsl(105, 50%, 47%)')
    }else if(a===5){
        root.style.setProperty('--danger', 'hsl(202, 77%, 32%)')
    }
    closeOptions(2)
}
function changebg(a){

    let fontSize

    if(a===1){
        root.style.setProperty('--light', 'hsl(252, 30%, 95%)')
        root.style.setProperty('--white', 'hsl(252, 30%, 100%)')
        document.querySelector('body').style.color = 'var(--dark)'
    }else if(a===2){
        root.style.setProperty('--light', 'hsl(158, 96%, 64%)')
        root.style.setProperty('--white', 'hsl(158, 100%, 92%)')
        document.querySelector('body').style.color = 'var(--dark)'
    }else if(a===3){
        root.style.setProperty('--light', 'hsl(252, 30%, 10%)')
        root.style.setProperty('--white', 'hsl(228, 1%, 30%)')
        document.querySelector('body').style.color = 'white'
    }
    closeOptions(2)
}
