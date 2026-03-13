'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

/**
 * Hash a password using bcrypt.
 * @param {string} password - The password to hash.
 * @returns {Promise<string>} - The hashed password.
 */
async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

/**
 * Generate a JSON Web Token (JWT).
 * @param {Object} user - The user object to include in the token.
 * @param {string} secret - The secret key to sign the token.
 * @param {Object} options - Options for token generation.
 * @returns {string} - The generated JWT.
 */
function generateToken(user, secret, options) {
    return jwt.sign(user, secret, { ...options });
}

/**
 * Generate a secure random code (for email verification, etc).
 * @param {number} length - The length of the code to generate.
 * @returns {string} - The generated code.
 */
function generateCode(length) {
    return crypto.randomBytes(length).toString('hex');
}

module.exports = {
    hashPassword,
    generateToken,
    generateCode
};