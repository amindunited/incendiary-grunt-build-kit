module.exports = {
    development : {
      path: 'http://127.0.0.1:<%= ports.development %>'
    },
    staging : {
      path: 'http://127.0.0.1:<%= ports.staging %>'
    },
    testing : {
      path: 'http://127.0.0.1:<%= ports.testing %>'
    }
}