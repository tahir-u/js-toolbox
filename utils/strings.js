
function isEmpty(string) {
  if (typeof string === 'undefined' || (string === undefined || string === null)) {
    return true;
  }

  return string.length === 0 || (typeof string === 'undefined');
}

// case insensitive
function hasConsecutiveSubstring(string, substring) {
  if (isEmpty(string) || isEmpty(substring)) {
    return false;
  }

  const a = string.toLowerCase();
  const b = substring.toLowerCase();

  return a.indexOf(b) !== -1;
}

function hasConsecutiveCaseSensitiveSubstring(string, substring) {
  if (isEmpty(string) || isEmpty(substring)) {
    return false;
  }

  return string.indexOf(substring) !== -1;
}

module.exports = {
  isEmpty,
  hasConsecutiveSubstring,
  hasConsecutiveCaseSensitiveSubstring
};