import * as THREE from './node_modules/three/build/three.module.js';

export function GenerateTexture(path){
    // load a texture, set wrap mode to repeat
    const texture = new THREE.TextureLoader().load( path );
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set( 1, 1 );

    return texture;
}

export function GeneratePlane(PosX, PosY, PosZ, Name){
    let planeGeometry = new THREE.PlaneGeometry( 1, 1 );
    let planematerial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: null} );

    let plane = new THREE.Mesh( planeGeometry, planematerial );
    plane.name = Name;

    plane.position.x = PosX; plane.position.y = PosY; plane.position.z = PosZ;

    return plane;
}

export function GenerateSide(PosX, PosY, PosZ, Name){
    const plane1 = GeneratePlane(PosX + 0, PosY + 0, PosZ + 0, Name);
    const plane2 = GeneratePlane(PosX + 0, PosY + -1.1, PosZ + 0, Name);
    const plane3 = GeneratePlane(PosX + 0, PosY + 1.1, PosZ + 0, Name);

    const group = new THREE.Group();

    group.add(plane1);
    group.add(plane2);
    group.add(plane3);

    return group;
}

export function GenerateFace(PosX, PosY, PosZ, Name){
    const group = new THREE.Group();

    group.add(GenerateSide(PosX + 0, PosY + 0, PosZ + 0, Name))
    group.add(GenerateSide(PosX + 1.1, PosY + 0, PosZ + 0, Name))
    group.add(GenerateSide(PosX + -1.1, PosY + 0, PosZ + 0, Name))

    return group;
}

export function solidifyFace(side){
    side.forEach(firstChild => 
    {
        firstChild.children.forEach(object => {
            object.children[4].material.color.set(0x000000)
        })
    })
}