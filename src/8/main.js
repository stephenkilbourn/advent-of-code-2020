const sampleInstructionSet = [
  'nop +0',
  'acc +1',
  'jmp +4',
  'acc +3',
  'jmp -3',
  'acc -99',
  'acc +1',
  'jmp -4',
  'acc +6',
];

const parseInstructions = (rawInput) => {
  let instructions = rawInput
    .filter((line) => line)
    .map((line) => ({
      operation: line.slice(0, 3),
      arguement: parseInt(line.slice(4)),
      visited: false,
    }));
  return instructions;
};

const runInstructions = (instructions) => {
  let accumulator = 0;
  let index = 0;

  while (1) {
    if (index === instructions.length) {
      return { accumulator, terminates: true };
    }

    const instruction = instructions[index];
    if (instruction.visited) {
      return { accumulator, terminates: false };
    }

    instruction.visited = true;

    switch (instruction.operation) {
      case 'nop': {
        index++;
        break;
      }

      case 'acc': {
        accumulator += instruction.arguement;
        index++;
        break;
      }

      case 'jmp': {
        index += instruction.arguement;
        break;
      }
    }
  }
};

const findBrokenInstructions = (instructions) => {
  let accumulator = 0;
  for (let index = 0; index < instructions.length; index++) {
    //if operation at thiis index is nop change to jmp. if jmp to nop
    if (instructions[index].operation === 'nop') {
      let testInstructions = JSON.parse(JSON.stringify(instructions));
      testInstructions[index].operation = 'jmp';
      const testResult = runInstructions(testInstructions);
      if (testResult.terminates) {
        console.log(
          'terminated on changing',
          instructions[index],
          'with accumulator at',
          testResult.accumulator
        );
        accumulator = testResult.accumulator;
        break;
      }
    } else if (instructions[index].operation === 'jmp') {
      let testInstructions = JSON.parse(JSON.stringify(instructions));
      testInstructions[index].operation = 'nop';
      const testResult = runInstructions(testInstructions);
      if (testResult.terminates) {
        console.log(
          'terminated on changing',
          instructions[index],
          'with accumulator at',
          testResult.accumulator
        );
        accumulator = testResult.accumulator;
        break;
      }
    }
  }
  return accumulator;
};

export { parseInstructions, runInstructions, findBrokenInstructions };
