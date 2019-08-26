let scene, camera, renderer, controls;
const skyboxImage = "purplenebula";

function createPathStrings(filename) {
  const basePath = "/static/skybox/";
  const baseFilename = basePath + filename;
  const fileType = ".png";
  const sides = ["ft", "bk", "up", "dn", "rt", "lf"];
  const pathStings = sides.map(side => {
    return baseFilename + "_" + side + fileType;
  });

  return pathStings;
}

function createMaterialArray() {
  const skyboxImagepaths = createPathStrings(skyboxImage);
  const materialArray = skyboxImagepaths.map(image => {
    let texture = new THREE.TextureLoader().load(image);

    return new THREE.MeshBasicMaterial({ map: texture });
  });
  return materialArray;
}

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    45,
    30000
  );
  camera.position.set(1200, -250, 20000);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const materialArray = createMaterialArray();

  for (var i = 0; i < 6; i++) materialArray[i].side = THREE.BackSide;

  let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
  let skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);

  controls = new THREE.OrbitControls(camera);
  controls.minDistance = 500;
  controls.maxDistance = 1500;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.0;

  window.addEventListener("resize", onWindowResize, false);
  animate();
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  if (controls.enabled == true && window.location.pathname !== "/") {
    controls.enabled = false;
  } else if (controls.enabled == false && window.location.pathname == "/") {
    controls.enabled = true;
  }
}

init();
