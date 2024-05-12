'use client'

import {
  Float,
  Instance,
  Instances,
  Line,
  MeshReflectorMaterial,
  MeshRefractionMaterial,
  OrbitControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMemo } from 'react'
import * as THREE from 'three'
import {
  PhongLightingModel,
  materialSpecular,
} from 'three/examples/jsm/nodes/Nodes.js'

export function Experience() {
  const u = 1.01

  const LINE_NB_POINTS = 200

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-1.5, 0, 2),
        new THREE.Vector3(-1.3, 0, 2.5),
        new THREE.Vector3(0, 0, 2.65),
        new THREE.Vector3(1.3, 0, 2.5),
        new THREE.Vector3(1.5, 0, 2),
      ],
      false,
      'centripetal'
    )
  }, [])

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS)
  }, [curve])

  return (
    <>
      <Canvas
        className="h-scree w-screen"
        camera={{ fov: 25, position: [-8, 7, 12] }}
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={2} position={[-4, 8, 0]} />
        <Line
          points={linePoints}
          color={'purple'}
          opacity={0.5}
          transparent
          lineWidth={5}
        />
        <Instances scale={[0.5, 0.5, 0.5]}>
          <boxGeometry />
          <meshStandardMaterial roughness={1} />
          <group>
            <group name="seller-stand" position={[4, 0, 4]}>
              <Instance position={[0, 0, 0]} color="#37373b" />
              <Instance position={[-u, 0, 0]} color="#37373b" />
              <Instance position={[u, 0, 0]} color="#37373b" />
              <Instance position={[u, 0, u]} color="#37373b" />
              <Instance position={[u, 0.2, -u]} color="#37373b" />
              <Instance position={[u, 0, -2 * u]} color="#37373b" />
              <Instance position={[2 * u, 0, -2 * u]} color="#37373b" />
              <Instance position={[u, 0, -3 * u]} color="#37373b" />
              <Instance position={[2 * u, 0, -3 * u]} color="#37373b" />
              <Instance position={[3 * u, 0, -2 * u]} color="#37373b" />
              <Instance position={[0, 0, -u]} color="#37373b" />
              <Instance position={[0, 0, -2 * u]} color="#37373b" />
              <Instance position={[-u, 0, -2 * u]} color="#37373b" />
              <Instance position={[-u, 0, -3 * u]} color="#37373b" />
              <Instance position={[2 * u, 0, 0]} color="#37373b" />
              <Instance position={[2 * u, 0, -u]} color="#37373b" />
            </group>
            <group position={[7, 0, -3]}>
              <Float
                rotationIntensity={0}
                speed={5}
                floatingRange={[-0.4, 0.4]}
              >
                <Instance position={[0, 0, 0]} scale={0.5} color="#4f2c92" />
                <Instance
                  position={[0, 0, u / 2]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[u / 2, 0, 0]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[u / 2, 0, u / 2]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[0, u / 2, 0]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[0, u / 2, u / 2]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[u / 2, u / 2, 0]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[u / 2, u / 2, u / 2]}
                  scale={0.5}
                  color="#4f2c92"
                />
              </Float>
            </group>
            <group position={[4, 0, -2]}>
              <Float
                rotationIntensity={0}
                speed={4}
                floatingRange={[-0.4, 0.4]}
              >
                <Instance position={[0, 0, 0]} scale={0.5} color="#37373b" />
                <Instance
                  position={[0, 0, u / 2]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[u / 2, 0, 0]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[u / 2, 0, u / 2]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[0, u / 2, 0]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[0, u / 2, u / 2]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[u / 2, u / 2, 0]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[u / 2, u / 2, u / 2]}
                  scale={0.5}
                  color="#37373b"
                />
              </Float>
            </group>
          </group>
          <group>
            <group name="buyer-stand" position={[-6, 0, 4]}>
              <Instance position={[0, 0, 0]} color="#37373b" />
              <Instance position={[u, 0, 0]} color="#37373b" />
              <Instance position={[u, 0, u]} color="#37373b" />
              <Instance position={[2 * u, 0, u]} color="#37373b" />
              <Instance position={[u, 0.2, -u]} color="#37373b" />
              <Instance position={[u, 0, -2 * u]} color="#37373b" />
              <Instance position={[2 * u, 0, -2 * u]} color="#37373b" />
              <Instance position={[2 * u, 0, -u]} color="#37373b" />
              <Instance position={[3 * u, 0, -u]} color="#37373b" />
              <Instance position={[3 * u, 0, 0]} color="#37373b" />
              <Instance position={[u, 0, -3 * u]} color="#37373b" />
              <Instance position={[2 * u, 0, -3 * u]} color="#37373b" />
              <Instance position={[0, 0, -u]} color="#37373b" />
              <Instance position={[0, 0, -2 * u]} color="#37373b" />
              <Instance position={[2 * u, 0, 0]} color="#37373b" />
            </group>
            <group position={[-8, 0, 3]}>
              <Float
                rotationIntensity={0}
                speed={5}
                floatingRange={[-0.4, 0.4]}
              >
                <Instance position={[0, 0, 0]} scale={0.5} color="#4f2c92" />
                <Instance
                  position={[0, 0, u / 2]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[u / 2, 0, 0]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[u / 2, 0, u / 2]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[0, u / 2, 0]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[0, u / 2, u / 2]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[u / 2, u / 2, 0]}
                  scale={0.5}
                  color="#4f2c92"
                />
                <Instance
                  position={[u / 2, u / 2, u / 2]}
                  scale={0.5}
                  color="#4f2c92"
                />
              </Float>
            </group>
            <group position={[-5, 0, -3]}>
              <Float
                rotationIntensity={0}
                speed={4}
                floatingRange={[-0.4, 0.4]}
              >
                <Instance position={[0, 0, 0]} scale={0.5} color="#37373b" />
                <Instance
                  position={[0, 0, u / 2]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[u / 2, 0, 0]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[u / 2, 0, u / 2]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[0, u / 2, 0]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[0, u / 2, u / 2]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[u / 2, u / 2, 0]}
                  scale={0.5}
                  color="#37373b"
                />
                <Instance
                  position={[u / 2, u / 2, u / 2]}
                  scale={0.5}
                  color="#37373b"
                />
              </Float>
            </group>
          </group>
        </Instances>
      </Canvas>
    </>
  )
}
