document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Obtém os dados do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Cria um objeto com os dados do formulário
    var dadosFormulario = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    // Envia os dados para a função de processamento
    processarFormulario(dadosFormulario);
});

function processarFormulario(dados) {
    // Simulação de uma requisição assíncrona (pode ser uma chamada AJAX)
    setTimeout(function() {
        // Aqui você pode processar os dados como desejar
        console.log('Dados recebidos:');
        console.log(dados);

        // Por exemplo, você pode enviar os dados para o servidor usando AJAX ou fetch
        // Exemplo de como enviar os dados para o servidor:
        /*
        fetch('url_do_seu_script_de_processamento.php', {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Erro:', error));
        */

        // Aqui você pode adicionar qualquer lógica adicional, como exibir uma mensagem de sucesso para o usuário
        alert('Formulário enviado com sucesso!');

        // Redirecionamento opcional após o envio do formulário
        // window.location.href = 'pagina_de_agradecimento.html';
    }, 1000); // Simula um atraso de 1 segundo (opcional)
}




window.addEventListener('scroll', function() {
    var imagemFixa = document.getElementById('imagemFixa'); // Obtém a referência para a imagem
    var limiteScroll = 10px;

    // Verifica se a posição vertical de rolagem da página é maior que o limite definido
    if (window.scrollY > limiteScroll) {
        imagemFixa.style.display = 'block'; // Exibe a imagem quando a posição de rolagem atinge o limite
    } else {
        imagemFixa.style.display = 'none'; // Oculta a imagem se a posição de rolagem estiver abaixo do limite
    }
});
