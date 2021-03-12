require("dotenv").config()
const twss = require('twss');
const Discord = require("discord.js");
const client = new Discord.Client();
const googleIt = require('google-it')

const TWSS_RESPONSE = "That's what she said!";
const NO_U = "no u";
const THRESHOLD = process.env.THRESHOLD;
const MIN_WORD_COUNT = process.env.MIN_WORD_COUNT;
const QUESTION = "question";


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    console.log("Running with Threshold: ", THRESHOLD, " MIN_WORD_COUNT: ", MIN_WORD_COUNT)
})

client.on("message", (msg) => {
    const message = msg.content.trim().toLowerCase()

    // Ignore bot messages and short sentences
    if (msg.author.bot || message.split(' ').length < MIN_WORD_COUNT) {
        return;
    }

// QUESTION
    if (message.startsWith(QUESTION)) {
        const query = message.slice(message.indexOf(QUESTION) + QUESTION.length + 1);
        googleIt({'query': query}).then(results => {
            if (results && results.length) {
                msg.reply(results[0].title + "\n" + results[0].link)
            } else {
                msg.reply('idk. Ask someone else');
            }

        }).catch(e => {
            console.log("error while googling for", query, e)
        })
        return;
    }

// Respond to Mentions
    if (msg.isMemberMentioned(client.user)) {
        msg.reply(NO_U)
        return;
    }

// TWSS responses
    if (twss.prob(message) >= THRESHOLD) {
        msg.react("regional_indicator_s");
        msg.react("regional_indicator_h");
        msg.react("regional_indicator_e");

    }
})


client.login(process.env.BOT_TOKEN)
