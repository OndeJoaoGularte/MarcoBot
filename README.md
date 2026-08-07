# 🌮 MarcoBot (Projeto Pessoal)

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Contexto](https://img.shields.io/badge/Contexto-Projeto%20Pessoal-blueviolet)
![Status](https://img.shields.io/badge/Status-Arquivado-success)

Este projeto é um bot simples para o Discord desenvolvido como um projeto pessoal para uso exclusivo em um servidor de amigos. O sistema é tematizado em torno do "Marco", uma persona de um jovem programador mexicano de 16 anos que gosta muito de luta livre e de mentiras (ou, como ele diz, inventar histórias). O desenvolvimento foi mapeado em um sistema de "fases de crescimento", evoluindo de respostas básicas até utilitários interativos.

---

## 🎯 Objetivo do Projeto

O projeto tem como objetivo principal explorar a criação e estruturação de bots para o Discord utilizando Node.js. Aplicando conceitos de interações assíncronas, gerenciamento de eventos (Slash Commands) e consumo de APIs externas para criar uma experiência de uso imersiva e bem humorada.

---

## 🚀 Funcionalidades

O escopo e as funcionalidades do bot foram divididos em fases de evolução:

1. **👶 Baby Marco (Básico):** Comandos essenciais de verificação de latência (`/ping`), repetição de mensagens (`/falar`), indicação de músicas (`/playlist`) e menu de ajuda (`/help`). *(Concluído)*
2. **👦 Kid Marco (Utilitários Dev):** Retorno de links úteis, documentações e ferramentas de programação, como `/git`, `/docs`, `/frameworks` e `/bibliotecas`. *(Em desenvolvimento)*
3. **🧒 Teen Marco (Humor & Aleatoriedade):** Geradores de respostas divertidas como piadas de programação, segredos, curiosidades e algumas mentiras.
4. **🧑 Young & Adult Marco (Interações Complexas):** Algoritmos de brincadeira simulando medidores (~~virgindade~~, mentira, nível de amor) e integração com APIs para criação de memes, traduções e buscas externas.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js:** Ambiente de execução da linguagem JavaScript no lado do servidor.
* **Discord.js (v14):** Biblioteca principal utilizada para interagir com a API oficial do Discord de forma simplificada e orientada a objetos.
* **Axios (v1.8):** Cliente HTTP baseado em Promises, essencial para consumir APIs externas (como tradutores, geradores de piadas ou buscas no Google/Wikipedia).
* **Dotenv:** Módulo de segurança utilizado para carregar variáveis de ambiente (como o Token confidencial do bot) de um arquivo `.env`.

---

## 🧠 Conceitos Aplicados

* **Arquitetura Baseada em Eventos:** Estruturação do código para ouvir e reagir continuamente a eventos do servidor (como o acionamento de um comando pelo usuário).
* **Comunicação Assíncrona:** Utilização de `async/await` e `Promises` para lidar com as respostas da API do Discord e requisições HTTP (`axios`) sem bloquear a thread principal do bot.
* **Interação de Usuário (Slash Commands):** Registro e validação de comandos nativos do Discord, melhorando a experiência de uso e organização no chat.
* **Segurança de Credenciais:** Isolamento do Token do bot e de chaves de API utilizando variáveis de ambiente, impedindo o vazamento de dados sensíveis no controle de versão.
