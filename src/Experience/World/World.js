import * as THREE from 'three'

import Experience from '../Experience.js'
import Environment from './Environment.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene

        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )
        this.scene.add(testMesh)

        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.experience = new Environment()
        })
    }
}