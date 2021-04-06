import * as THREE from 'three';
import MyGUI from '../utils/MyGUI'
import SoundReactor from './SoundReactor'

class ParticleSystem {
    constructor() {
        this.bind();

        this.params = {
            particleCount: 2000,
            radius: 2,
            radiusScatter: 1,
            zScatter: 1,
            seeds: [],
            speed: 5,
            particleSize: 0.1,
            particleSizeOffset: 0.1,
            reactFactor: 0.05
        }

        MyGUI.add(this.params, "speed", 0, 10).step(0.001)
        MyGUI.add(this.params, "particleSize", 0, 2).step(0.001)
        MyGUI.add(this.params, "zScatter", 0, 5).step(0.001)
        MyGUI.add(this.params, "radiusScatter", 0, 5).step(0.001)
        MyGUI.add(this.params, "radius", 0, 5).step(0.001)
        MyGUI.add(this.params, "reactFactor", 0, 0.1).step(0.001)

    }

    init(scene) {
        this.scene = scene
        this.particlesGeom = new THREE.BufferGeometry()
        this.particlesPos = []

        for (let i = 0; i < this.params.particleCount; i++) {


            let a = i / this.params.particleCount * Math.PI * 2
            let s = [Math.random(), Math.random(), Math.random()]
            this.params.seeds.push(s);

            let x = Math.cos(a) * this.params.radius + (s[0] - 0.5) * this.params.radiusScatter
            let y = Math.sin(a) * this.params.radius + (s[1] - 0.5) * this.params.radiusScatter
            let z = (s[2] - 0.5) * this.params.zScatter

            // Create the vertex
            this.particlesPos.push(x, y, z);
        }

        this.particlesGeom.setAttribute('position', new THREE.Float32BufferAttribute(this.particlesPos, 3));

        this.textLoader = new THREE.TextureLoader()
        let eyes = this.textLoader.load("assets/eyes_sprite.png")

        this.particleMaterial = new THREE.PointsMaterial(
            {
                color: 0xffffff,
                size: .08,
                map: eyes,
                // blending: THREE.AdditiveBlending,
                transparent: true,
            });

        this.particleSystem = new THREE.Points(this.particlesGeom, this.particleMaterial);
        this.scene.add(this.particleSystem)
    }

    update() {
        this.particleSystem.rotateX(0.009)
        this.particleSystem.rotateY(0.005)
        this.particleSystem.material.size = this.params.particleSize
        if (SoundReactor.fdata.length > 0) {
            this.particleSystem.material.size = this.params.particleSize * (SoundReactor.fdata[200] * this.params.reactFactor) + this.params.particleSizeOffset
        }
        for (let i = 0; i < this.params.particleCount; i++) {

            let a = i / this.params.particleCount * Math.PI * 2 + Date.now() * 0.0001 * this.params.speed
            let s = this.params.seeds[i]

            let x = Math.cos(a) * this.params.radius + (s[0] - 0.5) * this.params.radiusScatter
            let y = Math.sin(a) * this.params.radius + (s[1] - 0.5) * this.params.radiusScatter
            let z = (s[2] - 0.5) * this.params.zScatter

            this.particlesGeom.attributes.position.array[i * 3 + 0] = x
            this.particlesGeom.attributes.position.array[i * 3 + 1] = y
            this.particlesGeom.attributes.position.array[i * 3 + 2] = z
        }

        this.particlesGeom.attributes.position.needsUpdate = true;
    }

    bind() {
        this.init = this.init.bind(this)
        this.update = this.update.bind(this)
    }

}

const _instance = new ParticleSystem()
export default _instance