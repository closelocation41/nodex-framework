module.exports = {
  async up(db) {
    await db.collection('album').insertMany([{artist: 'The Beatles'}]);
  },

  async down(db) {
    await db.collection('album').deleteMany({artist: 'The Beatles'});
  },
};