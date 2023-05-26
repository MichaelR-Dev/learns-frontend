import * as THREE from './node_modules/three/build/three.module.js';
import * as Generators from './objectGenerators.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
//const controls = new THREE.OrbitControls( camera, renderer.domElement );

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.backgroundBlurriness = 1;
scene.backgroundIntensity = 1;

const frFace = Generators.GenerateFace(0, 0, 0);
const bkFace = Generators.GenerateFace(0, 0, 3.3, 'square'); // BLUE
const tpFace = Generators.GenerateFace(0, 1.65, 1.65);
const rtFace = Generators.GenerateFace(1.65, 0, 1.65, 'square'); //GREEN
const ltFace = Generators.GenerateFace(-1.65, 0, 1.65);
const btFace = Generators.GenerateFace(0, -1.65, 1.65, 'square'); //PURPLE

const triplaneA = Generators.GeneratePlane(0,0,0);

triplaneA.material.color.set(0x0000FF);

triplaneA.scale.x += 40;
triplaneA.scale.y += 15;

triplaneA.rotation.z = Math.PI / 2;
triplaneA.material.transparent = true;
triplaneA.material.opacity = 0;

const triplaneAA = Generators.GeneratePlane(9,0,0);

triplaneAA.material.color.set(0x0000FF);

triplaneAA.scale.x = 40;
triplaneAA.scale.y = 1;
triplaneAA.material.transparent = true;
triplaneAA.material.opacity = 0;

triplaneAA.rotation.z = Math.PI / 2;

const triplaneAB = Generators.GeneratePlane(-9,0,0);

triplaneAB.material.color.set(0x0000FF);

triplaneAB.scale.x = 40;
triplaneAB.scale.y = 1;
triplaneAB.material.transparent = true;
triplaneAB.material.opacity = 0;

triplaneAB.rotation.z = Math.PI / 2;

const triplaneB = Generators.GeneratePlane(0,0,0);

triplaneB.material.color.set(0x00ff00);

triplaneB.scale.x += 40;
triplaneB.scale.y += 15;
triplaneB.material.transparent = true;
triplaneB.material.opacity = 0;

triplaneB.rotation.z = Math.PI / 4;

const triplaneBA = Generators.GeneratePlane(13,0,0);

triplaneBA.material.color.set(0x00ff00);

triplaneBA.scale.x = 40;
triplaneBA.scale.y = 1;
triplaneBA.material.transparent = true;
triplaneBA.material.opacity = 0;

triplaneBA.rotation.z = Math.PI / 4;

const triplaneBB = Generators.GeneratePlane(-13,0,0);

triplaneBB.material.color.set(0x00ff00);

triplaneBB.scale.x = 40;
triplaneBB.scale.y = 1;
triplaneBB.material.transparent = true;
triplaneBB.material.opacity = 0;

triplaneBB.rotation.z = Math.PI / 4;

const triplaneC = Generators.GeneratePlane(0,0,0);

triplaneC.material.color.set(0xA020F0);

triplaneC.scale.x = 40;
triplaneC.scale.y += 15;
triplaneC.material.transparent = true;
triplaneC.material.opacity = 0;

triplaneC.rotation.z = -Math.PI / 4;

const triplaneCA = Generators.GeneratePlane(13,0,0);

triplaneCA.material.color.set(0xA020F0);

triplaneCA.scale.x = 40;
triplaneCA.scale.y = 1;
triplaneCA.material.transparent = true;
triplaneCA.material.opacity = 0;

triplaneCA.rotation.z = -Math.PI / 4;

const triplaneCB = Generators.GeneratePlane(-13,0,0);

triplaneCB.material.color.set(0xA020F0);

triplaneCB.scale.x = 40;
triplaneCB.scale.y = 1;
triplaneCB.material.transparent = true;
triplaneCB.material.opacity = 0;

triplaneCB.rotation.z = -Math.PI / 4;

tpFace.rotation.x = -Math.PI / 2;
rtFace.rotation.y = Math.PI / 2;
ltFace.rotation.y = -Math.PI / 2
bkFace.rotation.x = Math.PI;
btFace.rotation.x = Math.PI / 2;

const group = new THREE.Group();

const triplanesA = new THREE.Group();

triplanesA.add(triplaneA);
triplanesA.add(triplaneAA);
triplanesA.add(triplaneAB);

const triplanesB = new THREE.Group();

triplanesB.add(triplaneB);
triplanesB.add(triplaneBA);
triplanesB.add(triplaneBB);

const triplanesC = new THREE.Group();

triplanesC.add(triplaneC);
triplanesC.add(triplaneCA);
triplanesC.add(triplaneCB);

const triplanes = new THREE.Group();

triplanes.add(triplanesA);
triplanes.add(triplanesB);
triplanes.add(triplanesC);

scene.add(triplanes);

group.add(frFace);
group.add(tpFace);
group.add(rtFace);
group.add(ltFace);
group.add(bkFace);
group.add(btFace);

group.scale.x += 1;
group.scale.y += 1;
group.scale.z += 1;

group.children.forEach((side, index, arr) => {
    let color;
    
    switch (index) {
        case 0:
            color = 0xFF0000;
            break;
        case 1:
            color = 0xffffff;
            break;

        case 2:
            color = 0x00ff00;
            break;

        case 3:
            color = 0xff0000;
            break;

        case 4:
            color = 0x0000ff;
            break;

        case 5:
            color = 0xA020F0;
            break;
        default:
            color = 0xffffff
            break;
    }


    side.children.forEach(object => {
        object.children.forEach(child => {
            child.material.color.set(color)
        })
    });
})


scene.add(group);

group.rotation.x = Math.PI / 1.35;
group.rotation.z = Math.PI / 4;
group.position.y -= 1;

camera.position.z = 10;

function animate() {
    requestAnimationFrame( animate ); 

    if(group.scale.x > 0.4){
        group.rotation.z += 0.01;
        
        group.scale.x -= 0.01;
        group.scale.y -= 0.01;
        group.scale.z -= 0.01;
    }

    if(scene.backgroundIntensity < 0.2 && group.scale.x <= 0.4){
        scene.backgroundIntensity += 0.001;
    }
    
    renderer.render( scene, camera );
};

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener('resize', onWindowResize);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove( event ) {

    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function render() {

    // update the picking ray with the camera and pointer position
    raycaster.setFromCamera( pointer, camera );

    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects( scene.children );

    /*for ( let i = 0; i < intersects.length; i ++ ) {
        if(intersects[ i ].object.material.color.r == '1' && intersects[ i ].object.material.color.g == '1' && intersects[ i ].object.material.color.b == '1'){
            var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            intersects[ i ].object.material.color.set( randomColor );
        }
    }*/

    renderer.render( scene, camera );
}

function onPointerClick() {
    raycaster.setFromCamera( pointer, camera );
    const intersects = raycaster.intersectObjects( scene.children );

    for ( let i = 0; i < intersects.length; i ++ ) {
        if(intersects[i].object.name == 'square'){
            console.log(intersects[i].object.name);
            triplanes.children.forEach(planesGroup => {
                planesGroup.children.forEach(plane => {
                    if(
                        plane.material.color.r == intersects[i].object.material.color.r &&
                        plane.material.color.g == intersects[i].object.material.color.g &&
                        plane.material.color.b == intersects[i].object.material.color.b
                    ){
                        plane.material.opacity = 1;
                    }else{
                        plane.material.opacity = 0;
                    }
                }) 
            });
        }
    }
}

window.addEventListener( 'pointermove', onPointerMove );
window.addEventListener( 'click', onPointerClick);

animate();
setTimeout(() => {
    setInterval(() => {render()}, 10);
}, 3000);