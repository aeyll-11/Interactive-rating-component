console.log('TEST')
const submit = document.querySelector('.submit_button');
const ratings = document.querySelector('.rating');
const thanks = document.querySelector('.thanks');
const buttons = document.querySelectorAll('.buttons > button');
const span = document.querySelector('span');
console.log(buttons)
submit.addEventListener('click', () => {
    ratings.style.display = 'none';
    thanks.style.display = 'block';
});

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        span.innerHTML = this.innerHTML;
    });
});

