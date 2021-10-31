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
        msg=["Chill out my dude", "Turn that frown upside-down", "mad 'cause bad"]
        img=['https://miro.medium.com/max/1200/1*69_-h9zfZy5O9r5uxxKs5Q.png', 'https://i.huffpost.com/gen/1167324/thumbs/o-ANGRY-ANIMALS-570.jpg?5', 'https://static.boredpanda.com/blog/wp-content/uploads/2017/01/angry-animals-35-58887f5864b37__605.jpg']
    elif (emotion == "sad"):
        msg=["You will be okay", "It gets better. I promise", "This is so sad"]
        img=['https://pbs.twimg.com/profile_images/1392227162791555075/ZPx--tbU_400x400.jpg', 'https://imgix.ranker.com/list_img_v2/7991/2147991/original/weird-animal-facts-that-will-make-you-sad-u1?w=817&h=427&fm=jpg&q=50&fit=crop', 'https://pbs.twimg.com/media/EDn1QwsXsAAnBIR.jpg']

    elif (emotion == "neutral"):
        msg=["Feeling lazy?", "Not much going on right now?", "vibes"]
        img=['https://i.pinimg.com/236x/2f/a2/21/2fa2215a6a39f782a131050ab25c5265--yoga-dog-dog-doing-yoga.jpg', 'https://i.pinimg.com/736x/44/6d/f8/446df8b060b4b37347e42b875c1c83fb--funny-frogs-photos-of-animals.jpg', 'https://i.pinimg.com/originals/75/da/86/75da86235b6c1feafe5122fdf88be871.jpg']
    elif (emotion == "happy"):
        msg=["Today is a good day", "The vibes are up", "nice"]
        img=['https://media.istockphoto.com/photos/blurred-nose-of-a-golden-retriever-walking-in-the-fresh-air-with-a-picture-id860049914?k=20&m=860049914&s=612x612&w=0&h=4AyyVpwPTSK3xwj9Tydl8PgGw1eeUct4GYgKXezAGUY=', 'https://c.tenor.com/G4nL0T9v6TkAAAAM/cat-funny.gif', 'https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/imageserve/5faada1a27ed9b982134f82d/Best-Animal-Photos-Agora-Contest--close-up-of-an-orangutan-face-in-Indonesia-/960x0.jpg?fit=scale']

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