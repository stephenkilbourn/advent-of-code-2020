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
  let currentIndex = 0;

  while (1) {
    if (currentIndex === instructions.length) {
      return accumulator;
    }

    const instruction = instructions[currentIndex];
    if (instruction.visited) {
      return accumulator;
    }

    instruction.visited = true;

    switch (instruction.operation) {
      case 'nop': {
        currentIndex++;
        break;
      }

      case 'acc': {
        accumulator += instruction.arguement;
        currentIndex++;
        break;
      }

      case 'jmp': {
        currentIndex += instruction.arguement;
        break;
      }
    }
  }
};

export { parseInstructions, runInstructions }
