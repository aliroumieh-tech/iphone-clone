import { useGLTF, useTexture } from "@react-three/drei";

const Iphone15Pro = (props) => {
  const { nodes, materials } = useGLTF("/models/scene.glb");

  const screenTexture = useTexture(props?.screenTexture);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ttmRoLdJipiIOmf?.geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjsDkGiopeiEJZK?.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buRWvyqhBBgcJFo?.geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      {/* buttons */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MrMmlCAsAxJpYqQ_0?.geometry}
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      {/* buttons */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wqbHSzWaUxBCwxY_0?.geometry}
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.QvGDcbDApaGssma?.geometry}
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vFwJFNASGvEHWhs?.geometry}
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.evAxFwhaQUwXuua?.geometry}
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.USxQiqZgxHbRvqB?.geometry}
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TvgBVmqNmSrFVfW?.geometry}
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GuYJryuYunhpphO?.geometry}
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      {/* right button */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pvdHknDTGDzVpwc?.geometry}
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      {/* right button */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CfghdUoyzvwzIum?.geometry}
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjdhycfQYjKMDyn?.geometry}
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.usFLmqcyrnltBUr?.geometry}
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.xXDHkMplTIDAXLN?.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        <meshStandardMaterial map={screenTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vELORlCJixqPHsZ?.geometry}
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EbQGKrWAqhBHiMv?.geometry}
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EddVrWkqZTlvmci?.geometry}
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KSWlaxBcnPDpFCs?.geometry}
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      {/* back camera */}
      <mesh
        geometry={nodes.TakBsdEjEytCAMK?.geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      >
        <meshStandardMaterial color={props.backColor} />
      </mesh>
      {/* back camera */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IykfmVvLplTsTEW?.geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      ></mesh>
      {/* back */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wLfSXtbwRlBrwof?.geometry}
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      >
        <meshStandardMaterial color={props.cameraBackColor} />
      </mesh>
      {/* back */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WJwwVjsahIXbJpU?.geometry}
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      {/* bg camera */}
      <mesh
        geometry={nodes.YfrJNXgMvGOAfzz?.geometry}
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      >
        <meshStandardMaterial color={props.backColor} />
      </mesh>
      {/* bg camera */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DCLCbjzqejuvsqH?.geometry}
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CdalkzDVnwgdEhS?.geometry}
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NtjcIgolNGgYlCg?.geometry}
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pXBNoLiaMwsDHRF?.geometry}
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IkoiNqATMVoZFKD?.geometry}
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rqgRAGHOwnuBypi?.geometry}
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  );
};

useGLTF.preload("/models/scene.glb");

export default Iphone15Pro;
