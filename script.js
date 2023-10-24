document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Obtener los valores del nombre de usuario y la contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Validar el nombre de usuario y la contraseña (esto es solo un ejemplo)
    if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
