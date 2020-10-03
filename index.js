const twss = require('twss');
const Discord = require("discord.js")
const client = new Discord.Client()
const TWSS_RESPONSE = "That's what she said!"
const THRESHOLD = 0.86
require("dotenv").config()



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", (msg) => {
const message = msg.content
console.log(twss.prob(message))
if (twss.prob(message) > THRESHOLD) {
    msg.reply(TWSS_RESPONSE)
    }
})
client.login(process.env.BOT_TOKEN)