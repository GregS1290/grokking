/*
Words Concatenation

Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".

Input: String="catcatfoxfox", Words=["cat", "fox"]
Output: [3]
Explanation: The only substring containing both the words is "catfox".

*/

function wordsConcatenation(str, words) {}

console.log(wordsConcatenation('catfoxcat', ['cat', 'fox'])); // [0,3]

console.log(wordsConcatenation('catcatfoxfox', ['cat', 'fox'])); // [3]
