
<h1 align="center">
  <br>
  <a><img src="https://images-na.ssl-images-amazon.com/images/I/61DtsGde--L._SL1500_.jpg" alt="Markdownify" width="200"></a>
  <br>

  <br>
</h1>

This is a discord bot that replies with "that's what she said" when it can. It's built with discord.js and uses <a href="https://github.com/DanielRapp/twss.js" >this awesome library </a> for classifying the sentences.

## Usage
You can add this bot directly to your discord server by clicking <a href="https://milzar.github.io/twss-discord-bot-website">here </a>.

## Local setup

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/milzar/twss-discord-bot

# Go into the repository
$ cd twss-discord-bot

# Install dependencies
$ npm install

# Add environment variables
Create a file called .env and add the following
    BOT_TOKEN=Discord-bot-token
    THRESHOLD=0.93
    MIN_WORD_COUNT=3
  
  To generate a Discord-bot-token refer https://www.writebots.com/discord-bot-token/


# Run the app
$ npm start
```
If you're not sure how to generate a Discord-bot-token read this https://www.writebots.com/discord-bot-token/


Additional functions
--
 If you send a message starting with "Question" it will google search the text after and reply the first result 


 Future Improvements
--
 The current model causes a lot of false positives. Need to improve that.