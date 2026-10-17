import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Rook3DProps {
  currentChapter?: number;
  className?: string;
  interactive?: boolean;
}

export const Rook3D: React.FC<Rook3DProps> = ({
  currentChapter = 1,
  className = '',
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLError, setWebGLError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);
    } catch {
      setWebGLError(true);
      return;
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.8, 7.5);

    // Group for the Rook
    const rookGroup = new THREE.Group();
    scene.add(rookGroup);

    // Sculptural faceted dark obsidian & gold accent materials
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x181816,
      roughness: 0.35,
      metalness: 0.25,
      clearcoat: 0.4,
      clearcoatRoughness: 0.2,
      flatShading: true,
    });

    const goldAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xC5A869,
      metalness: 0.85,
      roughness: 0.25,
      flatShading: true,
    });

    const innerCoreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0C2B1E,
      roughness: 0.4,
      metalness: 0.3,
    });

    // 1. Base pedestal - stepped octagonal cylinder
    const baseGeom1 = new THREE.CylinderGeometry(1.6, 1.8, 0.4, 8);
    const base1 = new THREE.Mesh(baseGeom1, bodyMaterial);
    base1.position.y = -2.2;
    rookGroup.add(base1);

    // Gold accent trim on base
    const baseGoldGeom = new THREE.CylinderGeometry(1.5, 1.55, 0.08, 8);
    const baseGold = new THREE.Mesh(baseGoldGeom, goldAccentMaterial);
    baseGold.position.y = -1.95;
    rookGroup.add(baseGold);

    const baseGeom2 = new THREE.CylinderGeometry(1.3, 1.5, 0.4, 8);
    const base2 = new THREE.Mesh(baseGeom2, bodyMaterial);
    base2.position.y = -1.75;
    rookGroup.add(base2);

    // 2. Main tower shaft - tapered faceted column
    const shaftGeom = new THREE.CylinderGeometry(0.9, 1.25, 2.4, 8);
    const shaft = new THREE.Mesh(shaftGeom, bodyMaterial);
    shaft.position.y = -0.4;
    rookGroup.add(shaft);

    // Gold collar band
    const collarGeom = new THREE.CylinderGeometry(1.05, 1.05, 0.12, 8);
    const collar = new THREE.Mesh(collarGeom, goldAccentMaterial);
    collar.position.y = 0.85;
    rookGroup.add(collar);

    // 3. Capital / Machicolation flare
    const flareGeom = new THREE.CylinderGeometry(1.4, 1.0, 0.6, 8);
    const flare = new THREE.Mesh(flareGeom, bodyMaterial);
    flare.position.y = 1.2;
    rookGroup.add(flare);

    // Inner crown floor
    const crownFloorGeom = new THREE.CylinderGeometry(1.15, 1.15, 0.15, 16);
    const crownFloor = new THREE.Mesh(crownFloorGeom, innerCoreMaterial);
    crownFloor.position.y = 1.45;
    rookGroup.add(crownFloor);

    // 4. Battlements / Crenellations (4 distinct architectural towers)
    const crenelCount = 4;
    const crenelRadius = 1.22;
    for (let i = 0; i < crenelCount; i++) {
      const angle = (i * Math.PI * 2) / crenelCount + Math.PI / 4;
      const crenelGeom = new THREE.BoxGeometry(0.55, 0.6, 0.35);
      const crenel = new THREE.Mesh(crenelGeom, bodyMaterial);
      crenel.position.x = Math.cos(angle) * crenelRadius;
      crenel.position.z = Math.sin(angle) * crenelRadius;
      crenel.position.y = 1.8;
      crenel.rotation.y = -angle;
      rookGroup.add(crenel);

      // Gold cap on each crenel top
      const crenelCapGeom = new THREE.BoxGeometry(0.58, 0.06, 0.38);
      const crenelCap = new THREE.Mesh(crenelCapGeom, goldAccentMaterial);
      crenelCap.position.copy(crenel.position);
      crenelCap.position.y = 2.12;
      crenelCap.rotation.y = -angle;
      rookGroup.add(crenelCap);
    }

    // Centered subtle emerald core light element inside the crown
    const corePoint = new THREE.PointLight(0x164632, 2, 4);
    corePoint.position.set(0, 1.8, 0);
    rookGroup.add(corePoint);

    // Studio Lighting setup
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfffbeb, 2.6);
    mainLight.position.set(5, 7, 5);
    scene.add(mainLight);

    const goldRimLight = new THREE.DirectionalLight(0xd4af37, 2.0);
    goldRimLight.position.set(-6, 3, -4);
    scene.add(goldRimLight);

    const softFill = new THREE.DirectionalLight(0x0c2b1e, 1.2);
    softFill.position.set(0, -4, 4);
    scene.add(softFill);

    // Interactive mouse parallax
    let targetRotationX = 0.08;
    let targetRotationY = 0.4;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow elegant breath rotation
      const baseSpin = elapsedTime * 0.18;

      // React to chapter
      let chapterOffset = 0;
      let chapterTilt = 0;
      let chapterScale = 1;

      if (currentChapter === 1) {
        chapterOffset = 0;
        chapterTilt = 0.05;
        chapterScale = 1.05;
      } else if (currentChapter === 2) {
        chapterOffset = 0.6;
        chapterTilt = 0.15;
        chapterScale = 0.95;
      } else if (currentChapter === 3) {
        chapterOffset = 1.2;
        chapterTilt = 0.08;
        chapterScale = 1.0;
      } else if (currentChapter === 4) {
        chapterOffset = 1.8;
        chapterTilt = -0.05;
        chapterScale = 1.1;
      } else {
        chapterOffset = 2.4;
        chapterTilt = 0.04;
        chapterScale = 1.0;
      }

      targetRotationY = baseSpin + chapterOffset + mouseX * 0.35;
      targetRotationX = chapterTilt - mouseY * 0.25;

      rookGroup.rotation.y += (targetRotationY - rookGroup.rotation.y) * 0.05;
      rookGroup.rotation.x += (targetRotationX - rookGroup.rotation.x) * 0.05;

      // Subtle vertical hover
      rookGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.08;

      // Chapter scale interpolation
      const currentScale = rookGroup.scale.x;
      const targetScale = chapterScale;
      const newScale = currentScale + (targetScale - currentScale) * 0.05;
      rookGroup.scale.set(newScale, newScale, newScale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [currentChapter, interactive]);

  if (webGLError) {
    // High-precision sculptural SVG Fallback
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="relative w-48 h-64 md:w-64 md:h-80 flex items-center justify-center">
          <svg
            viewBox="0 0 200 280"
            className="w-full h-full drop-shadow-2xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle radial glow */}
            <circle cx="100" cy="140" r="90" fill="#0C2B1E" fillOpacity="0.08" />
            {/* Plinth Base */}
            <path d="M40 250 L160 250 L150 230 L50 230 Z" fill="#181816" stroke="#C5A869" strokeWidth="1" />
            <path d="M50 230 L150 230 L140 215 L60 215 Z" fill="#242422" />
            {/* Shaft with facets */}
            <path d="M60 215 L78 120 L100 120 L100 215 Z" fill="#1C1C1A" />
            <path d="M100 120 L122 120 L140 215 L100 215 Z" fill="#2A2A27" />
            <line x1="100" y1="120" x2="100" y2="215" stroke="#C5A869" strokeWidth="0.75" />
            {/* Gold collar */}
            <rect x="74" y="112" width="52" height="8" rx="1" fill="#C5A869" />
            {/* Flared head */}
            <path d="M72 112 L56 70 L144 70 L128 112 Z" fill="#20201E" stroke="#C5A869" strokeWidth="0.75" />
            {/* Crown Battlements */}
            <rect x="56" y="50" width="18" height="20" fill="#181816" stroke="#C5A869" strokeWidth="0.75" />
            <rect x="80" y="54" width="14" height="16" fill="#262624" />
            <rect x="106" y="54" width="14" height="16" fill="#262624" />
            <rect x="126" y="50" width="18" height="20" fill="#181816" stroke="#C5A869" strokeWidth="0.75" />
            {/* Top gold trims */}
            <line x1="56" y1="50" x2="74" y2="50" stroke="#C5A869" strokeWidth="2" />
            <line x1="126" y1="50" x2="144" y2="50" stroke="#C5A869" strokeWidth="2" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[360px] md:min-h-[460px] select-none pointer-events-auto cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Sculptural geometric rook 3D visual guide"
    />
  );
};
