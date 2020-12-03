import { checkForTree, countTrees } from './main';

describe('part 1: check for trees 3 right and 1 row down', () => {
  describe('Check tree validation', () => {
    it('should return true if there is a tree', () => {
      expect(checkForTree('#...#...#..', 1)).toBe(true);
    });
    it('should return false if there is not a tree', () => {
      expect(checkForTree('#...#...#..', 2)).toBe(false);
    });

    it('should return false if entire row is clear', () => {
      expect(checkForTree('...........', 9)).toBe(false);
    });

    it('should return true if entire row is trees', () => {
      const string = '#########'
      const length = string.length
      const c = string.charAt(9)
      console.log(`length of ${string} is ${length}`)
      console.log('character: ', c)

      expect(checkForTree('#########', 9)).toBe(true);
    });
  });

  describe('check counting trees', () => {
    const mapArray = [
      '..##.......',
      '#...#...#..',
      '.#....#..#.',
      '..#.#...#.#',
      '.#...##..#.',
      '..#.##.....',
      '.#.#.#....#',
      '.#........#',
      '#.##...#...',
      '#...##....#',
      '.#..#...#.#',
    ];

    const solidMap = [
      '#########',
      '#########',
      '#########',
      '#########',
      '#########',
      '#########',
      '#########',
    ]

    const treeFreeMap = [
      '.............',
      '.............',
      '.............',
      '.............',
      '.............',
      '.............',
      '.............',
      '.............',
    ]

    const unobstructedMap =[
      '#########',
      '###.#####',
      '######.##',
      '.########',
      '###.#####',
      '######.##',
      '.########',
    ]

    it('should return 7 for sample array', () => {
      expect(countTrees(mapArray)).toBe(7);
    });

    it('should return 6 for solid array', () => {
      expect(countTrees(solidMap)).toBe(6);
    })

    it('should return 0 for tree free map', () => {
      expect(countTrees(treeFreeMap)).toBe(0);
    })

    it('should return 0 for luckily unobstructed map', () => {
      expect(countTrees(unobstructedMap)).toBe(0);
    })
  });
});
