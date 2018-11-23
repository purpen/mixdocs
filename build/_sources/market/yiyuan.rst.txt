=========================
营销工具/一元送礼模块
=========================


查看今日礼物
----------------------
查看今日礼物

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/product``
* API接口请求方法：``GET``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "assets": [
                {
                    "created_at": 1541599579,
                    "filename": "1.jpg",
                    "filepath": "20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg",
                    "id": 38641,
                    "type": 1,
                    "view_url": "https://s3.lexivip.com/20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg"
                },
            ],
            "price": 189,  // 销售价
            "product_name": "望北原创自制 2018年新款简约百搭休闲裤九分裤",
            "product_rid": "8670312598",
            "quantity": 20,  // 可送数量
            "real_price": 178, // 实际价格
            "sale_price": 178, // 折扣价
            "surplus_count": 20  // 剩余数量
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


新增送礼活动
----------------
新增送礼活动

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
openid                 String        必需                      openid
people_num             Number        必需                      最少人数
product_rid            String        必需                      商品rid
blessing               String        可选                      祝福语
pay_type               Number        可选             1        支付类型 1、微信
sync_pay               Number        可选             1        是否同步返回支付参数 0、否 1、是
auth_app_id            Number        可选                      auth_app_id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "activity_rid": "Y18112357682",  // 活动编号
            "actual_payment": 1,  // 实际支付金额
            "pay_params": {}
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


查看今日礼物
----------------------
查看今日礼物

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/<string:rid>``
* API接口请求方法：``GET``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    String        必需                      商品rid
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "current_time": 1542966869,  // 当前时间
            "is_receive": false,  // 是否领奖
            "people_count": 1,  // 当前参与人数
            "product": {
                "assets": [   // 商品图片
                    {
                        "created_at": 1541599579,
                        "filename": "1.jpg",
                        "filepath": "20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg",
                        "id": 38641,
                        "type": 1,
                        "view_url": "https://s3.lexivip.com/20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg"
                    }
                ],
                "price": 189,  // 销售价
                "product_name": "望北原创自制 2018年新款简约百搭休闲裤九分裤",  // 商品名
                "product_rid": "8670312598",  // 商品rid
                "real_price": 178,  // 真实价格
                "sale_price": 178  // 折扣价
            },
            "start_time": 1542966869,  // 开始时间
            "status": 1,  // 活动状态 2、抽奖中 3、开奖成功 4、已失效
            "surplus_count": 19,  // 剩余人数
            "total_people_count": 20,  // 需要人数
            "user_list": [  // 参与者
                {
                    "is_receive": false,  // 是否领奖
                    "is_win": false,  // 是否中奖
                    "receive_at": 0,  // 领奖时间
                    "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                    "user_name": "蓝胖子",
                    "user_sn": "10296157834"
                }
            ],
            "winning_user": {  // 中奖用户
                "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                "user_name": "蓝胖子",
                "user_sn": "10296157834"
            }
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }
