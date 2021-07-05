var submit0 = document.querySelector('#submit0')
var submit1 = document.querySelector('#submit1')
var submit2 = document.querySelector('#submit2')
var submit3 = document.querySelector('#submit3')
var submit4 = document.querySelector('#submit4')

var idForm0 = document.querySelector('#question_0')
var idForm1 = document.querySelector('#question_1')
var idForm2 = document.querySelector('#question_2')
var idForm3 = document.querySelector('#question_3')
var idForm4 = document.querySelector('#question_4')

submit0.addEventListener('click', function(){
    idForm0.style.display = 'none';
    idForm1.style.display = 'flex';
})

submit1.addEventListener('click', function(){
    idForm1.style.display = 'none';
    idForm2.style.display = 'flex';
})

submit2.addEventListener('click', function(){
    idForm2.style.display = 'none';
    idForm3.style.display = 'flex';
})

submit3.addEventListener('click', function(){
    idForm3.style.display = 'none';
    idForm4.style.display = 'flex';
})

submit4.addEventListener('click', function(){
    idForm4.style.display = 'none';
    idForm0.style.display = 'flex';
})