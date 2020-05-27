const chengeText = function(){
  let textsource = document.getElementById('textsource');
  let chenge = document.getElementById('chenge');
  let display = document.getElementById('display');
  let text = document.querySelector('p');
  let btn = document.querySelector('button');

  btn.addEventListener('click', function(){
    let source = textsource.value;
    let cng = chenge.value;
    let dsp = display.value;
    //textsource の中で、chengeと一致する内容をdisplayのないように変更する。
    cng = new RegExp(cng,'g');
    source = source.replace(cng,dsp);
    text.innerText = source;
    console.log(source);
    console.log(cng);
    console.log(dsp);
  });
}

chengeText();
