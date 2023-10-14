import openai
openai.api_key = "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"

def respond(user_input):
    chatgpt_response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_input}],
        temperature=0.55,
        max_tokens=100,
        top_p=0.95)
    
    print(chatgpt_response['choices'][0]['message']['content'].strip())
    return chatgpt_response['choices'][0]['message']['content'].strip()