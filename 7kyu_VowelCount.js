// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this
// Kata (but not y).

// The input string will only consist of lower case letters
// and/or spaces.

function getCount(str) {
	var vowelsCount = str.split('').filter((vowel) => {
		return (
			vowel === 'e' ||
			vowel === 'a' ||
			vowel === 'i' ||
			vowel === 'o' ||
			vowel === 'u'
		);
	});
	return vowelsCount.length;
}
