'use client'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Expreience'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between bg-stone-900">
      <Canvas
        className="h-scree w-screen"
        camera={{ fov: 25, position: [-8, 7, 12] }}
      >
        <Experience />
      </Canvas>
    </main>
  )
}
