// const org = 'org-h8N56MN6zgjGM9NQ00hOFAPs';

// Define la URL de la API de OpenAI
const url = 'https://api.openai.com/v1/chat/completions';

// Define el prompt que quieres enviar a la API de ChatGPT
const prompt = 'Traduce el siguiente texto al inglés: "Hola, ¿cómo estás?"';

// Define la cantidad máxima de tokens que quieres que la API genere
const maxTokens = 60;

// Define tus opciones de temperatura y top_p para controlar la aleatoriedad de la salida
const temperature = 0.5;
const topP = 1;

// Define tu clave de API de OpenAI
const apiKey = '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';

// Crea un objeto con los datos que quieres enviar a la API
const data = {
  model: 'gpt-3.5-turbo',
  prompt: prompt,
  max_tokens: maxTokens,
  temperature: temperature,
  top_p: topP,
};

// Crea las opciones para la solicitud fetch
const options = {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};

// Realiza la solicitud fetch
export async function main() {
  return fetch(url, options)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
}
