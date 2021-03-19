

function showQuestion(clicked_id){

document.getElementById('showquestion').innerHTML = clicked_id

const clickedButton = document.getElementById(clicked_id)
clickedButton.classList.add('btn-clicked')
}

