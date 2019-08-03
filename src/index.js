const https = require('https')

const d = (name, options) => {
  return new Promise((resolve, reject) => {
    if (!name || typeof name !== 'string') {
      return reject('The first argument "name" should be a valid string')
    }
    https.get(`https://registry.npmjs.com/${name}`, (response) => {
      let rawResponse = ''
      response.on('data', (chunk) => {
        rawResponse += chunk
      })
      response.on('end', () => {
        try {
          const data = JSON.parse(rawResponse)
          if (data && !data.error) {
            if (options && options.full) {
              return resolve(data)
            }
            return resolve(true)
          }
          return resolve(false)
        } catch (error) {
          return reject('Unexpected error')
        }
      })
    })
      .on('error', (error) => {
        if (error && error.error && error.error === 'Not found') {
          return resolve(false)
        }
        return reject('Unexpected error')
      })
  })
}
d('neura', {full: true})
  .then((result) => {
    console.log({result})
  })
  .catch((s) => {
    console.log(s)
  })

module.exports = d
