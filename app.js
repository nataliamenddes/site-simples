'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className == "light-theme") {
        this.tectContent = "Escuro";
    }
    else {
        this.textContent = "Claro"; 
    }

    
    console.log('current class name:' + className);
});
