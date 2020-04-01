import { db } from 'src/lib/db'

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function generateToken(username, password) {
  const pw = password
  if (bcrypt.compareSync(pw, password)) {
    const jwtPayload = {
      username: username,
    }
    const jwtSecret = require('./secret.js').jwtSecret

    const jwtOptions = {
      expiresIn: '1d',
    }
    return jwt.sign(jwtPayload, jwtSecret, jwtOptions)
  }
}

const hash = (pw) => {
  return bcrypt.hashSync(pw, 10)
}

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  input.password = hash(input.password)
  return db.user.create({
    data: input,
  })
}

export const loginUser = ({ username, password }) => {
  generateToken(username, password)
  return db.user.findOne({
    where: { username },
  })
}
