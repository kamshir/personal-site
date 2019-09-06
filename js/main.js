(function() {

    let variables = {
        skiw:   0
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
    }
    next.onclick = function() {
        if (variables.skiw == 0) {
            return
        }
        else {
            variables.skiw -= 100;
            block_fiches.style.transform = `translateX(${variables.skiw}%)`;
        }
    }

    // Плавный переход
    $('.main_link').on('click', 'a', function(e) {
        e.preventDefault();
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
})();