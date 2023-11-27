// const org = 'org-h8N56MN6zgjGM9NQ00hOFAPs';
// const API_KEY = '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';

// export async function getResponse(test) {
//   console.log(test);

//   const res = await fetch('https://api.openai.com/v1/chat/completions', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "text-davinci-003",
//       prompt: "give a random example of programming language",
//       max_tokens: 20,
//     }),
//   });


//   const data = await res.json();
//   console.log(data);
// }

import OpenAI from "openai";

const openai = new OpenAI();

export async function eeeey() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

eeeey();
