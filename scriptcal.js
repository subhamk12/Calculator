const buttonList = document.querySelectorAll('button');
const displayInput = document.querySelector('.display');

buttonList.forEach(function (button) {
    button.addEventListener('click', () => {
        let value = button.getAttribute('data-num');
        if (value === '=') {
            let ans = displayInput.value
            displayInput.value = eval(ans);
        } else if (value === 'C') {
            displayInput.value = '';
        } else {
            displayInput.value = displayInput.value + button.getAttribute('data-num');
        }
    })
})

// setInterval(()=>{
//     console.log('focusing');
//     displayInput.focus();
// }, 100);

const body = document.querySelector('body')
body.addEventListener('keyup', (e) => {
    let code = e.keyCode; // 53
    if (code === 13) {
        let ans = displayInput.value
        displayInput.value = eval(ans);
    }
    if (code === 8) {
        displayInput.value = displayInput.value.substr(0, displayInput.value.length - 1)
    }
    if (e.shiftKey) {
        let char = String.fromCharCode(code);
        if (code === 187) {
            displayInput.value = displayInput.value + '+';
        } else if (code === 56) {
            displayInput.value = displayInput.value + '*';
        }
        return;
    }

    if (code === 16) {
        return;
    }

    let char = String.fromCharCode(code); // 5
    if (char >= '0' && char <= '9') {
        displayInput.value = displayInput.value + char;
    } else if (code === 191) {
        displayInput.value = displayInput.value + '/';
    } else if (code === 189) {
        displayInput.value = displayInput.value + '-';
    }


})