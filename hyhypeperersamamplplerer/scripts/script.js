//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
// const Diagnostics = require('Diagnostics');
// const Scene = require('Scene');

// Load in the required modules
const Instruction = require('Instruction');
const Time = require('Time');

// Define a boolean that will be true until 5 seconds has passed
var show = Time.ms.lt(5000);

// Use the boolean to show the instruction
Instruction.bind(show, 'open_mouth');
