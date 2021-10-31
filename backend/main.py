from flask import Flask, request
from flask_restful import Api, Resource
import sys
# from predict import predict
from train import extract
import os
import pickle
# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client

app = Flask(__name__)
api = Api(app)

@app.route("/audio", methods = ["POST"])
def post():
    video = request.data
    newVideo = open("./recording.wav", "wb")
    newVideo.write(video)
    
    path = os.path.abspath('mlp.model')

    # load saved model 
    model = pickle.load(open(path, "rb"))
    f_name = "recording.wav"
    features = extract(f_name, mel = True, mel_coeff = True, chroma = True).reshape(1, -1)

    # predict
    emotion = model.predict(features)[0]

    print("emotion:", emotion)

    # Find your Account SID and Auth Token at twilio.com/console
    # and set the environment variables. See http://twil.io/secure
    account_sid = "ACe3e9c20ec7d170ad7c039f00d9900f0a"
    auth_token = "ceb7701c3b69be8da9a10302e224c4d2"
    client = Client(account_sid, auth_token)

    if (emotion == "angry"):
        msg="Glad to hear you're feeling happy! https://cat-bounce.com/"
    elif (emotion == "sad"):
        msg="Sorry to hear you're feeling sad. Maybe you should stick to ETFs?"
    elif (emotion == "neutral"):
        msg="You seem to be in a neutral mood. Have you checked your investments recently?"
    elif (emotion == "happy"):
        msg="Glad to hear you're feeling happy! https://cat-bounce.com/"

    message = client.messages \
        .create(
            body=msg,
            from_='+18303767102',
            media_url=['https://pbs.twimg.com/profile_images/1392227162791555075/ZPx--tbU_400x400.jpg'],
            to='+12106064738'
        )
    print("message sent")
    print(message.sid)


    return emotion

if __name__ == "__main__":
    app.run(debug=True)