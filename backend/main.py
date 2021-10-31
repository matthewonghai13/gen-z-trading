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
import random

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

    imgIdx = random.randint(0,2)
    msgIdx = random.randint(0,2)

    if (emotion == "angry"):
        msg="Glad to hear you're feeling happy! https://cat-bounce.com/"
    elif (emotion == "sad"):
        msg=["You will be okay", "It gets better. I promise", "This is so sad"]
        img=['https://pbs.twimg.com/profile_images/1392227162791555075/ZPx--tbU_400x400.jpg', 'https://imgix.ranker.com/list_img_v2/7991/2147991/original/weird-animal-facts-that-will-make-you-sad-u1?w=817&h=427&fm=jpg&q=50&fit=crop', 'https://pbs.twimg.com/media/EDn1QwsXsAAnBIR.jpg']

    elif (emotion == "neutral"):
        msg="You seem to be in a neutral mood. Have you checked your investments recently?"
    elif (emotion == "happy"):
        msg="Glad to hear you're feeling happy! https://cat-bounce.com/"

    message = client.messages \
        .create(
            body=msg[msgIdx],
            from_='+18303767102',
            media_url=[img[imgIdx]],
            to='+12106064738'
        )
    print("message sent")
    print(message.sid)


    return emotion

if __name__ == "__main__":
    app.run(debug=True)