console.log('Loaded!');
//change the  value of main-text
var element=document.getElementById('main-text'
);
element.innerHTML = 'New Text';
var image=document.getElementById('img');
image.onclick = function(){
    image.style.marginLeft='100px';
}