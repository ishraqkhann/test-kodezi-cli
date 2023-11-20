import Animal, { Phylum, Dog } from './ex7-classes';
/**
 * Represents a Cat, which is a specific type of Animal.
 */
class Cat extends Animal {
    /**
     * Creates a new instance of Cat.
     */
    constructor() {
        super();
    }
}
const myPet = new Dog('Barky');