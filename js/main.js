(function() {

    const variables = {
        skiw:   0,
        percents: ['85', '80', '60', '55', '65', '70']
    }


    class Project {

        constructor(tag, image, title) {
            this.tag = tag;
            this.image = image;
            this.title = title;
        }

        createBox() {
            let box = document.createElement('div');
            box.classList.add('fichBox');
        }
    }
    const block_fiches = document.querySelector('.block_fiches');

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    prev.onclick = function() {
        if (variables.skiw == 0) {
            return
        }
        else {
            variables.skiw += 100;
            block_fiches.style.transform = `translateX(${variables.skiw}%)`;
        }
        console.log('click prev');
    }
    next.onclick = function() {
        if (variables.skiw == 0) {
            return
        }
        else {
            variables.skiw -= 100;
            block_fiches.style.transform = `translateX(${variables.skiw}%)`;
        }
        console.log('click next');
    }

    // Плавный переход
    $('.main_link').on('click', 'a', function(e) {
        e.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1000);
    });

    $('.left_link').on('click', 'a', function(e) {
        e.preventDefault();
        $('.layer').toggleClass('chrest');
        $('.left-menu').toggleClass('appear');
        $('header, main, footer').toggleClass('saturate');
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1000);
    });
    
    // startUp

    const startUp = document.querySelector('.startUp');
    startUp.onclick = () => {
        $('body, html').animate({scrollTop: 0}, 500);
    }

    function progressBar(event) {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let per = windowScroll / windowHeight * 100;
        if (per > 10) startUp.style.right = '20px';
        else startUp.style.right = '-100px';
    }

    window.addEventListener('scroll', progressBar);

    const val_percents = document.querySelectorAll('.percent');
    const spell_percents = document.querySelectorAll('.knowlege');
    for (let i = 0; i < val_percents.length; i++) {
        val_percents[i].textContent = variables.percents[i] + '%';
        spell_percents[i].value = variables.percents[i];
    }

    const send = document.querySelector('.send');
    send.onclick = function(e) {
        e.preventDefault();
    }

    const wishes = document.querySelector('.wishes');
    const count = document.querySelector('.count');

    function counting() {
        let symbols = wishes.value.length;
        count.textContent = cnt + '/200';
    }
    wishes.addEventListener('keyup', counting);
    wishes.addEventListener('keydown', counting);

    const burger = document.querySelector('.burger');
    burger.addEventListener('click', function() {
        $('.layer').toggleClass('chrest');
        $('.left-menu').toggleClass('appear').css('transition-duration', '0.7s');
        $('header, main, footer').toggleClass('saturate');
    });
})();