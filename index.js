const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("ready", () => {
function clear_nicks(){
    client.guilds.get('315510884334305280').members.filter(memb => memb.displayName.startsWith('!')).forEach(member => member.setNickname(member.displayName.replace(/^!+/gi, '')).catch())
}
clear_nicks();
setInterval(clear_nicks, 300000);});

client.on("guildMemberUpdate", (old_memb, new_memb) => {
    if (new_memb.displayName.startsWith('!')) new_memb.setNickname(new_memb.displayName.replace(/^!+/gi, '')).catch();
});

client.on("userUpdate", (old_user, new_user) => {
    if (client.guilds.get('315510884334305280').members.get(new_user.id).displayName.startsWith('!')) client.guilds.get('315510884334305280').members.get(new_user.id).setNickname(client.guilds.get('315510884334305280').members.get(new_user.id).displayName.replace(/^!+/gi, '')).catch();
});