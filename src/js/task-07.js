const inputSize = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

function sizeChanging() {
    spanText.style['font-size'] = inputSize.value + 'px'
}
inputSize.addEventListener('input', sizeChanging)