document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createShootingStars();
});

function createStars() {
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }
}

function createShootingStars() {
    const numberOfShootingStars = 8;

    for (let i = 0; i < numberOfShootingStars; i++) {
        createShootingStar();
    }
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(star);
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.left = `${Math.random() * window.innerWidth}px`;
    shootingStar.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(shootingStar);
}

function startLyricsAnimation() {
    const lyricsBox = document.querySelector('.lyrics-box');
    const startButton = document.querySelector('button');
    const audio = new Audio('StevenUniverse.mp3');

    lyricsBox.style.display = 'block';

    audio.play();

    startButton.style.display = 'none';

    const circleContainer = document.querySelector('.circle-container');
    const circle = document.querySelector('.circle');

    circleContainer.style.display = 'block';
    circle.style.animation = 'fadeIn 1s forwards';

    setTimeout(() => {
        circle.style.animation = 'fadeOut 1s forwards';
    }, 5000);

    setTimeout(() => {
        circleContainer.style.display = 'none';
    }, 6000);

    const starContainer = document.querySelector('.star-container');
    const starImg = document.querySelector('.star-img');

    starContainer.style.display = 'block';
    starImg.style.animation = 'fadeIn 1s forwards';

    setTimeout(() => {
        starImg.style.animation = 'fadeOut 1s forwards';

    }, 5000);

    setTimeout(() => {
        starContainer.style.display = 'none';

    }, 6000);

    animateLyrics1();
    animateLyrics2();
    animateLyrics3();
    animateLyrics4();
    animateLyrics5();
    animateLyrics6();
    animateLyrics7();
    animateLyrics8();
    animateLyrics9();
    animateLyrics10();
    animateLyrics11();
    animateLyrics12();
    animateLyrics13();
    animateLyrics14();
    animateLyrics15();
    animateLyrics16();
    animateLyrics17();
    animateLyrics18();
    animateLyrics19();
    animateLyrics20();
    animateLyrics21();
    animateLyrics22();
    animateLyrics23();
    animateLyrics24();
    animateLyrics25();
    animateLyrics26();
    animateLyrics27();
    animateLyrics28();
}

function animateLyrics1() {
    const line1 = document.querySelector('.line1');
    setTimeout(() => {
        line1.style.opacity = '1';
        line1.style.transform = 'translateY(0)';
        line1.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line1.style.color = '#ff66b2'; 
        setTimeout(() => {
            line1.style.color = '#fff'; 
        }, 5000);
    }, 6000);
}

function animateLyrics2() {
    const line2 = document.querySelector('.line2');
    setTimeout(() => {
        line2.style.opacity = '1';
        line2.style.transform = 'translateY(0)';
        line2.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line2.style.color = '#ff66b2';
        setTimeout(() => {
            line2.style.color = '#fff';
        }, 5000);
    }, 9000);
}

function animateLyrics3() {
    const line3 = document.querySelector('.line3');
    setTimeout(() => {
        line3.style.opacity = '1';
        line3.style.transform = 'translateY(0)';
        line3.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line3.style.color = '#ff66b2';
        setTimeout(() => {
            line3.style.color = '#fff';
        }, 5000);
    }, 12000);
}

function animateLyrics4() {
    const line4 = document.querySelector('.line4');
    setTimeout(() => {
        line4.style.opacity = '1';
        line4.style.transform = 'translateY(0)';
        line4.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line4.style.color = '#ff66b2';
        setTimeout(() => {
            line4.style.color = '#fff';
        }, 5000);
    }, 15000);
}

function animateLyrics5() {
    const line5 = document.querySelector('.line5');
    setTimeout(() => {
        line5.style.opacity = '1';
        line5.style.transform = 'translateY(0)';
        line5.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line5.style.color = '#ff66b2';
        setTimeout(() => {
            line5.style.color = '#fff';
        }, 5000);
    }, 19000);
}

function animateLyrics6() {
    const line6 = document.querySelector('.line6');
    setTimeout(() => {
        line6.style.opacity = '1';
        line6.style.transform = 'translateY(0)';
        line6.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line6.style.color = '#ff66b2';
        setTimeout(() => {
            line6.style.color = '#fff';
        }, 5000);
    }, 22000);
}

function animateLyrics7() {
    const line7 = document.querySelector('.line7');
    setTimeout(() => {
        line7.style.opacity = '1';
        line7.style.transform = 'translateY(0)';
        line7.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line7.style.color = '#ff66b2';
        setTimeout(() => {
            line7.style.color = '#fff';
        }, 5000);
    }, 25000);
}

function animateLyrics8() {
    const line8 = document.querySelector('.line8');
    setTimeout(() => {
        line8.style.opacity = '1';
        line8.style.transform = 'translateY(0)';
        line8.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line8.style.color = '#ff66b2';
        setTimeout(() => {
            line8.style.color = '#fff';
        }, 5000);
    }, 27000);
}

function animateLyrics9() {
    const line9 = document.querySelector('.line9');
    setTimeout(() => {
        line9.style.opacity = '1';
        line9.style.transform = 'translateY(0)';
        line9.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line9.style.color = '#ff66b2';
        setTimeout(() => {
            line9.style.color = '#fff';
        }, 5000);
    }, 30000);
}

function animateLyrics10() {
    const line10 = document.querySelector('.line10');
    setTimeout(() => {
        line10.style.opacity = '1';
        line10.style.transform = 'translateY(0)';
        line10.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line10.style.color = '#ff66b2';
        setTimeout(() => {
            line10.style.color = '#fff';
        }, 5000);
    }, 35000);
}

function animateLyrics11() {
    const line11 = document.querySelector('.line11');
    setTimeout(() => {
        line11.style.opacity = '1';
        line11.style.transform = 'translateY(0)';
        line11.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line11.style.color = '#ff66b2';
        setTimeout(() => {
            line11.style.color = '#fff';
        }, 5000);
    }, 42000);
}

function animateLyrics12() {
    const line12 = document.querySelector('.line12');
    setTimeout(() => {
        line12.style.opacity = '1';
        line12.style.transform = 'translateY(0)';
        line12.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line12.style.color = '#ff66b2';
        setTimeout(() => {
            line12.style.color = '#fff';
        }, 5000);
    }, 45000);
}

function animateLyrics13() {
    const line13 = document.querySelector('.line13');
    setTimeout(() => {
        line13.style.opacity = '1';
        line13.style.transform = 'translateY(0)';
        line13.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line13.style.color = '#ff66b2';
        setTimeout(() => {
            line13.style.color = '#fff';
        }, 5000);
    }, 48000);
}

function animateLyrics14() {
    const line14 = document.querySelector('.line14');
    setTimeout(() => {
        line14.style.opacity = '1';
        line14.style.transform = 'translateY(0)';
        line14.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line14.style.color = '#ff66b2';
        setTimeout(() => {
            line14.style.color = '#fff';
        }, 5000);
    }, 51000);
}

function animateLyrics15() {
    const line15 = document.querySelector('.line15');
    setTimeout(() => {
        line15.style.opacity = '1';
        line15.style.transform = 'translateY(0)';
        line15.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line15.style.color = '#ff66b2';
        setTimeout(() => {
            line15.style.color = '#fff';
        }, 5000);
    }, 54000);
}

function animateLyrics16() {
    const line16 = document.querySelector('.line16');
    setTimeout(() => {
        line16.style.opacity = '1';
        line16.style.transform = 'translateY(0)';
        line16.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line16.style.color = '#ff66b2';
        setTimeout(() => {
            line16.style.color = '#fff';
        }, 5000);
    }, 56000);
}

function animateLyrics17() {
    const line17 = document.querySelector('.line17');
    setTimeout(() => {
        line17.style.opacity = '1';
        line17.style.transform = 'translateY(0)';
        line17.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line17.style.color = '#ff66b2';
        setTimeout(() => {
            line17.style.color = '#fff';
        }, 5000);
    }, 58000);
}

function animateLyrics18() {
    const line18 = document.querySelector('.line18');
    setTimeout(() => {
        line18.style.opacity = '1';
        line18.style.transform = 'translateY(0)';
        line18.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line18.style.color = '#ff66b2';
        setTimeout(() => {
            line18.style.color = '#fff';
        }, 5000);
    }, 61000);
}

function animateLyrics19() {
    const line19 = document.querySelector('.line19');
    setTimeout(() => {
        line19.style.opacity = '1';
        line19.style.transform = 'translateY(0)';
        line19.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line19.style.color = '#ff66b2';
        setTimeout(() => {
            line19.style.color = '#fff';
        }, 5000);
    }, 69000);
}

function animateLyrics20() {
    const line20 = document.querySelector('.line20');
    setTimeout(() => {
        line20.style.opacity = '1';
        line20.style.transform = 'translateY(0)';
        line20.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line20.style.color = '#ff66b2';
        setTimeout(() => {
            line20.style.color = '#fff';
        }, 5000);
    }, 72000);
}

function animateLyrics21() {
    const line21 = document.querySelector('.line21');
    setTimeout(() => {
        line21.style.opacity = '1';
        line21.style.transform = 'translateY(0)';
        line21.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line21.style.color = '#ff66b2';
        setTimeout(() => {
            line21.style.color = '#fff';
        }, 5000);
    }, 76000);
}

function animateLyrics22() {
    const line22 = document.querySelector('.line22');
    setTimeout(() => {
        line22.style.opacity = '1';
        line22.style.transform = 'translateY(0)';
        line22.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line22.style.color = '#ff66b2';
        setTimeout(() => {
            line22.style.color = '#fff';
        }, 5000);
    }, 79000);
}

function animateLyrics23() {
    const line23 = document.querySelector('.line23');
    setTimeout(() => {
        line23.style.opacity = '1';
        line23.style.transform = 'translateY(0)';
        line23.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line23.style.color = '#ff66b2';
        setTimeout(() => {
            line23.style.color = '#fff';
        }, 5000);
    }, 87000);
}

function animateLyrics24() {
    const line24 = document.querySelector('.line24');
    setTimeout(() => {
        line24.style.opacity = '1';
        line24.style.transform = 'translateY(0)';
        line24.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line24.style.color = '#ff66b2';
        setTimeout(() => {
            line24.style.color = '#fff';
        }, 5000);
    }, 90000);
}

function animateLyrics25() {
    const line25 = document.querySelector('.line25');
    setTimeout(() => {
        line25.style.opacity = '1';
        line25.style.transform = 'translateY(0)';
        line25.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line25.style.color = '#ff66b2';
        setTimeout(() => {
            line25.style.color = '#fff';
        }, 5000);
    }, 93000);
}

function animateLyrics26() {
    const line26 = document.querySelector('.line26');
    setTimeout(() => {
        line26.style.opacity = '1';
        line26.style.transform = 'translateY(0)';
        line26.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line26.style.color = '#ff66b2';
        setTimeout(() => {
            line26.style.color = '#fff';
        }, 5000);
    }, 95000);
}

function animateLyrics27() {
    const line27 = document.querySelector('.line27');
    setTimeout(() => {
        line27.style.opacity = '1';
        line27.style.transform = 'translateY(0)';
        line27.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line27.style.color = '#ff66b2';
        setTimeout(() => {
            line27.style.color = '#fff';
        }, 5000);
    }, 103000);
}

function animateLyrics28() {
    const line28 = document.querySelector('.line28');
    setTimeout(() => {
        line28.style.opacity = '1';
        line28.style.transform = 'translateY(0)';
        line28.style.animation = 'fadeIn 3s forwards, slideIn 3s forwards';
        line28.style.color = '#ff66b2';
        setTimeout(() => {
            line28.style.color = '#fff';
        }, 5000);
    }, 110000);
}