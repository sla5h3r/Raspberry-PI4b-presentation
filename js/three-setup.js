// Three.js setup for a more detailed Raspberry Pi 4B model
let scene, camera, renderer, piGroup;

function initThree() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Transparent background

    // Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6; // Slightly further to see the whole model

    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add the renderer's canvas to the three-container div
    const container = document.getElementById('three-container');
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create the Raspberry Pi 4B model as a group of meshes
    piGroup = new THREE.Group();
    scene.add(piGroup);

    // Main board (green PCB)
    const boardGeometry = new THREE.BoxGeometry(2.2, 1.2, 0.1);
    const boardMaterial = new THREE.MeshStandardMaterial({
        color: 0x228B22, // Forest Green
        metalness: 0.1,
        roughness: 0.9
    });
    const board = new THREE.Mesh(boardGeometry, boardMaterial);
    board.position.y = 0; // Center vertically
    piGroup.add(board);

    // USB 2.0 ports (black)
    const usb2Geometry = new THREE.BoxGeometry(0.25, 0.08, 0.05);
    const usb2Material = new THREE.MeshStandardMaterial({
        color: 0x000000, // Black
        metalness: 0.5,
        roughness: 0.3
    });
    const usb2Left = new THREE.Mesh(usb2Geometry, usb2Material);
    usb2Left.position.set(-0.6, -0.55, 0.06); // Left bottom front
    piGroup.add(usb2Left);
    const usb2Right = new THREE.Mesh(usb2Geometry, usb2Material);
    usb2Right.position.set(0.6, -0.55, 0.06); // Right bottom front
    piGroup.add(usb2Right);

    // USB 3.0 ports (blue tab, black body)
    const usb3BodyGeometry = new THREE.BoxGeometry(0.25, 0.08, 0.05);
    const usb3BodyMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        metalness: 0.5,
        roughness: 0.3
    });
    const usb3TabGeometry = new THREE.BoxGeometry(0.25, 0.02, 0.05);
    const usb3TabMaterial = new THREE.MeshStandardMaterial({
        color: 0x0000FF, // Blue
        metalness: 0.5,
        roughness: 0.3
    });
    const usb3Left = new THREE.Group();
    const usb3LeftBody = new THREE.Mesh(usb3BodyGeometry, usb3BodyMaterial);
    usb3LeftBody.position.set(0, 0.015, 0); // Slightly up to make room for tab
    usb3Left.add(usb3LeftBody);
    const usb3LeftTab = new THREE.Mesh(usb3TabGeometry, usb3TabMaterial);
    usb3LeftTab.position.set(0, -0.035, 0); // Down to align bottom
    usb3Left.add(usb3LeftTab);
    usb3Left.position.set(-0.6, -0.45, 0.06);
    piGroup.add(usb3Left);

    const usb3Right = new THREE.Group();
    const usb3RightBody = new THREE.Mesh(usb3BodyGeometry, usb3BodyMaterial);
    usb3RightBody.position.set(0, 0.015, 0);
    usb3Right.add(usb3RightBody);
    const usb3RightTab = new THREE.Mesh(usb3TabGeometry, usb3TabMaterial);
    usb3RightTab.position.set(0, -0.035, 0);
    usb3Right.add(usb3RightTab);
    usb3Right.position.set(0.6, -0.45, 0.06);
    piGroup.add(usb3Right);

    // HDMI ports (black)
    const hdmiGeometry = new THREE.BoxGeometry(0.2, 0.08, 0.05);
    const hdmiMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        metalness: 0.5,
        roughness: 0.3
    });
    const hdmiLeft = new THREE.Mesh(hdmiGeometry, hdmiMaterial);
    hdmiLeft.position.set(-0.8, -0.55, 0.06); // Leftmost bottom
    piGroup.add(hdmiLeft);
    const hdmiRight = new THREE.Mesh(hdmiGeometry, hdmiMaterial);
    hdmiRight.position.set(0.8, -0.55, 0.06); // Rightmost bottom
    piGroup.add(hdmiRight);

    // Ethernet port (black)
    const ethGeometry = new THREE.BoxGeometry(0.4, 0.1, 0.05);
    const ethMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        metalness: 0.5,
        roughness: 0.3
    });
    const ethPort = new THREE.Mesh(ethGeometry, ethMaterial);
    ethPort.position.set(0, -0.6, 0.06); // Center bottom
    piGroup.add(ethPort);

    // Power jack (black cylinder)
    const powerGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.1, 8);
    const powerMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        metalness: 0.5,
        roughness: 0.3
    });
    const powerJack = new THREE.Mesh(powerGeometry, powerMaterial);
    powerJack.rotation.z = Math.PI / 2; // Lie flat
    powerJack.position.set(-0.9, 0.5, 0.06); // Left top
    piGroup.add(powerJack);

    // GPIO pins (thin strip)
    const gpioGeometry = new THREE.BoxGeometry(0.01, 0.6, 0.02);
    const gpioMaterial = new THREE.MeshStandardMaterial({
        color: 0x808080, // Gray
        metalness: 0.5,
        roughness: 0.3
    });
    const gpio = new THREE.Mesh(gpioGeometry, gpioMaterial);
    gpio.position.set(-1.0, 0, 0.06); // Left edge
    piGroup.add(gpio);

    // Optional: Add some labels or details (skip for simplicity)

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate the whole group slowly with some variation
    piGroup.rotation.y += 0.003;
    piGroup.rotation.x += 0.001;
    piGroup.rotation.z += 0.0005; // Slight z rotation for more dynamic movement

    renderer.render(scene, camera);
}

// Initialize the Three.js scene
initThree();
animate();