const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const help = new EmbedBuilder()
	.setColor('Orange')
	.setTitle('Comandos do marCo:')
	.setDescription('Uma lista com todas as funções do marCo 🤖')
	.setThumbnail('https://media.discordapp.net/attachments/719744273989500951/1359329079354200184/image.png?ex=67f7155b&is=67f5c3db&hm=b7910c3392f728546a3be6d42a70927a92c32a1fc4a882c4bc80ea3fe2ece09d&=&format=webp&quality=lossless&width=1030&height=930')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'Comandos Gerais:', value: 'Comandos gerais para conhecer e virar amigo do marCo! 😁💘' },
		{ name: '/ping', value: 'Apresentação do marCo!', inline: true },
		{ name: '/playlist', value: 'Conheça a Playlist do marCo!', inline: true },
        { name: '', value: '' },
        { name: '/segredo', value: 'Peça para o marCo te contar um segredo 🤫', inline: true },
        { name: '/falar', value: 'Peça ao marCo para falar algo 🗣️', inline: true },
	)
    .addFields(
        { name: '\u200B', value: '\u200B', inline: false },
		{ name: 'Programação:', value: 'Programe com a ajuda do marCo, o gênio da programação 😎💻' },
        { name: '/docs', value: 'Consulte a documentação das principais linguagens de desenvolvimento', inline: true },
		{ name: '/git', value: 'Consulte a lista com todos os comandos do Git', inline: true },
        { name: '', value: '' },
        { name: '/db', value: 'Links das principais tecnologias para a criação de bancos', inline: true },
        { name: '/front', value: 'Links das principais tecnologias para o FrontEnd', inline: true },
        { name: '', value: '' },
        { name: '/back', value: 'Links das principais tecnologias para o BackEnd', inline: true },
        { name: '/librarys', value: 'Saiba as principais bibliotecas para desenvolvimento web', inline: true },
        { name: '', value: '' },
        { name: '/frameworks', value: 'Saiba os principais frameworks para desenvolvimento web', inline: true },
	)
    .addFields(
        { name: '\u200B', value: '\u200B', inline: false },
		{ name: 'Comandos Úteis:', value: 'Comandos úteis para realizar alguma tarefa junto do seu amigo marCo! 🤗💞' },
	)
    .addFields(
        { name: '\u200B', value: '\u200B', inline: false },
		{ name: 'Outras Funções:', value: 'Conheça as outras funções que seu amigo marCo realiza de forma autônoma e proativa! 🫡❣️' },
	)
	.addFields(
        { name: '\u200B', value: '\u200B', inline: false },
        { name: 'Marco Polo ≠ marCo Bot', value: 'Apesar do que a maioria pode pensar, eles não são a mesma pessoa. 😅', inline: true }
    )
	.setImage('https://media.discordapp.net/attachments/719744273989500951/1351379668082626612/marco.png?ex=67da29e4&is=67d8d864&hm=2e872f3c64807782d91e9877569b84cebb52d806180b1da57edb0fba70bbfaeb&=&format=webp&quality=lossless&width=1240&height=930')
	.setTimestamp()
	.setFooter({ text: 'perdón por cualquier error, mi portugués no es muy bueno... 😣', iconURL: 'https://media.discordapp.net/attachments/719744273989500951/1351379668082626612/marco.png?ex=67da29e4&is=67d8d864&hm=2e872f3c64807782d91e9877569b84cebb52d806180b1da57edb0fba70bbfaeb&=&format=webp&quality=lossless&width=1240&height=930' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Saiba todos os comandos do marCo 📖"),

    async execute(interaction) {
        await interaction.reply({ embeds: [help] })
    }
}