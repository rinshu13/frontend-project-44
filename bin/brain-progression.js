#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { runGame } from '../src/engine.js';
import progressionGame from '../src/games/progression.js';

const main = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  runGame(progressionGame, playerName);
};

main();
