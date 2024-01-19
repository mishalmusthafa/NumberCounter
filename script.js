let count = 0;
let value = document.getElementById('value');
const buttonContainer = document.getElementById('button-container');


function checkNegativePositive() {
  if (count < 0) {
    document.getElementById('value').style.color = 'red';
  } else if (count === 0) {
    document.getElementById('value').style.color = 'black';
  } else {
    document.getElementById('value').style.color = 'green';
  }
}

// Event Listeners
buttonContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('decrease')) {
    count--;
  }
  else if (e.target.classList.contains('increase')) {
    count++;
  }
  else {
    count = 0;
  };
  value.textContent = count;
  checkNegativePositive();
});