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









