import sinon from 'sinon'

var PlayerFramework = function () {
    function PlayerFramework() {
    }
    PlayerFramework.registerDeviceFactory = function (deviceFactory) {
        return "register device ..."
    };
    Object.defineProperty(PlayerFramework, "player", {
        get: function () {
            return "player ...";
        },
        enumerable: true,
        configurable: true
    });

    return PlayerFramework;
}();

describe('Country', () => {
    it('XXX', () => {
        console.log(PlayerFramework.registerDeviceFactory())
        console.log(PlayerFramework.player)
        sinon.stub(PlayerFramework, 'registerDeviceFactory').returns("registerDeviceFactory stub")
        console.log(PlayerFramework.registerDeviceFactory())
    })
});