const countOccurencesInString = require("./script.js");

const testCases = [
	{
		testString: "hello world",
		testChar: "o",
		expectedResult: 2
	},
	{
		testString: "myFavDay",
		testChar: "a",
		expectedResult: 2
	},
	{
		testString: "countoccurences",
		testChar: "o",
		expectedResult: 2
	},
	{
		testString: "color slurp is the best app",
		testChar: " ",
		expectedResult: 5
	}
];

for (const test of testCases) {
	const result = countOccurencesInString(test.testString, test.testChar);
	if (result === test.expectedResult) {
		console.log("Passed case ✅")
	}
	else {
		console.error(`Failed case ${test.testString}`);
		console.error(`Looking for occurences of ${test.testChar}`);
		console.error(`Expected ${test.expectedResult}, recieved, ${result}`)
	}
}

countOccurencesInString();