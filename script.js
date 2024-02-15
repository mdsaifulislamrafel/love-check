function clickMe() {
    const firstInput = document.getElementById('first-input');
    const secondInput = document.getElementById('second-input');


    
    const firstText = firstInput.value;
    const secondText = secondInput.value;
    
    if (firstText.trim() === '' || secondText.trim() === '') {
        return alert('Please enter a non-empty string value');
     }
 
     if (typeof firstText !== 'string' || typeof secondText !== 'string') {
        return alert('Please enter a string value');
     }

    const name = firstText + ' ' +  'Love ' + secondText;

    const randomNumber = Math.random() * 100;
    const index = Math.round(randomNumber);

    const output = document.getElementById('output');
    output.innerText = name +" " + index + ' %';
    firstInput.value = '';
    secondInput.value = '';

}