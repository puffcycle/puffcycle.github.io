
    emailjs.init("T7rj8YrwZN5ZsousS");

    document.getElementById('bin-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const submitText = document.getElementById('submit-text');
        const originalText = submitText.innerText;
        
        // Меняем текст кнопки, чтобы пользователь видел, что идет отправка
        submitText.innerText = 'SENDING...';

        // Отправка формы
        emailjs.sendForm('service_xadxutq', 'template_8u3bo4m', this)
            .then(function() {
                // Если успешно
                alert('Success! Your request has been sent.');
                document.getElementById('bin-form').reset();
                submitText.innerText = originalText;
            }, function(error) {
                // Если ошибка
                alert('Oops... Something went wrong. Please try again.');
                console.log('FAILED...', error);
                submitText.innerText = originalText;
            });
    });