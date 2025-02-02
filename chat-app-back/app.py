from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = (
    "sqlite:///C:/Users/AbdelRahman/instance/chat.db"
)
db = SQLAlchemy(app)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    passsword = db.Column(db.String(80), unique=False, nullable=False)

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    seder_id = db.Column(db.Integer)
    reciver_id = db.Column(db.Integer)
    message_text = db.Column(db.String)


@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        print(existing_user)
        return jsonify({"message": "User already exist"})
    else:
        new_user = User(username=username, email=email, passsword=password)
        db.session.add(new_user)
        db.session.commit()
    return jsonify({"message": "User Registered Successfully"})


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    user_email = data["email"]
    user_password = data["password"]
    user = User.query.filter_by(email=user_email).first()
    if user:
        if user.passsword == user_password:
            user_data = {"id": user.id, "username": user.username, "email": user.email}
            #    users_list = {"users_list" : query_users(user.id)}
            return jsonify(user_data), 200

        else:
            return jsonify({"message": "Worng password"}), 401
    else:
        return jsonify({"message": "Not Exsting User"}), 404


# send contacts to client side
@app.route("/contacts", methods=["POST"])
def send_contacts():
    data = request.json
    current_contact_id = data["id"]
    with app.app_context():
        contacts = User.query.all()
        contacts_list = [
            {"username": contact.username, "id": contact.id}
            for contact in contacts
            if contact.id != current_contact_id
        ]
    return jsonify(contacts_list)


@app.route("/add_message", methods=["POST"])
def add_message():
    data = request.json
    sender_id = data["senderId"]
    reciver_id = data["reciverId"]
    message_text = data["messageText"]
    new_message = Message(
        seder_id=sender_id, reciver_id=reciver_id, message_text=message_text
    )
    db.session.add(new_message)
    db.session.commit()
    return jsonify({"message": "Message added successfully"}), 200


@app.route("/get_message", methods=["POST"])
def get_messages():
    data = request.json
    userId = data["userId"]
    friendId = data["friendId"]
    messages = (
        Message.query.filter(
            (Message.seder_id == userId) & (Message.reciver_id == friendId)
            | (Message.seder_id == friendId) & (Message.reciver_id == userId)
        ).order_by(Message.id).all()
    )
    messages_data = [
        {
            "senderId": message.seder_id,
            "reciverId": message.reciver_id,
            "messageText": message.message_text,
        }
        for message in messages
    ]
    return jsonify({"messages": messages_data})

if __name__ == "__main__":
    app.run(debug=True)
