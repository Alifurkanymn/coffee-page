const header = document.querySelector('header');
header.style.background = 'none';
header.style.backgroundColor = 'gray';
header.style.height = '14vh';

document.querySelector('.info').addEventListener('mouseover', e => {
    for (var i = 0; i < deneme.length; i++) {
        deneme[i].style.transition = '0.2s'
        deneme[i].style.opacity = '.1';
        yazi[i].style.display = 'block';
    }
});


/* var yazi = document.querySelectorAll('.price');
var deneme = document.querySelectorAll('.info');

deneme.addEventListener('mouseover', function() {
    for (var i = 0; i < deneme.length; i++) {
        deneme[i].style.transition = '0.2s'
        deneme[i].style.opacity = '.1';
        yazi[i].style.display = 'block';
    }
})

deneme.addEventListener('mouseout', function() {
    for (var i = 0; i < deneme.length; i++) {
        deneme[i].style.opacity = '1';
        yazi[i].style.display = 'none';
    }
}) */