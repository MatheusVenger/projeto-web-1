document.getElementById('login-formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

  
    if (username === 'caixa' && password === 'caixa') {
        document.getElementById('resultado-mensagem').textContent = 'Login bem-sucedido!';
        document.getElementById('resultado-mensagem').classList.remove('hidden');
        document.getElementById('resultado-mensagem').classList.add('success');
    } else  { 
        document.getElementById('resultado-mensagem').textContent = 'Falha no Login.';
        document.getElementById('resultado-mensagem').classList.remove('hidden');
        document.getElementById('resultado-mensagem').classList.add('error');
    }
});

function ocultarBotao() {
    document.getElementById('botao').style.display = 'none';}