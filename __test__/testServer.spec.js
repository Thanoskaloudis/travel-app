import "babel-polyfill";

import { app } from '../src/server/index'
const req = require('supertest')

it('should send index.html from dist folder as response', async done => {
  const res = await req(app)
  .get('/')
  .send('../dist/index.html')
  expect(res.status).toBe(200)
  done()
})