====================
营销工具/猜题赢现金
====================


用户获取题目
----------------------
用户获取题目

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/question``
* API接口请求方法：``GET``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
is_share               Integer      可选            0         是否分享 0、否 1、是
=====================  ===========  ==========  ===========  ==============================


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

* API接口请求地址：``/guess_image/answers``
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
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



试题结算
-----------------------
试题结算

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/test_settlement``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
test_id                Integer       必需                      试题id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "amount": 20,  // 获得现金
            "answer_date": 1533830400,  // 回答日期
            "bonus_amount": 35,  // 获得优惠券总金额
            "bonuses": [
                {
                    "amount": 5,
                    "code": "OUBMZRPJUTY",
                    "count": 1,
                    "created_at": 1533965615,
                    "end_date": 1534608000,
                    "min_amount": 5,
                    "pickup_count": 1,
                    "start_date": 1533916800,
                    "type_text": "满5减5元",
                    "use_count": 0
                },
            ],
            "created_at": 1533893802,
            "is_settlement": true,  // 是否结算
            "prize_pool": 200,  // 奖金池
            "right_count": 7,  // 回答正确个数
            "count": 10,  // 回答题数
            "test_id": 22  // 试题id
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


获取可提现金额
----------------------
获取可提现金额

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/cash_price``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "cash_price": 140  // 可提现金额
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



获取优惠券数量
----------------------
获取优惠券数量

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/coupon_count``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "coupon_count": 3  // 数量
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



猜图-答案列表
----------------------
猜图-答案列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/answer_list``
* API接口请求方法：``GET``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
test_id                Integer       必需                      试题id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "product_list": [
                {
                    "answer_result": false,  // 是否回答正确
                    "price": 2,  // 零售价
                    "product_name": "汽车",  // 商品名
                    "product_path": "http://wx2.sinaimg.cn/large/005Pcwbtgy1fdqwmqs6fwj31kw10fk87.jpg",  // 商品图片
                    "product_rid": "2",  // 商品rid
                    "right_answer": 65,  // 正确答案id
                    "right_answer_name": "汽车",  // 正确答案名
                    "sale_price": 2  // 折扣价
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



猜图-获取用户所有奖励
-------------------------
猜图-获取用户所有奖励

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/all_rewards``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "amount": 0,  // 现金
            "bonus_amount": 40,  // 优惠券总额
            "right_count": 8  // 答对题数
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


