// Скрипт для управления меню
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');

// При клике на кнопку меню
menuToggle.addEventListener('click', () => {
    // Переключаем класс для анимации и открытия меню
    menuToggle.classList.toggle('open');
    
    // Открываем/закрываем меню
    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-250px';
    } else {
        sideMenu.style.left = '0px';
    }
});

// Получаем все кнопки с вопросами
const faqButtons = document.querySelectorAll('.faq-question');

// Добавляем обработчик события на каждую кнопку
faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Находим родительский элемент faq-item
        const faqItem = button.closest('.faq-item');
        
        // Переключаем класс 'open' у родителя
        faqItem.classList.toggle('open');
    });
});
