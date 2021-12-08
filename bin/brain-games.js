#!/usr/bin/env node
import {greeting} from '../src/cli.js';
import gameEven from '../bin/brain-even.js';

const name = greeting();
const game = gameEven();

console.log(`${game}${name}!`);
