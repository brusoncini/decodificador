// Seleciona as áreas do HTML
const textArea = document.querySelector(".text-area");
const traducao = document.querySelector(".traducao");
const imagem = document.querySelector(".imagem");
const botaoCopiar = document.querySelector(".botao-copiar");

// Regras da criptografia 
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];


// CRIPTOGRAFAR //

function botaoCodificar() {

    // Criptografa o texto inserido 
    const textoCodificado = codificar(textArea.value);

    // Exibe a codificação no campo de tradução
    traducao.style.display = "block";
    traducao.value = textoCodificado;
    
    // Esconde a imagem do tradutor
    imagem.style.display = 'none';

    // Mostra o botão copiar
    botaoCopiar.style.display = "block";
}

// Substitui as vogais de acordo com a matriz definida
function codificar(stringCodificada) {
    stringCodificada = stringCodificada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringCodificada.includes(matrizCodigo[i][0])) {
            stringCodificada = stringCodificada.replaceAll(matrizCodigo [i][0], matrizCodigo [i][1]);
        }
    }

    return stringCodificada;
}


// DESCRIPTOGRAFAR //

function botaoDecodificar() {

    // Criptografa o texto inserido 
    const textoDecodificado = decodificar(textArea.value);

    // Exibe a codificação no campo de tradução
    traducao.style.display = "block";
    traducao.value = textoDecodificado;

    // Esconde a imagem do tradutor
    imagem.style.display = 'none';

    // Mostra o botão copiar
    botaoCopiar.style.display = "block";
}

// Substitui as vogais de acordo com a matriz definida
function decodificar(stringDecodificada) {
    stringDecodificada = stringDecodificada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        // Verifica se o texto enviado possui os caracteres da criptografia
        if(stringDecodificada.includes(matrizCodigo[i][1])) {

            // Substitui pelas vogais comuns
            stringDecodificada = stringDecodificada.replaceAll(matrizCodigo [i][1], matrizCodigo [i][0]);
        }
    }

    return stringDecodificada;
}


// EXTRA - BOTÃO COPIAR
document.querySelector('.botao-copiar').addEventListener('click', copiar);

function copiar() {
  document.querySelector(".traducao").select();
  document.execCommand("copy");
}