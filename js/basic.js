document.addEventListener("DOMContentLoaded", function () {

    const section = document.querySelectorAll('section');

    const sideMenu = document.getElementById('side_menu');
    const body = document.querySelector('body');

    for (var i = 0; i < section.length; i++) {

        var li = document.createElement("li");

        sideMenu.appendChild(li);

        const sectionTitle = document.getElementsByClassName('title')
        var sectionTitleValue = sectionTitle[i].innerHTML;

        var projectA = document.createElement("a");
        li.appendChild(projectA);
        projectA.href = "javascript:void(0)";
        projectA.innerHTML = sectionTitleValue;
        projectA.classList.add('sidemenu_a');

    }

    const sideMenuA = document.querySelectorAll('.sidemenu_a');

    sideMenuA[0].classList.remove('title_active');
    sideMenuA[0].classList.remove('title_active');

    function scrollEvent() {

        const main = document.getElementById('main');
        const mainHeight = main.clientHeight;

        section.forEach(function (w, i) {

            var sectionTop = section[i].offsetTop + mainHeight;
            var sectionHeight = section[i].clientHeight;
            var sectionPos = sectionTop + sectionHeight;

            var bodyScroll = body.scrollTop + body.clientHeight - 300;

            if (bodyScroll < sectionTop) {
                section[i].classList.remove('scroll_active');
                section[i].classList.add('scroll_bot');

            } else if (sectionTop < bodyScroll && bodyScroll < sectionPos) {
                section[i].classList.remove('scroll_top');
                section[i].classList.remove('scroll_bot');
                section[i].classList.add('scroll_active');

            } else {
                section[i].classList.remove('scroll_active');
                section[i].classList.add('scroll_top');

            }

        });

        const sideMenuAHeight = sideMenuA[0].clientHeight;

        sideMenuA.forEach(function (a) {

            var index = Array.from(sideMenuA).indexOf(a);

            const sectionTop = section[index].offsetTop + mainHeight;
            const sectionHeight = section[index].offsetTop + section[index].clientHeight + mainHeight

            const bodyScroll = body.scrollTop + body.clientHeight - 100;

            if (bodyScroll < sectionTop) {
                sideMenuA[index].classList.remove('title_active');

            } else if (sectionTop + 200 < bodyScroll && bodyScroll < sectionHeight + 200) {
                sideMenuA[index].classList.add('title_active');
                sideMenu.style.top = - sideMenuAHeight * (index) + 'px';;

            } else {
                sideMenuA[index].classList.remove('title_active');
            }

        });

    }

    body.addEventListener('scroll', function () {
        scrollEvent();
    });

    sideMenuA.forEach(function (a, i) {

        var index = Array.from(sideMenuA).indexOf(a);

        sideMenuA[i].addEventListener('click', () => {

            // menu move

            const sideMenuAHeight = sideMenuA[0].clientHeight;
            sideMenu.style.top = - sideMenuAHeight * i + 'px';;

            // menu text active

            sideMenuA.forEach(function (a) {
                a.classList.remove('title_active');
            });
            sideMenuA[i].classList.add('title_active');

            // scroll move

            const main = document.getElementById('main');
            const mainHeight = main.clientHeight / 1.5;

            const scrollTop = body.scrollTop || document.documentElement.scrollTop;
            const sectionTop = section[index].offsetTop + mainHeight;
            const distance = sectionTop - scrollTop;

            body.scrollBy({
                top: distance,
                behavior: 'smooth',
                duration: 2000,
            });

        });

    });

});