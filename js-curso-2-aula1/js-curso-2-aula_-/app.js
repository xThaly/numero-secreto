let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let tentativas = 1;
let numeroSecreto;


numeroSecreto = gerarNumero();

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let  quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosDaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
   
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTexto('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você achou o número secreto com ${tentativas} ${palavraTentativa} `;
        exibirTexto('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTexto('p','O número é menor');
        }else{
            exibirTexto('p','O número é maior');
        }
        tentativas++;
        limparCampo();
    }
}
function mensagemInicial(){
    exibirTexto('h1','Jogo do número Secreto');
    exibirTexto('p','Escolha um número entre 1 e 100');
}

function novoJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

document.getElementById('reiniciar').addEventListener('click', novoJogo);
mensagemInicial();

