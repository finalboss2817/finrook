import * as THREE from 'three';

// Shared premium materials for warm ivory & architectural charcoal aesthetic
export function getSharedMaterials() {
  const redMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xFF4D38,
    roughness: 0.28,
    metalness: 0.15,
    clearcoat: 0.5,
    clearcoatRoughness: 0.2,
    flatShading: true,
  });

  const charcoalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x1E2129,
    roughness: 0.35,
    metalness: 0.1,
    flatShading: true,
  });

  const ivoryMaterial = new THREE.MeshStandardMaterial({
    color: 0xF3EFEA,
    roughness: 0.45,
    metalness: 0.05,
    flatShading: true,
  });

  const emeraldMaterial = new THREE.MeshStandardMaterial({
    color: 0x0C2B1E,
    roughness: 0.3,
    metalness: 0.2,
    flatShading: true,
  });

  const goldMetallic = new THREE.MeshStandardMaterial({
    color: 0xD4AF37,
    roughness: 0.25,
    metalness: 0.85,
    flatShading: true,
  });

  const glowingIdeaMaterial = new THREE.MeshBasicMaterial({
    color: 0xFF6B4A,
  });

  const glassFrameMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xFFFFFF,
    transparent: true,
    opacity: 0.45,
    roughness: 0.1,
    transmission: 0.85,
    thickness: 0.5,
  });

  return {
    redMaterial,
    charcoalMaterial,
    ivoryMaterial,
    emeraldMaterial,
    goldMetallic,
    glowingIdeaMaterial,
    glassFrameMaterial,
  };
}

// -------------------------------------------------------------
// 1. CHARACTER A: THE ROOK (Anthropomorphic Chess Strategist)
// -------------------------------------------------------------
export interface RookRig {
  group: THREE.Group;
  body: THREE.Mesh;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  crown: THREE.Group;
}

export function createRookCharacter(materials: ReturnType<typeof getSharedMaterials>): RookRig {
  const group = new THREE.Group();
  group.name = 'RookCharacter';

  // Base stepped pedestal
  const base1 = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.8, 0.2, 16), materials.redMaterial);
  base1.position.y = 0.2;
  group.add(base1);

  const base2 = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.68, 0.2, 16), materials.charcoalMaterial);
  base2.position.y = 0.4;
  group.add(base2);

  // Main tapering trunk body
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.55, 1.2, 16), materials.redMaterial);
  body.position.y = 1.05;
  group.add(body);

  // Waist belt
  const waist = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.18, 16), materials.charcoalMaterial);
  waist.position.y = 1.35;
  group.add(waist);

  // Crown flare
  const crown = new THREE.Group();
  crown.position.y = 1.75;
  const crownFlare = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.44, 0.4, 16), materials.redMaterial);
  crown.add(crownFlare);

  // 4 Crown Crenellations (Battlements)
  const crenelCount = 4;
  const radius = 0.55;
  for (let i = 0; i < crenelCount; i++) {
    const angle = (i * Math.PI * 2) / crenelCount + Math.PI / 4;
    const crenel = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.28, 0.18), materials.redMaterial);
    crenel.position.x = Math.cos(angle) * radius;
    crenel.position.z = Math.sin(angle) * radius;
    crenel.position.y = 0.3;
    crenel.rotation.y = -angle;
    crown.add(crenel);
  }
  group.add(crown);

  // Articulated Arms (for reaching, pushing, and conducting)
  const createArm = (side: 'left' | 'right') => {
    const armGroup = new THREE.Group();
    const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), materials.charcoalMaterial);
    armGroup.add(shoulder);

    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 8), materials.redMaterial);
    upperArm.position.y = -0.2;
    armGroup.add(upperArm);

    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.15, 0.12), materials.charcoalMaterial);
    hand.position.y = -0.45;
    armGroup.add(hand);

    armGroup.position.set(side === 'left' ? -0.55 : 0.55, 1.35, 0);
    return armGroup;
  };

  const leftArm = createArm('left');
  const rightArm = createArm('right');
  group.add(leftArm);
  group.add(rightArm);

  // Subtle articulated legs (for confident forward walking)
  const createLeg = (xOffset: number) => {
    const legGroup = new THREE.Group();
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.4, 8), materials.charcoalMaterial);
    leg.position.y = -0.2;
    legGroup.add(leg);

    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.08, 0.24), materials.redMaterial);
    foot.position.set(0, -0.4, 0.06);
    legGroup.add(foot);

    legGroup.position.set(xOffset, 0.4, 0);
    return legGroup;
  };

  const leftLeg = createLeg(-0.25);
  const rightLeg = createLeg(0.25);
  group.add(leftLeg);
  group.add(rightLeg);

  return { group, body, leftArm, rightArm, leftLeg, rightLeg, crown };
}

// -------------------------------------------------------------
// 2. CHARACTER B: THE CREATOR (Contemporary Human Videographer)
// -------------------------------------------------------------
export interface HumanRig {
  group: THREE.Group;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  head: THREE.Mesh;
  tool?: THREE.Group;
}

export function createCreatorCharacter(materials: ReturnType<typeof getSharedMaterials>): HumanRig {
  const group = new THREE.Group();
  group.name = 'CreatorCharacter';

  // Torso (Casual modern hoodie)
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.7, 12), materials.charcoalMaterial);
  torso.position.y = 1.05;
  group.add(torso);

  // Head (Stylized smooth silhouette)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), materials.ivoryMaterial);
  head.position.y = 1.55;
  group.add(head);

  // Arms with Camera Tool
  const leftArm = new THREE.Group();
  leftArm.position.set(-0.35, 1.3, 0);
  const leftArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 8), materials.charcoalMaterial);
  leftArmMesh.position.y = -0.2;
  leftArm.add(leftArmMesh);
  group.add(leftArm);

  const rightArm = new THREE.Group();
  rightArm.position.set(0.35, 1.3, 0);
  const rightArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 8), materials.charcoalMaterial);
  rightArmMesh.position.y = -0.2;
  rightArm.add(rightArmMesh);

  // Camera Tool in hand
  const tool = new THREE.Group();
  const cameraBody = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.16, 0.18), materials.charcoalMaterial);
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.12, 12), materials.goldMetallic);
  lens.rotation.x = Math.PI / 2;
  lens.position.z = 0.12;
  tool.add(cameraBody);
  tool.add(lens);
  tool.position.set(0.1, -0.4, 0.25);
  rightArm.add(tool);
  group.add(rightArm);

  // Legs
  const leftLeg = new THREE.Group();
  leftLeg.position.set(-0.16, 0.7, 0);
  const leftLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.7, 8), materials.charcoalMaterial);
  leftLegMesh.position.y = -0.35;
  leftLeg.add(leftLegMesh);
  group.add(leftLeg);

  const rightLeg = new THREE.Group();
  rightLeg.position.set(0.16, 0.7, 0);
  const rightLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.7, 8), materials.charcoalMaterial);
  rightLegMesh.position.y = -0.35;
  rightLeg.add(rightLegMesh);
  group.add(rightLeg);

  return { group, leftArm, rightArm, leftLeg, rightLeg, head, tool };
}

// -------------------------------------------------------------
// 3. CHARACTER C: THE BRAND BUILDER (Architect / Business Owner)
// -------------------------------------------------------------
export function createBrandBuilderCharacter(materials: ReturnType<typeof getSharedMaterials>): HumanRig {
  const group = new THREE.Group();
  group.name = 'BrandBuilderCharacter';

  // Torso (Tailored coat)
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 0.75, 12), materials.emeraldMaterial);
  torso.position.y = 1.05;
  group.add(torso);

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), materials.ivoryMaterial);
  head.position.y = 1.58;
  group.add(head);

  // Arms (Holding palette board)
  const leftArm = new THREE.Group();
  leftArm.position.set(-0.35, 1.3, 0);
  const leftArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 8), materials.emeraldMaterial);
  leftArmMesh.position.y = -0.2;
  leftArm.add(leftArmMesh);

  // Brand Palette Board
  const tool = new THREE.Group();
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.25, 0.04), materials.ivoryMaterial);
  const swatch1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.05), materials.redMaterial);
  swatch1.position.set(-0.08, 0.05, 0.01);
  const swatch2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.05), materials.emeraldMaterial);
  swatch2.position.set(0.08, 0.05, 0.01);
  board.add(swatch1);
  board.add(swatch2);
  tool.add(board);
  tool.position.set(0.2, -0.35, 0.2);
  tool.rotation.x = -Math.PI / 6;
  leftArm.add(tool);
  group.add(leftArm);

  const rightArm = new THREE.Group();
  rightArm.position.set(0.35, 1.3, 0);
  const rightArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 8), materials.emeraldMaterial);
  rightArmMesh.position.y = -0.2;
  rightArm.add(rightArmMesh);
  group.add(rightArm);

  // Legs
  const leftLeg = new THREE.Group();
  leftLeg.position.set(-0.16, 0.7, 0);
  const leftLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.7, 8), materials.charcoalMaterial);
  leftLegMesh.position.y = -0.35;
  leftLeg.add(leftLegMesh);
  group.add(leftLeg);

  const rightLeg = new THREE.Group();
  rightLeg.position.set(0.16, 0.7, 0);
  const rightLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.7, 8), materials.charcoalMaterial);
  rightLegMesh.position.y = -0.35;
  rightLeg.add(rightLegMesh);
  group.add(rightLeg);

  return { group, leftArm, rightArm, leftLeg, rightLeg, head, tool };
}

// -------------------------------------------------------------
// 4. CHARACTER D: THE EVENT ORGANISER (Stage Director)
// -------------------------------------------------------------
export function createEventOrganiserCharacter(materials: ReturnType<typeof getSharedMaterials>): HumanRig {
  const group = new THREE.Group();
  group.name = 'EventOrganiserCharacter';

  // Torso
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.7, 12), materials.charcoalMaterial);
  torso.position.y = 1.05;
  group.add(torso);

  // Head with headset
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), materials.ivoryMaterial);
  head.position.y = 1.55;
  const headset = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.02, 8, 16), materials.redMaterial);
  headset.rotation.y = Math.PI / 2;
  head.add(headset);
  group.add(head);

  // Arms
  const leftArm = new THREE.Group();
  leftArm.position.set(-0.35, 1.3, 0);
  const leftArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 8), materials.charcoalMaterial);
  leftArmMesh.position.y = -0.2;
  leftArm.add(leftArmMesh);
  group.add(leftArm);

  const rightArm = new THREE.Group();
  rightArm.position.set(0.35, 1.3, 0);
  const rightArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 8), materials.charcoalMaterial);
  rightArmMesh.position.y = -0.2;
  rightArm.add(rightArmMesh);

  // Tablet in hand
  const tool = new THREE.Group();
  const tablet = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.3, 0.02), materials.charcoalMaterial);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.24), materials.goldMetallic);
  screen.position.z = 0.015;
  tablet.add(screen);
  tool.add(tablet);
  tool.position.set(0.05, -0.35, 0.25);
  tool.rotation.x = -Math.PI / 5;
  rightArm.add(tool);
  group.add(rightArm);

  // Legs
  const leftLeg = new THREE.Group();
  leftLeg.position.set(-0.16, 0.7, 0);
  const leftLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.7, 8), materials.charcoalMaterial);
  leftLegMesh.position.y = -0.35;
  leftLeg.add(leftLegMesh);
  group.add(leftLeg);

  const rightLeg = new THREE.Group();
  rightLeg.position.set(0.16, 0.7, 0);
  const rightLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.7, 8), materials.charcoalMaterial);
  rightLegMesh.position.y = -0.35;
  rightLeg.add(rightLegMesh);
  group.add(rightLeg);

  return { group, leftArm, rightArm, leftLeg, rightLeg, head, tool };
}

// -------------------------------------------------------------
// 5. THE IDEA ORB (Glowing Concept Catalyst)
// -------------------------------------------------------------
export function createIdeaOrb(materials: ReturnType<typeof getSharedMaterials>) {
  const orbGroup = new THREE.Group();
  orbGroup.name = 'IdeaOrb';

  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.24, 24, 24), materials.glowingIdeaMaterial);
  orbGroup.add(sphere);

  // Orbiting golden rings
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.015, 8, 32), materials.goldMetallic);
  ring1.rotation.x = Math.PI / 3;
  orbGroup.add(ring1);

  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.015, 8, 32), materials.redMaterial);
  ring2.rotation.y = Math.PI / 4;
  orbGroup.add(ring2);

  // Soft point light emitted by idea
  const light = new THREE.PointLight(0xFF4D38, 3.5, 6);
  orbGroup.add(light);

  return { orbGroup, ring1, ring2, sphere, light };
}
