document.querySelector('.btn').onclick = catchText;
function catchText() {
    const i1 = document.querySelector('.inputText');
    console.log(i1.value);
    document.querySelector('.output').textContent = i1.value; 
    i1.value = ''

}