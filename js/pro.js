document.addEventListener("DOMContentLoaded", function () {

    const slideContainer = document.querySelector('.slideContainer');
    const slideWrapper = document.querySelector('.slideWrapper');
    const slideFactor = document.querySelectorAll('.slide_factor');

    // factor

    slideFactor.forEach(function (a, i) {

        a.style.width = slideContainer.clientWidth / 3 + 'px';
        a.style.marginRight = 20 + 'px';

    });

    var sfMargin = 20;

    // wrapper

    slideWrapper.style.width = (slideFactor[0].offsetWidth + sfMargin) * slideFactor.length + 'px';

    let isDragging = null;
    let accumulatedX = 0;

    let translateX = 0;

    slideContainer.addEventListener("mousedown", event => {

        isDragging = true;
        startX = event.clientX;

    });

    slideContainer.addEventListener("mousemove", event => {

        if (isDragging) {

            const transformStyle = window.getComputedStyle(slideWrapper).getPropertyValue('transform');
            const translateXRegex = /matrix\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+)/;
            const translateXMatch = transformStyle.match(translateXRegex);
            const translateXValue = translateXMatch ? parseInt(translateXMatch[5]) : 0;

            // newTranslateX = Math.max(0, Math.min(newTranslateX, slideX*7));

            const endX = event.clientX - startX;
            accumulatedX = translateXValue + endX; // 이전 누적값에 현재 이동 거리 더하기

            slideWrapper.style.transform = 'translateX(' + accumulatedX + 'px)';

        }

    });

    slideContainer.addEventListener("mouseup", event => {

        isDragging = false;

        const endX = event.clientX - startX;
        var slideX = slideContainer.clientWidth / 3; // slide 이동거리

        var absEndX = Math.abs(endX)
        var absSlideX = Math.abs(slideX)

        const transformStyle = window.getComputedStyle(slideWrapper).getPropertyValue('transform');
        const translateXRegex = /matrix\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+)/;
        const translateXMatch = transformStyle.match(translateXRegex);
        const translateXValue = translateXMatch ? parseInt(translateXMatch[5]) : 0;

        const move = slideX + sfMargin;
        var basicX = translateXValue;

        if (absEndX < absSlideX / 2) {

            console.log(1);

            slideWrapper.style.transform = 'translateX(' + basicX + 'px)';

        } else if (absSlideX / 2 < absEndX && absEndX < absSlideX / 1.5) {
            console.log(2);
            if (endX < 0) {
                slideWrapper.style.transform = 'translateX(' + (- move) + 'px)';
            } else {
                slideWrapper.style.transform = 'translateX(' + move + 'px)';
            }

        } else if (absSlideX / 1.5 < absEndX && absEndX < absSlideX / 2.5) {
            console.log(3);
            if (endX < 0) {
                slideWrapper.style.transform = 'translateX(' + (- move) * 2 + 'px)';
            } else {
                slideWrapper.style.transform = 'translateX(' + move * 2 + 'px)';
            }

        } else {
            console.log(4);
            if (endX < 0) {
                slideWrapper.style.transform = 'translateX(' + (- move) * 3 + 'px)';
            } else {
                slideWrapper.style.transform = 'translateX(' + move * 3 + 'px)';
            }

        }

    });

    const slider = document.querySelector('.slider');
    const sliderItems = document.querySelector('.slider-items');
    const sliderItem = document.querySelectorAll('.slider-item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    let slideWidth = sliderItem[0].clientWidth;
    let currentIndex = 0;
    
    next.addEventListener('click', () => {
      currentIndex = (currentIndex < sliderItem.length - 1) ? currentIndex + 1 : 0;
      sliderItems.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    });
    
    prev.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderItem.length - 1;
      sliderItems.style.transform = `translateX`
    });

    // container

    slideContainer.style.height = slideFactor[0].offsetHeight + 'px';

});