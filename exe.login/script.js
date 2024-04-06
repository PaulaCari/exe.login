document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'usuario' && password === 'senha') {
            localStorage.setItem('username', username);
            alert('Seja bem-vindo(a), ' + username + '!');
            window.location.href = 'home.html';
        } else {
            alert('Usuário ou senha inválidos');
        }
    });
});
