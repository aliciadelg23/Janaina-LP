document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.btn-mobile-menu');
    const mobileNav = document.querySelector('.nav-mobile');
    const menuBackdrop = document.querySelector('.menu-backdrop');
    const body = document.body;

    // Função para fechar o menu
    function closeMenu() {
        body.classList.remove('menu-open');
        mobileMenuButton.classList.remove('active');
        mobileNav.classList.remove('active');
        menuBackdrop.classList.remove('active');
    }

    // Função para abrir o menu
    function openMenu() {
        body.classList.add('menu-open');
        mobileMenuButton.classList.add('active');
        mobileNav.classList.add('active');
        menuBackdrop.classList.add('active');
    }

    // Listener para o botão do menu
    mobileMenuButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique se propague para outros elementos
        
        // Verifica se o menu já está aberto para decidir se deve abrir ou fechar
        const isMenuOpen = body.classList.contains('menu-open');
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Listener para fechar o menu ao clicar no backdrop
    menuBackdrop.addEventListener('click', function() {
        closeMenu();
    });
});