const messages = [
	'It is a pretty good day',
	'Better now than tomorrow',
	'Thanks for code, you are building the future',
	'You make my day',
	'Are you still feeling in pain?',
	'I have nothing else to tell you',
	'Stop talking and lets code',
	'Are you ready to try #100dayscodechallenge',
	'Windows is better than Mac ( ._.)',
	'#NeverStopLearning',
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

module.exports = { randomMsg };
