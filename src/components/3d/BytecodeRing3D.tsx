import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BytecodeRing3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Torus Knot for Dalvik Execution Ring
    const torusGeo = new THREE.TorusKnotGeometry(1.2, 0.28, 128, 32, 2, 3);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x3ddc84,
      wireframe: true,
      emissive: 0x073042,
      roughness: 0.2,
      metalness: 0.9,
    });
    const knot = new THREE.Mesh(torusGeo, torusMat);
    scene.add(knot);

    // Inner Glowing Core Sphere
    const coreGeo = new THREE.IcosahedronGeometry(0.65, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Lighting
    const light1 = new THREE.PointLight(0x3ddc84, 4, 10);
    light1.position.set(3, 3, 3);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x00f0ff, 4, 10);
    light2.position.set(-3, -3, 3);
    scene.add(light2);

    let clock = new THREE.Clock();

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      knot.rotation.x = time * 0.4;
      knot.rotation.y = time * 0.6;

      core.rotation.x = -time * 0.5;
      core.rotation.z = time * 0.3;

      const scale = 1 + Math.sin(time * 2) * 0.05;
      core.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (renderer.domElement && container) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[300px]" />;
};
