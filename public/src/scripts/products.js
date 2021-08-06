// Array de todos os produtos
var products = {
    femininos: [
        {
            "id": 1,
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

// Para cada produto feminino do JSON ele mostra no HTML 
for (var i = 0; i < products.femininos.length; i++) {
    var html = "<div class='box' onclick='infoProd()'>";
    html += "<img src="+ products.femininos[i].imagem +">";
    html += "<h3>" + products.femininos[i].nome + "</h3>" + "<br>";
    html += "<h2>" + products.femininos[i].valor + "</h2>";
    html += "<div>";
    $('div .content.fem').append(html)
}

// Para cada produto masculino do JSON ele mostra no HTML
for (var i = 0; i < products.masculinos.length; i++) {
    var html = "<div class='box' onclick='infoProd()'>";
    html += "<img src="+ products.masculinos[i].imagem +">";
    html += "<h3>" + products.masculinos[i].nome + "</h3>" + "<br>";
    html += "<h2>" + products.masculinos[i].valor + "</h2>";
    html += "<div>";
    $('div .content.masc').append(html)
}

// Para cada produto infantil do JSON ele mostra no HTML
for (var i = 0; i < products.infantis.length; i++) {
    var html = "<div class='box' onclick='infoProd()'>";
    html += "<img src="+ products.infantis[i].imagem +">";
    html += "<h3>" + products.infantis[i].nome + "</h3>" + "<br>";
    html += "<h2>" + products.infantis[i].valor + "</h2>";
    html += "<div>";
    $('div .content.kids').append(html)
}

// Função para pegar informações de cada produto no qual eu clicar
function infoProd(){
    // Tentei pegar o nome de cada produto para que eu podesse mostar na tela de informações do produto
    //alert("" + products.masculinos[0].nome)

    // Depois eu mando o usuário para a tela de informaç~]oes do produto
    location.replace("./infoProd.html")
}


// Aqui estou salvando os produtos para que se carregar a página eles fiquem salvos
const Storage = {
    get() {
        return JSON.parse(localStorage.getItem("sneakers:Myproducts")) || []
    },

    set(Myproducts) {
        localStorage.setItem("sneakers:Myproducts", JSON.stringify(Myproducts))
    }
}


// Função para adicionar o produto e remover o produto;
const Myproducts = {
    all: Storage.get(),

    add(product) {
        Myproducts.all.push(product)

        App.reload()
    },

    remove(index) {
        Myproducts.all.splice(index, 1)

        App.reload()
    }
}


// Função para adicionar o produto na tabela
const DOM = {
    productsContainer: document.querySelector('#data-table tbody'),

    addProduct(product, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLProducts(product, index)
        tr.dataset.index = index

        DOM.productsContainer.appendChild(tr)
    },

    innerHTMLProducts(product, index) {

        const html = `
        <tr>
            <td><img src="../img/tenis-react.png" alt=""></td>
            <td>Tênis</td>
            <td>299,99</td>
            <td class="number">${product.number}</td>
            <td class="qntd">${product.qntd}</td>
            <td>
                <input type="button" value="Remover" class="button-delete-cart" onclick="Transaction.remove(${index})">
            </td>
        </tr>
        `
        return html
    },

    clearProduct() {
        DOM.productsContainer.innerHTML = ""
    }
}


// Funções para abrir e fechar o Modal
const Modal = {
    modalCart(){
        document.querySelector(".modal-overlay.addCart").classList.add("active");
    },
    
     closeModalCart() {
        document.querySelector(".modal-overlay.addCart").classList.remove("active");
    },
    
     modalBuyNow(){
        document.querySelector(".modal-overlay.buyNow").classList.add("active");
    },
    
     closeModalBuyNow() {
        document.querySelector(".modal-overlay.buyNow").classList.remove("active");
    }
}


// Tentei pegar os valores do Form e verficá-los
const Form = {
    number: document.querySelector('input#number'),
    qntd: document.querySelector('input#qntd'),

    getValues() {
        return {
            number: Form.number.value,
            qntd: Form.qntd.value,
        }
    },

    validateFields() {
        const { number, qntd } = Form.getValues()
        
        if( number.trim() === "" || 
            qntd.trim() === "") {
                throw new Error("Por favor, preencha todos os campos")
        }
    },
    formatValues() {
        let { number, qntd } = Form.getValues()

        return {
            number,
            qntd
        }
    },

    clearFields() {
        Form.number.value = ""
        Form.qntd.value = ""
    },



    submit(event) {
        event.preventDefault()

        try {
            Form.validateFields()
            const product = Form.formatValues()
            Myproducts.add(product)
            Form.clearFields()
            Modal.closeModalCart()
        } catch (error) {
            alert(error.message)
        }
    }
}


// Função para carreagr a aplicação, para executar os métodos para iniciar e recarregar
const App = {
    init() {
        Myproducts.all.forEach(DOM.addProduct)

        Storage.set(Myproducts.all)
    },
    reload() {
        location.replace("./MyCart.html")
        DOM.clearProduct()
        App.init()
    },
}

// Inicialização da aplicação
App.init();