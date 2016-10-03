console.log('Loaded!');
//change the  value of main-text
var element=document.getElementById('main-text'
);
element.innerHTML = 'New Text';
var image=document.getElementById('img');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 10;
    image.style.marginLeft = marginLeft + 'px';
}
image.onclick = function(){
    var interval = setinterval(moveRight,100);
}