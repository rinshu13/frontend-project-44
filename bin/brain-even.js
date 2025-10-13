#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { runGame } from '../src/engine.js';
import evenGame from '../src/games/even.js';

const main = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  runGame(evenGame, playerName);
};

main();
