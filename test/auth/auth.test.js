const chai = require('chai');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createToken } = require('../../src/middlewares/auth.middleware');
const { UserModel } = require('../../src/models/user.model');
const { ERROR, AUTH } = require('../../src/config');

const { expect } = chai;

describe('Auth Controller - createToken', () => {
  let mockRequest, mockResponse, mockNext;

  beforeEach(() => {
    mockRequest = {
      body: {
        username: 'admin',
        password: 'adminpassword',
      },
    };

    mockResponse = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    mockNext = sinon.spy();
  });

  it('should return a token when user is found and password matches', async () => {
    const user = {
      _id: '1234567890',
      username: 'admin',
      password: '$2b$10$hashedpassword', // bcrypt hash
    };

    sinon.stub(UserModel, 'findOne').resolves(user);
    sinon.stub(bcrypt, 'compare').resolves(true);
    sinon.stub(jwt, 'sign').returns('mocked-jwt-token');

    await createToken(mockRequest, mockResponse, mockNext);

    expect(bcrypt.compare.calledWith('adminpassword', user.password)).to.be.true;
    expect(jwt.sign.calledWith({ userId: user._id }, AUTH.KEY, { expiresIn: AUTH.TIMEOUT })).to.be.true;
    expect(mockResponse.status.calledWith(200)).to.be.true;
    expect(mockResponse.json.calledWith({ token: 'mocked-jwt-token' })).to.be.true;

    UserModel.findOne.restore();
    bcrypt.compare.restore();
    jwt.sign.restore();
  });

  // Additional test cases go here...
});
