import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Torus, Box, Octahedron } from '@react-three/drei';

export function FloatingObjects() {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.3;
      group.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Floating country texts */}
      <Text
        position={[4, 2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        fontSize={0.5}
        color="#FFCC00"
        anchorX="center"
        anchorY="middle"
      >
        Canada
      </Text>
      
      <Text
        position={[-4, -1, 1]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.5}
        color="#FFCC00"
        anchorX="center"
        anchorY="middle"
      >
        Australia
      </Text>
      
      <Text
        position={[1, 4, 1]}
        rotation={[Math.PI / 2, 0, 0]}
        fontSize={0.5}
        color="#FFCC00"
        anchorX="center"
        anchorY="middle"
      >
        UK
      </Text>
      
      <Text
        position={[2, -3, -1]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.5}
        color="#FFCC00"
        anchorX="center"
        anchorY="middle"
      >
        USA
      </Text>
      
      {/* Decorative elements */}
      <Torus args={[0.5, 0.2, 16, 32]} position={[3.5, 0, 3.5]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#FFCC00" wireframe />
      </Torus>
      
      <Box args={[0.5, 0.5, 0.5]} position={[-3.5, 0, -3.5]}>
        <meshStandardMaterial color="#003366" wireframe />
      </Box>
      
      <Octahedron args={[0.7]} position={[0, 3.5, -3.5]}>
        <meshStandardMaterial color="#00A8A8" wireframe />
      </Octahedron>
    </group>
  );
}
