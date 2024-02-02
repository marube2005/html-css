import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create a bird
const birdGeometry = new THREE.BoxGeometry(1, 1, 1);
const birdMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
const bird = new THREE.Mesh(birdGeometry, birdMaterial);
scene.add(bird);

// Set up camera position
camera.position.z = 5;

// Animate the bird
function animate() {
  requestAnimationFrame(animate);

  // Rotate the bird for a flying effect
  bird.rotation.x += 0.01;
  bird.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

animate();
