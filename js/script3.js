'use strict';
{
  const pram = function(){
    const input = document.querySelector('input');
    const obj = document.querySelector('p');
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
      obj.innerText = input.value;
    });
  }
  pram();
}

