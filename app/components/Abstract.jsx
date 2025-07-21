// components/Abstract.jsx
'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import Image from 'next/image'

function Model() {
  const gltf = useGLTF('/abstract.glb')
  return (
    <primitive
      object={gltf.scene}
      scale={1.8}
      rotation={[0.1, 0.8, 0]} // slight clockwise tilt
    />
  )
}

export default function Abstract() {
  return (
    <div className="relative w-full h-[800px] items-center justify-center flex rounded-2xl shadow-xl overflow-hidden transform rotate-8">
      {/* Background image */}


      {/* 3D Model Canvas */}
      <div className="relative z-10 w-full h-full">
        <Canvas className="w-full h-full" camera={{ position: [0, 1, 5] }}>
          <ambientLight intensity={4} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[-5, 5, 5]} intensity={1} color="#3a2a4a" />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={3}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
    </div>
  )
}
