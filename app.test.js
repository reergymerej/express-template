import app from './app.js'
import request from 'supertest'

describe('GET /', () => {
  it('should be OK', async () => {
    await request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect(/PROJECT_NAME/)
  })
})
