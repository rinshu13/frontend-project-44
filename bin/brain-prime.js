#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { runGame } from '../src/engine.js'
import primeGame from '../src/games/prime.js'

const main = () => {
  console.log('Welcome to the Brain Games!')
  const playerName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${playerName}!`)

  runGame(primeGame, playerName)
}

main()
