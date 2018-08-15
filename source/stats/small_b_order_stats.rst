===================
小b订单结算统计模块
===================


生活馆订单列表
----------------
生活馆订单列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/life_orders``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ===========================================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ===========================================================
store_rid    String    必需                  生活馆rid
status	     Number	   可选         0        订单状态 0、全部 1、待发货 2、已发货 3、已完成
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ===========================================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 1,
            "next": null,
            "orders": [
                {
                    "buyer_address": "青年路",  // 买家地址
                    "buyer_city": "淄博",  //买家市
                    "buyer_country": "中国",  // 买家国家
                    "buyer_name": "ZT-2",
                    "buyer_phone": "13260180689",  // 买家电话
                    "buyer_province": "山东",  // 买家省
                    "buyer_remark": null,  // 买家备注
                    "buyer_tel": "13260180689",  // 买家手机
                    "buyer_zipcode": "255300",  // 买家邮编
                    "coupon_amount": 0,  // 优惠券金额
                    "created_at": 1530608616,  // 创建时间
                    "current_time": 1533813725,  // 当前时间
                    "customer_order_id": null,  // 分销商订单编号
                    "discount_amount": 0,  // 店铺优惠金额 = 首单优惠 + 满减 + 优惠券
                    "first_discount": 0,  // 首单优惠
                    "freight": 14,  // 运费
                    "items": [
                        {
                            "commission_price": null,  // 分销佣金
                            "commission_rate": 10,  // 佣金比例
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 3,
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
                    "life_order_status": 3,  // 生活馆订单状态， 1、待发货 2、已发货 3、已完成
                     "official_order_id": null,  // 官方平台订单号
                    "outside_target_id": "D18070316803529",  // 第三方平台订单号
                    "pay_amount": 17,  // 支付金额
                    "payed_at": 1534231106,  // 支付时间
                    "payment_slip": null,  // 支付单号
                    "reach_minus": 2,
                    "received_at": 1534232705,
                    "refund_amount": 0,
                    "remark": null,
                    "rid": "D18081490174623",  // 订单编号
                    "ship_mode": 1,
                    "signed_at": 0,
                    "status": 30,
                    "store": {  // 店铺
                        "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "store_name": "第2家",
                        "store_rid": "3"
                    },
                    "total_amount": 30,
                    "total_quantity": 10
                }
            ],
            "prev": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



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






