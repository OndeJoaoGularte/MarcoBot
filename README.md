# 🌮 MarcoBot (Projeto Pessoal)

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Contexto](https://img.shields.io/badge/Contexto-Projeto%20Pessoal-blueviolet)
![Status](https://img.shields.io/badge/Status-Arquivado-success)

Este projeto é um bot simples e interativo para o Discord desenvolvido como um projeto pessoal para uso exclusivo em um servidor de amigos. O sistema é tematizado em torno do "Marco", uma persona de um jovem programador mexicano de 16 anos que gosta muito de luta livre e de mentiras (ou, como ele prefere dizer, "inventar histórias"). O desenvolvimento segue um "Roadmap de Crescimento", onde o bot amadurece e ganha novas funcionalidades.

---

## 🎯 Objetivo do Projeto

O projeto tem como objetivo consolidar os conhecimentos em **Javascript** e programação assíncrona, utilizando a biblioteca `discord.js`. Além do aspecto técnico, o projeto explora o *worldbuilding* dentro do código, estruturando dados e respostas para criar um personagem cativante, com memórias, opiniões e vínculos fictícios para criar uma experiência de uso imersiva e bem humorada.

---

## 🚀 Funcionalidades

As funcionalidades acompanham o amadurecimento do personagem:

1. **👶 Baby & 👦 Kid Marco (Fases em Desenvolvimento):**
   * **Comandos Básicos:** Verificação de latência (`/ping`), repetição de mensagens (`/falar`), indicação de músicas (`/playlist`) e menu de ajuda (`/help`).
   * **Ferramentas Dev:** Retorno de links úteis, documentações e recomendações de programação (como `/git`, `/docs`, `/frameworks` e `/bibliotecas`).

2. **🧒 Teen & 🧑 Young Marco (Humor e Interação):**
   * **Respostas Dinâmicas:** Geradores de piadas sobre programação, segredos, curiosidades aleatórias (fatos de WWE inclusos) e algumas mentiras.
   * **Algoritmos de Brincadeira:** Sistemas simulando medidores interativos para os usuários, como porcentagem de mentira, nível de amor e um detector de ~~virgindade~~.

3. **👨 Adult & 👴 Old Marco (Integrações Avançadas):**
   * **Consumo de APIs Externas:** Algoritmos de brincadeira simulando medidores (~~virgindade~~, mentira, nível de amor) e integração com APIs para criação de memes, traduções e buscas externas.
   * **Auxílio Dev:** Funcionalidade final planejada para ajudar ativamente os usuários com dúvidas de código.


## 🛠️ Tecnologias Utilizadas

* **Node.js:** Ambiente de execução da linguagem JavaScript no lado do servidor.
* **Discord.js (v14):** Biblioteca principal utilizada para interagir com a API oficial do Discord de forma simplificada e orientada a objetos.
* **Axios (v1.8):** Cliente HTTP baseado em Promises, essencial para consumir APIs externas (como tradutores, geradores de piadas ou buscas no Google/Wikipedia).
* **Dotenv:** Módulo de segurança utilizado para carregar variáveis de ambiente (como o Token confidencial do bot) de um arquivo `.env`.

---

## 🧠 Conceitos Aplicados

* **Design de Persona e Worldbuilding:** Criação de estruturas de dados específicas para armazenar os traços de personalidade, medos e interesses do bot, simulando conversas orgânicas e imersivas.
* **Arquitetura Baseada em Eventos:** Estruturação do código para ouvir e reagir continuamente a eventos do servidor (como o acionamento de um comando pelo usuário).
* **Comunicação Assíncrona:** Utilização de `async/await` e `Promises` para lidar com as respostas da API do Discord e requisições HTTP sem bloquear a thread principal do bot.
* **Interação de Usuário (Slash Commands):** Registro e validação de comandos nativos do Discord, melhorando a experiência de uso e organização no chat.
* **Segurança de Credenciais:** Isolamento do Token do bot e de chaves de API utilizando variáveis de ambiente, impedindo o vazamento de dados sensíveis no controle de versão.
