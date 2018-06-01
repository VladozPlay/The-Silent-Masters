const Discord = require("discord.js");
const bott = new Discord.Client();

bott.login(process.env.TOKEN);

const colors = ['ffffff', 'ff9900', 'ff3300', 'ff66cc', 'ff0033', 'ff33cc', 'ff0033', '9966ff', '9900ff', '000001',];
function color () {
    colors.forEach(function (item, number) 
   {
    setTimeout(function () {bott.guilds.get('419815812266852352').roles.get('419878763443126272').setColor(item).catch();
    if(number === colors.length-1) 
    setTimeout(function () {color()}, 1000)}, number*1650);
   }
 );
};

bott.on('ready', color);