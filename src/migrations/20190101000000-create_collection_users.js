module.exports = {
    async up(db) {
      await db.collection('users').insertMany([{artist: 'The Beatles'}]);
    },
  
    async down(db) {
      await db.collection('users').deleteMany({artist: 'The Beatles'});
    },
  };