const testBtn = document.querySelector('#scroll-up');
testBtn.onclick = function() {
  window.scrollTo(0, 0);
}

function borderSelect(borderTarget) {
  const select = document.querySelectorAll(borderTarget);
  return select;
}

const borderSet = {
  bottom: function(color) {
    const select = borderSelect('.border-b');
    for (let i = 0; i < select.length; i++) {
      select[i].style.borderBottom = ('1px solid '+color);
    }
  },
  top: function(color) {
    const select = borderSelect('.border-t');
    for (let i = 0; i < select.length; i++) {
      select[i].style.borderTop = ('1px solid '+color);
    }
  },
  left: function(color) {
    const select = borderSelect('.border-l');
    for (let i = 0; i < select.length; i++) {
      select[i].style.borderLeft = ('1px solid '+color);
    }
  },
  right: function(color) {
    const select = borderSelect('.border-r');
    for (let i = 0; i < select.length; i++) {
      select[i].style.borderRight = ('1px solid '+color);
    }
  }
}

function setColor () {
  const target = document.querySelector('body');
  const toggle = document.querySelector('#day-night');

  if (toggle.innerText === 'Night') {
    target.style.backgroundColor = ('gray');
    target.style.color = ('white');
    toggle.innerText = 'Day';
    document.querySelector('.navbar').style.backgroundColor = '#3e2723';
    document.querySelector('h1').style.backgroundColor = '#5d4037';

    for (let i in borderSet) {
      borderSet[i]('white');
    }
  } else {
    target.style.backgroundColor = ('rgb(253, 253, 251)');
    target.style.color = ('black');
    toggle.innerText = 'Night';
    document.querySelector('.navbar').style.backgroundColor = '#795548';
    document.querySelector('h1').style.backgroundColor = '#bcaaa4';
    
    for (let i in borderSet) {
      borderSet[i]('gray');
    }
  }
}

