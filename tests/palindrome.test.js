const palindrome = require("../tasks/palindrome");

const testSet = [
  {
    str: "plaindrome",
    assert: false,
  },
  {
    str: "qwertyytrewq",
    assert: true,
  },
  {
    str: "qwertyvytrewq",
    assert: true,
  },
  {
    str: "",
    assert: false,
  },
  {
    str: "gg",
    assert: true,
  },
  {
    str: "gag",
    assert: true,
  },
];

for (let item of testSet) {
  const { str, assert } = item;
  test(`if word "${str}" is palindrome expected to be ${assert}; func returned `, () => {
    expect(palindrome(str)).toBe(assert);
  });
}
