module.exports = (message) => {
    if (message.author.bot) return;

    const text = message.content.toLowerCase().trim();

    const getRandomResponse = (responses) => {
        return responses[Math.floor(Math.random() * responses.length)];
    };

    const resposta = {
        'python': [
            'alguém sabe me dizer se isso é python?',
            'é, isso me parece python',
            'python? não sei não',
            'cara, pelo que eu sei de python isso aí não é não',
            'eu sei tudo sobre python',
            'sabia que o símbolo de python é uma cobra?',
            'acho que isso aí é python',
            'acho que isso não é python',
            '¿alguien sabe decirme si esto es python?'
        ],
        '?': [
            'não sei o que você perguntou, mas com certeza não é python',
            'eu tava com essa mesma dúvida mas acho que não tem a ver com python',
            'cara isso com certeza é python',
            'e tá errado porra',
            'boa pergunta mas isso tem a ver com python ou não?',
            'cara... essa tua pergunta... pode ser python',
            '¿puede raton en la cocaina?'
        ],
        'java': [
            'o certo é java e não javascript'
        ],
        'javascript': [
            'o certo é java e não javascript'
        ]
    };

    const pyVariations = [
        'phyton', 'pyton', 'pithon', 'phython', 'pytohn', 'pthon', 'pyhon', 'pythn', 'piton', 'pytho'
    ];

    if (pyVariations.includes(text)) {
        const respostaErrada = text;
        const respostaMissType = `cabron, lo correcto es "python" y no esa mierda de "${respostaErrada}" que escribiste, ¿eres tonto? puta madre, lo siento acabei ficando estressado é que python é um assunto sério cara`;
        message.reply(respostaMissType);
        return;
    }

    Object.keys(resposta).forEach(typed => {
        if (text === typed) {
            message.reply(getRandomResponse(resposta[typed]));
        }
    });
};
