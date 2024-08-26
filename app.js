document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.querySelector('.avatar');

    function randomFlicker() {
        // Устанавливаем белую границу
        avatar.style.borderColor = '#fff';
        avatar.style.boxShadow = '0 0 20px #fff ';

        // Возвращаем к прозрачной границе через короткий промежуток времени
        setTimeout(() => {
            avatar.style.borderColor = '#00000000';
            avatar.style.boxShadow = 'none';
        }, 300); // Время мигания (100 мс)

        // Планируем следующее мигание через случайный промежуток времени
        const randomDelay = Math.random() * 4000 + 500; // Случайная задержка от 500 до 2500 мс
        setTimeout(randomFlicker, randomDelay);
    }

    // Запускаем функцию мигания
    randomFlicker();
});
