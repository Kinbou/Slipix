import React, { useRef } from 'react';
import {
  Canvas, extend, useThree, useFrame,
} from 'react-three-fiber';
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './backgroundProfil.scss';

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate
      enableZoom={false}
      autoRotateSpeed={0.5}
    />
  );
};

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    '/profil1.jpg',
    '/profil2.jpg',
    // '/Plan_de_travail_1.png',
    // '/Plan_de_travail_2.png',
    // '/Plan_de_travail_3.png',
    // '/Plan_de_travail_4.png',
    // '/Plan_de_travail_5.png',
    // '/Plan_de_travail_6.png',
    '/profil3.jpg',
    '/profil4.jpg',
    '/profil5.jpg',
    '/profil6.jpg',
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

// Geometry
function Sphere() {
  const { scene, gl } = useThree();
  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 100, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);

  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene));

  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <directionalLight intensity={0.1} />
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        color="white"
        roughness={0.1}
        metalness={0.5}
      />
    </mesh>
  );
}

// Lights
function BackgroundProfil() {
  return (
    <Canvas className="canvas">
      <CameraControls />
      <Sphere />
      <SkyBox />
    </Canvas>
  );
}

export default BackgroundProfil;
