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
  const animFrameRef = useRef<number | null>(null);

  const mouseState = useRef({
    isDragging: false,
    prevX: 0,
    prevY: 0,
    targetRotX: 0.12,
    targetRotY: -0.25,
    rotX: 0.12,
    rotY: -0.25,
  });

  const handlePointerDown = (e: React.PointerEvent) => {
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
      mouseState.current.targetRotX = Math.max(-0.5, Math.min(0.6, mouseState.current.targetRotX));
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
    camera.position.set(0, 0, 7.8);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Studio Bright Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
    mainLight.position.set(5, 8, 7);
    scene.add(mainLight);

    const blueRimLight = new THREE.DirectionalLight(0x2563eb, 3.5);
    blueRimLight.position.set(-6, 3, 4);
    scene.add(blueRimLight);

    const skyLight = new THREE.PointLight(0x0ea5e9, 3.0, 12);
    skyLight.position.set(0, 3, 3);
    scene.add(skyLight);

    // Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ==========================================
    // 1. --- 3D LAPTOP (WEB DEVELOPMENT) ---
    // ==========================================
    const laptopGroup = new THREE.Group();
    laptopGroupRef.current = laptopGroup;
    masterGroup.add(laptopGroup);
    laptopGroup.position.set(-1.1, -0.2, 0);

    const alumMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0, // Silver Aluminum
      metalness: 0.8,
      roughness: 0.3,
    });

    const darkAlumMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.6,
      roughness: 0.5,
    });

    // Base chassis (keyboard deck)
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
    const trackpadMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.7, roughness: 0.4 });
    const trackpadMesh = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpadMesh.position.set(0, -0.53, 0.65);
    laptopGroup.add(trackpadMesh);

    // Screen Lid (Tilted back ~110 degrees)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, -0.54, -1.1); // Hinge position
    lidGroup.rotation.x = -Math.PI / 2.6; // Angle
    laptopGroup.add(lidGroup);

    // Screen Back Shell
    const screenBackGeo = new THREE.BoxGeometry(3.2, 2.1, 0.08);
    screenBackGeo.translate(0, 1.05, 0);
    const screenBackMesh = new THREE.Mesh(screenBackGeo, alumMat);
    lidGroup.add(screenBackMesh);

    // Bezel
    const bezelGeo = new THREE.BoxGeometry(3.1, 2.0, 0.02);
    bezelGeo.translate(0, 1.05, 0.04);
    const bezelMesh = new THREE.Mesh(bezelGeo, darkAlumMat);
    lidGroup.add(bezelMesh);

    // Screen Texture (Clean Modern Web Application Dashboard)
    const webCanvas = document.createElement('canvas');
    webCanvas.width = 1024;
    webCanvas.height = 680;
    const wCtx = webCanvas.getContext('2d');
    if (wCtx) {
      // White browser background
      wCtx.fillStyle = '#ffffff';
      wCtx.fillRect(0, 0, 1024, 680);

      // Browser Header bar
      wCtx.fillStyle = '#f1f5f9';
      wCtx.fillRect(0, 0, 1024, 52);
      wCtx.fillStyle = '#ef4444';
      wCtx.beginPath(); wCtx.arc(30, 26, 7, 0, Math.PI * 2); wCtx.fill();
      wCtx.fillStyle = '#f59e0b';
      wCtx.beginPath(); wCtx.arc(52, 26, 7, 0, Math.PI * 2); wCtx.fill();
      wCtx.fillStyle = '#22c55e';
      wCtx.beginPath(); wCtx.arc(74, 26, 7, 0, Math.PI * 2); wCtx.fill();

      // URL bar
      wCtx.fillStyle = '#ffffff';
      wCtx.strokeStyle = '#e2e8f0';
      wCtx.lineWidth = 1.5;
      wCtx.roundRect(110, 10, 500, 32, 8);
      wCtx.fill(); wCtx.stroke();
      wCtx.fillStyle = '#2563eb';
      wCtx.font = 'bold 15px monospace';
      wCtx.fillText('🔒 https://bisnis-anda.com/dashboard', 126, 31);

      // Sidebar
      wCtx.fillStyle = '#0f172a';
      wCtx.fillRect(0, 52, 220, 628);

      wCtx.fillStyle = '#ffffff';
      wCtx.font = 'bold 18px sans-serif';
      wCtx.fillText('ADMIN WEB', 30, 95);

      const navItems = ['📊 Dashboard', '🛒 Pesanan Online', '👥 Pelanggan', '💳 Transaksi QRIS', '⚙️ Pengaturan'];
      navItems.forEach((item, i) => {
        if (i === 0) {
          wCtx.fillStyle = '#2563eb';
          wCtx.roundRect(16, 120 + i * 44, 188, 36, 8);
          wCtx.fill();
          wCtx.fillStyle = '#ffffff';
        } else {
          wCtx.fillStyle = '#94a3b8';
        }
        wCtx.font = '14px sans-serif';
        wCtx.fillText(item, 30, 144 + i * 44);
      });

      // Main Content Area
      wCtx.fillStyle = '#f8fafc';
      wCtx.fillRect(220, 52, 804, 628);

      // Stat Cards
      const stats = [
        { label: 'Total Penjualan', val: 'Rp 148.500.000', change: '+24.5%' },
        { label: 'Pesanan Aktif', val: '1.240 Order', change: '+18.2%' },
        { label: 'Tingkat Konversi', val: '4.82%', change: '+1.4%' },
      ];
      stats.forEach((s, i) => {
        wCtx.fillStyle = '#ffffff';
        wCtx.strokeStyle = '#e2e8f0';
        wCtx.roundRect(248 + i * 252, 80, 236, 110, 12);
        wCtx.fill(); wCtx.stroke();

        wCtx.fillStyle = '#64748b';
        wCtx.font = '13px sans-serif';
        wCtx.fillText(s.label, 266, 112);

        wCtx.fillStyle = '#0f172a';
        wCtx.font = 'bold 20px sans-serif';
        wCtx.fillText(s.val, 266, 146);

        wCtx.fillStyle = '#2563eb';
        wCtx.font = 'bold 13px sans-serif';
        wCtx.fillText(s.change, 266, 172);
      });

      // Large Chart Area
      wCtx.fillStyle = '#ffffff';
      wCtx.strokeStyle = '#e2e8f0';
      wCtx.roundRect(248, 214, 740, 260, 12);
      wCtx.fill(); wCtx.stroke();

      wCtx.fillStyle = '#0f172a';
      wCtx.font = 'bold 16px sans-serif';
      wCtx.fillText('Grafik Pertumbuhan Penjualan Real-time', 272, 248);

      // Draw Spline Waveform
      wCtx.strokeStyle = '#2563eb';
      wCtx.lineWidth = 3.5;
      wCtx.beginPath();
      const points = [140, 160, 110, 180, 130, 90, 150, 70, 110, 60];
      points.forEach((py, pi) => {
        const px = 272 + pi * 76;
        const actualY = 240 + py;
        if (pi === 0) wCtx.moveTo(px, actualY);
        else wCtx.lineTo(px, actualY);
      });
      wCtx.stroke();

      // CTA Banner
      wCtx.fillStyle = 'rgba(37, 99, 235, 0.08)';
      wCtx.strokeStyle = '#2563eb';
      wCtx.roundRect(248, 498, 740, 140, 12);
      wCtx.fill(); wCtx.stroke();

      wCtx.fillStyle = '#1e3a8a';
      wCtx.font = 'bold 18px sans-serif';
      wCtx.fillText('🚀 Website Bisnis Siap Tayang & Terintegrasi Sistem APK', 274, 545);
      wCtx.fillStyle = '#475569';
      wCtx.font = '14px sans-serif';
      wCtx.fillText('SEO Friendly, Kecepatan Loading 0.5s, Desain Eksklusif, dan Siap Menerima Pembayaran.', 274, 580);
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
    phoneGroup.position.set(1.9, 0.1, 0.8);
    phoneGroup.rotation.y = -0.35;

    // Titanium Dark Navy Phone Frame
    const phoneWidth = 1.6;
    const phoneHeight = 3.3;
    const phoneDepth = 0.16;

    const phoneFrameGeo = new THREE.BoxGeometry(phoneWidth, phoneHeight, phoneDepth);
    const phoneMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Deep Navy
      metalness: 0.9,
      roughness: 0.25,
    });
    const phoneFrame = new THREE.Mesh(phoneFrameGeo, phoneMat);
    phoneGroup.add(phoneFrame);

    // Phone Screen
    const phoneCanvas = document.createElement('canvas');
    phoneCanvas.width = 480;
    phoneCanvas.height = 960;
    const pCtx = phoneCanvas.getContext('2d');
    if (pCtx) {
      // Light background
      pCtx.fillStyle = '#ffffff';
      pCtx.fillRect(0, 0, 480, 960);

      // Top Status Bar
      pCtx.fillStyle = '#2563eb';
      pCtx.fillRect(0, 0, 480, 72);
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 22px monospace';
      pCtx.fillText('09:41', 30, 46);
      pCtx.font = '16px monospace';
      pCtx.fillText('5G • 100%', 360, 46);

      // App Header
      pCtx.fillStyle = '#1d4ed8';
      pCtx.fillRect(0, 72, 480, 100);
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 24px sans-serif';
      pCtx.fillText('Aplikasi Android Klien', 30, 134);

      // Android APK Badge
      pCtx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      pCtx.roundRect(30, 192, 420, 90, 14);
      pCtx.fill();
      pCtx.fillStyle = '#1e3a8a';
      pCtx.font = 'bold 18px monospace';
      pCtx.fillText('STATUS: APK TERINSTAL LOKAL', 50, 230);
      pCtx.fillStyle = '#475569';
      pCtx.font = '14px monospace';
      pCtx.fillText('Bisa Direct Install / Google Play Store', 50, 260);

      // Feature Icons Grid
      const features = [
        { title: 'Absensi GPS', desc: 'Face Recognition' },
        { title: 'Kasir POS', desc: 'Cetak Bluetooth' },
        { title: 'Notifikasi WA', desc: 'Kirim Invoice' },
        { title: 'Katalog Produk', desc: 'Order Cepat' },
      ];
      features.forEach((f, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const x = 30 + col * 215;
        const y = 305 + row * 150;

        pCtx.fillStyle = '#f8fafc';
        pCtx.strokeStyle = '#e2e8f0';
        pCtx.lineWidth = 1.5;
        pCtx.roundRect(x, y, 205, 135, 16);
        pCtx.fill(); pCtx.stroke();

        pCtx.fillStyle = '#2563eb';
        pCtx.font = 'bold 17px sans-serif';
        pCtx.fillText(f.title, x + 20, y + 55);

        pCtx.fillStyle = '#64748b';
        pCtx.font = '13px sans-serif';
        pCtx.fillText(f.desc, x + 20, y + 85);
      });

      // Bottom Action Button
      pCtx.fillStyle = '#2563eb';
      pCtx.roundRect(30, 640, 420, 68, 16);
      pCtx.fill();
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 20px sans-serif';
      pCtx.fillText('DOWNLOAD FILE APK (.APK)', 80, 682);

      // Bottom Nav bar
      pCtx.fillStyle = '#f1f5f9';
      pCtx.fillRect(0, 870, 480, 90);
      pCtx.fillStyle = '#2563eb';
      pCtx.font = 'bold 16px sans-serif';
      pCtx.fillText('Beranda • Transaksi • Akun Klien', 110, 922);
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
    // 3. --- FLOATING BADGE ORBITALS (3D CHIPS) ---
    // ==========================================
    const createChip = (text: string, x: number, y: number, z: number, color = '#2563eb') => {
      const chipGroup = new THREE.Group();
      chipGroup.position.set(x, y, z);

      const canvas = document.createElement('canvas');
      canvas.width = 320;
      canvas.height = 100;
      const c = canvas.getContext('2d');
      if (c) {
        c.fillStyle = '#ffffff';
        c.strokeStyle = color;
        c.lineWidth = 4;
        c.roundRect(4, 4, 312, 92, 24);
        c.fill(); c.stroke();

        c.fillStyle = color;
        c.font = 'bold 26px monospace';
        c.fillText(text, 24, 58);
      }
      const tex = new THREE.CanvasTexture(canvas);
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.38),
        new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, transparent: true })
      );
      chipGroup.add(mesh);
      masterGroup.add(chipGroup);
      return chipGroup;
    };

    const chipWeb = createChip('WEB ADMIN', -2.8, 1.4, 0.5);
    const chipApk = createChip('ANDROID APK', 2.8, 1.8, 1.2);
    const chipCloud = createChip('CLOUD SERVER', 0.2, -1.6, 0.6);

    // ==========================================
    // 4. --- ANIMATION LOOP ---
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
      laptopGroup.position.y = -0.2 + Math.sin(time * 0.9) * 0.06;
      phoneGroup.position.y = 0.1 + Math.sin(time * 0.9 + 1.2) * 0.09;

      chipWeb.position.y = 1.4 + Math.sin(time * 1.2) * 0.08;
      chipApk.position.y = 1.8 + Math.cos(time * 1.1) * 0.08;
      chipCloud.position.y = -1.6 + Math.sin(time * 1.0) * 0.06;

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
    if (!laptop || !phone) return;

    if (mode === 'combo') {
      laptop.visible = true;
      phone.visible = true;
      laptop.position.set(-1.1, -0.2, 0);
      phone.position.set(1.9, 0.1, 0.8);
      mouseState.current.targetRotY = -0.25;
      mouseState.current.targetRotX = 0.12;
    } else if (mode === 'web') {
      laptop.visible = true;
      phone.visible = false;
      laptop.position.set(0, -0.1, 0);
      mouseState.current.targetRotY = 0;
      mouseState.current.targetRotX = 0.15;
    } else if (mode === 'android') {
      laptop.visible = false;
      phone.visible = true;
      phone.position.set(0, 0, 0);
      mouseState.current.targetRotY = 0;
      mouseState.current.targetRotX = 0.05;
    }
  }, [mode]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] md:h-[600px] lg:h-[640px] cursor-grab active:cursor-grabbing select-none overflow-hidden rounded-3xl bg-gradient-to-b from-white/95 via-blue-50/40 to-slate-100/60 border border-slate-200 shadow-xl"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* Top HUD Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-blue-700 uppercase">
            3D DUAL-DEVICE SHOWCASE
          </span>
        </div>
        <div className="text-[11px] font-mono text-slate-500">
          MODE: <span className="text-blue-600 font-bold uppercase">{mode} VIEW</span>
        </div>
      </div>

      {/* Mode Switcher Buttons */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1 p-1 bg-white/95 border border-slate-200 rounded-xl shadow-xs backdrop-blur-md">
        <button
          onClick={() => onChangeMode('combo')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            mode === 'combo' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
          }`}
        >
          Web + APK
        </button>
        <button
          onClick={() => onChangeMode('web')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            mode === 'web' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
          }`}
        >
          Website Only
        </button>
        <button
          onClick={() => onChangeMode('android')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            mode === 'android' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
          }`}
        >
          Android APK Only
        </button>
      </div>

      {/* Drag Hint */}
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none flex items-center gap-2 px-3 py-1.5 bg-white/90 border border-slate-200 shadow-sm rounded-lg text-[11px] font-mono text-slate-600">
        <svg className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '6s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>Geser mouse untuk memutar sudut pandang 3D</span>
      </div>

      {/* Decorative corner markers */}
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-400/50 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blue-400/50 pointer-events-none" />
    </div>
  );
};
