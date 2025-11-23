import { getRandomInt, getGcd } from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'

const generateRound = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))
  return { question, correctAnswer }
}

export default { description, generateRound }
