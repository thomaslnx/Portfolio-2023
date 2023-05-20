'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

import { Container } from './styles'

const WavingHand: React.FC = (): JSX.Element => {
  const wavingHand = useGLTF("./images/3DAssets/wavingHand.gltf")

  return (
    <mesh
      onPointerOver={(e) => {
        {/* console.log('mouse hover above 3d hand')
            console.log('event value: ', e)
        */}
      }}
      onClick={(e) => {
        {/*
          console.log('click event over the 3d hand')
          console.log('click event value: ', e)
        */}
      }}
      castShadow
    >
      <hemisphereLight intensity={0.15} groundColor='black' /> {/**  light put right above the scene */}
      <pointLight
        intensity={1}
        position={[30, 40, -30]}
        castShadow={true}
      />
      <primitive 
        object={wavingHand.scene}
        scale={0.5}
        rotation={[0, 42, -0.5]} 
      />
    </mesh>
  )
}

const _3DHandComponent: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Canvas
        style={{
          height: '180px',
          width: '180px'
        }}
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls 
          enableZoom={false}
          enableRotate={false}
        />
        <WavingHand />
      </Canvas>
    </Container>

  )
}

export default _3DHandComponent;