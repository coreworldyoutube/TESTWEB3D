// mapGenerator.js
function generateMap(scene, width, height, blockSize) {
  const blocks = [];
  for (let x = 0; x < width; x++) {
    for (let z = 0; z < height; z++) {
      const y = Math.floor(Math.random() * 3); // 高さをランダムに設定
      const geometry = new THREE.BoxGeometry(blockSize, blockSize, blockSize);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const block = new THREE.Mesh(geometry, material);
      block.position.set(x * blockSize, y * blockSize, z * blockSize);
      scene.add(block);
      blocks.push(block);
    }
  }
  return blocks;
}
