let adj=0; let noun=0;
function id(e){return document.getElementById(e);}
function generate()
{
	adj=randomInteger(0,A.length-1);
	noun=randomInteger(0,N.length-1);
	id('noun1').innerHTML=A[adj][0];
	id('adj1').innerHTML=N[noun][0];
	id('adj2').innerHTML=' ';
	id('noun2').innerHTML=' ';
	id('button').innerHTML='Show translation';
	id('button').setAttribute('onclick','showtranslation()');
}
function showtranslation()
{
	id('adj2').innerHTML=A[adj][1]+N[noun][2];
	id('noun2').innerHTML=N[noun][1];
	id('button').innerHTML='Generate new';
	id('button').setAttribute('onclick','generate()');
}


function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
