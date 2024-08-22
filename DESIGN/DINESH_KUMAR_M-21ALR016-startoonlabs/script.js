document.addEventListener('DOMContentLoaded', function() {
    const goalPercentage = 75; 

    const semiCircle = document.querySelector('.semi-circle');
    const percentageText = document.getElementById('percentage');

    const degrees = (goalPercentage / 100) * 180;
    semiCircle.style.background = `conic-gradient(#007bff 0% ${goalPercentage}%, #ddd ${goalPercentage}% 100%)`;

    percentageText.textContent = `${goalPercentage}%`;
});
