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

class LuggageTree {
  constructor(rule_array) {
    this.bags_lookup = this.bagsLookup(rule_array);
    this.rules = this.rulesLookup(rule_array);
  }

  bagsLookup(rule_array) {
    const regex = new RegExp(/(\d+) (\w+ \w+)/);
    let bags_lookup = {};
    for (let rule of rule_array) {
      let [parent, children] = rule.split(' bags contain ');
      if (!bags_lookup[parent]) {
        bags_lookup[parent] = new Bag({ name: parent });
      }
      if (children.includes('no other')) {
        continue;
      }
      children = children.split(',');
      for (let child of children) {
        child = child.replace(/\sbags?/g, '');
        let [, count, name] = regex.exec(child);
        count = parseInt(count);
        let bag = bags_lookup[name];
        if (!bag) {
          bag = new Bag({ name });
          bags_lookup[name] = bag;
        }
        bag.addParent(bags_lookup[parent]);
      }
    }
    return bags_lookup;
  }

  rulesLookup(rule_array) {
    let bags_lookup = {};
    const regex = new RegExp(/(\d+) (\w+ \w+)/);

    for (let rule of rule_array) {
      let [parent, children] = rule.split(' bags contain ');
      if (!bags_lookup[parent]) {
        bags_lookup[parent] = [];
      }
      if (children.includes('no other')) {
        continue;
      }
      children = children.split(', ');
      for (let child of children) {
        let [, count, name] = regex.exec(child);
        count = parseInt(count);
        bags_lookup[parent].push(new Bag({ name, count }));
      }
    }
    return bags_lookup;
  }

  countChildrenInBag(bagName) {
    let rules = this.rules[bagName];

    let childrenCount = 0;
    for (let bag of rules) {
      let { name, count } = bag;
      childrenCount += count + count * this.countChildrenInBag(name);
    }
    return childrenCount;
  }
}

class Bag {
  constructor({ name, count }) {
    this.name = name;
    this.count = count;
    this.parent_bags = [];
  }

  addParent(parent_bag) {
    this.parent_bags.push(parent_bag);
  }

  countUniqueParents() {
    let lookup = this._getUniqueAncestosLookup({});
    return Object.keys(lookup).length;
  }

  _getUniqueAncestosLookup(lookup) {
    for (let parent of this.parent_bags) {
      lookup[parent.name] = parent;
      if (parent.parent_bags.length) {
        parent._getUniqueAncestosLookup(lookup);
      }
    }
    return lookup;
  }
}

import fs from 'fs';
import path from 'path';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n');

let luggage = new LuggageTree(input);
let shiney_gold = luggage.bags_lookup['shiny gold'];
console.log('Part One: count of shiney gold', shiney_gold.countUniqueParents());

let shiny_child_count = luggage.countChildrenInBag('shiny gold');
console.log(
  'Part Two: Total number of bags in a shiney gold',
  shiny_child_count
);
