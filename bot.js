
const respuestas = {
    matematica: {
        "¿qué es una función?": "Una función es una relación entre dos conjuntos que asigna a cada elemento de un conjunto un único elemento del otro conjunto.",
        "¿cuánto es 2 más 2?": "2 más 2 es igual a 4.",
        "¿qué es un número primo?": "Un número primo es un número natural mayor que 1 que solo tiene dos divisores: 1 y él mismo."
    },
    literatura: {
        "¿quién escribió cien años de soledad?": "El escritor colombiano Gabriel García Márquez escribió Cien Años de Soledad.",
        "¿qué es un poema?": "Un poema es una composición literaria que expresa ideas, sentimientos o emociones en verso.",
        "¿qué es una metáfora?": "Una metáfora es una figura retórica que consiste en trasladar el significado de un término a otro para dar una idea más viva o imaginativa."
    },
    ingles: {
        "how do you say 'hola' in english?": "'Hola' in English is 'Hello'.",
        "what is the past tense of 'go'?": "The past tense of 'go' is 'went'.",
        "what does 'book' mean?": "'Book' means a set of written, printed, or blank pages fastened together."
    },
    etica: {
        "¿qué es la ética?": "La ética es la rama de la filosofía que estudia la conducta humana y los principios morales.",
        "¿por qué es importante la honestidad?": "La honestidad es importante porque genera confianza y respeto entre las personas.",
        "¿qué es la responsabilidad?": "La responsabilidad es el deber de responder por las propias acciones y cumplir con las obligaciones."
    }
};

function responderPregunta() {
    const preguntaUsuario = document.getElementById('pregunta').value.toLowerCase().trim();
    let respuestaEncontrada = "Lo siento, no tengo una respuesta para esa pregunta.";

    // Buscar respuesta en cada categoría
    for (const categoria in respuestas) {
        if (preguntaUsuario in respuestas[categoria]) {
            respuestaEncontrada = respuestas[categoria][preguntaUsuario];
            break;
        }
    }

    document.getElementById('respuesta').textContent = respuestaEncontrada;
}
