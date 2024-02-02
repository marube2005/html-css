document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird');
    const arrow = document.querySelector('.arrow');
    let isJumping = false;
  
    document.addEventListener('keydown', jump);
  
    function jump(event) {
      if (event.code === 'Space' && !isJumping) {
        isJumping = true;
  
        let jumpCount = 0;
        const jumpInterval = setInterval(() => {
          const birdTop = parseInt(getComputedStyle(bird).top);
          
          if (jumpCount === 15) {
            clearInterval(jumpInterval);
            isJumping = false;
            jumpCount = 0;
          }
  
          bird.style.top = `${birdTop - 20}px`;
          jumpCount++;
        }, 20);
      }
    }
  
    function checkCollision() {
      const birdRect = bird.getBoundingClientRect();
      const arrowRect = arrow.getBoundingClientRect();
  
      return !(
        birdRect.bottom < arrowRect.top ||
        birdRect.top > arrowRect.bottom ||
        birdRect.right < arrowRect.left ||
        birdRect.left > arrowRect.right
      );
    }
  
    function gameLoop() {
      const gameInterval = setInterval(() => {
        const birdTop = parseInt(getComputedStyle(bird).top);
  
        if (birdTop >= window.innerHeight - bird.clientHeight) {
          bird.style.top = `${window.innerHeight - bird.clientHeight}px`;
          clearInterval(gameInterval);
          alert('Game Over!');
        } else {
          arrow.style.right = `${parseInt(getComputedStyle(arrow).right) + 5}px`;
  
          if (checkCollision()) {
            clearInterval(gameInterval);
            alert('Collision! Game Over!');
          }
        }
      }, 50);
    }
  
    gameLoop();
  });
  