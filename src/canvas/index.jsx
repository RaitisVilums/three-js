import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";
import ShirtModal from "./ShirtModal";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <ShirtModal />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
