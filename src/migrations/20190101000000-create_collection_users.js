module.exports = {
    async up(db) {
      await db.collection('users').insertMany([{
        username: 'admin',
        password: 'Admin@123',
        email: 'admin@gmail.com',
        createdBy: 'admin',
        createdOn: Date.now(),
        modifiedBy: '',
        modifiedOn: Date.now()
      }]);
    },
  
    async down(db) {
      await db.collection('users').deleteMany({email: 'admin@gmail.com'});
    },
  };