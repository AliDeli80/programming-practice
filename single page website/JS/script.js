let items = document.querySelectorAll('.nav-bar li');
items.forEach((item) => {
    item.addEventListener('click' , function(e) {
        e.preventDefault();

        document.querySelector('.nav-bar li.active').classList.remove('active');
        this.classList.add('active');

    })

    const aboutMe = document.querySelector('.nav-bar li.about');
    aboutMe.addEventListener('click' , function() {
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: 'smooth',
        })
    })

    const services = document.querySelector('.nav-bar li.services');
    services.addEventListener('click' , function() {
        window.scrollTo({
            top: 1030,
            left: 0,
            behavior: 'smooth'
        })
    })

    const  experience = document.querySelector('.nav-bar li.experience');
    experience.addEventListener('click' , function() {
        window.scrollTo({
            top: 1550,
            left: 0,
            behavior: 'smooth'
        })
    })

    const works = document.querySelector('.nav-bar li.my-works');
    works.addEventListener('click' , function() {
        window.scrollTo({
            top: 2300,
            left: 0,
            behavior: 'smooth'
        })
    })

    const contact = document.querySelector('.nav-bar li.contact-me');
    contact.addEventListener('click' , function() {
        window.scrollTo({
            top: 3700,
            left: 0,
            behavior: 'smooth'
        })
    })

    const home = document.querySelector('.nav-bar li.home');
    home.addEventListener('click' , function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
})



window.addEventListener('scroll' , function(e) {
    if (window.scrollY > 590 && window.scrollY < 1030) {
        document.querySelector('.nav-bar li.active').classList.remove('active');
        document.querySelector('.nav-bar li.about').classList.add('active');
    } 

    if (window.scrollY > 1030 && window.scrollY < 1550) {
        document.querySelector('.nav-bar li.active').classList.remove('active');
        document.querySelector('.nav-bar li.services').classList.add('active');
    }

    if (window.scrollY > 1550 && window.scrollY < 2300) {
        document.querySelector('.nav-bar li.active').classList.remove('active');
        document.querySelector('.nav-bar li.experience').classList.add('active');
    }

    if (window.scrollY > 2290 && window.scrollY < 3700) {
        document.querySelector('.nav-bar li.active').classList.remove('active');
        document.querySelector('.nav-bar li.my-works').classList.add('active');
    }

    if (window.scrollY > 3600) {
        document.querySelector('.nav-bar li.active').classList.remove('active');
        document.querySelector('.nav-bar li.contact-me').classList.add('active');
    }

    if (window.scrollY > 0 && window.scrollY < 600) {
        document.querySelector('.nav-bar li.active').classList.remove('active');
        document.querySelector('.nav-bar li.home').classList.add('active');
    }
})

const sendButton = document.querySelector('.send-button');
sendButton.addEventListener('click' , function(e) {
    e.preventDefault();


    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const issueInput = document.getElementById('issue');
    const messageTextInput = document.getElementById('message-text');

    firstNameInput.value = '';
    lastNameInput.value = '';
    issueInput.value = '';
    messageTextInput.value = '';
})