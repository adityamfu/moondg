// Membuat scene
const scene = new THREE.Scene();

// Membuat kamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5); // Mengatur posisi kamera

// Membuat renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00fffffa });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, 0);
scene.add(cube);

const light = new THREE.PointLight(0xffffff);
light.position.set(1, 1, 2)
scene.add(light);

function rotateCubeOnClick() {
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
}

cube.addEventListener('click', rotateCubeOnClick);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 2);
scene.add(directionalLight);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render scene
  renderer.render(scene, camera);
}
// Inisialisasi variabel untuk menyimpan posisi
let prevMouseX = 0;
let prevMouseY = 0;

// Fungsi untuk mengubah rotasi kubus
function rotateCubeWithMouse(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Menghitung perubahan posisi mouse
  const deltaX = mouseX - prevMouseX;
  const deltaY = mouseY - prevMouseY;

  // Mengubah rotasi kubus berdasarkan perubahan posisi mouse
  cube.rotation.x += deltaY * 0.005; // Mengubah rotasi X berdasarkan perubahan Y mouse
  cube.rotation.y += deltaX * 0.005; // Mengubah rotasi Y berdasarkan perubahan X mouse

  // Menyimpan posisi mouse saat ini sebagai posisi sebelumnya untuk penghitungan selanjutnya
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

// Menambahkan event listener untuk mousemove
document.addEventListener('mousemove', rotateCubeWithMouse, false);

// Memulai animasi
animate();
