var simplifyPath = function (path) {
  let paths = path.split('/');
  let directories = [];
  let result = ['/'];

  for (let i = 0; i < paths.length; i++) {
    if (paths[i]) {
      directories.push(paths[i]);
    }
  }

  for (let j = 0; j < directories.length; j++) {
    if (directories[j] === '..' && result.length == 1) {
      continue;
    } else if (directories[j] !== '..' && directories[j] !== '.') {
      result.push(`${directories[j]}/`);
    } else if (directories[j] === '..') {
      result.pop();
    }
  }

  if (result.length == 1) {
    return result.join('');
  } else {

    let lastele = result[result.length - 1];
    lastele = lastele.slice(0, lastele.length - 1);
    result.pop();
    result.push(lastele);

    return result.join('');
  }
};
