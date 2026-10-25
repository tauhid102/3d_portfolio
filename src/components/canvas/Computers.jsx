import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const MobileFallback = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='relative w-[280px] h-[280px] flex items-center justify-center'>
        <div className='absolute inset-0 rounded-full bg-[#915eff]/10 animate-pulse' />
        <div className='text-center z-10'>
          <div className='text-[60px] mb-2'>💻</div>
          <p className='text-secondary text-[14px]'>
            SQA Engineer
          </p>
        </div>
      </div>
    </div>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const smallQuery = window.matchMedia("(max-width: 640px)");

    setIsMobile(mediaQuery.matches);
    setIsSmallMobile(smallQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    const handleSmallQueryChange = (event) => {
      setIsSmallMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    smallQuery.addEventListener("change", handleSmallQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      smallQuery.removeEventListener("change", handleSmallQueryChange);
    };
  }, []);

  if (isSmallMobile) {
    return <MobileFallback />;
  }

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
