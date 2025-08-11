function checkPassword(){
    const input = document.getElementById('password').value;
    if(input === 'rocket123'){
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
    } else {
        document.getElementById('error').textContent = 'Incorrect password';
    }
}
