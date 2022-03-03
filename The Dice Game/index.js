var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNumber1+".png";    //dice1.png-dice6.png

var randomSrc1="images/"+randomImage1;            // images/dice1.png-images/dic6.png 

var image1=document.querySelectorAll("img")[0].setAttribute("src",randomSrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage2="dice"+randomNumber2+".png";

var randomSrc2="images/"+randomImage2;  

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomSrc2);

if(randomNumber1>randomNumber2)
{

document.querySelector("h1").innerHTML="Player 1 Wins! 🚩";
}
else if(randomNumber1<randomNumber2)

{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}