===============
分销商订单模块
===============
全渠道订单同步接口


分销商订单列表
=======================
商家获取全部或某个状态下分销订单列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/master/orders``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=================  ========  ===========  ==========  =========================================================
名称                 类型      是否必须       默认值       描述说明
=================  ========  ===========  ==========  =========================================================
is_distributed      Number    必填                      是否分销订单 1、分销订单
status	            Number    可选                      订单状态 1、待发货 2、已发货 3、已完成 4、已取消 5、未付款
create_at           String    可选                      下单时间
search              String    可选                      商品名称或订单编号
page                Number    可选          1           当前页码
per_page            Number    可选          10          每页数量
=================  ========  ===========  ==========  =========================================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 160,
            "next": "http://0.0.0.0:9000/api/v1.0/master/orders?status=0&page=2",
            "prev": null,
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
                    "official_order_id": null,  // 官方平台订单号
                    "outside_target_id": "D18070316803529",  // 第三方平台订单号
                    "pay_amount": 17,  // 支付金额
                    "reach_minus": 0,  // 满减金额
                    "distributed": false,  // 分销订单
                    "remark": null,  // 卖家备注
                    "rid": "D18070316803529",  // 订单编号
                    "ship_mode": 1,  // 运送方式
                    "status": 5,  // 订单状态
                    "store": {  // 店铺
                        "store_logo": {  // logo
                            "created_at": 1,
                            "filename": "1",
                            "filepath": "180523/8f51855eedae984.jpg",
                            "id": 1,
                            "type": 1,
                            "view_url": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg"
                        },
                        "store_name": "第一家",  // 店铺名称
                        "store_rid": "2"  // 店铺编号
                    },
                    "total_amount": 3,  // 商品金额
                    "total_quantity": 3,  // 商品总数量
                    "blessing_utterance": "嘿嘿嘿",  // 买家寄语
                    "buyer_remark": "哈哈哈",  // 买家备注
                    "payed_at": 12321312,  // 付款时间
                    "received_at": 12321312,  // 签收时间
                    "is_many_express": false, // 是否多物流公司发货
                    "master_order_status": 3,  // 商家列表订单状态  1、待发货 2、已发货 3、已完成 4、已取消 5、未付款
                    "items": [
                        {
                            "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 5,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 4,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,
                            "express_at": 0,
                            "express_code": "YTO",
                            "express_name": "圆通",
                            "express_no": null,
                            "fans_count": 1231,
                            "freight": 157,
                            "mode": "1 1",
                            "order_sku_commission_price": 6,
                            "order_sku_commission_rate": 5,
                            "price": 44,
                            "product_name": "棉花",
                            "product_rid": "4",
                            "province": "",
                            "quantity": 30,
                            "rid": "4",
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 40,
                            "stock_count": 21262,
                            "stock_quantity": 21262,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第一家",
                            "store_rid": "2",
                            "tag_line": "1",
                            "town": ""
                        }
                    ],

                },
            ],
            "pending_payment_not_read": 0,
            "pending_shipment_not_read": 33,
            "finish_not_read": 13,
            "cancel_not_read": 0,
            "shipment_not_read": 1
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }
