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
    idForm0.classList.replace('question-show', 'question-hidden');
    idForm1.classList.replace('question-hidden', 'question-show');
})

submit1.addEventListener('click', function(){
    idForm1.classList.replace('question-show', 'question-hidden');
    idForm2.classList.replace('question-hidden', 'question-show');
})

submit2.addEventListener('click', function(){
    idForm2.classList.replace('question-show', 'question-hidden');
    idForm3.classList.replace('question-hidden', 'question-show');
})

submit3.addEventListener('click', function(){
    idForm3.classList.replace('question-show', 'question-hidden');
    idForm4.classList.replace('question-hidden', 'question-show');
})

submit4.addEventListener('click', function(){
    idForm4.classList.replace('question-show', 'question-hidden');
    idForm0.classList.replace('question-hidden', 'question-show');
})


