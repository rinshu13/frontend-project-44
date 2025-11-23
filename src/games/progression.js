import { getRandomInt } from '../utils.js'

const description = 'What number is missing in the progression?'
const PROGRESSION_LENGTH = 10

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step)
}

const generateRound = () => {
  const start = getRandomInt(1, 50)
  const step = getRandomInt(2, 10)
  const progression = generateProgression(start, step, PROGRESSION_LENGTH)

  const hiddenIndex = getRandomInt(0, PROGRESSION_LENGTH - 1)
  const correctAnswer = String(progression[hiddenIndex])

  const question = progression
    .map((num, i) => (i === hiddenIndex ? '..' : String(num)))
    .join(' ')

  return { question, correctAnswer }
}

export default { description, generateRound }
