'use client'

import {
  Float,
  Instance,
  Instances,
  Line,
  OrbitControls,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

export function Experience() {
  const u = 1.01

  const LINE_NB_POINTS = 100

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-1.5, 0, 2),
        new THREE.Vector3(-1.4, 0, 2.5),
        new THREE.Vector3(0, 0, 2.5),
        new THREE.Vector3(0.12, 0, 2.1),
        new THREE.Vector3(0.12, 0, 1.15),
        new THREE.Vector3(0.27, 0, 1.02),
        new THREE.Vector3(1.3, 0, 1.02),
      ],
      false,
      'catmullrom',
      0.3
    )
  }, [])

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS)
  }, [curve])
  const length = 0.02,
    width = 0.02
  const x = 0,
    y = 0
  const shape = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.lineTo(0, width)
    shape.lineTo(length, width)
    shape.lineTo(length, 0)
    shape.lineTo(0, 0)
    return shape
  }, [curve])

  const tubeGeometry = useMemo(() => {
    const tube = new THREE.TubeGeometry(curve, LINE_NB_POINTS, 0.02, 8, false)
    return tube
  }, [curve])

  const sphereRef = useRef<any>()

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    if (sphereRef.current) {
      const position = curve.getPoint((t / 2.5) % 1)
      sphereRef.current.position.set(position.x, position.y, position.z)
    }
  })

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={2} position={[-4, 8, 0]} />
      <Line
        points={linePoints}
        color={'purple'}
        opacity={0.5}
        transparent
        lineWidth={4}
      />
      <mesh ref={sphereRef}>
        <sphereGeometry args={[0.08, 16, 16]} /> {/* Sphere size and detail */}
        <meshStandardMaterial transparent color={'white'} opacity={0.5} />
      </mesh>
      <mesh>
        {/* <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                extrudePath: curve,
                depth: 16,
                bevelEnabled: true,
                bevelThickness: 5,
                bevelSize: 1,
                bevelOffset: 0,
                bevelSegments: 5,
              },
            ]}
          /> */}
        <primitive object={tubeGeometry} attach="geometry" />
        <meshStandardMaterial color={'purple'} opacity={0.6} transparent />
      </mesh>
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
            <Float rotationIntensity={0} speed={5} floatingRange={[-0.4, 0.4]}>
              <Instance position={[0, 0, 0]} scale={0.5} color="#4f2c92" />
              <Instance position={[0, 0, u / 2]} scale={0.5} color="#4f2c92" />
              <Instance position={[u / 2, 0, 0]} scale={0.5} color="#4f2c92" />
              <Instance
                position={[u / 2, 0, u / 2]}
                scale={0.5}
                color="#4f2c92"
              />
              <Instance position={[0, u / 2, 0]} scale={0.5} color="#4f2c92" />
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
            <Float rotationIntensity={0} speed={4} floatingRange={[-0.4, 0.4]}>
              <Instance position={[0, 0, 0]} scale={0.5} color="#37373b" />
              <Instance position={[0, 0, u / 2]} scale={0.5} color="#37373b" />
              <Instance position={[u / 2, 0, 0]} scale={0.5} color="#37373b" />
              <Instance
                position={[u / 2, 0, u / 2]}
                scale={0.5}
                color="#37373b"
              />
              <Instance position={[0, u / 2, 0]} scale={0.5} color="#37373b" />
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
            <Float rotationIntensity={0} speed={5} floatingRange={[-0.4, 0.4]}>
              <Instance position={[0, 0, 0]} scale={0.5} color="#4f2c92" />
              <Instance position={[0, 0, u / 2]} scale={0.5} color="#4f2c92" />
              <Instance position={[u / 2, 0, 0]} scale={0.5} color="#4f2c92" />
              <Instance
                position={[u / 2, 0, u / 2]}
                scale={0.5}
                color="#4f2c92"
              />
              <Instance position={[0, u / 2, 0]} scale={0.5} color="#4f2c92" />
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
            <Float rotationIntensity={0} speed={4} floatingRange={[-0.4, 0.4]}>
              <Instance position={[0, 0, 0]} scale={0.5} color="#37373b" />
              <Instance position={[0, 0, u / 2]} scale={0.5} color="#37373b" />
              <Instance position={[u / 2, 0, 0]} scale={0.5} color="#37373b" />
              <Instance
                position={[u / 2, 0, u / 2]}
                scale={0.5}
                color="#37373b"
              />
              <Instance position={[0, u / 2, 0]} scale={0.5} color="#37373b" />
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
    </>
  )
}
