import requests

BASE = "http://127.0.0.1:5000/"
# BASE = "https://gen-z-trading-backend-ml.herokuapp.com/"

file = open('./backend/recordingold.wav', 'rb')
# files = {'video': file}
req = requests.post(BASE + "audio", data=file)

print(req.status_code)
print(req.reason)
print(req.content)
print(req.text)
