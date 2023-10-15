import openai
openai.api_key = "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"

def response(conversation):

    chatgpt_response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=conversation,
        temperature=0.55,
        max_tokens=100,
        top_p=0.95)
    
    print(chatgpt_response['choices'][0]['message']['content'].strip())
    return chatgpt_response['choices'][0]['message']['content'].strip()