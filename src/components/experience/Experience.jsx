import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "../office/Office.jsx";
import { Overlay } from "../overlay/Overlay.jsx";

export default function Experience() {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
}
