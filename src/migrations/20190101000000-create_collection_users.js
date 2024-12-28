const bcrypt = require('bcrypt');

module.exports = {
  async up(db) {
    // Define the plain text password
    const plainPassword = 'Admin@123'; // Replace with the password you want

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(plainPassword, 10); // 10 is the salt rounds

    // Insert the new admin user with the hashed password
    await db.collection('users').insertMany([{
      username: 'admin',
      password: hashedPassword,
      email: 'admin@gmail.com',
      createdBy: 'admin',
      createdOn: Date.now(),
      modifiedBy: '',
      modifiedOn: Date.now()
    }]);
  },

  async down(db) {
    // Delete the admin user when rolling back the migration
    await db.collection('users').deleteMany({ email: 'admin@gmail.com' });
  },
};
