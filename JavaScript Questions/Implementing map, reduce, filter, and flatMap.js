const arr = [1, 2, 3, 4, 5];

// Map
const mapped = arr.map(x => x * 2);
console.log('Map:', mapped);

// Reduce
const reduced = arr.reduce((sum, x) => sum + x, 0);
console.log('Reduce:', reduced);

// Filter
const filtered = arr.filter(x => x % 2 === 0);
console.log('Filter:', filtered);

// FlatMap
const nested = [[1, 2], [3, 4], [5]];
const flatMapped = nested.flatMap(x => x.map(y => y * 2));
console.log('FlatMap:', flatMapped);
