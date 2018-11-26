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


查看活动详情
----------------------
查看活动详情

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
            },
            "owner_store": {
                "kind": 1,  // 1、品牌馆  2、生活馆 3、普通用户
                "store_bgcover": "https://s3.lexivip.com/20180911/4148FlTE2Q_LRdlouNbvyf_E3HTjWHJB.png",  // 店铺背景图
                "store_logo": "https://s3.lexivip.com/20180913/4849FgzxNAZiToR482ksb89Pl2kOAQ8B.png",  // 店铺logo
                "store_name": "爱尚",  // 店铺名
                "store_rid": "95149076"  // 店铺rid
            },
            "owner_user": {  // 所属用户
                "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                "user_name": "蓝胖子",
                "user_sn": "10296157834"
            },
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



查看领取我的礼物的人
-------------------------
查看领取我的礼物的人

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/product/receive``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
===============  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 1,
            "friend_list": [
                {
                    "receive_at": 0,  // 领取时间
                    "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                    "user_name": "蓝胖子",
                    "user_sn": "10296157834"
                }
            ],
            "next": false,
            "prev": false
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



我参与的活动汇总
-------------------------
我参与的活动汇总

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/collect_activity``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "join_activity": 1,  // 我参与的抽奖
            "my_activity": 0,  // 我送出的礼物
            "receive_activity": 1  // 我收到的礼物
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


查看十个最热门的活动
-------------------------
查看十个最热门的活动

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/more``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "activity_list": [
                {
                    "activity_rid": "Y18112357682",  // 活动rid
                    "is_join": 1,  // 本人是否参与
                    "join_count": 1,  // 已参与人数
                    "full_count": 20,  // 需满足人数
                    "price": 189,  // 销售价
                    "product_name": "望北原创自制 2018年新款简约百搭休闲裤九分裤",  // 商品名
                    "product_rid": "8670312598",  // 商品rid
                    "real_price": 178,  // 商品真实价格
                    "sale_price": 178,  // 折扣价
                    "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                    "user_name": "蓝胖子",
                    "user_sn": "10296157834"
                    "assets": [
                        {
                            "created_at": 1541599579,
                            "filename": "1.jpg",
                            "filepath": "20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg",
                            "id": 38641,
                            "type": 1,
                            "view_url": "https://s3.lexivip.com/20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg"
                        },
                        {
                            "created_at": 1541599579,
                            "filename": "2.jpg",
                            "filepath": "20181107/0618FpmDb_An-ssdeczTRdJsClNe-FIQ.jpg",
                            "id": 38640,
                            "type": 1,
                            "view_url": "https://s3.lexivip.com/20181107/0618FpmDb_An-ssdeczTRdJsClNe-FIQ.jpg"
                        },
                        {
                            "created_at": 1541599579,
                            "filename": "3.jpg",
                            "filepath": "20181107/0618FrQaO0hGFP031EgM_quMZ4GnLv2H.jpg",
                            "id": 38638,
                            "type": 1,
                            "view_url": "https://s3.lexivip.com/20181107/0618FrQaO0hGFP031EgM_quMZ4GnLv2H.jpg"
                        },
                        {
                            "created_at": 1541599579,
                            "filename": "4.jpg",
                            "filepath": "20181107/0618FumUEnK8xtd8pjy_cj6ECTxagpGN.jpg",
                            "id": 38637,
                            "type": 1,
                            "view_url": "https://s3.lexivip.com/20181107/0618FumUEnK8xtd8pjy_cj6ECTxagpGN.jpg"
                        },
                        {
                            "created_at": 1541599577,
                            "filename": "5.jpg",
                            "filepath": "20181107/0615Fiot22kYJub4EhbueVTrdnHmeUiQ.jpg",
                            "id": 38636,
                            "type": 1,
                            "view_url": "https://s3.lexivip.com/20181107/0615Fiot22kYJub4EhbueVTrdnHmeUiQ.jpg"
                        },
                        {
                            "created_at": 1541599579,
                            "filename": "6.jpg",
                            "filepath": "20181107/0618FvFmtRpBJt6yJWh2nypWUWF-bahx.jpg",
                            "id": 38639,
                            "type": 1,
                            "view_url": "https://s3.lexivip.com/20181107/0618FvFmtRpBJt6yJWh2nypWUWF-bahx.jpg"
                        }
                    ]
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


我参与的抽奖
-------------------------
我参与的抽奖

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/join``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
s                Number      可选         0          0、全部 1、已中奖 2、未中奖 3、已失效
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


        "data": {
            "activity_list": [
                {
                    "activity_rid": "Y18112664521",  // 活动编号
                    "created_at": 1543225329,  // 参与时间
                    "full_count": 20,  // 满足人数
                    "is_receive": 0,  // 是否领奖 0、未领奖 1、已领奖
                    "join_count": 1,  // 参与人数
                    "product_name": "2018年冬季新款男士个性加绒拼接棉衣",  // 商品名
                    "product_rid": "8537216804",  // 商品rid
                    "s_color": "军绿色",  // 颜色
                    "s_model": "M",  // 型号
                    "sku": "8054396721",  // sku
                    "status": 3,  // 1、已中奖 2、未中奖 3、已失效 4、未开奖
                    "user_info": {  // 发起用户
                        "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                        "user_name": "蓝胖子",
                        "user_sn": "10296157834"
                    },
                    "view_url": "https://s3.lexivip.com/20181107/2344FiRbFqkXD4hKGVky91L-Co7RG0UZ.jpg",  // 商品图片
                    "winning_at": 0  // 开奖时间
                }
            ],
            "count": 1,
            "next": false,
            "prev": false
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }










