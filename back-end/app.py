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
    result = generation.response(data["text"], data["persona"], data["mood"])
    return jsonify({'response': result})
