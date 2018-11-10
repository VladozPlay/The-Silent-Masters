const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('message', message => {

    if (message.content == '!роли' && message.member.hasPermission('ADMINISTRATOR')) {
        message.guild.roles.forEach(function(role) {
        message.channel.send(`'${role.name}': '${role.id}',`);
        })

    }
});

const modRoles0 = ['505097311710478368'];
const clanRoles0 = ['505097312821968896']
const guestRole0 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьATE`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        let role = message.mentions.roles.first();

        if (!role) return message.channel.send(`Укажите роль`);

        modRoles0.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        if (!clanRoles0.includes(role.id)) return message.channel.send(`У Вас нет прав для снятия данной роли`);

        toRole.addRole(role);
    toRole.removeRole(guestRole0);
        message.channel.send(`Роль ${role.name} выдана!`)
    }
});

const modRoles1 = ['505097305519816706'];
const clanRoles1 = ['505097311408619560']
const guestRole1 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьTOS`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        let role = message.mentions.roles.first();

        if (!role) return message.channel.send(`Укажите роль`);

        modRoles1.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        if (!clanRoles1.includes(role.id)) return message.channel.send(`У Вас нет прав для снятия данной роли`);

        toRole.addRole(role);
    toRole.removeRole(guestRole1);
        message.channel.send(`Роль ${role.name} выдана!`)
    }
});

const modRoles2 = ['505750406643712030'];
const clanRoles2 = ['505750403950837771']
const guestRole2 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьTDR`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        let role = message.mentions.roles.first();

        if (!role) return message.channel.send(`Укажите роль`);

        modRoles2.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        if (!clanRoles2.includes(role.id)) return message.channel.send(`У Вас нет прав для снятия данной роли`);

        toRole.addRole(role);
    toRole.removeRole(guestRole2);
        message.channel.send(`Роль ${role.name} выдана!`)
    }
});

const modRoles3 = ['505370600756477962'];
const clanRoles3 = ['505097313652310026']
const guestRole3 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьJH`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        let role = message.mentions.roles.first();

        if (!role) return message.channel.send(`Укажите роль`);

        modRoles3.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        if (!clanRoles3.includes(role.id)) return message.channel.send(`У Вас нет прав для снятия данной роли`);

        toRole.addRole(role);
    toRole.removeRole(guestRole3);
        message.channel.send(`Роль ${role.name} выдана!`)
    }
});

const modRoles4 = ['507290134115254282'];
const clanRoles4 = ['507290137265176588']
const guestRole4 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьPP`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        let role = message.mentions.roles.first();

        if (!role) return message.channel.send(`Укажите роль`);

        modRoles4.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        if (!clanRoles4.includes(role.id)) return message.channel.send(`У Вас нет прав для снятия данной роли`);

        toRole.addRole(role);
    toRole.removeRole(guestRole4);
        message.channel.send(`Роль ${role.name} выдана!`)
    }
});

const modRoles5 = ['505097314105294878'];
const clanRoles5 = ['505097318387810314']
const guestRole5 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьID`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        let role = message.mentions.roles.first();

        if (!role) return message.channel.send(`Укажите роль`);

        modRoles5.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        if (!clanRoles5.includes(role.id)) return message.channel.send(`У Вас нет прав для снятия данной роли`);

        toRole.addRole(role);
    toRole.removeRole(guestRole5);
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
    if (!client.guilds.get('467467257115836416').members.get(old_user.id)) return;
    if (client.guilds.get('467467257115836416').members.get(old_user.id).displayName.startsWith('!')) client.guilds.get('467467257115836416').members.get(new_user.id).setNickname(client.guilds.get('467467257115836416').members.get(new_user.id).displayName.replace(/^!+/gi, '')).catch();
});

client.on('error', function(error) {
console.log(error)
});
