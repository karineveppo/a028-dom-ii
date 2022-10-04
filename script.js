function adicionaItem(event){
     
    //criei um novo elemento
    let elementoNovo = document.createElement("article")

    //criei o conteúdo do elemento
    const adiciona = document.createTextNode("Olá, sou o elemento criado")

    //adicinei o conteúdo na variável
    elementoNovo.appendChild(adiciona)

    //definir aonde o elemento criado irá ficar
    let elementoReferencia = document.getElementById("container")

    //adicionei o elemento no local escolhido a partir da referencia
    elementoReferencia.insertAdjacentElement("beforeend", elementoNovo)
    elementoNovo.classList.add("item")

    elementoNovo.addEventListener("click", removeItem)
}

function removeItem(event){
    event.target.remove()
}