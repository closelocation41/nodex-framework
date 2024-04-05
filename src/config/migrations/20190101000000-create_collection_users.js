module.exports = {
    async up(db) {
      return await db.creationCollection('users', {
        validator: {
          $jsonSchema: {
            bsonType: 'object',
            required: [ 'email', 'password', 'username' ],
            properties: {
              email: {
                bsonType: 'string',
                pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',
              },
              password: {
                bsonType: 'string',
              },
              username: {
                bsonType: 'string',
              },
            },
          },
        },
        validationLevel: 'strict',
        validationAction: 'error',
      })
    },
    async down(db) {
      return await db.collection('users').drop()
    },
  }