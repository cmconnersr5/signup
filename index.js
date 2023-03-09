//click sign in for sign in modal
let btn = document.querySelector('button#signin')
btn.addEventListener('click', signIn)
    function signIn(){
        document.getElementById('login_modal').style.visibility="visible"
    }

let password = document.getElementById('password');
let passConf = document.getElementById('passConf');

function validate(){
    if(password.value != passConf.value){
        passConf.setCustomValidity('Passwords Do Not Match');
    } else {
        passConf.setCustomValidity('');
    }
}

password.onchange = validate;
passConf.onchange = validate;
// password.onchange = conditions;

// function conditions(){
//     console.log(password.length)
//     if(password.textContent.length > 8 && password.textContent.length < 12){
//         document.getElementById('passCond1').style.color="red";
//     } else {
//         document.getElementById('passCond1').style.color="green";
//     }








