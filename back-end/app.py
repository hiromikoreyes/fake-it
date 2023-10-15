from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import generation
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

@app.route('/graph', methods=["POST"])
def graph():
    data = request.get_json()

    x_axis = []
    y_axis = []

    for i in range(len(data["content"])):
        x_axis.append(data["content"][i]["evals"])
        y_axis.append(data["content"][i]["score"])

    return jsonify({'response': generation.create_graph(x_axis, y_axis)})

