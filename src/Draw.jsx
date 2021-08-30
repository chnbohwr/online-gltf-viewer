import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Draw = ({ objectUrl }) => {
  const [model, setModel] = useState(null)
  const camera = { fov: 75, near: 0.1, far: 10000, position: [0, 0, 50] };
  useEffect(() => {
    if (objectUrl) {
      const loader = new GLTFLoader();
      loader.load(objectUrl, (data) => {
        setModel(data);
      }, () => { }, (err) => { alert('load error') })
    }
  }, [objectUrl])
  return (
    <Canvas
      style={{ width: 1500, height: 600, background: 'black' }}
      camera={camera}
    >
      <directionalLight color="white" position={[0, 0, 500]} />
      <ambientLight intensity={0.8} />
      <OrbitControls />
      <Suspense fallback={<div>loading...</div>}>
        {
          model ? (
            <primitive object={model.scene} />
          ) : null
        }
      </Suspense>

    </Canvas>
  );
}

export default Draw;
