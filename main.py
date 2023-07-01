from flask import Flask, jsonify

import openai
from flask import render_template

openai.api_key = "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"

app = Flask(__name__, template_folder='template')


@app.route('/')
def index():
    return render_template('index.html', )


@app.route('/about')
def about():
    return render_template('aboutUs.html', )


@app.route('/generateimages/<prompt>')
def generate(prompt):
    print("prompt:", prompt)
    response = openai.Image.create(prompt=prompt, n=5, size="256x256")
    print(response)
    return jsonify(response)


app.run(host='0.0.0.0', port=5008)
