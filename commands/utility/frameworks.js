const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, MessageFlags } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("frameworks")
        .setDescription("Consulte a documentação dos principais frameworks de desenvolvimento"),

    async execute(interaction) {
        const row = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("select-languagefw")
                .setPlaceholder("Selecione uma linguagem")
                .addOptions(
                    { label: "CSS3", description: "Veja os frameworks de CSS3", value: "css" },
                    { label: "JavaScript", description: "Veja os frameworks de JavaScript", value: "javascript" },
                    { label: "TypeScript", description: "Veja os frameworks de TypeScript", value: "typescript" },
                    { label: "Python", description: "Veja os frameworks de Python", value: "python" },
                    { label: "Java", description: "Veja os frameworks de Java", value: "java" },
                    { label: "PHP", description: "Veja os frameworks de PHP", value: "php" },
                    { label: "C#", description: "Veja os frameworks de C#", value: "csharp" },
                    { label: "Ruby", description: "Veja os frameworks de Ruby", value: "ruby" }
                )
        );

        await interaction.reply({
            content: "Selecione a linguagem para visualizar seus frameworks:",
            components: [row],
            flags: MessageFlags.Ephemeral
        });
    },

    async handleSelect(interaction) {
        const selected = interaction.values[0];

        if (interaction.customId === "select-languagefw") {
            let frameworkOptions = [];

            if (selected === "css") {
                frameworkOptions = [
                    { label: "Tailwind CSS", value: "tailwind", description: "Documentação do Tailwind CSS" },
                    { label: "Bootstrap", value: "bootstrap", description: "Documentação do Bootstrap" },
                    { label: "MUI", value: "mui", description: "Documentação do Material UI" }
                ];
            } else if (selected === "javascript") {
                frameworkOptions = [
                    { label: "React", value: "react", description: "Documentação do React" },
                    { label: "Vue.js", value: "vue", description: "Documentação do Vue.js" },
                    { label: "Angular", value: "angular", description: "Documentação do Angular" },
                    { label: "Express", value: "express", description: "Documentação do Express.js" }
                ];
            } else if (selected === "typescript") {
                frameworkOptions = [
                    { label: "Next.js", value: "nextjs", description: "Documentação do Next.js" },
                    { label: "NestJS", value: "nestjs", description: "Documentação do NestJS" }
                ];
            } else if (selected === "python") {
                frameworkOptions = [
                    { label: "Django", value: "django", description: "Documentação do Django" },
                    { label: "Flask", value: "flask", description: "Documentação do Flask" }
                ];
            } else if (selected === "java") {
                frameworkOptions = [
                    { label: "Spring Boot", value: "spring", description: "Documentação do Spring Boot" }
                ];
            } else if (selected === "php") {
                frameworkOptions = [
                    { label: "Laravel", value: "laravel", description: "Documentação do Laravel" },
                    { label: "Symfony", value: "symfony", description: "Documentação do Symfony" }
                ];
            } else if (selected === "csharp") {
                frameworkOptions = [
                    { label: "ASP.NET Core", value: "aspnetcore", description: "Documentação do ASP.NET Core" },
                    { label: "Blazor", value: "blazor", description: "Documentação do Blazor" },
                    { label: "Entity Framework", value: "entityframework", description: "Documentação do Entity Framework" }
                ];
            } else if (selected === "ruby") {
                frameworkOptions = [
                    { label: "Ruby on Rails", value: "rails", description: "Documentação do Ruby on Rails" },
                    { label: "Sinatra", value: "sinatra", description: "Documentação do Sinatra" }
                ];
            }

            const frameworkRow = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId("select-framework")
                    .setPlaceholder("Selecione um framework")
                    .addOptions(frameworkOptions)
            );

            await interaction.reply({
                content: "Agora selecione o framework:",
                components: [frameworkRow],
                flags: MessageFlags.Ephemeral
            });
            return;
        }

        if (interaction.customId === "select-framework") {
            const data = {
                tailwind: {
                    title: "Tailwind CSS",
                    url: "https://tailwindcss.com/docs",
                    description: "Documentação oficial do Tailwind CSS."
                },
                bootstrap: {
                    title: "Bootstrap",
                    url: "https://getbootstrap.com/docs/",
                    description: "Documentação oficial do Bootstrap."
                },
                mui: {
                    title: "Material UI (MUI)",
                    url: "https://mui.com/material-ui/getting-started/overview/",
                    description: "Documentação oficial do Material UI."
                },
                react: {
                    title: "React",
                    url: "https://react.dev/",
                    description: "Documentação oficial do React."
                },
                vue: {
                    title: "Vue.js",
                    url: "https://vuejs.org/guide/introduction.html",
                    description: "Documentação oficial do Vue.js."
                },
                angular: {
                    title: "Angular",
                    url: "https://angular.io/docs",
                    description: "Documentação oficial do Angular."
                },
                express: {
                    title: "Express.js",
                    url: "https://expressjs.com/",
                    description: "Documentação oficial do Express.js, um framework minimalista para Node.js."
                },                
                nextjs: {
                    title: "Next.js",
                    url: "https://nextjs.org/docs",
                    description: "Documentação oficial do framework Next.js para React e TypeScript."
                },
                nestjs: {
                    title: "NestJS",
                    url: "https://docs.nestjs.com/",
                    description: "Documentação oficial do NestJS, um framework para Node.js e TypeScript."
                },
                django: {
                    title: "Django",
                    url: "https://docs.djangoproject.com/",
                    description: "Documentação oficial do Django, um framework robusto para aplicações web em Python."
                },
                flask: {
                    title: "Flask",
                    url: "https://flask.palletsprojects.com/",
                    description: "Documentação oficial do Flask, um microframework para aplicações web em Python."
                },
                spring: {
                    title: "Spring Boot",
                    url: "https://docs.spring.io/spring-boot/docs/current/reference/html/",
                    description: "Documentação oficial do Spring Boot, usado para criar aplicações web em Java."
                },
                laravel: {
                    title: "Laravel",
                    url: "https://laravel.com/docs",
                    description: "Documentação oficial do Laravel, o framework PHP mais popular atualmente."
                },
                symfony: {
                    title: "Symfony",
                    url: "https://symfony.com/doc/current/index.html",
                    description: "Documentação oficial do Symfony, um framework web poderoso para PHP."
                },
                aspnetcore: {
                    title: "ASP.NET Core",
                    url: "https://learn.microsoft.com/aspnet/core/",
                    description: "Documentação oficial do ASP.NET Core, um framework para construção de aplicações web com C#."
                },
                blazor: {
                    title: "Blazor",
                    url: "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor",
                    description: "Documentação do Blazor, para construir interfaces web interativas usando C#."
                },
                entityframework: {
                    title: "Entity Framework",
                    url: "https://learn.microsoft.com/ef/core/",
                    description: "Documentação oficial do Entity Framework, ORM para C#."
                },
                rails: {
                    title: "Ruby on Rails",
                    url: "https://guides.rubyonrails.org/",
                    description: "Documentação oficial do Ruby on Rails, um framework poderoso para aplicações web em Ruby."
                },
                sinatra: {
                    title: "Sinatra",
                    url: "http://sinatrarb.com/documentation.html",
                    description: "Documentação oficial do Sinatra, um microframework para Ruby."
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
