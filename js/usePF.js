// import PlayerFramework from './PlayerFramework'
import { PlayerFramework } from '@sky-uk-ott/client-lib-js-ctv-framework-main';
import { DeviceInfo } from '@sky-uk-ott/client-lib-js-player-addons-common-player';

export default class UsePF {

  static testInit() {
    console.log(`USePF testInit`)
    // PlayerFramework.initialise();
  }

  static testRegister() {
    console.log(`USePF test register`)
    PlayerFramework.registerDeviceFactory()
  }

  static create() {
    console.log(`UsePF test create`)
    return PlayerFramework.deviceInfo.initialise()
  }
}