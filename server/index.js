const ip = require('ip')
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')

const host = config.server.host || process.env.HOST || '127.0.0.1'
const port = config.server.port || process.env.PORT || 3000
app.set('port', port)

config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  let displayHost = rectifyHostIpAddress(host)
  consola.ready({
    message: `Server listening on http://${displayHost}:${port}`,
    badge: true
  })
}

start()

/**
 * Created to resolve issue #4
 *
 * @param host
 * @returns {string}
 */
function rectifyHostIpAddress(host) {
  if (host === '0.0.0.0') {
    return ip.address()
  }
  return host
}
