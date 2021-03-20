

function showQuestion(clicked_id){

document.getElementById('showquestion').innerHTML = clicked_id

const clickedButton = document.getElementById(clicked_id)
clickedButton.classList.add('btn-clicked')
}



// var score = 1;

// var addPoints = () =>{
// var scoreAdded = score++;
// document.getElementById('ramla').innerHTML = scoreAdded
// }
