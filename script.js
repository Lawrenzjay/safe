document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const messageDiv = document.getElementById('message');

    let noClicked = false;

    noBtn.addEventListener('click', function() {
        noClicked = true;
        moveNoButton();
    });

    yesBtn.addEventListener('click', function() {
        if (noClicked) {
            messageDiv.textContent = "Yay! You said yes! ❤️";
            noBtn.style.display = 'none';
            yesBtn.style.display = 'none';
        } else {
            messageDiv.textContent = "Yay! You said yes! ❤️";
        }
    });

    function moveNoButton() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();

        // Calculate random position within the container
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }
});
