import openai
openai.api_key = "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"

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

def create_graph(x_axis, y_axis):
    # Create the plot and return as a base64 string
    plt.plot(x_axis, y_axis)    
    plt.title('Title Name')
    plt.xlabel('Time Elapsed')
    plt.ylabel('Confidence Score')
    plt.savefig('temp.png')