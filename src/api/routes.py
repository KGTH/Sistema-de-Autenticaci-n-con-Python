"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required , get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])   #registro de usuario
def register():
    data = request.json
    try:
        user = User(name=data['name'], email=data['email'], password=data['password'])
        db.session.add(user)
        db.session.commit()
    except Exception as e: 
        print(e)
        return jsonify({"msg": "Error"}),400
    
    return jsonify({"msg": "User created"}),200

@api.route('/login', methods=['POST'])  #login de usuario    
def login():
    data = request.json 
    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if user:
        access_token = create_access_token(identity=user.id)   
        return jsonify({"token": access_token}), 200
    
    return jsonify({"msg": "Wrong user/password"}), 400
