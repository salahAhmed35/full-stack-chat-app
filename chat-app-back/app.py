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
    user_email = data["email"]
    user_password = data["password"]
    user = User.query.filter_by(email = user_email).first()
    if user :
        if user.passsword == user_password :
           user_data = {
               "id" : user.id,
               "user_name" : user.username,
               "email" : user.email
           }
           users_list = {"users_list" : query_users()}
           return jsonify(user_data , users_list ),200
           
        else :
            return jsonify({"message" : "Worng password"}),401
    else:
        return jsonify({"message" : "Not Exsting User"}), 404
    

# query users from database 
def query_users():
    with app.app_context():
        users = User.query.all()
        user_list = [{"email": user.email, "id": user.id} for user in users]

    return user_list


if __name__ ==  "__main__":
    app.run(debug=True)