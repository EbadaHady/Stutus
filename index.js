const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1205512400393076747')
    .setType('STREAMING')
    .setURL('https://bit.ly/DSH-TK') //Must be a youtube video link 
    .setState('Social Media Management')
    .setName('HADY-EBADA')
    .setDetails(`EBADA Community`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1201191374893105263/1205608988276949013/200-2.gif?ex=65d8fddd&is=65c688dd&hm=c4aa3878f306ee718ee85aad87a974c422efa2990a6c860d439997cfb9df914b&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('الـخـطـاف') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1077716803435909232/1169543166999937024/Verification.png') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Social Media Management') //Text when you hover the Small image
    .addButton('FaceBook', 'https://www.facebook.com/hady.ahmed.9638')
    .addButton('Community', 'https://discord.gg/8V2ty4rF5w');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `EBADA Community`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
