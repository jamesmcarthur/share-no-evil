const badWords = ['Trump', 'TRUMP', 'trump', 'terrorist', 'terrorism'];

// Hide any leaf nodes which contain any of the bad words
const leafSelector = badWords.map(word => `:contains('${word}')`).join(', ');
$(leafSelector).filter(':not(:has(*))').addClass();

const imgSelector = badWords.map(word => `img[src*=${word}]`).join(', ');
$(imgSelector).css('visibility', 'hidden');

const linkSelector = badWords.map(word => `a[href*=${word}]`).join(', ');
console.error(linkSelector);
$(linkSelector).css('visibility', 'hidden');