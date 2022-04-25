// mistake: doesn't lowercase the rest of the word
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const titleCase = (input, exclusion) => {
  // fix: exclusion might be undefined
  const exclusions = exclusion.split(' ');

  return input.split(' ').map((word) => {
    // mistake: should always capitalize 1st word
    if (exclusions.includes(word)) {
      return word;
    }

    return capitalize(word);
  });
};

module.exports = titleCase;
