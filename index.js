const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('message', message => {

    if (message.content == '!роли' && message.member.hasPermission('ADMINISTRATOR')) {
        message.guild.roles.forEach(function(role) {
        message.channel.send('${role.name}': '${role.id}',);
        })

    }
});

const modRoles = ['505097311710478368', '505097305519816706', '505750406643712030', '505370600756477962', '507290134115254282', '505097314105294878'];
const clanRoles = ['505097320157806593']
const guestRole = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдать`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        let role = message.mentions.roles.first();

        if (!role) return message.channel.send(`Укажите роль`);

        modRoles.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        if (!clanRoles.includes(role.id)) return message.channel.send(`У Вас нет прав для снятия данной роли`);

        toRole.addRole(role);
    toRole.removeRole(guestRole);
        message.channel.send(`Роль ${role.name} выдана!`)
    }
});

client.on("ready", () => {
    function clear_nicks() {
        client.guilds.get('467467257115836416').members.filter(memb => memb.displayName.startsWith('!')).forEach(member => member.setNickname(member.displayName.replace(/^!+/gi, '')).catch())
    }
    clear_nicks();
    setInterval(clear_nicks, 300000);
});

client.on("guildMemberUpdate", (old_memb, new_memb) => {
    if (new_memb.displayName.startsWith('!')) new_memb.setNickname(new_memb.displayName.replace(/^!+/gi, '')).catch();
});

client.on("userUpdate", (old_user, new_user) => {
    if (client.guilds.get('467467257115836416').members.get(new_user.id).displayName.startsWith('!')) client.guilds.get('467467257115836416').members.get(new_user.id).setNickname(client.guilds.get('467467257115836416').members.get(new_user.id).displayName.replace(/^!+/gi, '')).catch();
});

const colors = ["ff2828","ff3d28","ff4b28","ff5a28","ff6828","ff7628","ff8c28","ffa128","ffac28","ffb728","ffc228","ffd028","ffd728","ffe228","fff028","fffb28","edff28","deff28","d0ff28","c2ff28","b3ff28","9aff28","8cff28","7dff28","6fff28","5aff28","3dff28","28ff2b","28ff41","28ff56","28ff6c","28ff81","28ff93","28ffa9","28ffba","28ffc9","28ffde","28fff4","28ffff","28f0ff","28deff","28deff","28d3ff","28c5ff","28baff","28b0ff","28a5ff","289eff","2893ff","2885ff","2876ff","2864ff","2856ff","284bff","2841ff","2836ff","2828ff","3228ff","4428ff","5328ff","6828ff","7628ff","7e28ff","8828ff","9328ff","a128ff","b028ff","be28ff","c928ff","d328ff","db28ff","e528ff","f028ff","ff28ff","ff28f7","ff28e5","ff28de","ff28d0","ff28c9","ff28ba","ff28b3","ff28a5","ff289a","ff288c","ff2881","ff287a","ff2873","ff2868","ff2861","ff2856","ff284f","ff2848","ff2844","ff282b"];
function color () {
    colors.forEach(function (item, number) 
   {
    setTimeout(function () {client.guilds.get('467467257115836416').roles.get('505097319587250177').setColor(item).catch();
    if(number === colors.length-1) 
    setTimeout(function () {color()}, 500)}, number*500);
   }
 );
};

client.on('ready', color);

client.on('error', function(error) {
console.log(error)
});
