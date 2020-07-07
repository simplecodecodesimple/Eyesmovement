var insides=document.querySelectorAll('.inside');
document.addEventListener('mousemove',function() {
    var x=event.clientX *100/window.innerWidth+ '%';
    var y=event.clientY *100/window.innerHeight+ '%';
    insides[0].style.left=x;
    insides[0].style.top=y;
    insides[1].style.left=x;
    insides[1].style.top=y;
})