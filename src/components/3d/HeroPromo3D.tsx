import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { soundFx } from '../../utils/audio';

export type ShowcaseMode = 'combo' | 'web' | 'android';

interface HeroPromo3DProps {
  mode: ShowcaseMode;
  onChangeMode: (mode: ShowcaseMode) => void;
}

export const HeroPromo3D: React.FC<HeroPromo3DProps> = ({ mode, onChangeMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const laptopGroupRef = useRef<THREE.Group | null>(null);
  const phoneGroupRef = useRef<THREE.Group | null>(null);
  const syncBeamRef = useRef<THREE.Line | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const mouseState = useRef({
    isDragging: false,
    prevX: 0,
    prevY: 0,
    targetRotX: 0.1,
    targetRotY: -0.22,
    rotX: 0.1,
    rotY: -0.22,
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    // Only capture drag on primary button
    if (e.button !== 0) return;
    mouseState.current.isDragging = true;
    mouseState.current.prevX = e.clientX;
    mouseState.current.prevY = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (mouseState.current.isDragging) {
      const deltaX = e.clientX - mouseState.current.prevX;
      const deltaY = e.clientY - mouseState.current.prevY;
      mouseState.current.prevX = e.clientX;
      mouseState.current.prevY = e.clientY;

      mouseState.current.targetRotY += deltaX * 0.007;
      mouseState.current.targetRotX += deltaY * 0.007;
      mouseState.current.targetRotX = Math.max(-0.4, Math.min(0.5, mouseState.current.targetRotX));
    }
  };

  const handlePointerUp = () => {
    mouseState.current.isDragging = false;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    cameraRef.current = camera;

    // Adjust camera distance based on initial width
    if (width < 480) {
      camera.position.set(0, 0, 10.8);
    } else if (width < 768) {
      camera.position.set(0, 0, 9.2);
    } else {
      camera.position.set(0, 0, 7.8);
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Studio Bright Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(6, 9, 8);
    scene.add(mainLight);

    const blueRimLight = new THREE.DirectionalLight(0x2563eb, 3.8);
    blueRimLight.position.set(-6, 3, 5);
    scene.add(blueRimLight);

    const cyanGlowLight = new THREE.PointLight(0x0ea5e9, 3.2, 14);
    cyanGlowLight.position.set(0, 2, 4);
    scene.add(cyanGlowLight);

    // Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ==========================================
    // 0. --- HOLOGRAPHIC FLOOR GRID & RINGS ---
    // ==========================================
    const floorGroup = new THREE.Group();
    floorGroup.position.set(0, -1.8, 0);
    masterGroup.add(floorGroup);

    // Subtle glowing concentric rings
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x93c5fd, wireframe: true, transparent: true, opacity: 0.25 });
    const ring1 = new THREE.Mesh(new THREE.RingGeometry(1.5, 3.5, 48, 6), ringMat1);
    ring1.rotation.x = -Math.PI / 2;
    floorGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.18 });
    const ring2 = new THREE.Mesh(new THREE.RingGeometry(3.6, 5.0, 64, 4), ringMat2);
    ring2.rotation.x = -Math.PI / 2;
    floorGroup.add(ring2);

    // Floor Soft Shadow Disk
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x1e3a8a,
      transparent: true,
      opacity: 0.08,
    });
    const shadowMesh = new THREE.Mesh(new THREE.CircleGeometry(3.8, 32), shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = 0.01;
    floorGroup.add(shadowMesh);

    // ==========================================
    // 1. --- 3D LAPTOP (WEB APPLICATION) ---
    // ==========================================
    const laptopGroup = new THREE.Group();
    laptopGroupRef.current = laptopGroup;
    masterGroup.add(laptopGroup);

    const alumMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.85,
      roughness: 0.25,
    });

    const darkAlumMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.65,
      roughness: 0.45,
    });

    // Base chassis
    const baseGeo = new THREE.BoxGeometry(3.2, 0.12, 2.2);
    const baseMesh = new THREE.Mesh(baseGeo, alumMat);
    baseMesh.position.set(0, -0.6, 0);
    laptopGroup.add(baseMesh);

    // Keyboard recess
    const kbRecessGeo = new THREE.BoxGeometry(2.8, 0.02, 1.2);
    const kbMesh = new THREE.Mesh(kbRecessGeo, darkAlumMat);
    kbMesh.position.set(0, -0.53, -0.2);
    laptopGroup.add(kbMesh);

    // Trackpad
    const trackpadGeo = new THREE.BoxGeometry(1.0, 0.01, 0.65);
    const trackpadMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.75, roughness: 0.35 });
    const trackpadMesh = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpadMesh.position.set(0, -0.53, 0.65);
    laptopGroup.add(trackpadMesh);

    // Screen Lid (Tilted back)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, -0.54, -1.1);
    lidGroup.rotation.x = -Math.PI / 2.6;
    laptopGroup.add(lidGroup);

    // Screen Back Shell
    const screenBackGeo = new THREE.BoxGeometry(3.2, 2.1, 0.08);
    screenBackGeo.translate(0, 1.05, 0);
    const screenBackMesh = new THREE.Mesh(screenBackGeo, alumMat);
    lidGroup.add(screenBackMesh);

    // Screen Bezel
    const bezelGeo = new THREE.BoxGeometry(3.1, 2.0, 0.02);
    bezelGeo.translate(0, 1.05, 0.04);
    const bezelMesh = new THREE.Mesh(bezelGeo, darkAlumMat);
    lidGroup.add(bezelMesh);

    // Screen Texture: High-Performance Web Dashboard
    const webCanvas = document.createElement('canvas');
    webCanvas.width = 1024;
    webCanvas.height = 680;
    const wCtx = webCanvas.getContext('2d');
    if (wCtx) {
      wCtx.fillStyle = '#ffffff';
      wCtx.fillRect(0, 0, 1024, 680);

      // Browser Header
      wCtx.fillStyle = '#f8fafc';
      wCtx.fillRect(0, 0, 1024, 56);
      wCtx.strokeStyle = '#e2e8f0';
      wCtx.lineWidth = 1;
      wCtx.strokeRect(0, 0, 1024, 56);

      // Window dots
      wCtx.fillStyle = '#ef4444';
      wCtx.beginPath(); wCtx.arc(32, 28, 7, 0, Math.PI * 2); wCtx.fill();
      wCtx.fillStyle = '#f59e0b';
      wCtx.beginPath(); wCtx.arc(54, 28, 7, 0, Math.PI * 2); wCtx.fill();
      wCtx.fillStyle = '#22c55e';
      wCtx.beginPath(); wCtx.arc(76, 28, 7, 0, Math.PI * 2); wCtx.fill();

      // Search bar
      wCtx.fillStyle = '#ffffff';
      wCtx.strokeStyle = '#cbd5e1';
      wCtx.lineWidth = 1.5;
      wCtx.roundRect(114, 12, 540, 32, 8);
      wCtx.fill(); wCtx.stroke();
      wCtx.fillStyle = '#2563eb';
      wCtx.font = 'bold 14px monospace';
      wCtx.fillText('🔒 https://admin.bisniskita.id/dashboard', 130, 33);

      // Status Sync Badge
      wCtx.fillStyle = '#dbeafe';
      wCtx.roundRect(880, 12, 120, 32, 8);
      wCtx.fill();
      wCtx.fillStyle = '#1d4ed8';
      wCtx.font = 'bold 12px sans-serif';
      wCtx.fillText('● LIVE SYNC', 898, 33);

      // Sidebar
      wCtx.fillStyle = '#0f172a';
      wCtx.fillRect(0, 56, 230, 624);

      wCtx.fillStyle = '#ffffff';
      wCtx.font = 'bold 19px sans-serif';
      wCtx.fillText('DIDEV PORTAL', 28, 102);

      const navItems = ['📊 Dashboard', '🛒 Pesanan Masuk', '👥 Data Klien', '💳 Transaksi QRIS', '📱 Kelola APK'];
      navItems.forEach((item, i) => {
        if (i === 0) {
          wCtx.fillStyle = '#2563eb';
          wCtx.roundRect(16, 128 + i * 46, 198, 38, 8);
          wCtx.fill();
          wCtx.fillStyle = '#ffffff';
        } else {
          wCtx.fillStyle = '#94a3b8';
        }
        wCtx.font = '14px sans-serif';
        wCtx.fillText(item, 32, 153 + i * 46);
      });

      // Main Content Area
      wCtx.fillStyle = '#f8fafc';
      wCtx.fillRect(230, 56, 794, 624);

      // Stat Cards
      const stats = [
        { label: 'Penjualan Hari Ini', val: 'Rp 48.250.000', change: '+32.4% vs kemarin' },
        { label: 'Order APK Aktif', val: '1.428 Transaksi', change: 'Real-time update' },
        { label: 'Kecepatan Respon', val: '0.45 Detik', change: '99.98% SLA Server' },
      ];
      stats.forEach((s, i) => {
        wCtx.fillStyle = '#ffffff';
        wCtx.strokeStyle = '#e2e8f0';
        wCtx.lineWidth = 1.5;
        wCtx.roundRect(256 + i * 250, 84, 234, 114, 14);
        wCtx.fill(); wCtx.stroke();

        wCtx.fillStyle = '#64748b';
        wCtx.font = '13px sans-serif';
        wCtx.fillText(s.label, 274, 116);

        wCtx.fillStyle = '#0f172a';
        wCtx.font = 'bold 22px sans-serif';
        wCtx.fillText(s.val, 274, 152);

        wCtx.fillStyle = '#2563eb';
        wCtx.font = 'bold 12px sans-serif';
        wCtx.fillText(s.change, 274, 180);
      });

      // Sales Chart Box
      wCtx.fillStyle = '#ffffff';
      wCtx.strokeStyle = '#e2e8f0';
      wCtx.lineWidth = 1.5;
      wCtx.roundRect(256, 222, 734, 260, 14);
      wCtx.fill(); wCtx.stroke();

      wCtx.fillStyle = '#0f172a';
      wCtx.font = 'bold 17px sans-serif';
      wCtx.fillText('Pertumbuhan Transaksi Web & Mobile (Bulan Berjalan)', 280, 258);

      // Spline line
      wCtx.strokeStyle = '#2563eb';
      wCtx.lineWidth = 4;
      wCtx.beginPath();
      const points = [130, 150, 100, 170, 120, 80, 140, 60, 95, 45];
      points.forEach((py, pi) => {
        const px = 280 + pi * 75;
        const actualY = 250 + py;
        if (pi === 0) wCtx.moveTo(px, actualY);
        else wCtx.lineTo(px, actualY);
      });
      wCtx.stroke();

      // Notification Banner
      wCtx.fillStyle = 'rgba(37, 99, 235, 0.08)';
      wCtx.strokeStyle = '#2563eb';
      wCtx.lineWidth = 1.5;
      wCtx.roundRect(256, 504, 734, 140, 14);
      wCtx.fill(); wCtx.stroke();

      wCtx.fillStyle = '#1d4ed8';
      wCtx.font = 'bold 18px sans-serif';
      wCtx.fillText('🚀 Sistem Siap Pakai & Langsung Terima Transaksi Bisnis', 280, 552);
      wCtx.fillStyle = '#475569';
      wCtx.font = '14px sans-serif';
      wCtx.fillText('Otomatis cetak struk Bluetooth, sinkron database cloud, dan tanpa potongan sewa bulanan.', 280, 588);
    }

    const webTexture = new THREE.CanvasTexture(webCanvas);
    const screenGeo = new THREE.PlaneGeometry(2.9, 1.8);
    screenGeo.translate(0, 1.05, 0.052);
    const screenMesh = new THREE.Mesh(screenGeo, new THREE.MeshBasicMaterial({ map: webTexture }));
    lidGroup.add(screenMesh);

    // ==========================================
    // 2. --- 3D SMARTPHONE (ANDROID APK) ---
    // ==========================================
    const phoneGroup = new THREE.Group();
    phoneGroupRef.current = phoneGroup;
    masterGroup.add(phoneGroup);

    const phoneWidth = 1.55;
    const phoneHeight = 3.25;
    const phoneDepth = 0.15;

    const phoneFrameGeo = new THREE.BoxGeometry(phoneWidth, phoneHeight, phoneDepth);
    const phoneMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.92,
      roughness: 0.22,
    });
    const phoneFrame = new THREE.Mesh(phoneFrameGeo, phoneMat);
    phoneGroup.add(phoneFrame);

    // Phone Screen
    const phoneCanvas = document.createElement('canvas');
    phoneCanvas.width = 480;
    phoneCanvas.height = 960;
    const pCtx = phoneCanvas.getContext('2d');
    if (pCtx) {
      pCtx.fillStyle = '#ffffff';
      pCtx.fillRect(0, 0, 480, 960);

      // Top Header
      pCtx.fillStyle = '#2563eb';
      pCtx.fillRect(0, 0, 480, 75);
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 22px monospace';
      pCtx.fillText('09:41', 28, 48);
      pCtx.font = '16px monospace';
      pCtx.fillText('5G • 100%', 365, 48);

      pCtx.fillStyle = '#1d4ed8';
      pCtx.fillRect(0, 75, 480, 95);
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 24px sans-serif';
      pCtx.fillText('Aplikasi Android Klien', 28, 136);

      // APK Ready Status
      pCtx.fillStyle = '#eff6ff';
      pCtx.strokeStyle = '#bfdbfe';
      pCtx.lineWidth = 2;
      pCtx.roundRect(26, 190, 428, 92, 16);
      pCtx.fill(); pCtx.stroke();
      pCtx.fillStyle = '#1e40af';
      pCtx.font = 'bold 17px monospace';
      pCtx.fillText('STATUS: APK RELEASE TERVERIFIKASI', 44, 230);
      pCtx.fillStyle = '#64748b';
      pCtx.font = '13px monospace';
      pCtx.fillText('Direct Install (.apk) & Google Play Ready', 44, 260);

      // Grid of 4 Native Hardware Modules
      const modules = [
        { title: 'Kasir POS', sub: 'Cetak Bluetooth' },
        { title: 'Absensi GPS', sub: 'Anti Fake Location' },
        { title: 'Scan Barcode', sub: 'Kamera HP Otomatis' },
        { title: 'Katalog Cepat', sub: 'Kirim Invoice WA' },
      ];
      modules.forEach((mod, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const x = 26 + col * 220;
        const y = 305 + row * 155;

        pCtx.fillStyle = '#f8fafc';
        pCtx.strokeStyle = '#e2e8f0';
        pCtx.lineWidth = 1.5;
        pCtx.roundRect(x, y, 208, 140, 18);
        pCtx.fill(); pCtx.stroke();

        pCtx.fillStyle = '#2563eb';
        pCtx.font = 'bold 18px sans-serif';
        pCtx.fillText(mod.title, x + 20, y + 60);

        pCtx.fillStyle = '#64748b';
        pCtx.font = '13px sans-serif';
        pCtx.fillText(mod.sub, x + 20, y + 90);
      });

      // Bottom Primary Button
      pCtx.fillStyle = '#2563eb';
      pCtx.roundRect(26, 650, 428, 70, 18);
      pCtx.fill();
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 20px sans-serif';
      pCtx.fillText('DOWNLOAD FILE APK (.APK)', 74, 694);

      // Bottom Nav
      pCtx.fillStyle = '#f1f5f9';
      pCtx.fillRect(0, 875, 480, 85);
      pCtx.fillStyle = '#2563eb';
      pCtx.font = 'bold 16px sans-serif';
      pCtx.fillText('Beranda • Transaksi • Akun Klien', 105, 925);
    }

    const phoneTexture = new THREE.CanvasTexture(phoneCanvas);
    const pScreenGeo = new THREE.PlaneGeometry(phoneWidth - 0.1, phoneHeight - 0.16);
    const pScreenMesh = new THREE.Mesh(pScreenGeo, new THREE.MeshBasicMaterial({ map: phoneTexture }));
    pScreenMesh.position.z = phoneDepth / 2 + 0.002;
    phoneGroup.add(pScreenMesh);

    // Camera punch hole
    const camRing = new THREE.Mesh(
      new THREE.RingGeometry(0.03, 0.05, 32),
      new THREE.MeshBasicMaterial({ color: 0x0f172a })
    );
    camRing.position.set(0, phoneHeight / 2 - 0.18, phoneDepth / 2 + 0.005);
    phoneGroup.add(camRing);

    // ==========================================
    // 3. --- REAL-TIME DATA SYNC BEAM (SPLINE) ---
    // ==========================================
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.1, 0.2, 0),
      new THREE.Vector3(0.8, 1.2, 0.5),
      new THREE.Vector3(1.4, 0.4, 0.7)
    );
    const beamGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(30));
    const beamMat = new THREE.LineDashedMaterial({
      color: 0x38bdf8,
      dashSize: 0.18,
      gapSize: 0.08,
      linewidth: 2,
    });
    const syncBeam = new THREE.Line(beamGeo, beamMat);
    syncBeam.computeLineDistances();
    syncBeamRef.current = syncBeam;
    masterGroup.add(syncBeam);

    // ==========================================
    // 4. --- FLOATING BADGE CHIPS (3D) ---
    // ==========================================
    const createChip = (text: string, x: number, y: number, z: number, color = '#2563eb') => {
      const chipGroup = new THREE.Group();
      chipGroup.position.set(x, y, z);

      const canvas = document.createElement('canvas');
      canvas.width = 340;
      canvas.height = 96;
      const c = canvas.getContext('2d');
      if (c) {
        c.fillStyle = '#ffffff';
        c.strokeStyle = color;
        c.lineWidth = 4;
        c.roundRect(4, 4, 332, 88, 22);
        c.fill(); c.stroke();

        c.fillStyle = color;
        c.font = 'bold 24px monospace';
        c.fillText(text, 22, 56);
      }
      const tex = new THREE.CanvasTexture(canvas);
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.25, 0.36),
        new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, transparent: true })
      );
      chipGroup.add(mesh);
      masterGroup.add(chipGroup);
      return chipGroup;
    };

    const chipWeb = createChip('WEB ADMIN', -2.6, 1.35, 0.5);
    const chipApk = createChip('ANDROID APK', 2.6, 1.7, 1.1);
    const chipCloud = createChip('100% SOURCE CODE', 0.1, -1.6, 0.6);

    // Initial Layout positioning
    const applyResponsiveLayout = () => {
      if (!containerRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;

      if (w < 480) {
        cameraRef.current.position.set(0, 0, 10.8);
        laptopGroup.position.set(0, 0.9, 0);
        laptopGroup.scale.set(0.85, 0.85, 0.85);
        phoneGroup.position.set(0.6, -1.4, 0.8);
        phoneGroup.scale.set(0.85, 0.85, 0.85);
        chipWeb.position.set(-1.8, 1.9, 0.5);
        chipApk.position.set(1.6, -0.4, 1.2);
        chipCloud.position.set(-0.2, -2.4, 0.8);
        syncBeam.visible = false;
      } else if (w < 768) {
        cameraRef.current.position.set(0, 0, 9.2);
        laptopGroup.position.set(-0.8, -0.1, 0);
        laptopGroup.scale.set(0.9, 0.9, 0.9);
        phoneGroup.position.set(1.5, 0.1, 0.8);
        phoneGroup.scale.set(0.9, 0.9, 0.9);
        chipWeb.position.set(-2.2, 1.3, 0.5);
        chipApk.position.set(2.4, 1.5, 1.1);
        chipCloud.position.set(0.1, -1.6, 0.6);
        syncBeam.visible = true;
      } else {
        cameraRef.current.position.set(0, 0, 7.8);
        laptopGroup.position.set(-1.1, -0.2, 0);
        laptopGroup.scale.set(1, 1, 1);
        phoneGroup.position.set(1.9, 0.1, 0.8);
        phoneGroup.scale.set(1, 1, 1);
        chipWeb.position.set(-2.6, 1.35, 0.5);
        chipApk.position.set(2.6, 1.7, 1.1);
        chipCloud.position.set(0.1, -1.6, 0.6);
        syncBeam.visible = true;
      }
    };

    applyResponsiveLayout();

    // ==========================================
    // 5. --- ANIMATION LOOP ---
    // ==========================================
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth mouse rotation dampening
      mouseState.current.rotX += (mouseState.current.targetRotX - mouseState.current.rotX) * 0.08;
      mouseState.current.rotY += (mouseState.current.targetRotY - mouseState.current.rotY) * 0.08;

      masterGroup.rotation.x = mouseState.current.rotX + Math.sin(time * 0.6) * 0.02;
      masterGroup.rotation.y = mouseState.current.rotY + Math.cos(time * 0.5) * 0.02;

      // Subtle float oscillations
      laptopGroup.position.y += Math.sin(time * 1.0) * 0.0015;
      phoneGroup.position.y += Math.sin(time * 1.0 + 1.2) * 0.002;

      chipWeb.position.y += Math.sin(time * 1.2) * 0.002;
      chipApk.position.y += Math.cos(time * 1.1) * 0.002;

      // Rotate floor rings gently
      ring1.rotation.z = time * 0.05;
      ring2.rotation.z = -time * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
      applyResponsiveLayout();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  // Update view mode focus smoothly
  useEffect(() => {
    soundFx.playLayerSwitch();
    const laptop = laptopGroupRef.current;
    const phone = phoneGroupRef.current;
    const beam = syncBeamRef.current;
    if (!laptop || !phone) return;

    const w = containerRef.current?.clientWidth || 800;

    if (mode === 'combo') {
      laptop.visible = true;
      phone.visible = true;
      if (beam) beam.visible = w >= 640;
      if (w < 480) {
        laptop.position.set(0, 0.9, 0);
        phone.position.set(0.6, -1.4, 0.8);
      } else {
        laptop.position.set(-1.1, -0.2, 0);
        phone.position.set(1.9, 0.1, 0.8);
      }
      mouseState.current.targetRotY = -0.22;
      mouseState.current.targetRotX = 0.1;
    } else if (mode === 'web') {
      laptop.visible = true;
      phone.visible = false;
      if (beam) beam.visible = false;
      laptop.position.set(0, -0.1, 0);
      mouseState.current.targetRotY = 0;
      mouseState.current.targetRotX = 0.12;
    } else if (mode === 'android') {
      laptop.visible = false;
      phone.visible = true;
      if (beam) beam.visible = false;
      phone.position.set(0, 0, 0);
      mouseState.current.targetRotY = 0;
      mouseState.current.targetRotX = 0.05;
    }
  }, [mode]);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-slate-100/70 border border-blue-200/80 shadow-[0_16px_50px_-12px_rgba(37,99,235,0.15)]">
      {/* Decorative corner brackets */}
      <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-blue-600/60 pointer-events-none z-20" />
      <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-blue-600/60 pointer-events-none z-20" />
      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-blue-600/60 pointer-events-none z-20" />
      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-blue-600/60 pointer-events-none z-20" />

      {/* Top Controls Bar (Clean Responsive Layout) */}
      <div className="relative z-20 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-100/80 bg-white/80 backdrop-blur-md">
        {/* HUD Info */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="text-[11px] font-mono font-bold tracking-wider text-blue-800 uppercase">
            3D DUAL-DEVICE SHOWCASE
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold">
            {mode.toUpperCase()}
          </span>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 self-start sm:self-auto">
          <button
            onClick={() => onChangeMode('combo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              mode === 'combo' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            Web + APK
          </button>
          <button
            onClick={() => onChangeMode('web')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              mode === 'web' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            Web
          </button>
          <button
            onClick={() => onChangeMode('android')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              mode === 'android' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            APK
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] cursor-grab active:cursor-grabbing select-none relative"
        style={{ touchAction: 'pan-y' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Drag Hint on Bottom */}
        <div className="absolute bottom-3 right-3 z-10 pointer-events-none flex items-center gap-2 px-2.5 py-1 bg-white/90 border border-slate-200 rounded-lg text-[10px] font-mono text-slate-600 shadow-xs backdrop-blur-xs">
          <svg className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '6s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Drag untuk memutar 3D</span>
        </div>
      </div>
    </div>
  );
};
