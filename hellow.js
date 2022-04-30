

function generatecolor(){
  let hexcode=['0', '1', '2', '3', '4' , '4', '5', '6', '7', '8',  '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let color ='#';
  for( let x=0; x<6 ;  x++){
let num=Math.round(Math.random ()*15);
let num2=hexcode[num];
color+=num2

  }
  document.getElementById('container') .style.backgroundColor= color;
  document.getElementById('output') .style.color= color;
  document.getElementById('gg') .style.backgroundcolor= color;

  document.getElementById('output') .innerHTML= color;


}








