#!/usr/bin/env python
# -*- coding:utf-8 -*-
# @FileName  :main.py
# @Time      :4/19/22
# @Author    :Eason Tang

import os
import sys
# SSL
from OpenSSL import SSL
from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

# BP
from Comment import comment_bp

absPath = os.path.abspath(__file__)  # 返回代码段所在的位置，肯定是在某个.py文件中
temPath = os.path.dirname(absPath)  # 往上返回一级目录，得到文件所在的路径
temPath = os.path.dirname(temPath)  # 在往上返回一级，得到文件夹所在的路径
sys.path.append(temPath)  # 添加该路径到搜索路径中

context = SSL.Context(SSL.TLSv1_2_METHOD)

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
# 添加资源
app.register_blueprint(comment_bp)

# Comment
comment = [
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
        ]

if __name__ == "__main__":
    app.run(host='0.0.0.0',
            port=3001,
            debug=True)