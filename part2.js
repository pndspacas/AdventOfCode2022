const data = async () => {
const response = await fetch ("https://adventofcode.com/2022/day/1/input")
const text = await response.text();

const puzzleDate = await data()


const getSumOfGroup = (group) =>
  group
    .split("\n")
    .map(Number)
    .reduce((acc, c) => acc + c, 0);

const numberGroups = sampleInput.split("\n\n");

const groupSums = numberGroups.map(getSumOfGroup);

const sorted = groupSums.sort((a, b) => b - a);
const sliced = sorted.slice(0, 3);

const lastArray = sliced.reduce((acc, c) => acc + c);
