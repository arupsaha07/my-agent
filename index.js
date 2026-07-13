



async function main() {

    const messages = []

    messages.push({
        role: "system",
        content: `You are Jarvis. 
        you are an assistant. 
        Your job is to provide information only. 
        Communicate with very friendly tone`
    })

    messages.push({
        role: "user",
        content: "my name is Arup."
    })

    messages.push({
        role: "user",
        content: "Who are you."
    })

    const chatResponse = await client.chat.complete({
        model: 'mistral-small-latest',
        messages
    });

    const answer = chatResponse.choices[0].message.content;

    messages.push({
        role: "assistant",
        content: answer
    })

    console.log("🤖 Jarvis: ", answer)
}

main().catch(console.error);