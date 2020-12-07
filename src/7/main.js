const testRule =
  'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags';

const testRuleArray = [
  'light red bags contain 1 bright white bag, 2 muted yellow bags.',
  'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
  'bright white bags contain 1 shiny gold bag.',
  'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
  'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
  'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
  'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
  'faded blue bags contain no other bags.',
  'dotted black bags contain no other bags.',
];

const createLuggageRules = (ruleArray) => {
  const ruleSet = {};

  ruleArray.forEach((rule) => {
    let outerColor = rule.split(' contain ')[0];

    let subRules = rule.split(' contain ')[1].split(',');

    if (subRules.includes('no other bags.')) {
      subRules.pop();
    }
    if (!ruleSet[outerColor]) {
      ruleSet[outerColor] = subRules;
    }
  });

  return ruleSet;
};

console.log('ruleArray', createLuggageRules(testRuleArray));

//get array of strings
// itereate each line
//split top bag (left side) contains rules (right side)
// if you see gold in that line's rules, increase count of gold
// if no gold seen, split bags on right by comma
// check for rule of sub bags
