#!/usr/bin/env ts-node

import {
  SelfIdResponse,
  VERSION,
}           from '@chatie/grpc'

async function main () {
  if (VERSION === '0.0.0') {
    throw new Error('version should be set before publishing')
  }

  const selfIdResponse = new SelfIdResponse()
  selfIdResponse.setId('id')
  console.info(`@chatie/grpc v${VERSION} smoking test passed.`)
  return 0
}

main()
  .then(process.exit)
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
