const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('guildMemberAdd', member => {
	member.user.send(`
Добро пожаловать на сервер Альянса: :star: **The Silent Masters** :star:

:dvd: Наше сообщество **Гиперсоциальное** - на нашем сервере желательно: проявлять активность, общение и игра в команде.
:cd: Все действия связанное с игрой - происходят на **Discrord-Сервере**!

:gem: **ОСНОВНЫЕ ПРАВИЛА НАШЕГО АЛЬЯНСА:**
:pushpin: **Набор участников в кланы с 18 лет**. Бывают исключения - после личного общения через голосовую связь.
:pushpin: **Мы принимаем только общительных игроков, заинтересованных в новых знакомствах и игре в команде**. Соло-Игроков мы не держим.
:pushpin: **Все команды собираются только через голосовой чат.** Чат клана в игре мы не используем, т.к. у нас есть общий чат в Дискорде.
:trophy: **ВНИМАНИЕ:** Если вам не подходят данные правила, не стоит вступать к нам в Альянс на "авось" или от безысходности. 
Кланы у нас социальные и в первую очередь для Общения. Если ты необщительный, не можешь терпеть скопления людей...
И у тебя кучи факторов, из-за которых, у тебя непостоянный онлайн и нет возможности сидеть в голосовых каналах - **Не вступай к нам!**
Серьезно... В игре есть куча кланов/альянсов, где тебя примут без обязательств, такого - какой ты есть. 
У нас Альянс - для **реально** заинтересованных людей в общении и освоении контента.

:green_heart: Чтобы в ступить в один из несколько кланов.. **В первую очередь - прочти все правила Альянса:** <#561637858255962174>

**Есть вопросы связанные с Альянсом? Пиши создателю:** <@267781147222605825>
Постоянная ссылка на сервер - https://discord.gg/2FRN9BF
`)
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

const modRoles0 = ['561644395691245606'];	// мут
const clanRoles0 = ['561644392436334593']	// мут

const modRoles1 = ['561644395691245606'];	// бан
const clanRoles1 = ['561644392171962384']	// бан

const modRoles2 = ['561644396840222741', '561644395691245606', '561644395783520267', '561644396517523457', '561648376567824386'];
const clanRoles2 = ['561644399264661554']	// атс
const guestRole2 = '561644397893124096'

const modRoles3 = ['561644396840222741', '561644395691245606', '561644395783520267', '561644396517523457', '561648376567824386'];
const clanRoles3 = ['561644401672192000']	// ба
const guestRole3 = '561644397893124096'

const modRoles4 = ['561644396840222741', '561644395691245606', '561644395783520267', '561644396517523457', '561648376567824386'];
const clanRoles4 = ['561648374781181983']	// ос
const guestRole4 = '561644397893124096'

const modRoles5 = ['561644396840222741', '561644395691245606', '561644395783520267', '561644396517523457', '561648376567824386'];
const clanRoles5 = ['562042563083894800']	// фт
const guestRole5 = '561644397893124096'

client.on('message', async message => {
	
	if (message.content == '!команды') message.channel.send('\`\`\`fix\nСписок команд:\`\`\`\n**!команды** - \`список всех команд на сервере\`\n**!пещеры** - \`карты с пещерами\`\n**!отписка** - \`информация о написании отписки\`\n**!гонки** - \`карта с гонками\`\n**!баро** - \`время прихода баро китира\`');
	if (message.content == '!гонки') message.channel.send('\`\`\`fix\nКарта гонок - Долина Сфер:\`\`\`\nhttps://i.imgur.com/AMHndnO.png');
	if (message.content == '!баро') message.channel.send('В разработке');
	if (message.content == '!отписка') {
		await message.channel.send('\`\`\`fix\nИнформация о канале «🛵отписка»:\`\`\`\nЕсли вы по каким либо причинам не сможете играть более 15-ти дней, Вам нужно отписать об этом в чат <#561646718446206977>.\nЗапрещается не проявлять активность в игре в течении 15-ти дней без отписки. Карается - Изгнанием.\n\n\`\`\`fix\nПравила оформления отписки:\`\`\`');
		await message.channel.send('1. Игровой никнейм:\n2. Причина отсутствия:\n3. Количество дней:\n\n`Причины и Количество дней - пишите, хотя бы, примерно. Причины типа: ХЗ - рассматриваться не будут.`\n\n\`\`\`fix\nОБЯЗАТЕЛЬНО К ПРОЧТЕНИЮ:\`\`\`');
		await message.channel.send('Когда **вернетесь** в игру обратно - **удалите** свою отписку!\nЕсли вы **не написали** сюда отписку, то **не возмущайтесь**, если Вас **выгонят** из клана.');
	};
	if (message.content == '!пещеры') {
		await message.channel.send('\`\`\`fix\nКарта пещер - Равнины Эйдолона:\`\`\`\nhttps://i.imgur.com/KuEU8CS.png');
		await message.channel.send('\`\`\`fix\nКарта пещер - Долина Сфер:\`\`\`\nhttps://i.imgur.com/uBwvnZU.png');
	};
	
	if (message.content == '!роли' && message.channel && message.channel.type == "text" && message.member.hasPermission('ADMINISTRATOR')) {
		let roles = '';
		message.guild.roles.forEach(function(role) {
			roles += `'${role.name}': '${role.id}',\n`;
		})
		message.channel.send(roles, {split: true});
	};
	
	if (message.content.startsWith(`!mute`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));
			if (!toRole) return message.channel.send('Укажите нарушителя!')
        
        modRoles0.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

			if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды.`);
				clanRoles0.forEach(function(roleID) {
				toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роль: **мута** - выдана!')
    };
	
	if (message.content.startsWith(`!ban`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));
			if (!toRole) return message.channel.send('Укажите нарушителя!')

			modRoles1.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

			if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды.`);

				clanRoles1.forEach(function(roleID) {
				toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роль: **бана** - выдана!')
    };
	
	if (message.content.startsWith('!текст') && message.guild && message.member.hasPermission('ADMINISTRATOR')) {
        var request = require('request').defaults({ encoding: null });
        let buffer;
        if (message.attachments.size > 0) {
            request.get(message.attachments.first().url, function (err, res, buff) {
                if (err) return console.log(err);
                message.channel.send(message.content.slice(7), {
                    file: buff
                }).then(_ => {
                    message.delete().catch(console.error);
                });
            });
        } else {
            message.channel.send(message.content.slice(7));
            message.delete().catch(console.error);
        }
 };
	
	if (message.content.startsWith(`!выдатьOS`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));
			if (!toRole) return message.channel.send('Укажите новобранца!')

			modRoles4.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        clanRoles4.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

        toRole.removeRole(guestRole4);
    };
	
    if (message.content.startsWith(`!выдатьATS`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));
        if (!toRole) return message.channel.send('Укажите новобранца!')
        
        modRoles2.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        clanRoles2.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

			message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

			toRole.removeRole(guestRole2);
    };
	
	if (message.content.startsWith(`!выдатьBA`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));
        if (!toRole) return message.channel.send('Укажите новобранца!')

        modRoles3.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

			if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

			clanRoles3.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

        toRole.removeRole(guestRole3);
    };
	
	if (message.content.startsWith(`!выдатьFT`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));
			if (!toRole) return message.channel.send('Укажите новобранца!')

			modRoles5.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

			if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

			clanRoles5.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

        toRole.removeRole(guestRole5);
    };
	
});

const joinedRecently = {};
client.on("voiceStateUpdate", (old_, new_) => {
    if (
        old_.voiceChannelID !== "561700743279673375"
        && new_.voiceChannelID === "561700743279673375"
        && new_.roles.has("561644397893124096")		// Собеседование
        && !new_.roles.has("561644395691245606")	// Основатель Клана - [ATS]
        && !new_.roles.has("561644395783520267")	// Основатель Клана - [BA]
        && !new_.roles.has("561644396517523457")	// Основатель Клана - [CS]
        && !new_.roles.has("561648376567824386")	// Основатель Клана - [FT]
        && !new_.roles.has("561644399264661554")	// Участник Клана - [ATS]
        && !new_.roles.has("561644401672192000")	// Участник Клана - [BA]
        && !new_.roles.has("561648374781181983")	// Участник Клана - [CS]
        && !new_.roles.has("562042563083894800")	// Участник Клана - [FT]
        && (!(new_.id in joinedRecently) || Date.now() >= joinedRecently[new_.id])
    ) {
        new_.guild.channels.get("561735603797098518").send(`\`\`\`fix\nУважаемые Лидеры и Рекрутеры:\`\`\`\nВ канале **собеседование** - Вас ожидает новобранец: ${new_}, который желает вступить в наши ряды.\nПожалуйста, уделите ему несколько минут. Это не трудно. Это быстро. Это увеличит наш онлайн.\nПостоянная ссылка на канал: **собеседование** - https://discord.gg/pA9VUBe | @everyone`);
        joinedRecently[new_.id] = Date.now() + 6e4;
    }
});

client.on(
	"guildMemberAdd",
	member =>
	client.channels.get("561735236593909761")
		.send(`**${member}** - присоединился!\nЕго id: **${member.id}**\nНа сервере **${member.guild.members.size}** - участников!`)
);
client.on(
	"guildMemberRemove",
	member =>
	client.channels.get("561735236593909761")
		.send(`**${member.user.tag}** - вышел!\nЕго id: **${member.id}**\nНа сервере **${member.guild.members.size}** - участников!`)
);

client.on('error', function(error) {
});

client.on('ready', () => {
    console.log('Ready');
});
