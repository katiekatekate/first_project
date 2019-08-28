document.querySelectorAll('#greet-me').forEach(el =>{
    el.addEventListener ('click',() => {
        alert('Hello')
    })
});
const alertButton =
document.querySelector ('.click-me');
alertButton.addEventListener ('click', () => {
    alert('I\'ve been clicked')
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })