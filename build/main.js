let active = 'home';

const buttons = document.querySelectorAll('.button');

function update() { 
	console.log(active);
  let clicked = this.className;
  clicked = clicked.split('--').pop();
  console.log(clicked);
  if ( clicked !==  active ) {
  	document.querySelector(`.button--${active}`).classList.remove('active');
  	this.classList.add('active');
  	active = clicked;
  }
  //document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

buttons.forEach(button => button.addEventListener('click', update));
