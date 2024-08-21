const textArea = document.querySelector(".texto");
const mensaje = document.querySelector("#cajaDeMensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    cajaDeMensaje.value = textoEncriptado;
    textArea.value = "";
    document.getElementById('borrarMensaje').style.display = 'none';
    document.getElementById('botonCopiar').style.display = 'block';
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    cajaDeMensaje.value = textoDesencriptado;
    textArea.value = "";
    document.getElementById('borrarMensaje').style.display = 'none';
    document.getElementById('botonCopiar').style.display = 'block';
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar(){
    let mensajeCopiar = document.getElementById("cajaDeMensaje");

    mensajeCopiar.select();
    mensajeCopiar.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensajeCopiar.value);
    mensaje.value = ""
    document.getElementById('botonCopiar').style.display = 'none';
    document.getElementById('borrarMensaje').style.display = 'block';
    
}
