export const useGptApi = async (question) => {
    const api_url = "https://api.openai.com/v1/chat/completions"
    const api_key = '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'

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${api_key}`
    }
    const temperature = 0.7
    const content = question

    const data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            { "role": "user", "content": content }
        ],
        "temperature": temperature
    }

    const response = await fetch(api_url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })
    console.log(response.body)
    //return { response }
}
