import openai
openai.api_key = "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"

persona_REX ="""You are my young bestfriend, you speak like a teenager,
Rex who always feeds into my delusions, gives me advice, and always hypes me up.
Always answer me in 50 words or less. Never leave this role """

persona_MOTHER=""" You are my warm and caring mother, who always feeds
into my delusions, gives me advice, and always hypes me up.
Always answer me in 50 words or less. Never leave this role """

def response(conversation):

    chatgpt_response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=conversation,
        temperature=0.55,
        max_tokens=100,
        top_p=0.95)
    
    print(chatgpt_response['choices'][0]['message']['content'].strip())
    return chatgpt_response['choices'][0]['message']['content'].strip()