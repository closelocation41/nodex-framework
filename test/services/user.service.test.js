const chai = require('chai');
const sinon = require('sinon');
const bcrypt = require('bcrypt');
const { getUsers, createUser, updateUser } = require('../../src/services/user.service');
const { UserModel } = require('../../src/models/user.model');
const { ERROR } = require('../../src/config/error.config');
const userHelper = require('../../src/helpers/user.helper');
const { expect } = chai;

describe('User Service', () => {
  describe('getUsers', () => {
    it('should return users with the selected fields', async () => {
      const mockReq = { query: { limit: 5, offset: 0 } };
      const mockUsers = [{ username: 'admin', email: 'admin@example.com' }];
      
      sinon.stub(UserModel, 'find').returns({ select: sinon.stub().returns({ limit: sinon.stub().returns({ skip: sinon.stub().returns(mockUsers) }) }) });

      const users = await getUsers(mockReq);
      expect(users).to.deep.equal(mockUsers);
      
      UserModel.find.restore();
    });
  });

  describe('createUser', () => {
    it('should create a new user when email is not taken', async () => {
      const mockBody = { email: 'newuser@example.com', username: 'newuser', password: 'password123' };
      const mockUser = { email: 'newuser@example.com', username: 'newuser', password: '$2b$10$hashedpassword' };

      sinon.stub(userHelper, 'getUserDetails').resolves([]);
      sinon.stub(bcrypt, 'hash').resolves('$2b$10$hashedpassword');
      sinon.stub(UserModel, 'insertMany').resolves([mockUser]);

      const result = await createUser(mockBody);
      expect(result).to.deep.equal([mockUser]);

      userHelper.getUserDetails.restore();
      bcrypt.hash.restore();
      UserModel.insertMany.restore();
    });

    it('should throw an error if email already exists', async () => {
      const mockBody = { email: 'existinguser@example.com', username: 'existinguser', password: 'password123' };

      sinon.stub(userHelper, 'getUserDetails').resolves([{ email: 'existinguser@example.com' }]);

      try {
        await createUser(mockBody);
      } catch (error) {
        expect(error).to.equal(ERROR.EXIST);
      }

      userHelper.getUserDetails.restore();
    });
  });

  describe('updateUser', () => {
    it('should update user details successfully', async () => {
      const mockReq = { params: { id: '123' }, body: { username: 'updatedUser', email: 'updated@example.com' } };
      const mockUser = { _id: '123', username: 'oldUser', email: 'old@example.com' };
      const updatedUser = { _id: '123', username: 'updatedUser', email: 'updated@example.com' };

      sinon.stub(userHelper, 'getUserDetails').resolves([mockUser]);
      sinon.stub(UserModel, 'findByIdAndUpdate').resolves(updatedUser);

      const result = await updateUser(mockReq);
      expect(result).to.deep.equal(updatedUser);

      userHelper.getUserDetails.restore();
      UserModel.findByIdAndUpdate.restore();
    });

    it('should throw an error if user not found', async () => {
      const mockReq = { params: { id: '123' }, body: { username: 'updatedUser', email: 'updated@example.com' } };

      sinon.stub(userHelper, 'getUserDetails').resolves([]);
      
      try {
        await updateUser(mockReq);
      } catch (error) {
        expect(error).to.equal(ERROR.NOT_FOUND);
      }

      userHelper.getUserDetails.restore();
    });
  });
});
