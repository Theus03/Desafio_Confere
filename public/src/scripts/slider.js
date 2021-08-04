// Determina quanto tempo mostra a imagem antes de trocar
let time = 3000,
    currentImageWeb = 0,
    images = document.querySelectorAll(".sliders img")
    max = images.length;

    // Função que troca a imagem
    function nextImage(){
        images[currentImageWeb].classList.remove("selected")
       
        currentImageWeb++

        if(currentImageWeb >= max)
            currentImageWeb = 0

        images[currentImageWeb].classList.add("selected")  
    }

    // Função para executar o slider
    function startImage(){
        setInterval(() => {
            //Troca Imagem
            nextImage();
        }, time)
    }

window.addEventListener("load", startImage)