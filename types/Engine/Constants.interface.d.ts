import * as THREE from "three";
export interface PositionObject3D {
    x: number;
    y: number;
    z: number;
}
export interface RotationObject3D {
    x: number;
    y: number;
    z: number;
}
export type LightingTypes = THREE.AmbientLight | THREE.DirectionalLight | THREE.HemisphereLight | THREE.PointLight | THREE.SpotLight | THREE.Mesh;
export type GeometryTypes = THREE.BoxGeometry | THREE.CircleGeometry | THREE.ConeGeometry | THREE.CylinderGeometry | THREE.DodecahedronGeometry | THREE.ExtrudeGeometry | THREE.IcosahedronGeometry | THREE.LatheGeometry | THREE.OctahedronGeometry | THREE.PlaneGeometry | THREE.PolyhedronGeometry | THREE.RingGeometry | THREE.ShapeGeometry | THREE.SphereGeometry | THREE.TetrahedronGeometry | THREE.TorusGeometry | THREE.TorusKnotGeometry | THREE.TubeGeometry;
export type MaterialTypes = THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial | THREE.MeshPhongMaterial | THREE.SpriteMaterial | THREE.MeshLambertMaterial | THREE.MeshBasicMaterial;
export declare const DEGREE: number;
