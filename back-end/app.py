from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import generation
import matplotlib.pyplot as plt
import numpy as np

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/test', methods=["GET"])
def test():
    return {"i love casting spells": 200}

@app.route('/generate', methods=["POST"])
def generate():
    data = request.get_json()
    result = generation.response(data["text"])
    return jsonify({'response': result})

@app.route('/create-graph', methods=["POST"])
def creategraph(list):
    eval_x = []
    score_y = []
    
    for item in data_list:
        eval_x.append(item["num_eval"])
        score_y.append(item["score"])
    
    eval_x = np.array(eval_x)
    score_y = np.array(score_y)

    plt.plot(eval_x, score_y)
    plt.xlabel("Time passed")  
    plt.ylabel("Confidence level")  
    # plt.title("Evaluation vs. Score")  # Add a title
    plt.show()

    # buffer = io.BytesIO()
    # plt.savefig(buffer, format='png')
    # buffer.seek(0)

    # # Clear the figure to release memory
    # plt.clf()

    # # Return the image as a response
    # return send_file(buffer, mimetype='image/png')

    

