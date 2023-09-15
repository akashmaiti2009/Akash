#Importing flask module in the project
from flask import Flask

#Create an object of the Flask class
app = Flask(__name__)

#The route() function of the Flask class 
@app.route("/")

#‘/’ URL is bound with first_flask function.
def first_flask():

    return "This is my first flask program"

#Define a function with different endpoint

@app.route("/flask_2")
def second_flask():
    return "Python is fun!"

#run using debug argument
app.run(debug=True)

