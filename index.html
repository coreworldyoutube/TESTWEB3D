// シーン、カメラ、レンダラーの設定
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ライトの設定
scene.add(new THREE.AmbientLight(0x404040, 1));
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// MMDモデルの読み込み
const loader = new THREE.MMDLoader();
loader.load('models/inubashiri.pmx', (model) => {
  scene.add(model);
  model.scale.set(0.01, 0.01, 0.01);
}, undefined, (error) => console.error(error));

// カメラ位置設定
camera.position.z = 5;

// アニメーションループ
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
