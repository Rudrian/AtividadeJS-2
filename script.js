function criaObjeto(){
    const azul = document.createElement('div');
    azul.classList.add('azul');
    document.body.appendChild(azul);

    const vermelho = document.createElement('div');
    vermelho.classList.add('vermelho');
    azul.appendChild(vermelho);

}
