const btn = document.querySelector('button');
const spans = document.getElementById('updateContent');
btn.onclick = function () {
    const name = prompt('enter your name');
    spans.innerHTML = `tuck you ${name}`;
}
