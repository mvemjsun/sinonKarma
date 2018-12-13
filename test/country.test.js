import sinon from 'sinon'
import { expect } from 'chai';
import Country from '../js/country'

describe('Country', () => {

    let country

    afterEach(() => {
        sinon.restore()
    })

    beforeEach(() => {
    })

    it('constructor should create a new country with a name', () => {
        country = new Country("USA")
        expect(country.name).to.equal("USA")
    })
})