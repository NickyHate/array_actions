const go = [
  { id: 1 },
  { name: "nikita" },
  { surname: "tokarev" },
  { age: 22 },
].reduce((acc, rec, index, array) => {
  console.log(index, acc, rec);
  return { ...acc, ...rec, [`Size ${index}`]: index };
}, {});

console.log(go);
