let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let lowerCharset = "abcdefghijklmnopqrstuvwxyz";
let upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberCharset = "0123456789";
let specialCharset = "@!";

let charset = lowerCharset + upperCharset + numberCharset + specialCharset;
let novaSenha = "";

// Define o valor inicial para o tamanho da senha
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
};

function generatePassword(){
    let pass = "";

    // Garante que a senha tenha pelo menos um de cada tipo
    pass += lowerCharset.charAt(Math.floor(Math.random() * lowerCharset.length));
    pass += upperCharset.charAt(Math.floor(Math.random() * upperCharset.length));
    pass += numberCharset.charAt(Math.floor(Math.random() * numberCharset.length));
    pass += specialCharset.charAt(Math.floor(Math.random() * specialCharset.length));

    // Preenche o restante da senha com caracteres aleatórios do charset completo
    for (let i = 4, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    // Embaralha os caracteres para que a senha não tenha sempre os primeiros caracteres fixos
    pass = shuffleString(pass);

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;  // Atualiza a variável novaSenha com a senha gerada
}

function shuffleString(string) {
    let array = string.split('');
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Troca de lugares
    }
    return array.join('');
}

function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}
