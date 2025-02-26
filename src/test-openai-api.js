const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const main = async() => {
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Hello world"}],
      });
      console.log(chatCompletion.data.choices[0].message);      
}

(async () => {
    try {
        await main();
    } catch (e) {
        // Deal with the fact the chain failed
    }
    // `text` is not available here
  })();
  