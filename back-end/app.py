from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/test', methods=["GET"])
def test(): 
    return {"i love casting spells": 200}