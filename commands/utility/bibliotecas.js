const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, MessageFlags } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bibliotecas")
        .setDescription("Consulte a documentação das principais bibliotecas de desenvolvimento"),

    async execute(interaction) {
        const row = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("select-languagelib")
                .setPlaceholder("Selecione uma linguagem")
                .addOptions(
                    { label: "JavaScript", description: "Veja as bibliotecas de JavaScript", value: "javascript" },
                    { label: "TypeScript", description: "Veja as bibliotecas de TypeScript", value: "typescript" },
                    { label: "Python", description: "Veja as bibliotecas de Python", value: "python" },
                    { label: "Java", description: "Veja as bibliotecas de Java", value: "java" },
                    { label: "PHP", description: "Veja as bibliotecas de PHP", value: "php" }
                )
        );

        await interaction.reply({
            content: "Selecione a linguagem para visualizar suas bibliotecas:",
            components: [row],
            flags: MessageFlags.Ephemeral
        });
    },

    async handleSelect(interaction) {
        const selected = interaction.values[0];

        if (interaction.customId === "select-languagelib") {
            let libraryOptions = [];

            if (selected === "javascript") {
                libraryOptions = [
                    { label: "Lodash", value: "lodash", description: "Utilitários para JavaScript moderno" },
                    { label: "Axios", value: "axios", description: "Cliente HTTP baseado em Promises" },
                    { label: "Moment.js", value: "moment", description: "Manipulação de datas" },
                    { label: "Discord.js", value: "discordjs", description: "Biblioteca para interagir com a API do Discord em JavaScript" }
                ];
            } else if (selected === "typescript") {
                libraryOptions = [
                    { label: "Zod", value: "zod", description: "Validação de tipos com segurança" },
                    { label: "tslib", value: "tslib", description: "Runtime helpers para TypeScript" },
                ];
            } else if (selected === "python") {
                libraryOptions = [
                    { label: "NumPy", value: "numpy", description: "Computação científica com arrays" },
                    { label: "Pandas", value: "pandas", description: "Análise e manipulação de dados" },
                    { label: "Requests", value: "requests", description: "Cliente HTTP simples e elegante" },
                    { label: "Discord.py", value: "discordpy", description: "Biblioteca para interagir com a API do Discord em Python" }
                ];
            } else if (selected === "java") {
                libraryOptions = [
                    { label: "Apache Commons", value: "commons", description: "Utilitários diversos para Java" },
                    { label: "Gson", value: "gson", description: "Serialização e desserialização JSON" }
                ];
            } else if (selected === "php") {
                libraryOptions = [
                    { label: "Carbon", value: "carbon", description: "Manipulação de datas em PHP" },
                    { label: "Guzzle", value: "guzzle", description: "Cliente HTTP moderno para PHP" }
                ];
            }

            const libraryRow = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId("select-library")
                    .setPlaceholder("Selecione uma biblioteca")
                    .addOptions(libraryOptions)
            );

            await interaction.reply({
                content: "Agora selecione a biblioteca:",
                components: [libraryRow],
                flags: MessageFlags.Ephemeral
            });
            return;
        }

        if (interaction.customId === "select-library") {
            const data = {
                lodash: {
                    title: "Lodash",
                    url: "https://lodash.com/docs/",
                    description: "Documentação oficial do Lodash, biblioteca de utilitários JavaScript."
                },
                axios: {
                    title: "Axios",
                    url: "https://axios-http.com/docs/intro",
                    description: "Documentação oficial do Axios, cliente HTTP baseado em Promises."
                },
                moment: {
                    title: "Moment.js",
                    url: "https://momentjs.com/docs/",
                    description: "Documentação do Moment.js para manipulação de datas."
                },
                discordjs: {
                    title: "Discord.js",
                    url: "https://discord.js.org/",
                    description: "Documentação oficial do Discord.js, biblioteca para interagir com a API do Discord em JavaScript."
                },
                zod: {
                    title: "Zod",
                    url: "https://zod.dev/",
                    description: "Zod é uma biblioteca TypeScript-first para validação de schemas."
                },
                tslib: {
                    title: "tslib",
                    url: "https://github.com/Microsoft/tslib",
                    description: "Helpers de tempo de execução usados pelo compilador TypeScript."
                },
                numpy: {
                    title: "NumPy",
                    url: "https://numpy.org/doc/",
                    description: "Documentação oficial do NumPy, essencial para computação científica em Python."
                },
                pandas: {
                    title: "Pandas",
                    url: "https://pandas.pydata.org/docs/",
                    description: "Documentação oficial do Pandas, biblioteca de análise de dados em Python."
                },
                requests: {
                    title: "Requests",
                    url: "https://requests.readthedocs.io/",
                    description: "Documentação oficial do Requests, biblioteca HTTP em Python."
                },
                discordpy: {
                    title: "Discord.py",
                    url: "https://discordpy.readthedocs.io/",
                    description: "Documentação oficial do Discord.py, biblioteca para interagir com a API do Discord em Python."
                },
                commons: {
                    title: "Apache Commons",
                    url: "https://commons.apache.org/",
                    description: "Coleção de bibliotecas reutilizáveis para Java."
                },
                gson: {
                    title: "Gson",
                    url: "https://github.com/google/gson",
                    description: "Biblioteca da Google para serializar e desserializar objetos Java em JSON."
                },
                carbon: {
                    title: "Carbon",
                    url: "https://carbon.nesbot.com/docs/",
                    description: "Documentação oficial do Carbon, biblioteca de datas para PHP."
                },
                guzzle: {
                    title: "Guzzle",
                    url: "https://docs.guzzlephp.org/",
                    description: "Documentação oficial do Guzzle, cliente HTTP moderno para PHP."
                }
            };

            const { title, url, description } = data[interaction.values[0]];

            const embed = new EmbedBuilder()
                .setTitle(title)
                .setDescription(`${description}\n\n[🔗 Acessar documentação](${url})`)
                .setColor('Orange');

            await interaction.reply({
                embeds: [embed],
                flags: MessageFlags.Ephemeral
            });
        }
    }
};
