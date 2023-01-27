const puzzleInput = async () => {
  const response = await fetch("https://adventofcode.com/2022/day/1/input");
  const text = await response.text();
  return text;
};

const puzzleData = await puzzleInput();


const getSumOfGroup = (group) =>
  group
    .split("\n")
    .map(Number)
    .reduce((acc, c) => acc + c, 0);

const numberGroups = puzzdleData.split("\n\n");

const groupSums = numberGroups.map(getSumOfGroup);
