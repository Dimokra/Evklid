document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const sidebarContainer = document.getElementById('sidebarContainer');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn'); 

    function toggleMenu() {
        if (sidebarContainer) {
            sidebarContainer.classList.toggle('is-open');
        }
        if (burgerBtn) {
            burgerBtn.classList.toggle('is-open');
        }
        if (sidebarOverlay && sidebarOverlay.classList.contains('sidebar-overlay-toggle')) {
            sidebarOverlay.classList.toggle('sidebar-overlay-toggle');
        } else {
            sidebarOverlay.classList.add('sidebar-overlay-toggle');
        }
        document.body.classList.toggle('no-scroll');
    }

    if (burgerBtn) {
        burgerBtn.addEventListener('click', toggleMenu);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', toggleMenu);
    }

    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', toggleMenu);
    }

    if (sidebarContainer) {
        const navLinks = sidebarContainer.querySelectorAll('.main-menu__item__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (sidebarContainer.classList.contains('is-open')) {
                    toggleMenu(); 
                }
            });
        });
    }
});
