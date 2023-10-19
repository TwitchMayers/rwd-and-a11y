import anime from '../node_modules/animejs/lib/anime.es.js';

function AnimationTarget(el, duration) {

  this.animate = function () {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        this.el = el;
        this.duration = duration
        anime({
          targets: this.el,
          translateX: {
            value: 270,
            duration: 800
          },
          rotate: {
            value: 360,
            duration: 1800,
            easing: 'easeInOutSine'
          },
          scale: {
            value: 1.5,
            duration: 1600,
            delay: 800,
            easing: 'easeInOutQuart'
          }
        });
        break

      case 1:
        this.el = el;
        this.duration = duration
        anime({
          targets: this.el,
          translateX: 270,
          scale: 2,
          rotate: '1turn'
        });
        break

      case 2:
        this.el = el;
        this.duration = duration
        anime({
          targets: this.el,
          translateX: 270,
          duration: 3000
        });
        break
    }
  }
}

let btn = document.getElementsByClassName('anim-btn')[0]
btn.addEventListener('click', create)
function create() {
  let container = document.getElementsByClassName('anim-container')[0]
  let p = document.getElementsByTagName('p')
  let content = document.createElement('p')
  let count = document.createTextNode(`${p.length} АнИмАцИя`);
  content.appendChild(count)
  container.appendChild(content)
  let animTarget = new AnimationTarget(content, 600);
  console.log(animTarget);
  animTarget.animate();
}
