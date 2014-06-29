module.exports = {
    _options: {
        failOnError: true,
        stdout: true
    },
    debug_ios: {
        command: 'cd cordova && cordova build ios && cordova emulate ios'
    },
    debug_android: {
        command: 'cd cordova && cordova build android && cordova run android'
    }/*,
    debug_blackberry10: {
        command: 'cordova build blackberry10 && cordova emulate blackberry10'
    }*/
}