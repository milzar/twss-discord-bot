const twss = require('twss');
const Discord = require("discord.js")
const client = new Discord.Client()
const TWSS_RESPONSE = "That's what she said!"
const THRESHOLD = 0.93
require("dotenv").config()



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", (msg) => {
const message = msg.content

if(msg.author.bot){
  return;
}

console.log( message, " probablitiy is ", twss.prob(message))

if (twss.prob(message) >= THRESHOLD) {
    msg.reply(TWSS_RESPONSE)
    }
})


client.login(process.env.BOT_TOKEN)