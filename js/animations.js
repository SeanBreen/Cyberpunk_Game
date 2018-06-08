var animationQueue = [];

function drawAnimations() {
  if (animationQueue.length > 0) {
    for (i=0;i<animationQueue.length;i++) {
      if (animationQueue[i][1] > 0) {
        animationQueue[i][0].alpha-=0.02;
        animationQueue[i][0].drawProfit();
        animationQueue[i][0].profitImgPos-=1;
        animationQueue[i][1]-=0.03;
      } else {
        animationQueue[i][0].resetAlpha();
        animationQueue.splice(i,1);
      }
    }
  }
}
