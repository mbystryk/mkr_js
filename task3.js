// Differences between operators spread and rest, examples of their use

// spread:
// is (...)
// is used to unpack elements of an iterable into places where multiple elements/arguments are expected.
// example
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2); output: [1, 2, 3, 4, 5]
//
//
// rest:
// is used to collect multiple elements into a single entity, such as an array or object.
// example
// const [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // Output: 1
// console.log(rest);  // Output: [2, 3, 4]
// 