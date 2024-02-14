from flask import Flask , request , jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
CORS(app)

app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "sqlite:///C:/Users/AbdelRahman/instance/chat.db"


db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80) , unique=False , nullable=False)
    email = db.Column(db.String(120) , unique=True , nullable=False)
    passsword = db.Column(db.String(80) , unique=False , nullable=False)

@app.route("/register" , methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    existing_user = User.query.filter_by(email= email).first()
    if existing_user:
        print(existing_user)
        return jsonify({"message" : "User already exist"})
    else:
        new_user = User(username=username , email=email , passsword=password)
        db.session.add(new_user)
        db.session.commit()
    return jsonify({"message" : "User Registered Successfully"})

@app.route("/login" , methods=["POST"])
def login():
    data = request.json
    print(data)
    return jsonify({"message" : "login succesfully"})

if __name__ ==  "__main__":
    app.run(debug=True)