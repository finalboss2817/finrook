import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  getSharedMaterials,
  createRookCharacter,
  createCreatorCharacter,
  createBrandBuilderCharacter,
  createEventOrganiserCharacter,
  createIdeaOrb,
  RookRig,
  HumanRig,
} from './characterModels';
import { Play, Pause, ChevronRight, ChevronLeft, RotateCcw, Compass, Sparkles, Users, Calendar, Video, ArrowRight } from 'lucide-react';

interface Story3DCanvasProps {
  activeScene: number;
  onSceneChange: (newScene: number) => void;
  className?: string;
  onSelectServiceForInquiry?: (service: string) => void;
}

export const Story3DCanvas: React.FC<Story3DCanvasProps> = ({
  activeScene,
  onSceneChange,
  className = '',
  onSelectServiceForInquiry,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const activeSceneRef = useRef<number>(activeScene);

  useEffect(() => {
    activeSceneRef.current = activeScene;
  }, [activeScene]);

  // Three.js instances ref
  const sceneElementsRef = useRef<{
    renderer?: THREE.WebGLRenderer;
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    rook?: RookRig;
    creator?: HumanRig;
    brandBuilder?: HumanRig;
    eventOrganiser?: HumanRig;
    ideaOrb?: ReturnType<typeof createIdeaOrb>;
    brandProps?: THREE.Group;
    eventProps?: THREE.Group;
    contentProps?: THREE.Group;
    stageFloor?: THREE.Mesh;
  }>({});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFAF8F5);
    scene.fog = new THREE.Fog(0xFAF8F5, 12, 35);

    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 4.5, 13);

    // 3. Materials
    const materials = getSharedMaterials();

    // 4. Architectural Stage Platform
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // Main circular architectural podium
    const stageFloor = new THREE.Mesh(
      new THREE.CylinderGeometry(8.5, 9.0, 0.4, 48),
      materials.ivoryMaterial
    );
    stageFloor.position.y = -0.2;
    stageFloor.receiveShadow = true;
    stageGroup.add(stageFloor);

    // Stepped inner ring
    const innerRing = new THREE.Mesh(
      new THREE.CylinderGeometry(5.5, 5.8, 0.1, 48),
      new THREE.MeshStandardMaterial({ color: 0xEFEAE1, roughness: 0.5 })
    );
    innerRing.position.y = 0.05;
    stageGroup.add(innerRing);

    // 5. Main Cast Characters
    const rook = createRookCharacter(materials);
    scene.add(rook.group);

    const creator = createCreatorCharacter(materials);
    scene.add(creator.group);

    const brandBuilder = createBrandBuilderCharacter(materials);
    scene.add(brandBuilder.group);

    const eventOrganiser = createEventOrganiserCharacter(materials);
    scene.add(eventOrganiser.group);

    // 6. The Glowing Idea Orb
    const ideaOrb = createIdeaOrb(materials);
    scene.add(ideaOrb.orbGroup);

    // 7. Dynamic Props
    // A: Brand Identity Props
    const brandProps = new THREE.Group();
    const box1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), materials.charcoalMaterial);
    box1.position.set(-1.8, 0.3, 0.5);
    const box2 = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.75, 0.45), materials.redMaterial);
    box2.position.set(-1.2, 0.38, 0.8);
    const plaque = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.05), materials.goldMetallic);
    plaque.position.set(-1.5, 0.85, 0.4);
    brandProps.add(box1);
    brandProps.add(box2);
    brandProps.add(plaque);
    scene.add(brandProps);

    // B: Event Venue Props
    const eventProps = new THREE.Group();
    const stageRiser = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.3, 1.8), materials.charcoalMaterial);
    stageRiser.position.set(0, 0.15, -1.8);
    const truss1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2, 8), materials.goldMetallic);
    truss1.position.set(-1.1, 1.2, -1.8);
    const truss2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2, 8), materials.goldMetallic);
    truss2.position.set(1.1, 1.2, -1.8);
    const crossbeam = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.08, 0.08), materials.goldMetallic);
    crossbeam.position.set(0, 2.3, -1.8);
    eventProps.add(stageRiser);
    eventProps.add(truss1);
    eventProps.add(truss2);
    eventProps.add(crossbeam);
    scene.add(eventProps);

    // C: Content Media Frames
    const contentProps = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.3, 0.04), materials.glassFrameMaterial);
      const innerBorder = new THREE.Mesh(new THREE.BoxGeometry(0.82, 1.22, 0.05), materials.charcoalMaterial);
      frame.add(innerBorder);
      frame.position.set(2.0 + (i % 2) * 1.1, 1.2 + Math.floor(i / 2) * 1.4, -0.5 + i * 0.3);
      contentProps.add(frame);
    }
    scene.add(contentProps);

    // 8. Cinematic Studio Lighting (Warm Ivory gallery illumination)
    const ambientLight = new THREE.AmbientLight(0xFFFBF5, 2.5);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xFFFFFF, 3.2);
    mainKeyLight.position.set(6, 12, 8);
    mainKeyLight.castShadow = true;
    mainKeyLight.shadow.mapSize.width = 1024;
    mainKeyLight.shadow.mapSize.height = 1024;
    scene.add(mainKeyLight);

    const softFillLight = new THREE.DirectionalLight(0xE8DFD0, 1.6);
    softFillLight.position.set(-8, 5, -4);
    scene.add(softFillLight);

    const rookAccentLight = new THREE.PointLight(0xE1382B, 2.2, 8);
    rookAccentLight.position.set(0, 2.5, 2);
    scene.add(rookAccentLight);

    // Store references
    sceneElementsRef.current = {
      renderer,
      scene,
      camera,
      rook,
      creator,
      brandBuilder,
      eventOrganiser,
      ideaOrb,
      brandProps,
      eventProps,
      contentProps,
      stageFloor,
    };

    // 9. Mouse Orbit & Interaction
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let orbitAngleX = 0;
    let orbitAngleY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        orbitAngleX += deltaX * 0.005;
        orbitAngleY = Math.max(-0.4, Math.min(0.6, orbitAngleY + deltaY * 0.005));
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      } else {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile devices
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        orbitAngleX += deltaX * 0.006;
        orbitAngleY = Math.max(-0.3, Math.min(0.5, orbitAngleY + deltaY * 0.006));
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 10. Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 11. Narrative Scene Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);
      const elapsed = clock.getElapsedTime();
      const s = activeSceneRef.current;

      // Update Camera based on active scene & mouse orbit
      let targetCamX = Math.sin(orbitAngleX) * 12 + mouseX * 0.6;
      let targetCamZ = Math.cos(orbitAngleX) * 12;
      let targetCamY = 4.2 + orbitAngleY * 6 - mouseY * 0.4;
      let targetLookAtY = 1.2;

      // Scene-specific choreography
      if (s === 1) {
        // Scene 1: Rook alone with Idea Orb, approaches & pushes forward
        rook.group.position.set(0, 0, 1.2);
        rook.group.rotation.y = 0;
        
        // Pushing arm action
        const pushCycle = Math.sin(elapsed * 2.0);
        rook.rightArm.rotation.x = -Math.PI / 4 + pushCycle * 0.3;
        rook.leftArm.rotation.x = Math.PI / 8;
        
        // Idea Orb in front, gently gliding forward
        ideaOrb.orbGroup.position.set(0, 1.0 + Math.sin(elapsed * 2.5) * 0.08, -0.6 + pushCycle * 0.4);
        ideaOrb.ring1.rotation.z = elapsed * 1.5;
        ideaOrb.ring2.rotation.x = elapsed * 1.2;

        // Hide other characters off-stage
        creator.group.position.set(-20, 0, 0);
        brandBuilder.group.position.set(-20, 0, 0);
        eventOrganiser.group.position.set(20, 0, 0);
        brandProps.position.set(0, -10, 0);
        eventProps.position.set(0, -10, 0);
        contentProps.position.set(0, -10, 0);
      } else if (s === 2) {
        // Scene 2: 4 Disconnected mini-worlds, rook walks through
        rook.group.position.set(Math.sin(elapsed * 1.2) * 1.2, 0, Math.cos(elapsed * 0.8) * 0.6);
        rook.group.rotation.y = elapsed * 0.8;
        rook.leftLeg.rotation.x = Math.sin(elapsed * 4) * 0.3;
        rook.rightLeg.rotation.x = -Math.sin(elapsed * 4) * 0.3;

        // Characters in separated corners
        creator.group.position.set(-2.8, 0, -1.5);
        creator.group.rotation.y = Math.PI / 4;
        brandBuilder.group.position.set(-2.6, 0, 1.8);
        brandBuilder.group.rotation.y = -Math.PI / 4;
        eventOrganiser.group.position.set(2.8, 0, -1.2);
        eventOrganiser.group.rotation.y = -Math.PI / 3;

        ideaOrb.orbGroup.position.set(0, 1.4, 0);
        brandProps.position.set(-1.8, 0, 1.5);
        eventProps.position.set(2.4, 0, -1.0);
        contentProps.position.set(-2.2, 0, -1.8);
      } else if (s === 3) {
        // Scene 3: Brand Management - Brand builder arranging swatches with the Rook helping align
        brandBuilder.group.position.set(-1.2, 0, 0.4);
        brandBuilder.group.rotation.y = Math.PI / 6;
        brandBuilder.rightArm.rotation.x = -Math.PI / 3 + Math.sin(elapsed * 2) * 0.2;

        rook.group.position.set(0.6, 0, 0.2);
        rook.group.rotation.y = -Math.PI / 4;
        rook.leftArm.rotation.x = -Math.PI / 3; // Reaching to align
        rook.rightArm.rotation.x = -Math.PI / 5;

        // Brand props neatly aligning
        brandProps.position.set(-0.2, 0, 0.8);
        box1.rotation.y = elapsed * 0.5;
        box2.position.y = 0.38 + Math.sin(elapsed * 2) * 0.05;

        ideaOrb.orbGroup.position.set(0.6, 2.2, 0.2);
        creator.group.position.set(-20, 0, 0);
        eventOrganiser.group.position.set(20, 0, 0);
        eventProps.position.set(0, -10, 0);
        contentProps.position.set(0, -10, 0);
      } else if (s === 4) {
        // Scene 4: Creator Deals - Creator & Brand meeting, Rook carrying connection token
        creator.group.position.set(-1.8, 0, 0);
        creator.group.rotation.y = Math.PI / 3;
        creator.rightArm.rotation.x = -Math.PI / 4; // Filming

        brandBuilder.group.position.set(1.8, 0, 0);
        brandBuilder.group.rotation.y = -Math.PI / 3;

        // Rook in center carrying connection token
        rook.group.position.set(0, 0, 0.2);
        rook.group.rotation.y = Math.sin(elapsed * 1.5) * 0.4;
        rook.leftArm.rotation.x = -Math.PI / 4;
        rook.rightArm.rotation.x = -Math.PI / 4;

        ideaOrb.orbGroup.position.set(0, 1.4 + Math.sin(elapsed * 3) * 0.06, 0.5);

        eventOrganiser.group.position.set(20, 0, 0);
        brandProps.position.set(0, -10, 0);
        eventProps.position.set(0, -10, 0);
        contentProps.position.set(0, 0.5, -1.5);
      } else if (s === 5) {
        // Scene 5: Event Management - Organiser & Rook physically raise the stage
        eventOrganiser.group.position.set(-1.4, 0, 0);
        eventOrganiser.group.rotation.y = Math.PI / 4;
        eventOrganiser.rightArm.rotation.x = -Math.PI / 3 + Math.sin(elapsed * 2) * 0.2; // Conducting

        rook.group.position.set(1.4, 0, 0);
        rook.group.rotation.y = -Math.PI / 4;
        rook.leftArm.rotation.x = -Math.PI / 3;

        // Stage rises & lights oscillate
        eventProps.position.set(0, Math.min(0, -0.6 + Math.sin(elapsed * 0.8) * 0.3), -0.5);
        truss1.rotation.y = elapsed * 0.5;
        truss2.rotation.y = -elapsed * 0.5;

        ideaOrb.orbGroup.position.set(0, 2.6, -1.8);
        creator.group.position.set(-20, 0, 0);
        brandBuilder.group.position.set(-20, 0, 0);
        brandProps.position.set(0, -10, 0);
        contentProps.position.set(0, -10, 0);
      } else if (s === 6) {
        // Scene 6: Content Creation - Creator capturing footage, frames aligning
        creator.group.position.set(-1.2, 0, 0.5);
        creator.group.rotation.y = Math.PI / 5;
        creator.rightArm.rotation.x = -Math.PI / 3;

        rook.group.position.set(1.0, 0, 0.2);
        rook.group.rotation.y = -Math.PI / 4;
        rook.leftArm.rotation.x = -Math.PI / 4;

        // Content frames floating in graceful rhythmic sequence
        contentProps.position.set(0, 0, 0);
        for (let i = 0; i < contentProps.children.length; i++) {
          const f = contentProps.children[i];
          f.position.y = 1.0 + Math.sin(elapsed * 1.5 + i) * 0.2;
          f.rotation.y = Math.sin(elapsed * 0.8 + i) * 0.15;
        }

        ideaOrb.orbGroup.position.set(0, 1.8, 0);
        brandBuilder.group.position.set(-20, 0, 0);
        eventOrganiser.group.position.set(20, 0, 0);
        brandProps.position.set(0, -10, 0);
        eventProps.position.set(0, -10, 0);
      } else if (s === 7) {
        // Scene 7: Bringing Everything Together - All characters united on stage
        rook.group.position.set(0, 0, 0.5);
        rook.group.rotation.y = Math.sin(elapsed * 0.5) * 0.2;
        rook.leftArm.rotation.x = -Math.PI / 4;
        rook.rightArm.rotation.x = -Math.PI / 4;

        brandBuilder.group.position.set(-2.4, 0, 0.2);
        brandBuilder.group.rotation.y = Math.PI / 4;

        creator.group.position.set(2.4, 0, 0.2);
        creator.group.rotation.y = -Math.PI / 4;

        eventOrganiser.group.position.set(0, 0, -2.0);
        eventOrganiser.group.rotation.y = 0;

        // Idea Orb placed at center of all 4 forces
        ideaOrb.orbGroup.position.set(0, 1.2 + Math.sin(elapsed * 2) * 0.08, 0);

        brandProps.position.set(-1.8, 0, 1.2);
        eventProps.position.set(0, 0, -2.2);
        contentProps.position.set(1.8, 0, 1.0);
      } else {
        // Scene 8: Your Next Move - Calm horizon, new idea orb waiting, rook steps forward
        rook.group.position.set(-0.8 + Math.min(1.2, (elapsed % 6) * 0.2), 0, 0.5);
        rook.group.rotation.y = Math.PI / 4;
        rook.leftLeg.rotation.x = Math.sin(elapsed * 3) * 0.25;
        rook.rightLeg.rotation.x = -Math.sin(elapsed * 3) * 0.25;

        // New Glowing Idea Orb waiting on opposite side
        ideaOrb.orbGroup.position.set(2.2, 1.3 + Math.sin(elapsed * 2) * 0.08, 0);

        creator.group.position.set(-20, 0, 0);
        brandBuilder.group.position.set(-20, 0, 0);
        eventOrganiser.group.position.set(20, 0, 0);
        brandProps.position.set(0, -10, 0);
        eventProps.position.set(0, -10, 0);
        contentProps.position.set(0, -10, 0);
      }

      // Smooth camera interpolation
      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;
      camera.lookAt(0, targetLookAtY, 0);

      renderer.render(scene, camera);
    };

    renderLoop();

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      onSceneChange(activeScene === 8 ? 1 : activeScene + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeScene, onSceneChange]);

  const sceneStories = [
    {
      num: '01',
      title: 'An idea waiting to move',
      category: 'The Beginning',
      characterNote: 'Character A: The Rook',
      narrative:
        'Every ambitious project starts as a spark. Standing alone on the board, the Rook steps up to give that initial idea direction and physical momentum.',
      takeaway: 'You have the ambition; we help you find the opening move.',
      serviceLink: 'Brand Management',
    },
    {
      num: '02',
      title: 'When everything feels disconnected',
      category: 'The Problem',
      characterNote: 'The Rook surveys the scattered players',
      narrative:
        'Without a clear plan, brand identity, creators, events, and content pull in separate directions. The Rook moves between each isolated space to connect the dots.',
      takeaway: 'Execution breaks down when the pieces don’t speak to each other.',
      serviceLink: 'Brand Management',
    },
    {
      num: '03',
      title: 'Building a recognisable brand',
      category: 'Brand Management',
      characterNote: 'The Rook & The Brand Builder',
      narrative:
        'The Brand Builder arranges packaging, palettes, and typography while the Rook anchors positioning so your business looks credible and consistent everywhere.',
      takeaway: 'People take you seriously when your presentation looks intentional.',
      serviceLink: 'Brand Management',
    },
    {
      num: '04',
      title: 'Creator deals that actually pay',
      category: 'Creator Management',
      characterNote: 'The Rook, Creator & Brand Builder',
      narrative:
        'The Creator films on camera while the Brand seeks reach. The Rook bridges the two, securing fair commercial deals and making sure creators get paid on time.',
      takeaway: 'No lowball freebies. Real paid sponsorships and clean legal contracts.',
      serviceLink: 'Creator Management / Brand Deals',
    },
    {
      num: '05',
      title: 'Live events with zero chaos',
      category: 'Event Management',
      characterNote: 'The Rook & The Event Organiser',
      narrative:
        'From college festivals to corporate launches and concerts, the Organiser and the Rook physically lift the stage, rig the trusses, and coordinate on-ground crews.',
      takeaway: 'Sound, lighting, crowd flow, and permits handled so you enjoy the show.',
      serviceLink: 'Event Management',
    },
    {
      num: '06',
      title: 'Content that stops the scroll',
      category: 'Content Creation',
      characterNote: 'The Rook & The Creator',
      narrative:
        'Camera rolling, lighting tuned, and media frames floating in harmony. The Rook establishes the rhythm and publishing schedule so you post with purpose.',
      takeaway: 'Short-form videos and visual assets produced on professional cinema gear.',
      serviceLink: 'Content Creation / Management',
    },
    {
      num: '07',
      title: 'Bringing everything together',
      category: 'Full Integration',
      characterNote: 'All 4 Characters on the Main Stage',
      narrative:
        'The Brand Builder, the Creator, the Event Organiser, and the Rook unite around the elevated glowing orb. The separate parts form one unstoppable machine.',
      takeaway: 'When every element works in harmony, your results multiply.',
      serviceLink: 'Brand Management',
    },
    {
      num: '08',
      title: 'Your next move starts here',
      category: 'Your Turn',
      characterNote: 'The Rook on the Open Pathway',
      narrative:
        'The board is clear. A new opportunity awaits. Whatever you are planning to build, launch, or scale next, Finrook stands behind your move.',
      takeaway: 'Call or WhatsApp us directly at 99203 00750 to begin.',
      serviceLink: 'Other Move',
    },
  ];

  const currentStory = sceneStories[activeScene - 1] || sceneStories[0];

  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      {/* 3D Canvas Mount */}
      <div
        ref={containerRef}
        className="w-full h-[460px] sm:h-[560px] lg:h-[640px] cursor-grab active:cursor-grabbing bg-[#FAF8F5]"
        title="Interactive 3D Stage · Click & Drag to Orbit Camera"
      />

      {/* Top Scene HUD Header */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
        <div className="bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-2 rounded-lg border border-[#E5DFC0] text-xs font-mono flex items-center gap-3 shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E1382B] animate-pulse" />
          <span className="font-bold text-[#141518]">SCENE {currentStory.num} / 08</span>
          <span className="text-[#C5A869]">·</span>
          <span className="text-[#5C5952] uppercase tracking-wider font-semibold">{currentStory.category}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-[#FFFFFF]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#E5DFC0] text-[11px] font-mono text-[#6E6A61] shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#E1382B]" />
          <span>DRAG TO ROTATE 3D VIEW</span>
        </div>
      </div>

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-5 left-5 right-5 flex flex-col md:flex-row items-center justify-between gap-3 bg-[#FFFFFF]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E5DFC0] shadow-md pointer-events-auto">
        {/* Playback controls */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-start">
          <button
            type="button"
            onClick={() => onSceneChange(activeScene === 1 ? 8 : activeScene - 1)}
            className="p-2 text-[#4A4843] hover:text-[#141518] hover:bg-[#F2EDE4] rounded-md transition-colors cursor-pointer"
            aria-label="Previous Scene"
            title="Previous Scene"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              isAutoPlaying
                ? 'bg-[#E1382B] text-white shadow-xs'
                : 'bg-[#F2EDE4] text-[#141518] hover:bg-[#E5DFC0]'
            }`}
            title={isAutoPlaying ? 'Pause Auto Play' : 'Play 3D Story'}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Playing</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Play Story</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => onSceneChange(activeScene === 8 ? 1 : activeScene + 1)}
            className="p-2 text-[#4A4843] hover:text-[#141518] hover:bg-[#F2EDE4] rounded-md transition-colors cursor-pointer"
            aria-label="Next Scene"
            title="Next Scene"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold text-[#141518] ml-2 font-mono">
            {currentStory.num} / 08
          </span>
        </div>

        {/* 8 Scene Quick Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
          {sceneStories.map((s, idx) => {
            const sceneNum = idx + 1;
            const isCurrent = activeScene === sceneNum;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => onSceneChange(sceneNum)}
                className={`px-3 py-1.5 text-xs font-mono transition-all rounded-md cursor-pointer ${
                  isCurrent
                    ? 'bg-[#E1382B] text-white font-bold shadow-xs scale-105'
                    : 'bg-[#F2EDE4] text-[#6E6A61] hover:text-[#141518] hover:bg-[#E5DFC0]'
                }`}
                title={`${s.num}. ${s.title}`}
              >
                {s.num}
              </button>
            );
          })}
        </div>
      </div>

      {/* Narrative Story Insight Card (Below the 3D Stage) */}
      <div className="mt-4 p-6 bg-[#FFFFFF] rounded-xl border border-[#E5DFC0] shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#E1382B] font-bold">
              <span>SCENE {currentStory.num}</span>
              <span className="text-[#C5A869]">·</span>
              <span className="text-[#6E6A61]">{currentStory.characterNote}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#141518] mt-2 leading-snug">
              {currentStory.title}
            </h3>

            <p className="mt-2.5 text-sm sm:text-base text-[#5C5952] leading-relaxed">
              {currentStory.narrative}
            </p>

            <div className="mt-3 text-xs sm:text-sm font-semibold text-[#141518] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E1382B]" />
              <span>{currentStory.takeaway}</span>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            {onSelectServiceForInquiry && (
              <button
                type="button"
                onClick={() => onSelectServiceForInquiry(currentStory.serviceLink)}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#E1382B] hover:bg-[#C92F23] rounded-md shadow-xs transition-colors cursor-pointer uppercase tracking-wider"
              >
                <span>Discuss {currentStory.category}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
