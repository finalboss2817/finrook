import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FinrookLogo } from './FinrookLogo';

interface CinematicRookProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export const CinematicRook: React.FC<CinematicRookProps> = ({
  className = '',
  size = 'lg',
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
    } catch {
      setUseFallback(true);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.2, 7.2);

    const rookGroup = new THREE.Group();
    scene.add(rookGroup);

    // Refined Lighter Red Material & Slate Accent
    const redMat = new THREE.MeshPhysicalMaterial({
      color: 0xFF4D38,
      roughness: 0.28,
      metalness: 0.15,
      clearcoat: 0.5,
      clearcoatRoughness: 0.15,
      flatShading: true,
    });

    const slateBandMat = new THREE.MeshStandardMaterial({
      color: 0x161922,
      roughness: 0.6,
      metalness: 0.25,
      flatShading: true,
    });

    const glowRedMat = new THREE.MeshBasicMaterial({
      color: 0xFF6854,
    });

    // 1. Lower Stepped Base
    const basePlinth = new THREE.Mesh(
      new THREE.CylinderGeometry(1.8, 2.0, 0.4, 16),
      redMat
    );
    basePlinth.position.y = -2.1;
    rookGroup.add(basePlinth);

    const baseStep2 = new THREE.Mesh(
      new THREE.CylinderGeometry(1.5, 1.7, 0.35, 16),
      redMat
    );
    baseStep2.position.y = -1.75;
    rookGroup.add(baseStep2);

    const baseRing = new THREE.Mesh(
      new THREE.CylinderGeometry(1.3, 1.35, 0.15, 16),
      slateBandMat
    );
    baseRing.position.y = -1.5;
    rookGroup.add(baseRing);

    // 2. Flared Tower Trunk
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 1.25, 2.2, 16),
      redMat
    );
    trunk.position.y = -0.35;
    rookGroup.add(trunk);

    // 3. Slate Waist Band
    const waistBand = new THREE.Mesh(
      new THREE.CylinderGeometry(1.02, 1.02, 0.7, 16),
      slateBandMat
    );
    waistBand.position.y = 0.9;
    rookGroup.add(waistBand);

    // Subtle luminous accent ring
    const waistGlow = new THREE.Mesh(
      new THREE.TorusGeometry(1.04, 0.02, 8, 32),
      glowRedMat
    );
    waistGlow.rotation.x = Math.PI / 2;
    waistGlow.position.y = 0.9;
    rookGroup.add(waistGlow);

    // 4. Crown Collar Flare
    const crownFlare = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 0.95, 0.6, 16),
      redMat
    );
    crownFlare.position.y = 1.45;
    rookGroup.add(crownFlare);

    // 5. Crown Crenellations (4 distinct architectural towers)
    const crenelCount = 4;
    const crenelRadius = 1.15;
    for (let i = 0; i < crenelCount; i++) {
      const angle = (i * Math.PI * 2) / crenelCount + Math.PI / 4;
      const crenel = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.65, 0.35),
        redMat
      );
      crenel.position.x = Math.cos(angle) * crenelRadius;
      crenel.position.z = Math.sin(angle) * crenelRadius;
      crenel.position.y = 2.0;
      crenel.rotation.y = -angle;
      rookGroup.add(crenel);
    }

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const whiteRim = new THREE.DirectionalLight(0xffffff, 2.2);
    whiteRim.position.set(-5, 6, -4);
    scene.add(whiteRim);

    const redKey = new THREE.DirectionalLight(0xFF4D38, 3.2);
    redKey.position.set(5, 5, 4);
    scene.add(redKey);

    const topLight = new THREE.DirectionalLight(0xfff7ed, 1.4);
    topLight.position.set(0, 8, 2);
    scene.add(topLight);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      const baseRotation = elapsed * 0.3;
      rookGroup.rotation.y += (baseRotation + mouseX * 0.4 - rookGroup.rotation.y) * 0.05;
      rookGroup.rotation.x += (-mouseY * 0.25 - rookGroup.rotation.x) * 0.05;

      rookGroup.position.y = Math.sin(elapsed * 1.4) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive]);

  if (useFallback) {
    return (
      <div className={`relative flex items-center justify-center p-8 ${className}`}>
        <FinrookLogo size={240} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[380px] md:min-h-[460px] select-none cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive Finrook 3D Rook"
    />
  );
};
