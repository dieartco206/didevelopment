import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import type { ViewMode3D, ApkLayerInfo } from '../../types';
import { soundFx } from '../../utils/audio';

interface HeroScene3DProps {
  viewMode: ViewMode3D;
  selectedLayerId: string | null;
  onSelectLayer: (layer: ApkLayerInfo) => void;
}

export const APK_LAYERS: ApkLayerInfo[] = [
  {
    id: 'manifest',
    name: 'AndroidManifest.xml',
    category: 'manifest',
    fileName: 'AndroidManifest.xml (Binary AXML)',
    sizeMb: 0.12,
    description: 'Root configuration binary declaring components, activities, intent filters, and strict permission models for Android OS.',
    color: '#00F0FF', // Neon Cyan
    techDetails: [
      { label: 'Format', value: 'Binary XML compiled by AAPT2' },
      { label: 'Components', value: '18 Activities, 4 Services, 3 Receivers' },
      { label: 'Exported Flags', value: 'Strict android:exported=false audit' },
      { label: 'Target SDK', value: 'API 35 (Android 15 Vanilla Ice Cream)' },
    ],
  },
  {
    id: 'dex',
    name: 'classes.dex (Dalvik Bytecode)',
    category: 'dex',
    fileName: 'classes.dex & classes2.dex',
    sizeMb: 5.84,
    description: 'R8-compiled Dalvik Executable bytecode. Minified, tree-shaken, and optimized with ProGuard dictionary obfuscation.',
    color: '#3DDC84', // Android Green
    techDetails: [
      { label: 'Method Count', value: '42,810 methods (Multidex enabled)' },
      { label: 'Optimizer', value: 'R8 Compiler in Full Mode' },
      { label: 'Shrinking', value: 'Dead code eliminated (-38% bytecode size)' },
      { label: 'ART Pre-compilation', value: 'Profile-Guided Optimization (AOT)' },
    ],
  },
  {
    id: 'native',
    name: 'lib/arm64-v8a (C++ NDK)',
    category: 'native',
    fileName: 'libvulkan_engine.so, libcrypto_vault.so',
    sizeMb: 3.42,
    description: 'Native Shared Objects compiled via Clang C++20 and CMake. Direct JNI bridge for zero-overhead Vulkan 1.3 frame pacing.',
    color: '#A855F7', // Neon Violet
    techDetails: [
      { label: 'Architecture', value: 'arm64-v8a (64-bit strictly enforced)' },
      { label: '16KB Page Size', value: 'ELF 16KB max-page-size aligned' },
      { label: 'Graphics API', value: 'Vulkan 1.3 / OpenGL ES 3.2' },
      { label: 'Compiler Flags', value: '-O3 -flto -fvisibility=hidden' },
    ],
  },
  {
    id: 'res',
    name: 'res/ & resources.arsc',
    category: 'res',
    fileName: 'resources.arsc & res/drawable-xxxhdpi',
    sizeMb: 2.15,
    description: 'Pre-indexed resource table and compressed assets. Vector drawables and WebP lossless textures with density qualifiers.',
    color: '#F59E0B', // Amber
    techDetails: [
      { label: 'Format', value: 'Binary Resource Table (resources.arsc)' },
      { label: 'Asset Compression', value: 'Lossless WebP + FlatBuffers' },
      { label: 'Localization', value: 'Multi-locale string pools' },
      { label: 'Resource Shrinking', value: 'AAPT2 unused resource stripping' },
    ],
  },
  {
    id: 'meta',
    name: 'META-INF/ (APK Signature v2/v3/v4)',
    category: 'meta',
    fileName: 'CERT.RSA, CERT.SF, MANIFEST.MF',
    sizeMb: 0.08,
    description: 'Cryptographic keystore block. Whole-file signature hashes protecting bytecode and assets from runtime tampering.',
    color: '#EF4444', // Red Security
    techDetails: [
      { label: 'Signing Scheme', value: 'v2, v3, and v4 streaming enabled' },
      { label: 'Digest Algorithm', value: 'SHA-256 with 4096-bit RSA' },
      { label: 'Rollback Protection', value: 'Key rotation lineage verified' },
      { label: 'Play Integrity', value: 'Hardware-backed keystore attestation' },
    ],
  },
];

export const HeroScene3D: React.FC<HeroScene3DProps> = ({
  viewMode,
  selectedLayerId,
  onSelectLayer,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const layerMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const chassisGroupRef = useRef<THREE.Group | null>(null);
  const pcbGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const [hoveredLayerName, setHoveredLayerName] = useState<string | null>(null);

  // Mouse interaction variables
  const mouseState = useRef({
    isDragging: false,
    prevX: 0,
    prevY: 0,
    targetRotX: 0.15,
    targetRotY: -0.3,
    rotX: 0.15,
    rotY: -0.3,
    mouseNormX: 0,
    mouseNormY: 0,
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    mouseState.current.isDragging = true;
    mouseState.current.prevX = e.clientX;
    mouseState.current.prevY = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseState.current.mouseNormX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseState.current.mouseNormY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

    if (mouseState.current.isDragging) {
      const deltaX = e.clientX - mouseState.current.prevX;
      const deltaY = e.clientY - mouseState.current.prevY;
      mouseState.current.prevX = e.clientX;
      mouseState.current.prevY = e.clientY;

      mouseState.current.targetRotY += deltaX * 0.008;
      mouseState.current.targetRotX += deltaY * 0.008;
      // Clamp vertical rotation
      mouseState.current.targetRotX = Math.max(-1.0, Math.min(1.0, mouseState.current.targetRotX));
    }
  };

  const handlePointerUp = () => {
    mouseState.current.isDragging = false;
  };

  const handleClick = useCallback(() => {
    if (!cameraRef.current || !sceneRef.current || !containerRef.current) return;
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(
      new THREE.Vector2(mouseState.current.mouseNormX, mouseState.current.mouseNormY),
      cameraRef.current
    );

    const hitObjects: THREE.Intersection[] = [];
    layerMeshesRef.current.forEach((group) => {
      raycaster.intersectObjects(group.children, true, hitObjects);
    });

    if (hitObjects.length > 0) {
      let topHit: THREE.Object3D | null = hitObjects[0].object;
      while (topHit && !topHit.userData.layerId && topHit.parent) {
        topHit = topHit.parent;
      }
      if (topHit && topHit.userData.layerId) {
        const found = APK_LAYERS.find((l) => l.id === topHit?.userData.layerId);
        if (found) {
          soundFx.playClick(900, 0.05);
          onSelectLayer(found);
        }
      }
    }
  }, [onSelectLayer]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 2.5);
    dirLight1.position.set(5, 6, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3ddc84, 2.8);
    dirLight2.position.set(-6, -4, 5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xa855f7, 3.0, 15);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // --- Master Root Group ---
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. --- Smartphone Chassis ---
    const chassisGroup = new THREE.Group();
    chassisGroupRef.current = chassisGroup;
    masterGroup.add(chassisGroup);

    // Phone Frame (Titanium rounded box)
    const phoneWidth = 2.4;
    const phoneHeight = 4.8;
    const phoneDepth = 0.22;

    const frameGeo = new THREE.BoxGeometry(phoneWidth, phoneHeight, phoneDepth);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x090e17,
      metalness: 0.9,
      roughness: 0.25,
      wireframe: false,
    });
    const phoneFrame = new THREE.Mesh(frameGeo, frameMat);
    chassisGroup.add(phoneFrame);

    // Screen Bezel & Display
    const screenGeo = new THREE.PlaneGeometry(phoneWidth - 0.14, phoneHeight - 0.24);
    
    // Dynamic Texture for Android Screen (Procedural Canvas)
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 1024;
    const ctx = screenCanvas.getContext('2d');
    if (ctx) {
      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 0, 1024);
      grad.addColorStop(0, '#040d1a');
      grad.addColorStop(0.5, '#07162c');
      grad.addColorStop(1, '#02070f');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 1024);

      // Grid lines
      ctx.strokeStyle = 'rgba(61, 220, 132, 0.12)';
      ctx.lineWidth = 1;
      for (let x = 0; x < 512; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 1024);
        ctx.stroke();
      }
      for (let y = 0; y < 1024; y += 32) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(512, y);
        ctx.stroke();
      }

      // Android 15 Status Bar
      ctx.fillStyle = '#3ddc84';
      ctx.font = 'bold 22px monospace';
      ctx.fillText('09:41', 36, 44);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '16px monospace';
      ctx.fillText('API 35 • 120Hz • ART V7', 220, 44);

      // System Header Card
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.strokeStyle = '#3ddc84';
      ctx.lineWidth = 2;
      ctx.roundRect(24, 70, 464, 180, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#3ddc84';
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText('DIDEV RUNTIME', 48, 118);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '18px monospace';
      ctx.fillText('Vulkan 1.3 Pipeline: ACTIVE', 48, 150);
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '16px monospace';
      ctx.fillText('16KB Page Alignment: PASS', 48, 180);
      ctx.fillStyle = '#a855f7';
      ctx.fillText('Dalvik JIT/AOT: Optimized', 48, 210);

      // Waveform / FPS Monitor
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i < 464; i += 8) {
        const y = 320 + Math.sin(i * 0.08) * 24 + Math.cos(i * 0.03) * 12;
        if (i === 0) ctx.moveTo(24 + i, y);
        else ctx.lineTo(24 + i, y);
      }
      ctx.stroke();

      // APK Package Signature Verified Badge
      ctx.fillStyle = 'rgba(61, 220, 132, 0.15)';
      ctx.strokeStyle = '#3ddc84';
      ctx.roundRect(24, 380, 464, 90, 12);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#3ddc84';
      ctx.font = 'bold 20px monospace';
      ctx.fillText('APK SIGNATURE SCHEME: V4', 48, 424);
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '15px monospace';
      ctx.fillText('Keystore: SHA-256 Verified', 48, 452);

      // Terminal Log simulation
      ctx.fillStyle = '#0f172a';
      ctx.roundRect(24, 500, 464, 460, 14);
      ctx.fill();
      ctx.fillStyle = '#3ddc84';
      ctx.font = '15px monospace';
      ctx.fillText('$ adb shell dumpsys gfxinfo', 40, 540);
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('Total frames rendered: 14,892', 40, 575);
      ctx.fillText('Janky frames: 0 (0.00%)', 40, 605);
      ctx.fillText('90th percentile: 6.2ms', 40, 635);
      ctx.fillText('95th percentile: 7.1ms', 40, 665);
      ctx.fillText('99th percentile: 8.0ms (120 FPS)', 40, 695);
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('NDK Memory Pool: 4.8MB RSS', 40, 740);
      ctx.fillText('Choreographer: VSYNC Locked', 40, 770);
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('Zero AI Slop • 100% Native Code', 40, 830);
    }

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      transparent: false,
    });
    const phoneScreen = new THREE.Mesh(screenGeo, screenMat);
    phoneScreen.position.z = phoneDepth / 2 + 0.002;
    chassisGroup.add(phoneScreen);

    // Camera punch hole
    const cameraRing = new THREE.Mesh(
      new THREE.RingGeometry(0.04, 0.07, 32),
      new THREE.MeshBasicMaterial({ color: 0x020617 })
    );
    cameraRing.position.set(0, phoneHeight / 2 - 0.28, phoneDepth / 2 + 0.005);
    chassisGroup.add(cameraRing);

    // 2. --- Motherboard PCB (Inside Circuit View) ---
    const pcbGroup = new THREE.Group();
    pcbGroupRef.current = pcbGroup;
    masterGroup.add(pcbGroup);
    pcbGroup.visible = false;

    // PCB Board
    const pcbMat = new THREE.MeshStandardMaterial({
      color: 0x052e16,
      roughness: 0.4,
      metalness: 0.5,
    });
    const pcbBoard = new THREE.Mesh(new THREE.BoxGeometry(phoneWidth - 0.3, phoneHeight - 0.4, 0.08), pcbMat);
    pcbGroup.add(pcbBoard);

    // CPU / Qualcomm Snapdragon / Tensor Chipset in 3D
    const cpuMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.9,
    });
    const cpuMesh = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.14), cpuMat);
    cpuMesh.position.set(0, 0.6, 0.08);
    pcbGroup.add(cpuMesh);

    // Glowing CPU Core Die
    const dieMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const dieMesh = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.16), dieMat);
    dieMesh.position.set(0, 0.6, 0.08);
    pcbGroup.add(dieMesh);

    // 3. --- Exploded 3D APK Package Layers ---
    layerMeshesRef.current.clear();

    APK_LAYERS.forEach((layer, idx) => {
      const layerGroup = new THREE.Group();
      layerGroup.userData = { layerId: layer.id };

      // Holographic Glass Plate
      const plateWidth = 2.6;
      const plateHeight = 4.2;
      const plateGeo = new THREE.PlaneGeometry(plateWidth, plateHeight);
      
      const plateMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(layer.color),
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        metalness: 0.3,
        transmission: 0.8,
        ior: 1.4,
        side: THREE.DoubleSide,
      });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.userData = { layerId: layer.id };
      layerGroup.add(plate);

      // Glowing Perimeter Wireframe Border
      const edges = new THREE.EdgesGeometry(plateGeo);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(layer.color),
        linewidth: 2,
        transparent: true,
        opacity: 0.8,
      });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      layerGroup.add(wireframe);

      // Inner Technical Graphic / Chip Circuit Lines on Plate
      const innerLineGeo = new THREE.BufferGeometry();
      const points: number[] = [];
      // Generate unique pattern per layer
      for (let p = 0; p < 12; p++) {
        const x1 = (Math.random() - 0.5) * (plateWidth - 0.4);
        const y1 = (Math.random() - 0.5) * (plateHeight - 0.6);
        const x2 = x1 + (Math.random() - 0.5) * 0.8;
        const y2 = y1;
        const y3 = y2 + (Math.random() - 0.5) * 0.6;
        points.push(x1, y1, 0.01, x2, y2, 0.01);
        points.push(x2, y2, 0.01, x2, y3, 0.01);
      }
      innerLineGeo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
      const innerLines = new THREE.LineSegments(
        innerLineGeo,
        new THREE.LineBasicMaterial({ color: new THREE.Color(layer.color), transparent: true, opacity: 0.6 })
      );
      layerGroup.add(innerLines);

      // Floating Central Data Core (Badge)
      const coreGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.04, 6);
      coreGeo.rotateX(Math.PI / 2);
      const coreMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(layer.color),
        emissive: new THREE.Color(layer.color),
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.2,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.set(0, 0, 0.03);
      core.userData = { layerId: layer.id };
      layerGroup.add(core);

      // Initial Z position in exploded layout
      const targetZ = (idx - 2) * 1.05; // -2.1, -1.05, 0, 1.05, 2.1
      layerGroup.position.set(0, 0, targetZ);

      masterGroup.add(layerGroup);
      layerMeshesRef.current.set(layer.id, layerGroup);
    });

    // 4. --- Floating Ambient Bytecode Particles ---
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x3ddc84); // Android green
    const c2 = new THREE.Color(0x00f0ff); // Cyan
    const c3 = new THREE.Color(0xa855f7); // Violet

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 12;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const rnd = Math.random();
      const chosenColor = rnd < 0.4 ? c1 : rnd < 0.75 ? c2 : c3;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    particlesRef.current = particles;
    scene.add(particles);

    // --- Animation Loop ---
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse rotation dampening
      mouseState.current.rotX += (mouseState.current.targetRotX - mouseState.current.rotX) * 0.08;
      mouseState.current.rotY += (mouseState.current.targetRotY - mouseState.current.rotY) * 0.08;

      // Subtle autonomous floating oscillation
      const floatAngle = elapsedTime * 0.7;
      const floatOffsetY = Math.sin(floatAngle) * 0.08;

      masterGroup.position.y = floatOffsetY;
      masterGroup.rotation.x = mouseState.current.rotX + Math.sin(elapsedTime * 0.5) * 0.02;
      masterGroup.rotation.y = mouseState.current.rotY + Math.cos(elapsedTime * 0.4) * 0.03;

      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.03;
        particlesRef.current.rotation.x = elapsedTime * 0.015;
      }

      // Layer hover raycasting
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(
        new THREE.Vector2(mouseState.current.mouseNormX, mouseState.current.mouseNormY),
        camera
      );

      let foundHover: string | null = null;
      layerMeshesRef.current.forEach((group, layerId) => {
        const hits = raycaster.intersectObjects(group.children, true);
        const isHovered = hits.length > 0;
        const isSelected = selectedLayerId === layerId;

        if (isHovered && !foundHover) {
          foundHover = APK_LAYERS.find((l) => l.id === layerId)?.name || null;
        }

        // Slight breathing/highlight effect
        const scaleTarget = isHovered || isSelected ? 1.05 : 1.0;
        group.scale.lerp(new THREE.Vector3(scaleTarget, scaleTarget, scaleTarget), 0.15);
      });

      setHoveredLayerName(foundHover);

      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  // Update view mode transitions smoothly
  useEffect(() => {
    soundFx.playLayerSwitch();
    const chassis = chassisGroupRef.current;
    const pcb = pcbGroupRef.current;
    const layers = layerMeshesRef.current;

    if (!chassis) return;

    if (viewMode === 'exploded') {
      chassis.visible = false;
      if (pcb) pcb.visible = false;
      layers.forEach((group, id) => {
        group.visible = true;
        const idx = APK_LAYERS.findIndex((l) => l.id === id);
        const targetZ = (idx - 2) * 1.05;
        group.position.set(0, 0, targetZ);
        // Ensure standard materials
        group.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            const mat = child.material as THREE.MeshStandardMaterial;
            if ('wireframe' in mat) mat.wireframe = false;
          }
        });
      });
    } else if (viewMode === 'chassis') {
      chassis.visible = true;
      if (pcb) pcb.visible = false;
      layers.forEach((group) => {
        group.visible = false;
      });
      chassis.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const mat = child.material as THREE.MeshStandardMaterial;
          if ('wireframe' in mat) mat.wireframe = false;
        }
      });
    } else if (viewMode === 'circuit') {
      chassis.visible = false;
      if (pcb) pcb.visible = true;
      layers.forEach((group) => {
        group.visible = false;
      });
    } else if (viewMode === 'wireframe') {
      chassis.visible = true;
      if (pcb) pcb.visible = false;
      chassis.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const mat = child.material as THREE.MeshStandardMaterial;
          if ('wireframe' in mat) mat.wireframe = true;
        }
      });
      layers.forEach((group, id) => {
        group.visible = true;
        const idx = APK_LAYERS.findIndex((l) => l.id === id);
        group.position.set(0, 0, (idx - 2) * 0.7);
        group.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            const mat = child.material as THREE.MeshStandardMaterial;
            if ('wireframe' in mat) mat.wireframe = true;
          }
        });
      });
    }
  }, [viewMode]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[540px] md:h-[620px] lg:h-[680px] cursor-grab active:cursor-grabbing select-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#080d1a]/80 to-[#02050c]/90 border border-slate-800 shadow-2xl"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClick={handleClick}
    >
      {/* High-tech HUD Overlay Elements */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC84] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3DDC84]"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-[#3DDC84] uppercase">
            3D WebGL Engine • 60 FPS
          </span>
        </div>
        <div className="text-[11px] font-mono text-slate-400">
          MODE: <span className="text-cyan-400 font-bold uppercase">{viewMode}</span>
        </div>
        {hoveredLayerName && (
          <div className="mt-1 px-2.5 py-1 bg-slate-900/90 border border-cyan-500/40 rounded text-xs font-mono text-cyan-300">
            Click to inspect: <span className="font-semibold text-white">{hoveredLayerName}</span>
          </div>
        )}
      </div>

      {/* Interactive Helper Overlay */}
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none flex items-center gap-2 px-3 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg text-[11px] font-mono text-slate-400">
        <svg className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>Drag to rotate • Click layers to inspect</span>
      </div>

      {/* Tactical Corner Crosshairs */}
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-500/40 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-500/40 pointer-events-none" />
    </div>
  );
};
