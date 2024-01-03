from flask import Flask, request,



@route("/register" , method="POST")
def register():
    if request.method == "POST":
