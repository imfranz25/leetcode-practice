function anagram(p1, p2) {
  // Remove any non-alphabetic characters and convert to lowercase
  const normalize = (str) => str.replace(/[^\w]/g, "").toLowerCase();

  // Sort the characters of the string
  const sorted = (str) => normalize(str).split("").sort().join("");

  // Compare the sorted strings
  return sorted(p1) === sorted(p2);
}

const p1 = "anagram ";
const p2 = "nagaram";

console.log("p1:", p1);
console.log("p2:", p2);
console.log("Are they anagrams?", anagram(p1, p2));
