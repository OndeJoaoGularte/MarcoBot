const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const git = new EmbedBuilder()
	.setColor("Orange")
	.setTitle("Comandos do Git")
    .setDescription('Lista com todos os comandos do Git')
    .setThumbnail('https://media.discordapp.net/attachments/719744273989500951/1360819513549000794/410-versionsverwaltung-mit-git-github-und-co-main-med.png?ex=67fc816e&is=67fb2fee&hm=bb85f4247cd5fcfc5e99436a4af540eae931a53b880ba0f3736eaf3d508e9c90&=&format=webp&quality=lossless&width=875&height=875')
	.addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Manipulação de Repositórios:', value: '' },
		{ name: '$ git init [nome-do-projeto]', value: 'Cria um novo repositório local com um nome especificado', inline: true },
		{ name: '$ git clone [url]', value: 'Baixa um projeto e seu histórico de versão inteiro', inline: true },
        { name: '', value: '' },
		{ name: '$ git stash', value: 'Armazena temporariamente todos os arquivos monitorados modificados', inline: true },
		{ name: '$ git status', value: 'Revise edições e crie uma transação de commit', inline: true },
        { name: '', value: '' },
		{ name: '$ git add [arquivo]', value: 'Faz o snapshot de um arquivo na preparação para versionamento', inline: true },
		{ name: '$ git commit -m "[mensagem]"', value: 'Grava o snapshot permanentemente do arquivo no histórico de versão', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'Manipulação de Branches:', value: '' },
		{ name: '$ git branch', value: 'Lista todos os branches locais no repositório atual', inline: true },
		{ name: '$ git branch [nome-branch]', value: 'Cria uma nova branch', inline: true },
        { name: '', value: '' },
		{ name: '$ git switch -c [nome-branch]', value: 'Muda para a branch especificada e atualiza o diretório de trabalho', inline: true },
		{ name: '$ git merge [nome-branch]', value: 'Combina o histórico da branch especificada a branch atual', inline: true },
        { name: '', value: '' },
		{ name: '$ git push [alias] [branch]', value: 'Envia todos os commits do branch local para o GitHub', inline: true },
		{ name: '$ git pull', value: 'Baixa o histórico e incorpora as mudanças', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Consulte a lista com todos os comandos do Git"),

    async execute(interaction) {
        await interaction.reply({ embeds: [git] })
    }
}