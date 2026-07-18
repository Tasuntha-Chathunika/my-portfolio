import { useRef, useMemo, Suspense, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function generateStarPositions(count) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  const colorPalette = [
    [0.66, 0.33, 0.97],  // neon purple
    [1.0, 0.18, 0.48],   // neon pink
    [0.0, 0.83, 1.0],    // neon cyan
    [0.31, 0.27, 0.90],  // neon blue
  ];

  for (let i = 0; i < count; i++) {
    let x, y, z;
    do {
      x = (Math.random() - 0.5) * 2;
      y = (Math.random() - 0.5) * 2;
      z = (Math.random() - 0.5) * 2;
    } while (x * x + y * y + z * z > 1);
    positions[i * 3] = x * 2;
    positions[i * 3 + 1] = y * 2;
    positions[i * 3 + 2] = z * 2;

    // Random color from palette
    const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    colors[i * 3] = c[0];
    colors[i * 3 + 1] = c[1];
    colors[i * 3 + 2] = c[2];
  }
  return { positions, colors };
}

const Particles = () => {
  const pointsRef = useRef();
  const { positions, colors } = useMemo(() => generateStarPositions(3000), []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 3);
    return geo;
  }, [positions, colors]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Auto rotation
      pointsRef.current.rotation.x -= delta * 0.04;
      pointsRef.current.rotation.y -= delta * 0.06;
      
      // Mouse Parallax effect
      const targetX = state.mouse.x * 0.25;
      const targetY = state.mouse.y * 0.25;
      
      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * delta * 2;
      pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * delta * 2;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} rotation={[0, 0, Math.PI / 4]}>
      <pointsMaterial
        size={0.006}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
        vertexColors
      />
    </points>
  );
};

class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const Background3D = () => {
  return (
    <WebGLErrorBoundary>
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 1], fov: 75 }}
            gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
            style={{ background: 'transparent' }}
            dpr={[0.5, 1.5]}
            frameloop="always"
          >
            <Particles />
          </Canvas>
        </Suspense>
      </div>
    </WebGLErrorBoundary>
  );
};

export default Background3D;
