let items = document.querySelectorAll('.nav-bar a');
items.forEach((item) => {
    item.addEventListener('click' , function(e){
        e.preventDefault();

        document.querySelector('.nav-bar a.active').classList.remove('active')
        this.classList.add('active');


    })
})