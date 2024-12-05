// Configuração do Back4App
const APP_ID = "sczXXfzw8FZtcaOr3viuHddJyiQTUOmTmai6mSHO";
const REST_KEY = "1ZobMLzcWcV1YG4QZSEYZccdYDHnRcfHk5AvSkzg";
const SERVER_URL = "https://parseapi.back4app.com";

//Adicionando Dados
document.getElementById("adicionarVendas").addEventListener("submit", e => {
    e.preventDefault();

    const nome = document.getElementById('produto').value
    const preco = document.getElementById('preco').value
    const categoria = document.getElementById('categoria').value

    const dados = {
        nome: nome,
        preco: parseInt(preco),
        categoria: categoria
    }
    function adicionarDados(dados) {
        fetch('https://parseapi.back4app.com/parse/classes/Vendas', {
            method: 'POST',
            headers: {
                'X-Parse-Application-Id': APP_ID,
                'X-Parse-REST-API-Key': REST_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Dados adicionados com sucesso!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Erro ao adicionar dados.');
        });
    }
    
    adicionarDados(dados);
    });

//Editando Dados 
//document.getElementById("editarVendas").addEventListener("submit", e => {
//    e.preventDefault();
//    console.log("entrou")
//
//    const objectId = document.getElementById('idEditar').value
//    const nome = document.getElementById('produtoEditado').value
//    const preco = document.getElementById('precoEditado').value
//    const categoria = document.getElementById('categoriaEditado').value
//
//    const dadosAtualizados = {
//        nome: nome,
//        preco: parseInt(preco),
//        categoria: categoria
//    };
//    
//
//    fetch(`https://parseapi.back4app.com/parse/classes/Vendas/${objectId}`, {
//        method: 'PUT',
//        headers: {
//            'X-Parse-Application-Id': APP_ID,
//            'X-Parse-REST-API-Key': REST_KEY,
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(dadosAtualizados)
//    })
//    .then(response => response.json())
//    .then(data => {
//        console.log('Success:', data);
//        alert('Dados atualizados com sucesso!');
//    })
//    .catch((error) => {
//        console.error('Error:', error);
//        alert('Erro ao atualizar dados.');
//    });
//});
//
////Deletar dados
//document.getElementById("deletarVendas").addEventListener("submit", e => {
//    e.preventDefault();
//    console.log("entrou")
//
//    const objectId = document.getElementById('idDeletar').value
//
//    fetch(`https://parseapi.back4app.com/parse/classes/Vendas/${objectId}`, {
//        method: 'DELETE',
//        headers: {
//            'X-Parse-Application-Id': APP_ID,
//            'X-Parse-REST-API-Key': REST_KEY,
//            'Content-Type': 'application/json'
//        },
//    })
//    .then(response => {
//        if (response.ok) { 
//            return response.json(); 
//        } else {
//            throw new Error('Erro ao deletar dados.'); 
//        }
//    })
//    .then(data => {
//        console.log('Success:', data);
//        alert('Dados deletados com sucesso!');
//    })
//    .catch((error) => {
//        console.error('Error:', error);
//        alert('Erro ao deletar dados.');
//    });
//});
//
//
////Buscando dados
//async function fetchProducts() {
//    const url = "https://parseapi.back4app.com/classes/Vendas";
//    const headers = {
//        "X-Parse-Application-Id": APP_ID,
//        "X-Parse-REST-API-Key": REST_KEY,
//    };
//
//    try {
//        const response = await fetch(url, {
//            method: "GET",
//            headers: headers,
//        });
//
//        if (!response.ok) {
//            throw new Error(`Erro HTTP: ${response.status}`);
//        }
//
//        const data = await response.json();
//        renderProducts(data.results);
//    } catch (error) {
//        console.error("Erro ao buscar produtos:", error);
//    }
//}
//
////Renderizando tabelas
//function renderProducts(products) {
//    const tabela = document.getElementById("tabela-produtos");
//    const tbody = tabela.querySelector("tbody");
//    tbody.innerHTML = "";
//
//    products.forEach((product) => {
//        const linha = document.createElement("tr");
//
//        linha.innerHTML = `
//            <td>${product.objectId}</td>
//            <td>${product.nome}</td>
//            <td>R$${product.preco}</td>
//            <td>${product.categoria}</td>
//        `;
//
//        tbody.appendChild(linha);
//    });
//}
//
//fetchProducts()

//document.addEventListener("DOMContentLoaded", fetchProducts());

function abrirMenu() {
    document.getElementById("menu").classList.add("right-0");
    document.getElementById("menu").classList.remove("right-360");
    document.getElementById("overlay").style.display = "block";
  }
  
  function fecharMenu() {
    document.getElementById("menu").classList.add("right-360");
    document.getElementById("menu").classList.remove("right-0");
    document.getElementById("overlay").style.display = "none";
  }
  
  const overlay = document.getElementById("overlay");