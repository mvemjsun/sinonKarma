import { expect } from 'chai';
import sinon from 'sinon'
import {CountryRegister} from '../js/countryRegister'
import {RegisterUtil} from '../js/util'

describe('RegisterUtil', () => {

    afterEach(() => {
        sinon.restore()
    })

    it('should call add to register when country not available', () => {
        sinon.stub(CountryRegister, 'instance').returnsThis()
        sinon.stub(CountryRegister, 'hasCountry').returns(false)
        const addToRegisterStub = sinon.stub(CountryRegister, 'addToRegister')
        RegisterUtil.add("USA")
        expect(addToRegisterStub.callCount).to.equal(1)
    })

    it('should not call add to register when country available', () => {
        sinon.stub(CountryRegister, 'instance').returnsThis()
        sinon.stub(CountryRegister, 'hasCountry').returns(true)
        const addToRegisterStub = sinon.stub(CountryRegister, 'addToRegister')
        RegisterUtil.add("USA")
        expect(addToRegisterStub.callCount).to.equal(0)
    })

    it('should not call add to register when country name empty', () => {
        sinon.stub(CountryRegister, 'instance').returnsThis()
        sinon.stub(CountryRegister, 'hasCountry').returns(false)
        const addToRegisterStub = sinon.stub(CountryRegister, 'addToRegister')
        RegisterUtil.add("")
        expect(addToRegisterStub.callCount).to.equal(0)
    })

    it('should not call add to register when country name undefined', () => {
        sinon.stub(CountryRegister, 'instance').returnsThis()
        sinon.stub(CountryRegister, 'hasCountry').returns(false)
        const addToRegisterStub = sinon.stub(CountryRegister, 'addToRegister')
        RegisterUtil.add(undefined)
        expect(addToRegisterStub.callCount).to.equal(0)
    })
})