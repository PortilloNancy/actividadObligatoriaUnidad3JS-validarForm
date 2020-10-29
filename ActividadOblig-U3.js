var send = function() {
    usuario = document.getElementById('usuario').value;
    clave = document.getElementById('clave').value;
    if (usuario===''){
        alert('debe ingresar un usuario')
    }else if (clave===''){
        alert('debe ingresar una clave')
    }else if (!validarEmail(usuario)){
        alert('debe ingresar un mail valido!')
    }else {
        alert('ingreso exitoso')
    }
};

function validarEmail(valor) {
    if (/.+@.+\..+/.test(valor)){
        return true;
    } else {
        return false;
            }
    };
