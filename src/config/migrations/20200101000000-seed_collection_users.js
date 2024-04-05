module.exports = {
    async up(db) {
      return await db.collection('users').insertMany([
        {
          email: 'testuser@test.com',
          password: 'test_password',
          username: 'Test User',
        }
      ], {})
    },
    async down(db) {
      return await db.collection('users').deleteMany({})
    },
  }