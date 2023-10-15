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
    result = generation.response(data["text"], data["persona"], data["mood"])
    return jsonify({'response': result})

@app.route('/create-graph', methods=["POST"])
def creategraph(list):
    x = []
    y = [                                                                                                                                                                                                                                                                                               ]
    for item in list:
        x.append(item["num_eval"])
        y.append(item["score"])
    # eval_x = np.array(eval_x)
    # score_y = np.array(score_y)

plt.plot(x, y)
plt.show()
                      

    

