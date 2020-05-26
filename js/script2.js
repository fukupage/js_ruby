'use strict'

function hr(){
  document.write('<hr>');
}

hr();


const dataobj = function(){
  let data = [
                  {'name':'ほげほげ','price':'500000'},
                  {'name':'ふがふが','price':'800000'}
                ];
  document.write(data[0]['name'] + '<br>');
  document.write(data[1]['price'] + '<br>');
}

dataobj();

hr();

const name = (ans,price) => {
  document.write('<h1>' + ans + '様、おはようございます。宿泊費は' + price + '円です</h1>')
}
name(prompt('お名前教えて下さい'),prompt('宿泊費は'));

hr();
