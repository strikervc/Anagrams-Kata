var fs = require('fs');
readline = require('readline');

function sortStrChars(str) {
  if (!str) {
      return;
  }
  str = str.split('');
  str = str.sort();
  str = str.join('');
  return str;
}

function getGroupedAnagrams(file) {
  var words = file.split(" ");
  const anagrams = {}; 
  words.forEach((word)=>{
      const sortedWord = sortStrChars(word);
      if (anagrams[sortedWord]) {
          return anagrams[sortedWord].push(word);
      }
      anagrams[sortedWord] = [word];
  });
  return anagrams;
}

var reader = readline.createInterface({
  input: fs.createReadStream('wordlist.txt')
});

let sets = 0;
reader.on('line', function (line) {
  const groupedAnagrams = getGroupedAnagrams(line);
  for(const sortedWord in groupedAnagrams){
      var chain = groupedAnagrams[sortedWord].toString().split(',');
      if (chain[1] != null){
      console.log(groupedAnagrams[sortedWord].toString());
      sets++;
      }
    }
  
console.log(sets);
});

