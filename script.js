document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos necessários do menu
    const mobileMenuButton = document.querySelector('.btn-mobile-menu');
    const mobileNav = document.querySelector('.nav-mobile');
    const menuBackdrop = document.querySelector('.menu-backdrop');
    const body = document.body;
    
    // ADICIONADO: Seleciona o novo botão de fechar
    const closeMenuButton = document.querySelector('.btn-close-menu');

    // Função para fechar o menu (remove as classes)
    function closeMenu() {
        body.classList.remove('menu-open');
        mobileNav.classList.remove('active');
        menuBackdrop.classList.remove('active');
    }

    // Função para abrir o menu (adiciona as classes)
    function openMenu() {
        body.classList.add('menu-open');
        mobileNav.classList.add('active');
        menuBackdrop.classList.add('active');
    }

    // Listener para o clique no botão HAMBÚRGUER (agora só abre)
    mobileMenuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        openMenu();
    });

    // Listener para fechar o menu ao clicar no fundo escurecido (backdrop)
    menuBackdrop.addEventListener('click', closeMenu);

    // ADICIONADO: Listener para fechar o menu ao clicar no botão 'X'
    closeMenuButton.addEventListener('click', closeMenu);
});
