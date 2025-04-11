let circles = [];
let lockMenuVisibility = false; // 用於鎖定選單的可見性

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#ffecd1');
  
  // 產生 40 個圓的初始位置與顏色
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(50, 100),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background('#ffecd1'); // 確保背景不會累積
  let sizeFactor = map(mouseX, 0, width, 0.5, 2); // 根據滑鼠 X 位置調整大小比例
  
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size * sizeFactor); // 圓的大小隨滑鼠移動變化
  }

  // 控制選單顯示與隱藏
  const menu = document.querySelector('.menu');
  if (!lockMenuVisibility) { // 如果未鎖定選單可見性
    if (mouseY < 250) {
      menu.classList.add('visible');
    } else {
      menu.classList.remove('visible');
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// 鎖定選單可見性
function lockMenu() {
  lockMenuVisibility = true;
}

// 解鎖選單可見性
function unlockMenu() {
  lockMenuVisibility = false;
}
