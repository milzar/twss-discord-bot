require("dotenv").config()
const twss = require('twss');
twss.algo = 'knn'
const Discord = require("discord.js")
const client = new Discord.Client()
const TWSS_RESPONSE = "That's what she said!"
const THRESHOLD = process.env.THRESHOLD
const MIN_WORD_COUNT = process.env.MIN_WORD_COUNT



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log("Running with Threshold: ", THRESHOLD, " MIN_WORD_COUNT: ", MIN_WORD_COUNT)
})

client.on("message", (msg) => {
const message = msg.content

// Ignore bot messages and short sentences
if(msg.author.bot || message.split(' ').length < MIN_WORD_COUNT ){
  return;
}

console.log( message, " probablitiy is ", twss.prob(message))

if (twss.prob(message) >= THRESHOLD) {
    msg.reply(TWSS_RESPONSE)
    }
})


client.login(process.env.BOT_TOKEN)