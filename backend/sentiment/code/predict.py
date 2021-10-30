from train import extract

# load saved model 
model = pickle.load(open("mlp.model", "rb"))
f_name = "recording.wav"
features = extract(f_name, mel = True, mel_coeff = True, chroma = True).reshape(1, -1)

# predict
result = model.predict(features)[0]

print("emotion:", result)