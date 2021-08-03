var json = {
    products: [
        {
            "imagem": 'https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-97-masculino-921826-015-1.png',
            "nome": "Nike Air Max 97",
            "valor": "R$ 899,00"
        }
    ],
};  

for (var i = 0; i < json.products.length; i++) {
    var html = "<tr>";
    html += "<td>" + json.products[i].imagem + "</td>";
    html += "<td>" + json.products[i].nome + "</td>";
    html += "<td>" + json.products[i].valor + "</td>";
    html += "<tr>";
    $('table tbody').append(html)
}
