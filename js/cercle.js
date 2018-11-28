var home = document.querySelectorAll('.block');
var img = document.querySelector('section img');
var x = 0;
var count = 0;
for (let i = 0; i <  home.length; i++){
  home[i].addEventListener('mouseover', function(){
    if (count < 5){
    home[i].style.transform = 'none';
    count++;
    console.log(count);
    }else{
      for (let i = 0; i < home.length; i++) {
        home[i].style.transform = 'rotate(-45deg)';
        home[i].style.marginBottom = '40px';
        img.style.zIndex = '1';        
      }
    }
  });

}









