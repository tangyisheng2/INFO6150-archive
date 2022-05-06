#!/usr/bin/env python
# -*- coding:utf-8 -*-
# @FileName  :comment.py
# @Time      :4/19/22
# @Author    :Eason Tang
from flask import request
from flask_restful import Resource


class Comment(Resource):
    comment = []

    def __init__(self, **kwargs):
        self.comment = kwargs["comment"]
        self.index = len(self.comment) + 1 if self.comment else 1

    def get(self):
        return self.comment

    def post(self):
        json_data = request.get_json()
        self.comment.extend([{
            "id": self.index,
            "name": json_data["name"],
            "body": json_data["body"]
        }])
        self.index += 1
        print(self.comment)
        return self.comment
