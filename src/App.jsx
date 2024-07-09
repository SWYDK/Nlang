
import './App.css'

function App() {
  



// Получаем все карты (элементы с классом "card")
const cards = document.querySelectorAll('.card');

// Функция для установки border-radius в зависимости от ширины экрана
function setCardBorderRadius() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1080) {
        // Установка border-radius справа и слева у border1
        document.getElementById('border1').style.borderRadius = '12px 0 0 12px';
        document.getElementById('border2').style.borderRadius = '0';
        document.getElementById('border3').style.borderRadius = '0';
        document.getElementById('border4').style.borderRadius = '0 12px 12px 0';
    } else if (windowWidth <= 1080 && windowWidth >= 828) {
        // Установка border-radius с внешних сторон у всех карт
        document.getElementById('border1').style.minWidth= '350px';
        document.getElementById('border2').style.minWidth= '350px';
        document.getElementById('border3').style.minWidth= '350px';
        document.getElementById('border4').style.minWidth= '350px';
        /* cards.forEach(card => {
            card.style.borderRadius = '10px';
        }); */
    }
    else if (windowWidth <= 827 && windowWidth >= 571) {
        // Установка border-radius с внешних сторон у всех карт
        document.getElementById('statistic').style.flexWrap = 'wrap';
        document.getElementById('border1').style.borderRadius = '12px 0 0 0';
        document.getElementById('border2').style.borderRadius = '0 12px 0 0';
        document.getElementById('border3').style.borderRadius = '0 0 0 12px';
        document.getElementById('border4').style.borderRadius = '0 0 12px 0';
    } else if (windowWidth <= 571) {
        // Установка border-radius сверху только у первой и последней карты
        document.getElementById('border1').style.borderRadius = '12px 12px 0 0';
        document.getElementById('border2').style.borderRadius = '0 0 0 0';
        document.getElementById('border3').style.borderRadius = '0 0 0 0';
        document.getElementById('border4').style.borderRadius = '0 0 12px 12px';
    }
}

// Вызываем функцию при загрузке страницы и при изменении размеров окна
window.addEventListener('load', setCardBorderRadius);
window.addEventListener('resize', setCardBorderRadius);

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loader = document.getElementById("loader-container");
        loader.style.opacity = '0';
        setTimeout(function() {
            loader.style.display = 'none';
        }, 1000); // Ждем завершения плавного перехода (1 секунда)
    }, 1800);
});

function animateMarquee(el, duration) {
    const innerEl = el.querySelector('.marquee__inner');
    const innerWidth = innerEl.offsetWidth;
    const cloneEl = innerEl.cloneNode(true);
    el.appendChild(cloneEl);
    
    let start = performance.now();
    let progress;
    let translateX;
  
    requestAnimationFrame(function step(now) {
      progress = (now - start) / duration;
   
      if (progress > 1) {
          progress %= 1;
        start = now;
      }
  
      translateX = innerWidth * progress;
      
      innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
      cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
      requestAnimationFrame(step);
    });
  }
  
  const marquee2 = document.querySelector('#marquee2');
  
  
  animateMarquee(marquee2, 40000);








function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const openPopups = document.querySelectorAll('.button-data');
    const closePopup = document.getElementById('popup-close');
    const popup = document.getElementById('popup');
    const popupBody = document.getElementById('popup-body');
  
    openPopups.forEach((openPopup) => {
      openPopup.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.add('active');
        popupBody.classList.add('active');
      });
    }); 
  
    closePopup.addEventListener('click', () => {
      popup.classList.remove('active');
      popupBody.classList.remove('active');
    });
  });

  function relocate_home()
  {
       location.href = "google.com";
  } 
  return (
    <>
    
    <h1>a</h1>

    </>
  )
}

export default App
