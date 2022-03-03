import 'mocha'
import { expect } from 'chai'
import DeviceHandler from '@utils/data/DeviceHandler'

describe('Device Test', function () {
    it('Get device fingerprints', async function () {
       let fingerprints:string = await DeviceHandler.getDeviceId();
       expect(fingerprints).to.be.a("d");
    })
})