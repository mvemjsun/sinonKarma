import { expect } from 'chai';
import {CountryRegister} from '../js/CountryRegister'

describe('CountryRegister', () => {

    afterEach(() => {
        CountryRegister.instance().reset()
    })

    describe('instance', () => {
        it('should return the same instance of register always', () => {
            const instance1 = CountryRegister.instance()
            const instance2 = CountryRegister.instance()
            expect(instance1).to.equal(instance2)
        })
    })

    describe('addToRegister', () => {
        it('should add names to population register', () => {
            const instance = CountryRegister.instance()
            instance.addToRegister("Name1")
            instance.addToRegister("Name2")
            instance.addToRegister("Name3")
            const instance2 = CountryRegister.instance()
            instance2.addToRegister("Name4")
            expect(instance.register()).to.deep.equal([ 'Name1', 'Name2', 'Name3', "Name4" ])
        })
    })

    describe('remove', () => {
        it('should remove name from the register', () => {
            const instance = CountryRegister.instance()
            instance.addToRegister("Name1")
            instance.addToRegister("Name2")
            instance.addToRegister("Name3")

            instance.remove('Name2')
            expect(instance.register()).to.deep.equal([ 'Name1', 'Name3' ])
        })
    })
})