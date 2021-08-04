var products = {
    femininos: [
        {
            "imagem": '../img/tenis-femininos/adidas-fem-one.png',
            "nome": "Tênis Forum Bold",
            "valor": "R$ 599,99"
        },
        {
            "imagem": '../img/tenis-femininos/adidas-fem-two.png',
            "nome": "Tênis NMD_R1",
            "valor": "R$ 799,99"
        },
        {
            "imagem": '../img/tenis-femininos/adidas-fem-three.png',
            "nome": "Tênis Superstar",
            "valor": "R$ 399,99"
        }, 
        {
            "imagem": '../img/tenis-femininos/new-balance-four.png',
            "nome": "New Balance More V2",
            "valor": "R$ 899,99"
        },
        {
            "imagem": '../img/tenis-femininos/new-balance-five.png',
            "nome": "New Balance - WL373WND",
            "valor": "R$ 299,99"
        },
        {
            "imagem": '../img/tenis-femininos/nike-six.png',
            "nome": "Nike Court Lite",
            "valor": "R$ 299,99"
        }
    ],
    masculinos: [
        {
            "imagem": '../img/tenis-masculino/nike-one.png',
            "nome": "Nike Air Zoom SuperRep 2",
            "valor": "R$ 699,99"
        },
        {
            "imagem": '../img/tenis-masculino/nike-two.png',
            "nome": "NikeCourt Lite 2",
            "valor": "R$ 399,99"
        },
        {
            "imagem": "../img/tenis-masculino/adidas-three.png",
            "nome": "Adidas UltraBoost DNA X LEGO",
            "valor": "R$ 899,99"
        },
        {
            "imagem": "../img/tenis-masculino/adidas-four.png",
            "nome": "Tênis NMD_R1",
            "valor": "R$ 799,99"
        },
        {
            "imagem": "../img/tenis-masculino/new-balance-five.png",
            "nome": "New Balance 850 Casual",
            "valor": "R$ 499,99"
        },
        {
            "imagem": "../img/tenis-masculino/new-balance-six.png",
            "nome": "Nike Air Zoom SuperRep 2",
            "valor": "R$ 699,99"
        }
    ],
    infantis:[
        {
            "imagem": '../img/tenis-infantil/air-jordan-one.png',
            "nome": "Jordan MA 2",
            "valor": "R$ 500,00"  
        },
        {
            "imagem": '../img/tenis-infantil/air-jordan-two.png',
            "nome": "Jordan 1 MID ",
            "valor": "R$ 500,00" 
        },
        {
            "imagem": '../img/tenis-infantil/adidas-three.png',
            "nome": "Tênis Forum Low",
            "valor": "R$ 499,99" 
        },
        {
            "imagem": '../img/tenis-infantil/adidas-four.png',
            "nome": "Tênis Adidas Superstar",
            "valor": "R$ 329,99" 
        },
        {
            "imagem": '../img/tenis-infantil/nike-five.png',
            "nome": "Nike Air Max 90 Infantil",
            "valor": "R$ 339,99" 
        },
        {
            "imagem": '../img/tenis-infantil/nike-six.png',
            "nome": "Nike Court Legacy Infantil",
            "valor": "R$ 229,99" 
        }
    ]
};  

// Para cada produto feminino do JSON ele adiciona no HTML 
for (var i = 0; i < products.femininos.length; i++) {
    var html = "<div class='box'>";
    html += "<img src="+ products.femininos[i].imagem +">";
    html += "<h3>" + products.femininos[i].nome + "</h3>" + "<br>";
    html += "<h2>" + products.femininos[i].valor + "</h2>";
    html += "<div>";
    $('div .content.fem').append(html)
}


// Para cada produto masculino do JSON ele adiciona no HTML
for (var i = 0; i < products.masculinos.length; i++) {
    var html = "<div class='box'>";
    html += "<img src="+ products.masculinos[i].imagem +">";
    html += "<h3>" + products.masculinos[i].nome + "</h3>" + "<br>";
    html += "<h2>" + products.masculinos[i].valor + "</h2>";
    html += "<div>";
    $('div .content.masc').append(html)
}

// Para cada produto infantil do JSON ele adiciona no HTML
for (var i = 0; i < products.infantis.length; i++) {
    var html = "<div class='box'>";
    html += "<img src="+ products.infantis[i].imagem +">";
    html += "<h3>" + products.infantis[i].nome + "</h3>" + "<br>";
    html += "<h2>" + products.infantis[i].valor + "</h2>";
    html += "<div>";
    $('div .content.kids').append(html)
}
