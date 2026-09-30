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
  const chipWebRef = useRef<THREE.Group | null>(null);
  const chipApkRef = useRef<THREE.Group | null>(null);
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
    if (e.button !== 0 && e.pointerType === 'mouse') return;
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
    camera.position.set(0, 0, width < 480 ? 8.2 : width < 768 ? 8.8 : 7.8);
    cameraRef.current = camera;

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

    // Floor Soft Shadow
    const floorGroup = new THREE.Group();
    floorGroup.position.set(0, -1.8, 0);
    masterGroup.add(floorGroup);

    const shadowMat = new THREE.MeshBasicMaterial({ color: 0x1e3a8a, transparent: true, opacity: 0.08 });
    const shadowMesh = new THREE.Mesh(new THREE.CircleGeometry(3.5, 32), shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    floorGroup.add(shadowMesh);

    // Concentric wireframe floor rings
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x93c5fd, wireframe: true, transparent: true, opacity: 0.25 });
    const ring1 = new THREE.Mesh(new THREE.RingGeometry(1.5, 3.2, 40, 4), ringMat1);
    ring1.rotation.x = -Math.PI / 2;
    floorGroup.add(ring1);

    // ==========================================
    // 1. --- 3D LAPTOP ---
    // ==========================================
    const laptopGroup = new THREE.Group();
    laptopGroupRef.current = laptopGroup;
    masterGroup.add(laptopGroup);

    const alumMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85, roughness: 0.25 });
    const darkAlumMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.65, roughness: 0.45 });

    // Chassis base
    const baseMesh = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.12, 2.2), alumMat);
    baseMesh.position.set(0, -0.6, 0);
    laptopGroup.add(baseMesh);

    // Keyboard & trackpad
    const kbMesh = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.02, 1.2), darkAlumMat);
    kbMesh.position.set(0, -0.53, -0.2);
    laptopGroup.add(kbMesh);

    const trackpadMesh = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.01, 0.65), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.75, roughness: 0.35 }));
    trackpadMesh.position.set(0, -0.53, 0.65);
    laptopGroup.add(trackpadMesh);

    // Screen Lid
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, -0.54, -1.1);
    lidGroup.rotation.x = -Math.PI / 2.6;
    laptopGroup.add(lidGroup);

    const screenBackGeo = new THREE.BoxGeometry(3.2, 2.1, 0.08);
    screenBackGeo.translate(0, 1.05, 0);
    lidGroup.add(new THREE.Mesh(screenBackGeo, alumMat));

    const bezelGeo = new THREE.BoxGeometry(3.1, 2.0, 0.02);
    bezelGeo.translate(0, 1.05, 0.04);
    lidGroup.add(new THREE.Mesh(bezelGeo, darkAlumMat));

    // Screen Texture
    const webCanvas = document.createElement('canvas');
    webCanvas.width = 1024;
    webCanvas.height = 680;
    const wCtx = webCanvas.getContext('2d');
    if (wCtx) {
      wCtx.fillStyle = '#ffffff';
      wCtx.fillRect(0, 0, 1024, 680);

      // Header bar
      wCtx.fillStyle = '#f8fafc';
      wCtx.fillRect(0, 0, 1024, 56);
      wCtx.strokeStyle = '#e2e8f0';
      wCtx.lineWidth = 1;
      wCtx.strokeRect(0, 0, 1024, 56);

      wCtx.fillStyle = '#ef4444'; wCtx.beginPath(); wCtx.arc(32, 28, 7, 0, Math.PI * 2); wCtx.fill();
      wCtx.fillStyle = '#f59e0b'; wCtx.beginPath(); wCtx.arc(54, 28, 7, 0, Math.PI * 2); wCtx.fill();
      wCtx.fillStyle = '#22c55e'; wCtx.beginPath(); wCtx.arc(76, 28, 7, 0, Math.PI * 2); wCtx.fill();

      wCtx.fillStyle = '#ffffff';
      wCtx.strokeStyle = '#cbd5e1';
      wCtx.lineWidth = 1.5;
      wCtx.roundRect(114, 12, 540, 32, 8);
      wCtx.fill(); wCtx.stroke();
      wCtx.fillStyle = '#2563eb';
      wCtx.font = 'bold 15px monospace';
      wCtx.fillText('🔒 https://admin.bisnis-anda.id', 130, 34);

      // Sidebar
      wCtx.fillStyle = '#0f172a';
      wCtx.fillRect(0, 56, 230, 624);
      wCtx.fillStyle = '#ffffff';
      wCtx.font = 'bold 20px sans-serif';
      wCtx.fillText('ADMIN PORTAL', 28, 102);

      const navItems = ['📊 Dashboard', '🛒 Pesanan Online', '👥 Pelanggan', '💳 Transaksi QRIS'];
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

      // Content
      wCtx.fillStyle = '#f8fafc';
      wCtx.fillRect(230, 56, 794, 624);

      // Stat Card
      wCtx.fillStyle = '#ffffff';
      wCtx.strokeStyle = '#e2e8f0';
      wCtx.roundRect(256, 84, 734, 130, 14);
      wCtx.fill(); wCtx.stroke();

      wCtx.fillStyle = '#64748b'; wCtx.font = '14px sans-serif';
      wCtx.fillText('Total Penjualan Hari Ini', 280, 120);

      wCtx.fillStyle = '#0f172a'; wCtx.font = 'bold 32px sans-serif';
      wCtx.fillText('Rp 48.500.000', 280, 165);

      wCtx.fillStyle = '#2563eb'; wCtx.font = 'bold 14px sans-serif';
      wCtx.fillText('+24.8% Pertumbuhan', 520, 165);

      // Chart area
      wCtx.fillStyle = '#ffffff';
      wCtx.strokeStyle = '#e2e8f0';
      wCtx.roundRect(256, 234, 734, 380, 14);
      wCtx.fill(); wCtx.stroke();

      wCtx.strokeStyle = '#2563eb';
      wCtx.lineWidth = 4;
      wCtx.beginPath();
      const pts = [200, 220, 160, 240, 140, 180, 100, 80, 120, 60];
      pts.forEach((py, pi) => {
        const px = 280 + pi * 75;
        const actualY = 260 + py;
        if (pi === 0) wCtx.moveTo(px, actualY);
        else wCtx.lineTo(px, actualY);
      });
      wCtx.stroke();
    }

    const webTexture = new THREE.CanvasTexture(webCanvas);
    const screenGeo = new THREE.PlaneGeometry(2.9, 1.8);
    screenGeo.translate(0, 1.05, 0.052);
    lidGroup.add(new THREE.Mesh(screenGeo, new THREE.MeshBasicMaterial({ map: webTexture })));

    // ==========================================
    // 2. --- 3D SMARTPHONE ---
    // ==========================================
    const phoneGroup = new THREE.Group();
    phoneGroupRef.current = phoneGroup;
    masterGroup.add(phoneGroup);

    const phoneWidth = 1.55;
    const phoneHeight = 3.25;
    const phoneDepth = 0.15;

    const phoneFrame = new THREE.Mesh(
      new THREE.BoxGeometry(phoneWidth, phoneHeight, phoneDepth),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.92, roughness: 0.22 })
    );
    phoneGroup.add(phoneFrame);

    // Phone Screen
    const phoneCanvas = document.createElement('canvas');
    phoneCanvas.width = 480;
    phoneCanvas.height = 960;
    const pCtx = phoneCanvas.getContext('2d');
    if (pCtx) {
      pCtx.fillStyle = '#ffffff';
      pCtx.fillRect(0, 0, 480, 960);

      // Status Bar
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

      // Status badge
      pCtx.fillStyle = '#eff6ff';
      pCtx.strokeStyle = '#bfdbfe';
      pCtx.lineWidth = 2;
      pCtx.roundRect(26, 190, 428, 92, 16);
      pCtx.fill(); pCtx.stroke();
      pCtx.fillStyle = '#1e40af';
      pCtx.font = 'bold 18px monospace';
      pCtx.fillText('STATUS: APK TERINSTAL', 44, 230);
      pCtx.fillStyle = '#64748b';
      pCtx.font = '14px monospace';
      pCtx.fillText('Siap Cetak Struk Bluetooth', 44, 260);

      // 4 Features
      const modules = ['Kasir POS', 'Absensi GPS', 'Scan Barcode', 'Katalog WA'];
      modules.forEach((mod, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const x = 26 + col * 220;
        const y = 305 + row * 155;
        pCtx.fillStyle = '#f8fafc';
        pCtx.strokeStyle = '#e2e8f0';
        pCtx.roundRect(x, y, 208, 140, 18);
        pCtx.fill(); pCtx.stroke();

        pCtx.fillStyle = '#2563eb';
        pCtx.font = 'bold 19px sans-serif';
        pCtx.fillText(mod, x + 20, y + 70);
      });

      // Bottom Button
      pCtx.fillStyle = '#2563eb';
      pCtx.roundRect(26, 650, 428, 70, 18);
      pCtx.fill();
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 20px sans-serif';
      pCtx.fillText('DOWNLOAD FILE APK (.APK)', 74, 694);

      // Nav
      pCtx.fillStyle = '#f1f5f9';
      pCtx.fillRect(0, 875, 480, 85);
      pCtx.fillStyle = '#2563eb';
      pCtx.font = 'bold 16px sans-serif';
      pCtx.fillText('Beranda • Transaksi • Akun', 120, 925);
    }

    const phoneTexture = new THREE.CanvasTexture(phoneCanvas);
    const pScreenGeo = new THREE.PlaneGeometry(phoneWidth - 0.1, phoneHeight - 0.16);
    const pScreenMesh = new THREE.Mesh(pScreenGeo, new THREE.MeshBasicMaterial({ map: phoneTexture }));
    pScreenMesh.position.z = phoneDepth / 2 + 0.002;
    phoneGroup.add(pScreenMesh);

    // ==========================================
    // 3. --- FLOATING BADGES ---
    // ==========================================
    const createChip = (text: string, color = '#2563eb') => {
      const chipGroup = new THREE.Group();
      const canvas = document.createElement('canvas');
      canvas.width = 300;
      canvas.height = 90;
      const c = canvas.getContext('2d');
      if (c) {
        c.fillStyle = '#ffffff';
        c.strokeStyle = color;
        c.lineWidth = 4;
        c.roundRect(4, 4, 292, 82, 20);
        c.fill(); c.stroke();

        c.fillStyle = color;
        c.font = 'bold 24px monospace';
        c.fillText(text, 20, 52);
      }
      const tex = new THREE.CanvasTexture(canvas);
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.15, 0.34),
        new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, transparent: true })
      );
      chipGroup.add(mesh);
      masterGroup.add(chipGroup);
      return chipGroup;
    };

    const chipWeb = createChip('WEB ADMIN');
    const chipApk = createChip('ANDROID APK');
    chipWebRef.current = chipWeb;
    chipApkRef.current = chipApk;

    // Beam
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.1, 0.2, 0),
      new THREE.Vector3(0.6, 1.0, 0.5),
      new THREE.Vector3(1.2, 0.3, 0.6)
    );
    const beamGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(25));
    const syncBeam = new THREE.Line(
      beamGeo,
      new THREE.LineDashedMaterial({ color: 0x38bdf8, dashSize: 0.18, gapSize: 0.08, linewidth: 2 })
    );
    syncBeam.computeLineDistances();
    syncBeamRef.current = syncBeam;
    masterGroup.add(syncBeam);

    // Position devices based on viewport
    const applyResponsiveLayout = () => {
      if (!containerRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;

      if (w < 480) {
        // MOBILE VIEW: Overlapping hero composition (Razor-sharp!)
        cameraRef.current.position.set(0, 0, 7.8);
        laptopGroup.position.set(-0.4, 0.15, -0.4);
        laptopGroup.scale.set(0.72, 0.72, 0.72);
        phoneGroup.position.set(0.85, -0.25, 0.8);
        phoneGroup.scale.set(0.76, 0.76, 0.76);
        chipWeb.position.set(-1.4, 1.4, 0);
        chipWeb.scale.set(0.75, 0.75, 0.75);
        chipApk.position.set(1.2, 1.3, 0.8);
        chipApk.scale.set(0.75, 0.75, 0.75);
        syncBeam.visible = false;
      } else if (w < 768) {
        cameraRef.current.position.set(0, 0, 8.5);
        laptopGroup.position.set(-0.7, -0.1, 0);
        laptopGroup.scale.set(0.88, 0.88, 0.88);
        phoneGroup.position.set(1.4, 0.1, 0.8);
        phoneGroup.scale.set(0.88, 0.88, 0.88);
        chipWeb.position.set(-2.0, 1.3, 0.5);
        chipApk.position.set(2.2, 1.5, 1.1);
        syncBeam.visible = true;
      } else {
        cameraRef.current.position.set(0, 0, 7.8);
        laptopGroup.position.set(-1.1, -0.2, 0);
        laptopGroup.scale.set(1, 1, 1);
        phoneGroup.position.set(1.9, 0.1, 0.8);
        phoneGroup.scale.set(1, 1, 1);
        chipWeb.position.set(-2.6, 1.35, 0.5);
        chipApk.position.set(2.6, 1.7, 1.1);
        syncBeam.visible = true;
      }
    };

    applyResponsiveLayout();

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      mouseState.current.rotX += (mouseState.current.targetRotX - mouseState.current.rotX) * 0.08;
      mouseState.current.rotY += (mouseState.current.targetRotY - mouseState.current.rotY) * 0.08;

      masterGroup.rotation.x = mouseState.current.rotX + Math.sin(time * 0.6) * 0.015;
      masterGroup.rotation.y = mouseState.current.rotY + Math.cos(time * 0.5) * 0.015;

      ring1.rotation.z = time * 0.04;
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
    const chipW = chipWebRef.current;
    const chipA = chipApkRef.current;
    if (!laptop || !phone) return;

    const w = containerRef.current?.clientWidth || 800;

    if (mode === 'combo') {
      laptop.visible = true;
      phone.visible = true;
      if (chipW) chipW.visible = true;
      if (chipA) chipA.visible = true;
      if (beam) beam.visible = w >= 640;

      if (w < 480) {
        laptop.position.set(-0.4, 0.15, -0.4);
        phone.position.set(0.85, -0.25, 0.8);
      } else {
        laptop.position.set(-1.1, -0.2, 0);
        phone.position.set(1.9, 0.1, 0.8);
      }
      mouseState.current.targetRotY = -0.22;
      mouseState.current.targetRotX = 0.1;
    } else if (mode === 'web') {
      laptop.visible = true;
      phone.visible = false;
      if (chipW) chipW.visible = true;
      if (chipA) chipA.visible = false;
      if (beam) beam.visible = false;
      laptop.position.set(0, -0.1, 0);
      laptop.scale.set(w < 480 ? 0.85 : 1, w < 480 ? 0.85 : 1, w < 480 ? 0.85 : 1);
      mouseState.current.targetRotY = 0;
      mouseState.current.targetRotX = 0.12;
    } else if (mode === 'android') {
      laptop.visible = false;
      phone.visible = true;
      if (chipW) chipW.visible = false;
      if (chipA) chipA.visible = true;
      if (beam) beam.visible = false;
      phone.position.set(0, 0, 0);
      phone.scale.set(w < 480 ? 0.95 : 1, w < 480 ? 0.95 : 1, w < 480 ? 0.95 : 1);
      mouseState.current.targetRotY = 0;
      mouseState.current.targetRotX = 0.05;
    }
  }, [mode]);

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-slate-100/70 border-2 border-blue-200/90 shadow-lg shadow-blue-500/10">
      {/* Top Controls Bar (Mobile-Optimized) */}
      <div className="relative z-20 px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between border-b border-blue-100/90 bg-white/90 backdrop-blur-md">
        {/* HUD Info */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-blue-900 uppercase">
            3D SHOWCASE
          </span>
        </div>

        {/* Compact Mode Switcher Buttons */}
        <div className="flex items-center gap-1 p-0.5 sm:p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => onChangeMode('combo')}
            className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all cursor-pointer ${
              mode === 'combo' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            Web+APK
          </button>
          <button
            onClick={() => onChangeMode('web')}
            className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all cursor-pointer ${
              mode === 'web' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            Web
          </button>
          <button
            onClick={() => onChangeMode('android')}
            className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all cursor-pointer ${
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
        className="w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] cursor-grab active:cursor-grabbing select-none relative"
        style={{ touchAction: 'pan-y' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Drag Hint on Bottom */}
        <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none flex items-center gap-1.5 px-2 py-0.5 bg-white/90 border border-slate-200 rounded-md text-[9px] sm:text-[10px] font-mono text-slate-600 shadow-xs backdrop-blur-xs">
          <svg className="w-3 h-3 text-blue-600 animate-spin" style={{ animationDuration: '6s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Geser untuk memutar</span>
        </div>
      </div>
    </div>
  );
};
