#!/usr/bin/env python
# -*- coding:utf-8 -*-
# @FileName  :__init__.py
# @Time      :4/19/22
# @Author    :Eason Tang
from flask import Blueprint
from flask_restful import Api

from .comment import Comment

comment_bp = Blueprint('comment', __name__)
api = Api(comment_bp)
api.add_resource(Comment, '/comment', resource_class_kwargs={"comment": [
                {
                    "id": 1,
                    "name": "admin",
                    "body": "Hello World!"
                },
                {
                    "id": 2,
                    "name": "Zeoob",
                    "body": "Omg, is it real? Start building your own."
                },
                {
                    "id": 3,
                    "name": "Mike",
                    "body": "This is by far one of the coolest things I’ve ever seen."
                }
            ]})
