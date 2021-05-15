//require('dotenv').config();
const tmi = require('tmi.js');
var aiNum = 0;
const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'your username',
		password: 'oauth:getyourown'
	},
	channels: [ 'theDabolical' ]
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
    aiNum = Math.floor(Math.random() *2);
	if(self) return;
    console.log(message);
	if(message.toLowerCase() === '!sayhi') {
        setTimeout(() => { client.say(channel, `@${tags.username}, heya!`); }, 3000);
	}
    if(message.toLowerCase() === '!whobest') {
        setTimeout(() => { client.say(channel, `@${channel.replace("#", "")} the best!`); }, 3000);
	}

    /* Rock, paper, Sissors */
    if (message.toLowerCase() === "!rps rock") {
        switch(aiNum) {
            case 0:
                setTimeout(() => { client.say(channel, `AI: rock; @${tags.username}, tie`); }, 3000);
                aiNum = Math.floor(Math.random() *2);               
                break;
            case 1:
                setTimeout(() => { client.say(channel, `AI: paper; @${tags.username}, bruh, you bad!`); }, 3000);
                aiNum = Math.floor(Math.random() *2);
                break;
            case 2:
                setTimeout(() => { client.say(channel, `AI: scissors; @${tags.username}, you won!`); }, 3000);
                aiNum = Math.floor(Math.random() *2);
                break;
            }
    }
    if (message.toLowerCase() === "!rps paper") {
        switch(aiNum) {
            case 0:
                setTimeout(() => { client.say(channel, `AI: rock; @${tags.username}, you win!`); }, 3000);
                aiNum = Math.floor(Math.random() *2);               
                break;
            case 1:
                setTimeout(() => { client.say(channel, `AI: paper; @${tags.username}, tie`); }, 3000);
                aiNum = Math.floor(Math.random() *2);
                break;
            case 2:
                setTimeout(() => { client.say(channel, `AI: scissors; @${tags.username}, bruh, you bad`); }, 3000);
                aiNum = Math.floor(Math.random() *2);
                break;
            }
    }
    if (message.toLowerCase() === "!rps scissors") {
        switch(aiNum) {
            case 0:
                setTimeout(() => { client.say(channel, `AI: rock; @${tags.username}, bruh, you bad!`); }, 3000);
                aiNum = Math.floor(Math.random() *2);               
                break;
            case 1:
                setTimeout(() => { client.say(channel, `AI: paper; @${tags.username}, you win!`); }, 3000);
                aiNum = Math.floor(Math.random() *2);
                break;
            case 2:
                setTimeout(() => { client.say(channel, `AI: scissors; @${tags.username}, tie!`); }, 3000);
                aiNum = Math.floor(Math.random() *2);
                break;
            }
    }
});
