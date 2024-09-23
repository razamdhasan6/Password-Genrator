const inputEle = document.querySelector('input');
const buttonEle = document.querySelector('button');
const copyBtneEle = document.querySelector('span');

let generatePassword = () => {
    const capitalChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const smallChar = 'abcdefghijklmnopqrstuvwxyz'
    const numChar = '0123456789'
    const spacelChar = '@#$%^&*()_+[]{}|;:,.<>?'
    
    const allChar = capitalChar + smallChar + numChar + spacelChar;
    const passwordLength = 12; // You can change the length of the password as needed
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex =Math.floor(Math.random() * allChar.length);
        password += allChar[randomIndex];
    }

    inputEle.value = password;
};

buttonEle.addEventListener('click', generatePassword);

copyBtneEle.addEventListener('click', () => {
    inputEle.select();
    document.execCommand('copy'); // Copies the selected text to the clipboard
});
