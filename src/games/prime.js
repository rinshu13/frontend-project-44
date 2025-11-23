import { getRandomInt, isPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const number = getRandomInt(2, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

export default { description, generateRound };
