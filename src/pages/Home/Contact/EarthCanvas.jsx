import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

const EarthCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense >
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

const Earth = () => {
    const earth = useGLTF('/planet/scene.gltf'); // Ensure the file is in the public/planet directory
    return (
        <primitive
            object={earth.scene}
            scale={2.5}
            position-y={0}
            rotation-y={0}
        />
    );
};

export default EarthCanvas;