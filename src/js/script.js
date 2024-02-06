
let btnSelectPlatform = document.getElementById('select-plataform');
let btnsPlatforms = document.getElementById('plataforms-buttons');

let btnSideMenu = document.querySelector('#btn-side-menu');
let navmobile = document.getElementById('nav-mobile');

function handleClickPlatform(){
    if(btnsPlatforms.classList.contains('active')){
        btnsPlatforms.classList.remove('active');
        btnsPlatforms.classList.add('disable');
    }else if(btnsPlatforms.classList.contains('disable')){
        btnsPlatforms.classList.remove('disable');
        btnsPlatforms.classList.add('active');
    }
}

function handleClickSideMenu(){
    if(navmobile.classList.contains('active')){
        navmobile.classList.remove('active');
        navmobile.classList.add('disable');
    }else if(navmobile.classList.contains('disable')){
        navmobile.classList.remove('disable');
        navmobile.classList.add('active');
    }
}

btnSideMenu.addEventListener('click', () => {
    handleClickSideMenu();
})

btnSelectPlatform.addEventListener('click', () => {
    handleClickPlatform();
})
