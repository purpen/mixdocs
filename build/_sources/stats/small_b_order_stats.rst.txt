===================
小b订单结算统计模块
===================


生活馆订单汇总统计
------------------------
生活馆订单汇总统计

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/life_orders_collect``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
store_rid              String      必需                    生活馆rid
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "all_count": 11,  // 总计成交订单
            "today_count": 0  // 今日成交
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



生活馆收益汇总统计
------------------------
生活馆收益汇总统计

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/life_orders_sale_collect``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
store_rid              String      必需                    生活馆rid
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "pending_commission_price": 7,  // 待结算金额
            "today_commission_price": 0,  // 今日收益
            "total_commission_price": 10  // 累计收益
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



生活馆提现汇总统计
------------------------
生活馆提现汇总统计

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/life_cash_collect``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
store_rid              String      必需                    生活馆rid
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "cash_price": 0,  // 可提现金额
            "total_cash_price": 0  // 累计已提现
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



生活馆订单交易记录
---------------------------------
生活馆订单交易记录

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/life_orders/transactions``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  ====================================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  ====================================================
date_range             String      必需                    统计日期 '2018-01' 'week':近7天  'month':近一月
store_rid              String      必需                    生活馆rid
status                 Number      可选         0          0、全部 1、待结算 2、成功 3、退款
page                   Number      可选         1          当前页码
per_page               Number      可选         10         每页数量
=====================  ==========  =========  ==========  ====================================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 2,
            "not_settlement_not_read": 0,  // 待结算未读数量
            "refund_not_read": 0,  // 退款未读数量
            "success_not_read": 0,  // 成功未读数量
            "transactions": [
                {
                    "actual_amount": 3,  // 收入
                    "order_rid": "D18081453268074",  // 订单号
                    "payed_at": 1534232904,  // 时间
                    "status": 1  // 状态 1、待结算 2、成功 3、退款
                },
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


生活馆对账单
---------------------------------
生活馆对账单

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/life_orders/statements``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  ====================================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  ====================================================
store_rid              String      必需                    生活馆rid
page                   Number      可选         1          当前页码
per_page               Number      可选         10         每页数量
=====================  ==========  =========  ==========  ====================================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "statements": {
                "2018": {
                    "7": {
                        "statements": [
                            {
                                "actual_account_amount": 11,  // 实际提现金额
                                "actual_amount": 11,  // 提现金额
                                "created_at": 1534581237,  // 提现时间
                                "receive_target": 1,  // 提现到 1、微信零钱包
                                "record_id": 3,  // 记录id
                                "service_fee": 0,  // 服务费
                                "status": 2,  // 提现状态 1、审核中 2、成功 3、失败
                                "store_rid": "2"  //  生活馆rid
                            }
                        ],
                        "total_amount": 11
                    },
                }
            }
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


生活馆对账单详情
---------------------------------
生活馆对账单详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/life_orders/statement_items``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  ====================================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  ====================================================
store_rid              String      必需                    生活馆rid
record_id              String      必需                    对账单id
=====================  ==========  =========  ==========  ====================================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "life_cash_record_dict": {
                "actual_amount": 22,  // 提现金额
                "created_at": 1534582337,  // 提现时间
                "order_info": {
                    "1970": {
                        "1": {
                            "D18080663458120": {
                                "commission_price": 1,  // 收益
                                "created_at": 1533542675  // 时间
                            },
                            "D18080692057183": {
                                "commission_price": 1,
                                "created_at": 1533542835
                            }
                        }
                    }
                },
                "receive_target": 1,  // 提现到 1、微信零钱包
                "record_id": 1,  // 记录id
                "service_fee": 0,  // 服务费
                "status": 2,  // 提现状态 1、审核中 2、成功 3、失败
                "store_rid": "2"  //  生活馆rid
            }
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



生活馆订单收益详情
---------------------------------
生活馆订单收益详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/life_orders/<string:rid>``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  ====================================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  ====================================================
rid                    String      必需                    订单编号
store_rid              String      必需                    生活馆rid
=====================  ==========  =========  ==========  ====================================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "blessing_utterance": "嘿嘿嘿",
            "buyer_address": "青年路",
            "buyer_city": "淄博",
            "buyer_country": "中国",
            "buyer_name": "张王",
            "buyer_phone": "13260180689",
            "buyer_province": "山东",
            "buyer_remark": "哈哈哈",
            "buyer_tel": "13260180689",
            "buyer_zipcode": "255300",
            "coupon_amount": 0,
            "created_at": 1533542675,
            "current_time": 1534595020,
            "customer_order_id": "D18080665081342",
            "discount_amount": 1,
            "distributed": true,
            "first_discount": 0,
            "freight": 190,
            "items": [
                {
                    "commission_price": 10,
                    "commission_rate": 10,
                    "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "cover_id": 1,
                    "deal_price": 1,
                    "delivery_country": "",
                    "delivery_country_id": null,
                    "express": 4,
                    "express_at": 0,
                    "express_code": "YTO",
                    "express_no": null,
                    "freight": 190,
                    "mode": "1 1",
                    "price": 3,
                    "product_name": "自行车",
                    "product_rid": "3",
                    "quantity": 10,
                    "rid": "3",
                    "s_color": "1",
                    "s_model": "1",
                    "s_weight": 1,
                    "sale_price": 3,
                    "stock_count": 32363,
                    "stock_quantity": 32363,
                    "store_name": "第2家",
                    "store_rid": "3"
                }
            ],
            "official_order_id": "D18080628045193",
            "outside_target_id": "D18080663458120",
            "pay_amount": 199,
            "payed_at": 0,
            "payment_slip": null,
            "reach_minus": 1,
            "received_at": 0,
            "refund_amount": 0,
            "remark": null,
            "rid": "D18080663458120",
            "ship_mode": 1,
            "signed_at": null,
            "status": 5,
            "store": {
                "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                "store_name": "第2家",
                "store_rid": "3"
            },
            "total_amount": 10,
            "total_quantity": 10
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


生活馆最近一笔提现
---------------------------------
生活馆最近一笔提现

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/life_cash_recent``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  ====================================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  ====================================================
store_rid              String      必需                    生活馆rid
=====================  ==========  =========  ==========  ====================================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "actual_account_amount": 11,  // 实际提现金额
            "actual_amount": 11,  // 提现金额
            "created_at": 1534581237,  // 提现时间
            "receive_target": 1,  // 提现到 1、微信零钱包
            "record_id": 3,  // 记录id
            "service_fee": 0,  // 服务费
            "status": 2,  // 提现状态 1、审核中 2、成功 3、失败
            "store_rid": "2"  //  生活馆rid
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }







