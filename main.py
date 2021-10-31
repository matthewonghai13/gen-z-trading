from flask import Flask, request
from flask_restful import Api, Resource
import sys
sys.path.append("backend/sentiment/code")


app = Flask(__name__)
api = Api(app)

@app.route("/audio", methods = ["POST"])
def post():
    video = request.data
    newVideo = open("./backend/sentiment/code/recording.wav", "wb")
    newVideo.write(video)
    import predict
    return

if __name__ == "__main__":
    app.run(debug=True)