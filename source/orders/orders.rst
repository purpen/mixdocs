===============
订单模块
===============
全渠道订单同步接口


用户查看订单列表
============================
用户获取全部或某个状态下订单列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ===========================================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ===========================================================
status	     Number	   可选         0        订单状态 0、全部 1、待发货 2、待收货 3、待评价 4、待付款
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ===========================================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 252,
            "next": "http://0.0.0.0:9000/v1.0/orders?status=0&page=2",
            "prev": null,
            "orders": [
                {
                    "created_at": 1540265891,  // 创建时间
                    "pay_amount": 1066.5,  // b端商家 支付金额
                    "rid": "D18102367980154",  // 订单编号
                    "store": {   //
                        "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "store_name": "第一家",
                        "store_rid": "223242"
                    },
                    "user_order_status": 3,  // 用户查看订单列表状态
                                            // 1、待发货 2、待收货 3、待评价 4、待付款 5、已完成 6、已取消
                    "user_pay_amount": 1066.23   //  c端用户 支付金额
                    "items": [
                        {
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",   // 商品图片
                            "cover_id": 1,   //
                            "deal_price": 20,   // 商品价格
                            "express": 4,   //  物流公司id
                            "express_at": 0,   // 发货时间
                            "express_code": "YTO",   // 物流公司代码
                            "express_name": "圆通",   // 物流公司名称
                            "express_no": '23813719873',   // 运单编号
                            "product_name": "汽车",   //  商品名称
                            "product_rid": "221312",   // 商品rid
                            "quantity": 30,   //  数量
                            "rid": "222342"   // sku rid
                        }
                    ],
                },

            ],
            'pending_pay_count': 12,  // 待付款未读数量
            'pending_shipment_count': 0,  // 待发货未读数量
            'pending_receipt_count': 0,  // 待收货未读数量
            'pending_rating_count': 0,  // 待评价未读数量
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }




返回错误格式：

.. code-block:: javascript

    {
        "status": {
            "code": 400,
            "message": "订单状态错误"
        },
        "success": false
    }



用户查看独立小程序订单列表
============================
用户查看独立小程序订单列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/independent``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ===========================================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ===========================================================
status	     Number	   可选         0        订单状态 0、全部 1、待发货 2、待收货 3、待评价 4、待付款
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ===========================================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 155,
            "next": true,
            "prev": false,
            "orders": [
                {
                    "created_at": 1540265891,  // 创建时间
                    "pay_amount": 1066.5,  // b端商家 支付金额
                    "rid": "D18102367980154",  // 订单编号
                    "store": {   //
                        "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "store_name": "第一家",
                        "store_rid": "223242"
                    },
                    "user_order_status": 3,  // 用户查看订单列表状态
                                            // 1、待发货 2、待收货 3、待评价 4、待付款 5、已完成 6、已取消
                    "user_pay_amount": 1066.23   //  c端用户 支付金额
                    "items": [
                        {
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",   // 商品图片
                            "cover_id": 1,   //
                            "deal_price": 20,   // 商品价格
                            "express": 4,   //  物流公司id
                            "express_at": 0,   // 发货时间
                            "express_code": "YTO",   // 物流公司代码
                            "express_name": "圆通",   // 物流公司名称
                            "express_no": '23813719873',   // 运单编号
                            "product_name": "汽车",   //  商品名称
                            "product_rid": "221312",   // 商品rid
                            "quantity": 30,   //  数量
                            "rid": "222342"   // sku rid
                        }
                    ],
                }
            ],
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



商家订单列表
=============================
商家获取全部或某个状态下订单列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/master/orders``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=================  ========  ===========  ==========  =========================================================
名称                类型      是否必须        默认值     描述说明
=================  ========  ===========  ==========  =========================================================
status	            Number	  可选	                  订单状态 1、待发货 2、已发货 3、已完成 4、已取消 5、未付款
is_distributed      Number    可选           0         是否分销订单 1、分销订单
create_at           String    可选                     下单时间
search              String    可选                     商品名称或订单编号
page                Number    可选          1          当前页码
per_page            Number    可选          10         每页数量
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
                    "pay_amount": 17,  // b端商家 支付金额
                    "user_pay_amount": 17, // c端用户 支付金额
                    "official_bonus_amount": 0, // 官方优惠券优惠金额
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
                    "master_order_status": 3,  // 商家列表订单状态
                                                //1、待发货 2、已发货 3、已完成 4、已取消 5、未付款
                    "type": 1,  // 1、正常订单; 8、生活馆发起一元送礼订单；9、商家发起一元送礼订单
                                // 10、普通用户发起一元送礼订单  11、普通用户发起可调换一元送礼订单
                    "items": [
                        {
                            "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 10,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 30,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "express_code": "ZJS",
                            "express_name": "宅急送",
                            "fans_count": 1,
                            "freight": 590,
                            "freight_name": "运费模板1000",  // 运费模板名
                            "mode": "1 1",
                            "order_sku_commission_price": 6,// 分销佣金
                            "order_sku_commission_rate": 5,// 佣金比例
                            "price": 33,
                            "product_name": "摩托",  // 商品名
                            "product_rid": "3",
                            "province": "",
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 30,
                            "stock_count": 32033,
                            "stock_quantity": 32033,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第2家",
                            "store_rid": "3",
                            "tag_line": "1",
                            "town": ""
                        }
                    ],

                },
            ],
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }




返回错误格式：

.. code-block:: javascript

    {
        "status": {
            "code": 400,
            "message": "订单状态错误"
        },
        "success": false
    }


订单详情
=============
单个订单详情信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/<rid>``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
rid          String    必填                  订单编号
===========  ========  =========  ========  ==============================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
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
            "pay_amount": 17,  // b端商家 支付金额
            "user_pay_amount": 17, // c端用户 支付金额
            "official_bonus_amount": 0, // 官方优惠券优惠金额
            "reach_minus": 0,  // 满减金额
            "distributed": false,  // 分销订单
            "remark": null,  // 卖家备注
            "rid": "D18070316803529",  // 订单编号
            "ship_mode": 1,  // 运送方式
            "status": 5,  // 订单状态
            "life_order_status": 1,  // 1、待发货 2、已发货 3、已完成
            "master_order_status": 1,  // 1、待发货 2、已发货 3、已完成 4、已取消 5、待付款
            "user_order_status": 1  // 1、待发货 2、待收货 3、待评价 4、待付款 5、已完成 6、已取消
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
            "order_total_commission_price": 0.01,  // 订单总佣金
            "items": [
                {
                    "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "city": "",
                    "commission_price": null,
                    "commission_rate": 10,
                    "country": "",
                    "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "cover_id": 1,
                    "deal_price": 30,
                    "delivery_city": "北京",
                    "delivery_country": "",
                    "delivery_country_id": null,
                    "delivery_province": "北京",
                    "distribution_type": 1,
                    "express": 4,  // 快递公司ID
                    "express_at": 0,  // 发货时间
                    "express_no": null,  // 运单号
                    "express_code": "ZJS",
                    "express_name": "宅急送",
                    "fans_count": 1,
                    "freight": 590,
                    "freight_name": "运费模板1000",  // 运费模板名
                    "mode": "1 1",
                    "order_sku_commission_price": 6,// 分销佣金
                    "order_sku_commission_rate": 5,// 佣金比例
                    "price": 33,
                    "product_name": "摩托",  // 商品名
                    "product_rid": "3",
                    "province": "",
                    "quantity": 3,  // 数量
                    "rid": "1",  // sku
                    "s_color": "1",
                    "s_model": "1",
                    "s_weight": 1,
                    "sale_price": 30,
                    "stock_count": 32033,
                    "stock_quantity": 32033,
                    "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "store_name": "第2家",
                    "store_rid": "3",
                    "tag_line": "1",
                    "town": ""
                }
            ],
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

返回错误格式：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }



核心平台订单详情
=====================
核心平台订单详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/core_orders/<rid>``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
rid          String    必填                  订单编号
===========  ========  =========  ========  ==============================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
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
            "pay_amount": 17,  // b端商家 支付金额
            "user_pay_amount": 17, // c端用户 支付金额
            "official_bonus_amount": 0, // 官方优惠券优惠金额
            "reach_minus": 0,  // 满减金额
            "distributed": false,  // 分销订单
            "remark": null,  // 卖家备注
            "rid": "D18070316803529",  // 订单编号
            "ship_mode": 1,  // 运送方式
            "status": 5,  // 订单状态
            "user_order_status": 1  // 1、待发货 2、待收货 3、待评价 4、待付款 5、已完成 6、已取消
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
            "items": [
                {
                    "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "city": "",
                    "commission_price": null,
                    "commission_rate": 10,
                    "country": "",
                    "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "cover_id": 1,
                    "deal_price": 30,
                    "delivery_city": "北京",
                    "delivery_country": "",
                    "delivery_country_id": null,
                    "delivery_province": "北京",
                    "distribution_type": 1,
                    "express": 4,  // 快递公司ID
                    "express_at": 0,  // 发货时间
                    "express_no": null,  // 运单号
                    "express_code": "ZJS",
                    "express_name": "宅急送",
                    "fans_count": 1,
                    "freight": 590,
                    "freight_name": "运费模板1000",  // 运费模板名
                    "mode": "1 1",
                    "order_sku_commission_price": 6,// 分销佣金
                    "order_sku_commission_rate": 5,// 佣金比例
                    "price": 33,
                    "product_name": "摩托",  // 商品名
                    "product_rid": "3",
                    "province": "",
                    "quantity": 3,  // 数量
                    "rid": "1",  // sku
                    "s_color": "1",
                    "s_model": "1",
                    "s_weight": 1,
                    "sale_price": 30,
                    "stock_count": 32033,
                    "stock_quantity": 32033,
                    "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "store_name": "第2家",
                    "store_rid": "3",
                    "tag_line": "1",
                    "town": ""
                }
            ],
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

返回错误格式：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }



c端-支付后获取订单详情
============================
c端-支付后获取订单详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/after_payment/<string:rid>``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
rid          String    必填                  订单编号或官方订单编号
===========  ========  =========  ========  ==============================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
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
                    "pay_amount": 17,  // b端商家 支付金额
                    "user_pay_amount": 17, // c端用户 支付金额
                    "official_bonus_amount": 0, // 官方优惠券优惠金额
                    "reach_minus": 0,  // 满减金额
                    "distributed": false,  // 分销订单
                    "remark": null,  // 卖家备注
                    "rid": "D18070316803529",  // 订单编号
                    "ship_mode": 1,  // 运送方式
                    "status": 5,  // 订单状态
                    "user_order_status": 1 // 1、待发货 2、待收货 3、待评价 4、待付款 5、已完成 6、已取消
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
                    "items": [
                        {
                            "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 10,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 30,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "express_code": "ZJS",
                            "express_name": "宅急送",
                            "fans_count": 1,
                            "freight": 590,
                            "freight_name": "运费模板1000",  // 运费模板名
                            "mode": "1 1",
                            "order_sku_commission_price": 6,// 分销佣金
                            "order_sku_commission_rate": 5,// 佣金比例
                            "price": 33,
                            "product_name": "摩托",  // 商品名
                            "product_rid": "3",
                            "province": "",
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 30,
                            "stock_count": 32033,
                            "stock_quantity": 32033,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第2家",
                            "store_rid": "3",
                            "tag_line": "1",
                            "town": "",
                            "max_days": 5,  // 最大天数
                            "min_days": 3,  // 最小天数
                            "py_intro": "",
                        }
                    ],
                },
            ],
        "buyer_city": "淄博",  // 城市
        "buyer_name": "张",  // 姓名
        "buyer_province": "山东",  // 省
        "buyer_address": "青年路",  // 详细街道
        "buyer_town": "周村",  // 镇
        "buyer_tel": "13260180689",  // 手机
        "buyer_zipcode": "255300",  // 邮编
        "coupon_amount": 0,  // 店铺优惠券
        "first_discount": 959,  // 首单优惠
        "bonus_amount": 4.23,  // 官方优惠券
        "freight": 590,  // 运费
        "reach_minus": 0,  // 满减
        "total_amount": 9000,  // 商品总价
        "user_pay_amount": 8626.77,  // 支付金额
        "pay_status": "SUCCESS"  // 支付状态
                                    // SUCCESS—支付成功
                                    // REFUND—转入退款
                                    // NOTPAY—未支付
                                    // CLOSED—已关闭
                                    // REVOKED—已撤销（刷卡支付）
                                    // USERPAYING--用户支付中
                                    // PAYERROR--支付失败
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



新增订单
=============
新增订单接口

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/create``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

**订单基本参数:**

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
address_rid            String      必需                     收货地址ID
outside_target_id      String      可选
invoice_type           Integer     可选          1          发票类型
invoice_info           String      可选          {}
ship_mode              Integer     可选          1          1、发快递 2、自提
from_client            String      可选                     来源客户端，1、小程序；2、H5 3、App 4、TV 5、POS 6、PAD
is_alone               Integer     可选          0          是否独立小程序 0、否 1、是
affiliate_code         String      可选                     推广码
bonus_code             String      可选                     官方红包码
sync_pay               Integer     可选          0          是否同步返回支付参数 0、否 1、是
pay_type               Integer     可选          1          支付方式 1、微信 2、支付宝
authAppid              String      可选                     authAppid
last_store_rid         String      可选                     上一次浏览的小b店铺rid
store_items            Array       必需                     店铺商品信息
=====================  ==========  =========  ==========  =============================

**店铺商品信息:**

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
store_items:
store_rid	           String      必需	                  当前店铺rid
original_store_rid     String      可选                    原店铺rid
buyer_remark           String      可选                    买家备注
blessing_utterance     String      可选                    买家寄语
coupon_codes           String      可选                    优惠券码
items                  Array       必需                    订单明细参数
=====================  ==========  =========  ==========  =============================

**订单明细参数:**

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
items:
rid                    String      必需                    sku
quantity               Number      必需         1          购买数量
express_id             Integer     必需                    物流公司ID
warehouse_id           Number      可选                    发货的仓库ID
=====================  ==========  =========  ==========  =============================

参考示例：

.. code-block:: javascript

    {
        "address_rid":"5125783409",
        "store_items":[
            {
                "store_rid":"2",
                "items":[
                    {
                        "rid": "1",
                        "quantity": 3,
                        "express_id":4
                    }
                ]
            }
        ]
    }


返回示例
~~~~~~~~~~~~~~~~

``规则：`` 实际支付金额 = 订单总金额 + 运费 - 首单优惠 - 满减 - 优惠券/红包

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "actual_payment": 17,  // 实际支付金额
            "bonus_amount": 0,  // 官方红包金额
            "order_rid": "D18090562079514", // 订单编号或官方订单编号
            'pay_params': {},
            'is_paid': false,  // 是否已支付，支付0元时为true
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
                    "pay_amount": 17,  // b端商家 支付金额
                    "user_pay_amount": 17, // c端用户 支付金额
                    "official_bonus_amount": 0, // 官方优惠券优惠金额
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
                    "items": [
                        {
                            "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 10,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 30,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "express_code": "ZJS",
                            "express_name": "宅急送",
                            "fans_count": 1,
                            "freight": 590,
                            "freight_name": "运费模板1000",  // 运费模板名
                            "mode": "1 1",
                            "order_sku_commission_price": 6,// 分销佣金
                            "order_sku_commission_rate": 5,// 佣金比例
                            "price": 33,
                            "product_name": "摩托",  // 商品名
                            "product_rid": "3",
                            "province": "",
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 30,
                            "stock_count": 32033,
                            "stock_quantity": 32033,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第2家",
                            "store_rid": "3",
                            "tag_line": "1",
                            "town": ""
                        }
                    ],

                }
            ]
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }

返回错误格式：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }



订单备注
=============
卖家添加订单备注

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/<string:rid>/seller_remark``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
remark                 String      必需                    备注内容
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }


更新订单支付状态
================
更新订单已支付状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/up_paid_status``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "is_paid": true,
            "rid": "D18061015836402"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

查询订单支付状态
================
查询订单已支付状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/check_order_paid``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "paid": true,
            "rid": "D18041051390827"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

用户确认收货状态、已完成
============================
用户更新确认收货、已完成状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/signed``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "order": {
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
                "pay_amount": 17,  // b端商家 支付金额
                "user_pay_amount": 17, // c端用户 支付金额
                "official_bonus_amount": 0, // 官方优惠券优惠金额
                "reach_minus": 0,  // 满减金额
                "distributed": false,  // 分销订单
                "remark": null,  // 卖家备注
                "rid": "D18070316803529",  // 订单编号
                "ship_mode": 1,  // 运送方式
                "status": 40,  // 订单状态
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
                "items": [
                    {
                        "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "city": "",
                        "commission_price": null,
                        "commission_rate": 10,
                        "country": "",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "cover_id": 1,
                        "deal_price": 30,
                        "delivery_city": "北京",
                        "delivery_country": "",
                        "delivery_country_id": null,
                        "delivery_province": "北京",
                        "distribution_type": 1,
                        "express": 4,  // 快递公司ID
                        "express_at": 0,  // 发货时间
                        "express_no": null,  // 运单号
                        "express_code": "ZJS",
                        "express_name": "宅急送",
                        "fans_count": 1,
                        "freight": 590,
                        "freight_name": "运费模板1000",  // 运费模板名
                        "mode": "1 1",
                        "order_sku_commission_price": 6,// 分销佣金
                        "order_sku_commission_rate": 5,// 佣金比例
                        "price": 33,
                        "product_name": "摩托",  // 商品名
                        "product_rid": "3",
                        "province": "",
                        "quantity": 3,  // 数量
                        "rid": "1",  // sku
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": 1,
                        "sale_price": 30,
                        "stock_count": 32033,
                        "stock_quantity": 32033,
                        "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "store_name": "第2家",
                        "store_rid": "3",
                        "tag_line": "1",
                        "town": ""
                    }
                ],

            },
            "rid": "D18061015836402"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


待发货订单状态
================
更新订单为待发货状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/up_pending_shipment_status``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "order": {
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
                    "pay_amount": 17,  // b端商家 支付金额
                    "user_pay_amount": 17, // c端用户 支付金额
                    "official_bonus_amount": 0, // 官方优惠券优惠金额
                    "reach_minus": 0,  // 满减金额
                    "distributed": false,  // 分销订单
                    "remark": null,  // 卖家备注
                    "rid": "D18070316803529",  // 订单编号
                    "ship_mode": 1,  // 运送方式
                    "status": 10,  // 订单状态
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
                    "items": [
                        {
                            "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 10,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 30,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "express_code": "ZJS",
                            "express_name": "宅急送",
                            "fans_count": 1,
                            "freight": 590,
                            "freight_name": "运费模板1000",  // 运费模板名
                            "mode": "1 1",
                            "order_sku_commission_price": 6,// 分销佣金
                            "order_sku_commission_rate": 5,// 佣金比例
                            "price": 33,
                            "product_name": "摩托",  // 商品名
                            "product_rid": "3",
                            "province": "",
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 30,
                            "stock_count": 32033,
                            "stock_quantity": 32033,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第2家",
                            "store_rid": "3",
                            "tag_line": "1",
                            "town": ""
                        }
                    ],

            },
            "rid": "D18061015836402"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


配货中订单状态
================
更新订单为配货中状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/up_distribution_status``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "order": {
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
                    "pay_amount": 17,  // b端商家 支付金额
                    "user_pay_amount": 17, // c端用户 支付金额
                    "official_bonus_amount": 0, // 官方优惠券优惠金额
                    "reach_minus": 0,  // 满减金额
                    "distributed": false,  // 分销订单
                    "remark": null,  // 卖家备注
                    "rid": "D18070316803529",  // 订单编号
                    "ship_mode": 1,  // 运送方式
                    "status": 12,  // 订单状态
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
                    "items": [
                        {
                           "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 10,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 30,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "express_code": "ZJS",
                            "express_name": "宅急送",
                            "fans_count": 1,
                            "freight": 590,
                            "freight_name": "运费模板1000",  // 运费模板名
                            "mode": "1 1",
                            "order_sku_commission_price": 6,// 分销佣金
                            "order_sku_commission_rate": 5,// 佣金比例
                            "price": 33,
                            "product_name": "摩托",  // 商品名
                            "product_rid": "3",
                            "province": "",
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 30,
                            "stock_count": 32033,
                            "stock_quantity": 32033,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第2家",
                            "store_rid": "3",
                            "tag_line": "1",
                            "town": ""
                        }
                    ],

            },
            "rid": "D18061015836402"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


待打印订单状态
================
更新订单为待打印状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/up_pending_print_status``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "order": {
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
                    "pay_amount": 17,  // b端商家 支付金额
                    "user_pay_amount": 17, // c端用户 支付金额
                    "official_bonus_amount": 0, // 官方优惠券优惠金额
                    "reach_minus": 0,  // 满减金额
                    "distributed": false,  // 分销订单
                    "remark": null,  // 卖家备注
                    "rid": "D18070316803529",  // 订单编号
                    "ship_mode": 1,  // 运送方式
                    "status": 13,  // 订单状态
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
                    "items": [
                        {
                           "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 10,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 30,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "express_code": "ZJS",
                            "express_name": "宅急送",
                            "fans_count": 1,
                            "freight": 590,
                            "freight_name": "运费模板1000",  // 运费模板名
                            "mode": "1 1",
                            "order_sku_commission_price": 6,// 分销佣金
                            "order_sku_commission_rate": 5,// 佣金比例
                            "price": 33,
                            "product_name": "摩托",  // 商品名
                            "product_rid": "3",
                            "province": "",
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 30,
                            "stock_count": 32033,
                            "stock_quantity": 32033,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第2家",
                            "store_rid": "3",
                            "tag_line": "1",
                            "town": ""
                        }
                    ],

            },
            "rid": "D18061015836402"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


已发货订单状态
================
更新订单为已发货状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/up_shipped_status``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单号
express_no             String      可选                    运单编号
sku_dict               {}          可选                    {商品sku_rid: 运单编号}
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "order": {
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
                    "pay_amount": 17,  // b端商家 支付金额
                    "user_pay_amount": 17, // c端用户 支付金额
                    "official_bonus_amount": 0, // 官方优惠券优惠金额
                    "reach_minus": 0,  // 满减金额
                    "distributed": false,  // 分销订单
                    "remark": null,  // 卖家备注
                    "rid": "D18070316803529",  // 订单编号
                    "ship_mode": 1,  // 运送方式
                    "status": 16,  // 订单状态
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
                    "items": [
                        {
                           "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 10,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 30,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "express_code": "ZJS",
                            "express_name": "宅急送",
                            "fans_count": 1,
                            "freight": 590,
                            "freight_name": "运费模板1000",  // 运费模板名
                            "mode": "1 1",
                            "order_sku_commission_price": 6,// 分销佣金
                            "order_sku_commission_rate": 5,// 佣金比例
                            "price": 33,
                            "product_name": "摩托",  // 商品名
                            "product_rid": "3",
                            "province": "",
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 30,
                            "stock_count": 32033,
                            "stock_quantity": 32033,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第2家",
                            "store_rid": "3",
                            "tag_line": "1",
                            "town": ""
                        }
                    ],

            },
            "rid": "D18061015836402"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


待评分订单状态
================
更新订单为待评分状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/up_pending_rating_status``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "order": {
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
                    "pay_amount": 17,  // b端商家 支付金额
                    "user_pay_amount": 17, // c端用户 支付金额
                    "official_bonus_amount": 0, // 官方优惠券优惠金额
                    "reach_minus": 0,  // 满减金额
                    "distributed": false,  // 分销订单
                    "remark": null,  // 卖家备注
                    "rid": "D18070316803529",  // 订单编号
                    "ship_mode": 1,  // 运送方式
                    "status": 40,  // 订单状态
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
                    "items": [
                        {
                           "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 10,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 30,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "express_code": "ZJS",
                            "express_name": "宅急送",
                            "fans_count": 1,
                            "freight": 590,
                            "freight_name": "运费模板1000",  // 运费模板名
                            "mode": "1 1",
                            "order_sku_commission_price": 6,// 分销佣金
                            "order_sku_commission_rate": 5,// 佣金比例
                            "price": 33,
                            "product_name": "摩托",  // 商品名
                            "product_rid": "3",
                            "province": "",
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 30,
                            "stock_count": 32033,
                            "stock_quantity": 32033,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第2家",
                            "store_rid": "3",
                            "tag_line": "1",
                            "town": ""
                        }
                    ],

            },
            "rid": "D18061015836402"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


评分完成订单状态
================
更新订单为评分完成状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/up_rated_status``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "order": {
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
                    "pay_amount": 17,  // b端商家 支付金额
                    "user_pay_amount": 17, // c端用户 支付金额
                    "official_bonus_amount": 0, // 官方优惠券优惠金额
                    "reach_minus": 0,  // 满减金额
                    "received_at": 0,  // 收货时间
                    "distributed": false,  // 分销订单
                    "remark": null,  // 卖家备注
                    "rid": "D18070316803529",  // 订单编号
                    "ship_mode": 1,  // 运送方式
                    "status": 45,  // 订单状态
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
                    "items": [
                        {
                           "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 10,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 30,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "express_code": "ZJS",
                            "express_name": "宅急送",
                            "fans_count": 1,
                            "freight": 590,
                            "freight_name": "运费模板1000",  // 运费模板名
                            "mode": "1 1",
                            "order_sku_commission_price": 6,// 分销佣金
                            "order_sku_commission_rate": 5,// 佣金比例
                            "price": 33,
                            "product_name": "摩托",  // 商品名
                            "product_rid": "3",
                            "province": "",
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 30,
                            "stock_count": 32033,
                            "stock_quantity": 32033,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第2家",
                            "store_rid": "3",
                            "tag_line": "1",
                            "town": ""
                        }
                    ],

            },
            "rid": "D18061015836402"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


用户删除订单
================
消费者端删除订单

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/delete``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单编号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


返回错误格式：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }


商家删除订单
================
商家删除订单

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/master/orders/delete``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单编号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


返回错误格式：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }



生活馆订单列表
================
生活馆订单列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/life_orders``
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
            "finish_not_read": 0,  // 已完成未读数量
            "pending_shipment_not_read": 0,  // 待发货未读数量
            "shipment_not_read": 0,  // 已发货未读数量
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
                    "is_many_express": false, // 是否多物流公司发货
                    "items": [
                        {
                           "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "city": "",
                            "commission_price": null,
                            "commission_rate": 10,
                            "country": "",
                            "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "cover_id": 1,
                            "deal_price": 30,
                            "delivery_city": "北京",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "delivery_province": "北京",
                            "distribution_type": 1,
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "express_code": "ZJS",
                            "express_name": "宅急送",
                            "fans_count": 1,
                            "freight": 590,
                            "freight_name": "运费模板1000",  // 运费模板名
                            "mode": "1 1",
                            "order_sku_commission_price": 6,// 分销佣金
                            "order_sku_commission_rate": 5,// 佣金比例
                            "price": 33,
                            "product_name": "摩托",  // 商品名
                            "product_rid": "3",
                            "province": "",
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 30,
                            "stock_count": 32033,
                            "stock_quantity": 32033,
                            "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                            "store_name": "第2家",
                            "store_rid": "3",
                            "tag_line": "1",
                            "town": ""
                        }
                    ],
                    "life_order_status": 3,  // 生活馆订单状态， 1、待发货 2、已发货 3、已完成
                     "official_order_id": null,  // 官方平台订单号
                    "outside_target_id": "D18070316803529",  // 第三方平台订单号
                    "pay_amount": 17,  // b端商家 支付金额
                    "user_pay_amount": 17, // c端用户 支付金额
                    "official_bonus_amount": 0, // 官方优惠券优惠金额
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
                    "total_quantity": 10,
                    "user_info": {
                        "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",  // 用户头像
                        "user_name": "默默",  // 用户名
                        "user_sn": "17160283459"  // 用户编号
                    }
                }
            ],
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



未付款订单数，未使用优惠券数量
========================================
未付款订单数，未使用优惠券数量

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/order_coupon_count``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "coupon_count": 65,  // 未读优惠券数量
            "expired_count": 65,  // 过期优惠券未读数量
            "master_count": 0,  // 店铺优惠券未读数量
            "official_count": 0,  // 官方优惠券未读数量
            "order_count": 1,  // 总未读订单数
            "pending_pay_count": 1,  // 待付款未读数量
            "pending_rating_count": 0,  // 待评价未读数量
            "pending_receipt_count": 0,  // 待收货未读数量
            "pending_shipment_count": 0  // 待发货未读数量
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



用户-记录订单阅读时间
========================================
用户-记录订单阅读时间

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/read_time``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

====================  ========  =========  ========  ==========================================
名称                   类型      是否必须    默认值     描述说明
====================  ========  =========  ========  ==========================================
status                Integer     必须                 1、待发货 2、待收货 3、待评价 4、待付款
====================  ========  =========  ========  ==========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }




微信小程序支付签名
=============================
微信小程序支付签名

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/wx_prepay_sign``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单编号
authAppid              String      必需                    authAppid
openid                 String      必需                    openid
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            'appId': 'wxappId',
            'nonceStr': 'nonceStr',
            'package': 'prepay_id=package',
            'signType': 'signType',
            'timeStamp': 1539245473,
            'pay_sign': 'pay_sign',
            'prepay_id': 'prepay_id',
            'current_at': 1539245473,  // 当前时间
            'created_at': 1539245473,  // 创建时间
            "is_merge": true,  // 是否合并支付
            "order_rid": "D18070316803529", // 订单编号或官方订单编号
            "order_list": [  // 订单信息
                {
                    "store_name": "第一家",  // 店铺名
                    "total_quantity": 30,  // 数量
                    "user_pay_amount": 1184.7 //支付金额
                },
                {
                    "store_name": "第2家",
                    "total_quantity": 30,
                    "user_pay_amount": 9585.3
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



微信app是否合并支付
=============================
微信app是否合并支付

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/app_pay/is_merge``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单编号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "created_at": 1539157265,  // 创建时间
            "current_at": 1541048780,  // 当前时间
            "is_merge": true,  // 是否合并支付
            "bonus_amount": 5,  // 官方优惠券金额
            "coupon_amount": 0,  // 店铺优惠券金额
            "first_discount": 0,  // 首单优惠
            "freight": 1180,  // 运费
            "user_pay_amount": 10770,  // 应支付金额
            "reach_minus": 5,  // 满减
            "total_amount": 9600,  // 商品总金额
            "order_list": [
                {
                    "store_name": "第一家",
                    "total_quantity": 30,
                    "user_pay_amount": null
                },
                {
                    "store_name": "第2家",
                    "total_quantity": 30,
                    "user_pay_amount": null
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



订单列表app支付
=============================
订单列表app支付

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/wx_pay/app``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  ======================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  ======================================
rid                    String      必需                    订单编号
pay_type               Number      可选            1       支付方式 1、微信 2、支付宝 4、花呗
=====================  ==========  =========  ==========  ======================================

微信返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "_asdict": {},
            "appid": "appid",
            'current_at': 1539245473,  // 当前时间
            'created_at': 1539245473,  // 创建时间
            "is_merge": true,  // 是否合并支付
            "mch_id": "mch_id",
            "nonce_str": "nonce_str",
            "order_rid": "D18070316803529", // 订单编号或官方订单编号
            "prepay_id": "prepay_id",
            "result_code": "SUCCESS",
            "return_code": "SUCCESS",
            "return_msg": "OK",
            "sign": "sign",
            "trade_type": "APP",
            "order_list": [  // 订单信息
                {
                    "store_name": "第一家",  // 店铺名
                    "total_quantity": 30,  // 数量
                    "user_pay_amount": 1184.7 //支付金额
                },
                {
                    "store_name": "第2家",
                    "total_quantity": 30,
                    "user_pay_amount": 9585.3
                }
            ],
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


支付宝返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            'current_at': 1539245473,  // 当前时间
            'created_at': 1539245473,  // 创建时间
            "is_merge": true,  // 是否合并支付
            "order_list": [  // 订单信息
                {
                    "store_name": "第一家",  // 店铺名
                    "total_quantity": 30,  // 数量
                    "user_pay_amount": 1184.7 //支付金额
                },
                {
                    "store_name": "第2家",
                    "total_quantity": 30,
                    "user_pay_amount": 9585.3
                }
            ],
            "order_rid": "D18110685201673",  // 订单编号或官方订单编号
            "order_string": "app_id=2018102761828848&biz_content=%7B%22subject%22%3A%22%5Cu4e50%5Cu559c-\
                %5Cu8ba2%5Cu5355%5Cu652f%5Cu4ed8%22%2C%22out_trade_no%22%3A%22D18110650186379 \
                %22%2C%22total_amount%22%3A%221185.00%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY \
                %22%7D&charset=utf-8&method=alipay.trade.app.pay&notify_url=https%3A%2F%2Ffx.taihuoniao.com \
                %2Fopen%2Fali%2Fapp_pay_notify&sign_type=RSA2&timestamp=2018-11-06+18%3A11%3A48&version=1.0 \
                &sign=hpBukZ3DQLEzEDbNf%2FycbNgEmuddZCYT5ZWmCdCIKXf%2BciOEruHVMAPmDhoKhNoZvoPp7R9x6Z6719hU3 \
                %2BZNQogpmZlmhK6LXFm7MtIkhIHG4YB514iB8l4WxaMXW4v8Ksed%2BJOo1te2bZMEgyHH0acoakLE2OIJ97skA29Xky \
                %2BGkWPG%2FXGNp4tid1WG%2FqzXtcvKFLERAxL3P0wlNTOjOatx4w3SQUDgZG79y \
                %2FcQtuiFn0Ksxcx84zHhrz6Q0SX3TN2UZ8l6OVEqQi6 \
                %2FsUCsITVhEy6t5MIeOCKZNkmNUZ6waaTtfXbqMrS5LY5FK3XbT4kBwCEV5v0sJ2ou6qTdsA%3D%3D"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }





app订单支付
=============================
app订单支付

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/app_pay``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  ======================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  ======================================
rid                    String      必需                    订单编号或官方订单编号
pay_type               Number      可选            1       支付方式 1、微信 2、支付宝 4、花呗
=====================  ==========  =========  ==========  ======================================

微信返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "_asdict": {},
            "appid": "appid",
            'current_at': 1539245473,  // 当前时间
            'created_at': 1539245473,  // 创建时间
            "mch_id": "mch_id",
            "nonce_str": "nonce_str",
            "order_rid": "D18070316803529", // 订单编号或官方订单编号
            "prepay_id": "prepay_id",
            "result_code": "SUCCESS",
            "return_code": "SUCCESS",
            "return_msg": "OK",
            "sign": "sign",
            "trade_type": "APP",
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


支付宝返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "created_at": 1541499031,
            "current_at": 1541499173,
            "order_rid": "D18110650186379",
            "order_string": "app_id=2018102761828848&biz_content=%7B%22subject%22%3A%22%5Cu4e50%5Cu559c-\
                            %5Cu8ba2%5Cu5355%5Cu652f%5Cu4ed8%22%2C%22out_trade_no%22%3A%22D18110650186379 \
                            %22%2C%22total_amount%22%3A%221185.00%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY \
                            %22%7D&charset=utf-8&method=alipay.trade.app.pay&notify_url=https%3A%2F%2Ffx.taihuoniao.com \
                            %2Fopen%2Fali%2Fapp_pay_notify&sign_type=RSA2&timestamp=2018-11-06+18%3A11%3A48&version=1.0 \
                            &sign=hpBukZ3DQLEzEDbNf%2FycbNgEmuddZCYT5ZWmCdCIKXf%2BciOEruHVMAPmDhoKhNoZvoPp7R9x6Z6719hU3 \
                            %2BZNQogpmZlmhK6LXFm7MtIkhIHG4YB514iB8l4WxaMXW4v8Ksed%2BJOo1te2bZMEgyHH0acoakLE2OIJ97skA29Xky \
                            %2BGkWPG%2FXGNp4tid1WG%2FqzXtcvKFLERAxL3P0wlNTOjOatx4w3SQUDgZG79y \
                            %2FcQtuiFn0Ksxcx84zHhrz6Q0SX3TN2UZ8l6OVEqQi6 \
                            %2FsUCsITVhEy6t5MIeOCKZNkmNUZ6waaTtfXbqMrS5LY5FK3XbT4kBwCEV5v0sJ2ou6qTdsA%3D%3D"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



记录app订单支付支付方式
=============================
记录app订单支付支付方式

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/pay_type``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  ========================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  ========================================
rid                    String      必需                    订单编号或官方订单编号
pay_type               Number      可选            1       支付方式 1、微信 2、支付宝 4、花呗
=====================  ==========  =========  ==========  ========================================

微信返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

