import { checkForTree, countTrees, productOfTreeCounts } from './main';

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
];

const treeFreeMap = [
  '.............',
  '.............',
  '.............',
  '.............',
  '.............',
  '.............',
  '.............',
  '.............',
];

const unobstructedMap = [
  '#########',
  '###.#####',
  '######.##',
  '.########',
  '###.#####',
  '######.##',
  '.########',
];

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
      expect(checkForTree('#########', 9)).toBe(true);
    });
  });

  describe('check counting trees', () => {
    it('should return 7 for sample array', () => {
      expect(countTrees(mapArray)).toBe(7);
    });

    it('should return 6 for solid array', () => {
      expect(countTrees(solidMap)).toBe(6);
    });

    it('should return 0 for tree free map', () => {
      expect(countTrees(treeFreeMap)).toBe(0);
    });

    it('should return 0 for luckily unobstructed map', () => {
      expect(countTrees(unobstructedMap)).toBe(0);
    });

    it('should return 2 for slope of 1 right 1 down', () => {
      expect(countTrees(mapArray, 1, 1)).toBe(2);
    });

    it('should return 3 for slope of 5 right 1 down', () => {
      expect(countTrees(mapArray, 5, 1)).toBe(3);
    });

    it('should return 4 for slope of 7 right 1 down', () => {
      expect(countTrees(mapArray, 7, 1)).toBe(4);
    });

    it('should return 3 for slope of 1 right 2 down', () => {
      expect(countTrees(mapArray, 1, 2)).toBe(2);
    });
  });

  describe('check the product of several slope counts', () => {
    const slopesArray = [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ];

    it('should return 336 for given slopes on sample map', () => {
      expect(productOfTreeCounts(slopesArray, mapArray)).toBe(336);
    });
    it('should return 42 for first three rows', () => {
      expect(
        productOfTreeCounts(
          [
            [1, 1],
            [3, 1],
            [5, 1],
          ],
          mapArray
        )
      ).toBe(42);
    });

    it('should return 14 for first two rows', () => {
      expect(
        productOfTreeCounts(
          [
            [1, 1],
            [3, 1],
          ],
          mapArray
        )
      ).toBe(14);
    });
  });
});
