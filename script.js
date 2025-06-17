document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formSugestao');
    const toggle = document.getElementById('toggleInfo');
    const extraInfo = document.getElementById('infoExtra');

    form?.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const sugestao = document.getElementById('sugestao').value.trim();

        if (!nome || !email || !sugestao) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        alert('Obrigado! Sua sugestão foi enviada com sucesso.');
        form.reset();
    });

    toggle?.addEventListener('click', function () {
        if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
            extraInfo.style.display = 'block';
        } else {
            extraInfo.style.display = 'none';
        }
    });
});

