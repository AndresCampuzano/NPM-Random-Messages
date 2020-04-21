const messages = [
	'andres',
	'ana',
	'jessica',
	'diego',
	'laura',
	'carolina',
	'paulina',
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

module.exports = { randomMsg };
