'use strict';
const hr = function(){document.write('<hr>');}


const battle = function(){
  const teams = ['a','b','c','d','e'];
  const opps = ['a','b','c','d','e'];
  for (let t1 of teams){
    opps.shift();
    for(let t2 of opps){
      document.write(t1 + '✕' + t2 + '<br>');
    }
  }
}

battle();
hr();

const obSample = function(){
  const obj = ['月','火','水','木','金','土','日'];
  document.write(obj[3] + '<br>');
  obj[1] = '炎';
  document.write(obj[1] + '<br>');
  for(let day of obj){
    document.write(day + '曜日');
  }
}

obSample();
hr();

const QbyQ = function(){
  let ten;
  let one;
  for(ten = 1; ten < 10 ; ten++){
    for (one = 1; one < 10; one++){
      document.write(ten + '✕' +  one + '＝' + (ten * one) + '<br>');
    }
    document.write('+-+-+-+-+-+-+<br>');
  }

}

QbyQ();
hr();

const helloTen = function(){
  const ten = 10;
  for(let i = 0; i < ten ; i++){
    document.write('<h1>' + (i + 1) + '回目のHello!!</h1>');
  }
}

helloTen();
hr();

const money = function(){
  let shikin = 500000;
  parseInt(shikin);
  while(shikin >= 5000){
    shikin = shikin -5800;
    document.write(shikin + '<br>');
  }
}

money();
hr();

const getAge = function(){
  let str = parseInt(prompt('年齢を入力してください'));
  document.write(str + '<br>');
  let age = str;
  if (!isNaN(age)) {
    if (age < 20) {
      if (age <= 5) {
        document.write('未成年かつ未就学です。');
      } else {
        document.write('未成年です。');
      }
    } else if (age < 60) {
      document.write('成人です。');

    } else {
      document.write('高齢者です。');
    }
  } else {
    document.write('数値を入力せよ');
  }
}
getAge();
