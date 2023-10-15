import openai
import matplotlib.pyplot as plt
import io
import base64

openai.api_key = ""

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

    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)

    plot_base64 = base64.b64encode(buffer.read()).decode('utf-8')
    return plot_base64