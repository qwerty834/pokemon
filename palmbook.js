function login(){
    ask = document.getElementById('login_name').value; 
    localStorage.setItem('ask.2',ask);
    window.location = 'ROOM_PALMBOOK.HTML';
}