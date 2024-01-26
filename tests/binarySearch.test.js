const binarySearch = require("../tasks/binarySearch");

const testData = [
  {
    array: [1, 2, 3, 4, 5, 6, 7],
    element: 8,
    assert: -1,
  },
  {
    array: [],
    element: 1,
    assert: -1,
  },
  {
    array: [1],
    element: 1,
    assert: 0,
  },
  {
    array: [1],
    element: 0,
    assert: -1,
  },
  {
    array: [1, 2],
    element: 1,
    assert: 0,
  },
  {
    array: [1, 2, 3],
    element: 2,
    assert: 1,
  },
  {
    array: [1, 2, 3, 4, 5, 6],
    element: 2,
    assert: 1,
  },
  {
    array: [1, 2, 3, 4, 5, 6],
    element: 4,
    assert: 3,
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7],
    element: 4,
    assert: 3,
  },
  {
    array: [1, 2, 3, 4, 5, 6],
    element: 1,
    assert: 0,
  },
  {
    array: [1, 2, 3, 4, 5, 6],
    element: 6,
    assert: 5,
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7],
    element: 7,
    assert: 6,
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7],
    element: 10,
    assert: -1,
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7],
    element: -10,
    assert: -1,
  },
];

for (let item of testData) {
  let element = item.element;
  let array = item.array;
  let assert = item.assert;

  test(`find of ${element} in [${array}] should return ${assert}`, () =>
    expect(binarySearch(array, element)).toBe(assert));
}
