from flask import Flask, request
from flask_restful import Api, Resource
import sys
from predict import predict

app = Flask(__name__)
api = Api(app)

@app.route("/audio", methods = ["POST"])
def post():
    video = request.data
    newVideo = open("./recording.wav", "wb")
    newVideo.write(video)
    predict()
    return

if __name__ == "__main__":
    app.run(debug=True)