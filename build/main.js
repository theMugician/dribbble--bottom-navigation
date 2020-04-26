let active = 'home';

const buttons = document.querySelectorAll('.button');

function handler(ev) {

	// get clicked button
  let clicked = this.className
					 					.split(' ')[1]
						 				.split('--')
							 			.pop();

  // ripple effect
  let x = ev.clientX;
  let y = ev.clientY;
  let ripple = `.ripple--${clicked}`;
  let node = document.querySelector(ripple);
  let newNode = node.cloneNode(true);
  newNode.classList.add('animate');
  newNode.style.left = ev.clientX - 5 + "px";
  newNode.style.top = ev.clientY - 5 + "px";
  node.parentNode.replaceChild(newNode, node);

  // animate new button
  if ( clicked !==  active ) {
  	document.querySelector(`.button--${active}`).classList.remove('active');
  	this.classList.add('active');
  	active = clicked;
  }

}

buttons.forEach(button => button.addEventListener('click', handler));