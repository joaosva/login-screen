document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    
    const nome = document.getElementById('nome-input').value;
    const email = document.getElementById('email-input').value;
    const senha = document.getElementById('senha-input').value;
    const repetirSenha = document.getElementById('repetir-senha-input').value;
    const errorMessage = document.getElementById('error-message');
    
    let errors = [];
    // Verificar se os campos estão vazios
    if(!nome) {
        errors.push('O campo Nome é obrigatório');
    }
    if(!email) {
        errors.push('O campo Email é obrigatório');
    }
    if(!senha){
        errors.push('O campo Senha é obrigatório');
    }
    if(senha !== repetirSenha){
        errors.push('As senhas não coincidem.');
    }
    // Exibir mensagens de erro se houver
    if (errors.length> 0) {
        errorMessage.innerHTML = errors.join('<br>'); //Mostra os erros
        errorMessage.style.color = 'red';
    } else {
        //limpar os campos
        document.getElementById('nome-input').value = '';
        document.getElementById('email-input').value = '';
        document.getElementById('senha-input').value = '';
        document.getElementById('repetir-senha-input').value = '';
    
        errorMessage.innerHTML = ''; // Limpa messagens de erro
        
        //Armezenar dados no localStorage
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('password', senha);
    
        // Redirecionar para a página de exibição
        window.location.href = 'cadastro_completo.html'; //Mudar para a URL da nova página
    } 
    });