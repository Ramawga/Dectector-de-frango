function verificar(){
    var inputSupino = document.getElementById('supino')
    var res = document.getElementById('res')
    var kg = Number(inputSupino.value);

    var img = document.createElement('img')

    img.setAttribute('id', 'foto')

    if(kg < 10){
        img.setAttribute('src', './imagens/7.png')
        res.innerHTML = "<p id='mensagem'>kkkkkkkk</p>"
    }else if( kg < 20){
        img.setAttribute('src', './imagens/9.png')
        res.innerHTML = "<p id='mensagem'>Muito Frango</p>"
    }else if(kg < 30){
        img.setAttribute('src', './imagens/8.png')
        res.innerHTML = "<p id='mensagem'>Frangolino</p>" 
    }else if(kg < 40){
        img.setAttribute('src', './imagens/1.png')
        res.innerHTML = "<p id='mensagem'>Frango junior</p>" 
    }else if(kg < 50){
        img.setAttribute('src', './imagens/2.png')
        res.innerHTML = "<p id='mensagem'>Frango</p>" 
    }else if(kg < 60){
        img.setAttribute('src', './imagens/3.png')
        res.innerHTML = "<p id='mensagem'>Belo fisico!</p>"   
    }
    else if(kg < 100){
        img.setAttribute('src', './imagens/6.png')
        res.innerHTML = "<p id='mensagem'>Rato de academia</p>"    
    }else if(kg < 150){
        img.setAttribute('src', './imagens/10.png')
        res.innerHTML = "<p id='mensagem'>Arnold</p>" 
    }else if( kg < 250){
        img.setAttribute('src', './imagens/4.png')
        res.innerHTML = "<p id='mensagem'>Marombeiro</p>" 
    }
    else if( kg < 350){
        img.setAttribute('src', './imagens/11.png')
        res.innerHTML = "<p id='mensagem'>GigaChad</p>" 
    }else{
        img.setAttribute('src', './imagens/5.png')
        res.innerHTML = "<p id='mensagem'>Você está mentindo!</p>"  
    }
    res.innerHTML += `Você pega ${kg} kg supino!`;
    res.appendChild(img);

}