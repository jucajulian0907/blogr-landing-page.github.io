(function() {
    const listElements = document.querySelectorAll('.menu-show');
    const list = document.querySelector('.menu-links');
    const menu = document.querySelector('.menu-hamburguer');

    const addClick = () => {
        listElements.forEach(element => {
            element.addEventListener('click', () => {
                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('.menu-item_active');

                if(subMenu.clientHeight === 0) {
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            })
        })
    }
    
    const deleteStyleHeight = () => {
        listElements.forEach(element => {

            if(element.childer[1].getAtribute('style')) {
                element.childer[1].removeAttribute('style');
                element.classList.remove('.menu-item_active')
            }
        })
    }

    window.addEventListener('resize', ()=>{
        if (window.innerWidth > 800) {
            deleteStyleHeight();

            if(list.classList.contains('menu-links_show'))
                list.classList.remove('menu-links_show');
        } else {
            addClick();
        }
    });

    if (window.innerWidth <= 800) {
        addClick();
    }

    menu.addEventListener('click', () => list.classList.toggle('menu-link_show'));

})();
