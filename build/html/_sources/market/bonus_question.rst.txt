====================
营销工具/猜题赢现金
====================


用户获取题目
----------------------
用户获取题目

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/bonus/question``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "question": [  // 问题列表
                {
                    "answers": [  // 答案列表
                        {
                            "answer": 1,  // 答案内容
                            "answer_id": 38, // 答案id
                            "question_id": 4  // 问题id
                        },
                    ],
                    "difficult": 1,  // 问题难度
                    "image": "http://0.0.0.0:9000/_uploads/photos/2"  // 问题图片
                    "question_id": 4,  // 问题id
                    "question": "第4题"  // 问题内容
                }
            ],
            "test_id": 18  // 试题id
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



判断答案是否正确
-----------------------
判断答案是否正确

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/bonus/answers``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
test_id                Integer       必需                      试题id
question_id            Integer       必需                      问题id
answer_id              Integer       必需                      答案id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "answer": true,  // 答案结果
            "answer_id": 10,  // 答案id
            "question_id": 4,  // 问题id
            "test_id": 17,  // 试题id
            "user_id": 2  // 用户id
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



