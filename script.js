document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário para que possamos processar

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aqui você pode adicionar lógica para enviar os dados do formulário para um servidor ou serviço
    console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);

    // Limpar o formulário após o envio
    this.reset();
    alert('Mensagem enviada com sucesso!');
});
