//bfs
var wordBreak = function (s, wordDict) {
  const dict = new Set(wordDict);
  const visited = new Set();

  let q = [0];

  while (q.length) {
    const start = q.shift();

    if (!visited.has(start)) {

      for (let end = start + 1; end <= s.length; end++) {
        let word = s.slice(start, end);
        if (dict.has(word)) {
          if (end == s.length) {
            return true;
          }

          q.push(end);
        }
      }
    }
    visited.add(start)
  }
  return false;
};
