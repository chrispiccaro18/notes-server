require('../connect-db');
const request = require('supertest');
const app = require('../../lib/app');

describe('notes route tests', () => {
  const testNote = {
    title: 'test title',
    body: 'test body'
  };

  it('can create a note', async() => {
    const res = await request(app)
      .post('/api/v1/notes')
      .send(testNote);
    
    expect(res.body).toEqual({
      _id: expect.any(String),
      __v: 0,
      title: 'test title',
      body: 'test body'
    });
  });

  it('can get all notes', async() => {
    await request(app)
      .post('/api/v1/notes')
      .send(testNote);
    
    const res = await request(app)
      .get('/api/v1/notes');

    expect(res.body).toEqual([{
      _id: expect.any(String),
      __v: 0,
      title: 'test title',
      body: 'test body'
    }]);
  });

  it('can get a note by id', async() => {
    const noteRes = await request(app)
      .post('/api/v1/notes')
      .send(testNote);
    
    const res = await request(app)
      .get(`/api/v1/notes/${noteRes.body._id}`);

    expect(res.body).toEqual({
      _id: expect.any(String),
      __v: 0,
      title: 'test title',
      body: 'test body'
    });
  });
});
