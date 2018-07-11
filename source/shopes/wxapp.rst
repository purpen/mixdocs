================
小程序模块
================

微信用户授权
------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/accounts/wxa_authorize``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
js_code                 String      必填                  店铺编号
encrypted_data          String      必填
iv                      String      必填
auth_app_id             String      必填
=====================  ==========  =========  ==========  =============================



绑定手机号
------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/accounts/wxa_bind_mobile``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
auth_app_id             String      必填                    小程序ID
openid                  String      必填                    用户标识
mobile                  String      必填                    手机号
verify_code             String      必填                    手机验证码
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "avatar": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
            "created_at": 1531111686,
            "expiration": 2592000,
            "mobile": "13001179400",
            "openid": "jsdkj3j",
            "token": "eyJhbGciOiJIUzI1NiIsImlhdCI6MTUzMTExMTY4NiwiZXhwIjoxNTMzNzAzNjg2fQ.eyJpZCI6NX0.gtA8ABBLGg-TGbnVRzhz2QzyPtO_JJCQ8reuFQUg1hE",
            "uid": "15308124976",
            "username": "马化腾"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 400,
            "message": "该手机号已绑定"
        },
        "success": false
    }