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

client.on('message', message => {
	if (message.content == '!роли' && message.channel && message.channel.type == "text" && message.member.hasPermission('ADMINISTRATOR')) {
		let roles = '';
		message.guild.roles.forEach(function(role) {
			roles += `'${role.name}': '${role.id}',\n`;
		})
		message.channel.send(roles, {split: true});
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

client.on("message", async (message) => {
	if (message.content == '!команды') message.channel.send('\`\`\`fix\nСписок команд:\`\`\`\n**!команды** - \`список всех команд на сервере\`\n**!пещеры** - \`карты с пещерами\`\n**!отписка** - \`информация о написании отписки\`\n**!гонки** - \`карта с гонками\`\n**!баро** - \`время прихода баро китира\`');
	if (message.content == '!гонки') message.channel.send('\`\`\`fix\nКарта гонок - Долина Сфер:\`\`\`\nhttps://i.imgur.com/AMHndnO.png');
	if (message.content == '!баро') message.channel.send('В разработке');
	if (message.content == '!отписка') {
		await message.channel.send('\`\`\`fix\nИнформация о канале «🛵отписка»:\`\`\`\nЕсли вы по каким либо причинам не сможете играть более 15-ти дней, Вам нужно отписать об этом в чат <#531530350783102996>.\nЗапрещается не проявлять активность в игре в течении 15-ти дней без отписки. Карается - Изгнанием.\n\n\`\`\`fix\nПравила оформления отписки:\`\`\`');
		await message.channel.send('1. Игровой никнейм:\n2. Причина отсутствия:\n3. Количество дней:\n\n`Причины и Количество дней - пишите, хотя бы, примерно. Причины типа: ХЗ - рассматриваться не будут.`\n\n\`\`\`fix\nОБЯЗАТЕЛЬНО К ПРОЧТЕНИЮ:\`\`\`');
		await message.channel.send('Когда **вернетесь** в игру обратно - **удалите** свою отписку!\nЕсли вы **не написали** сюда отписку, то **не возмущайтесь**, если Вас **выгонят** из клана.');
		};
	if (message.content == '!пещеры') {
		await message.channel.send('\`\`\`fix\nКарта пещер - Равнины Эйдолона:\`\`\`\nhttps://i.imgur.com/KuEU8CS.png');
		await message.channel.send('\`\`\`fix\nКарта пещер - Долина Сфер:\`\`\`\nhttps://i.imgur.com/uBwvnZU.png');
		};
});

client.on("message", (message) => {
	if (!message.channel || message.channel.type !== "text" ||  !message.member.hasPermission("ADMINISTRATOR")) return;
	const command = "!текст ";
	if (message.content.startsWith(command)) {
		message.channel.send(message.content.substring(command.length))
		message.delete();
    }
});

client.on('error', function(error) {
});
