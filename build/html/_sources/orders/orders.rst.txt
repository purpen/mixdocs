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

.. literalinclude:: order_list.js


返回错误格式：

.. code-block:: javascript

    {
        "status": {
            "code": 400,
            "message": "订单状态错误"
        },
        "success": false
    }


商家订单列表
=======================
商家获取全部或某个状态下订单列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/master/orders``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
status	     Number	   可选	 	             订单状态 1、待发货 2、已发货 3、已完成 4、已取消
no_pay       Number    可选                   未付款  0、未付款
create_at    String    可选                   下单时间
search       String    可选                   商品名称或订单编号
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ==============================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: order_list.js

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
            "store_name": "第一家(None)",  // 店铺名称
            "total_amount": 3,  // 商品金额
            "total_quantity": 3,  // 商品总数量
            "blessing_utterance": "嘿嘿嘿",  // 买家寄语
            "buyer_remark": "哈哈哈",  // 买家备注
            "payed_at": 12321312,  // 付款时间
            "received_at": 12321312,  // 签收时间
            "items": [
                {
                    "commission_price": 0,  // 佣金
                    "commission_rate": 0,  // 佣金比
                    "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                    "deal_price": 1,  // 交易价格
                    "express": 4,  // 快递公司ID
                    "express_at": 0,  // 发货时间
                    "express_no": null,  // 运单号
                    "id_code": "1",
                    "mode": "1 1",
                    "price": 1,
                    "product_name": "摩托",  // 商品名
                    "quantity": 3,  // 数量
                    "rid": "1",  // sku
                    "s_color": "1",
                    "s_model": "1",
                    "s_weight": 1,
                    "sale_price": 1,
                    "stock_count": 11020
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
affiliate_code         String      可选                     推广码
bonus_code             String      可选                     官方红包码
sync_pay               Integer     可选           0         是否同步返回支付参数 0、否 1、是
store_items            Array       必需                     店铺商品信息
=====================  ==========  =========  ==========  =============================

**店铺商品信息:**

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
store_items:
store_rid	           String      必需	 	              当前店铺rid
is_distribute          Integer     可选          0         是否分销 0、否 1、是
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
                    "store_name": "第一家(None)",  // 店铺名称
                    "total_amount": 3,  // 商品金额
                    "total_quantity": 3,  // 商品总数量
                    "blessing_utterance": "嘿嘿嘿",  // 买家寄语
                    "buyer_remark": "哈哈哈",  // 买家备注
                    "payed_at": 12321312,  // 付款时间
                    "received_at": 12321312,  // 签收时间
                    "items": [
                        {
                            "commission_price": 0,  // 佣金
                            "commission_rate": 0,  // 佣金比
                            "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                            "deal_price": 1,  // 交易价格
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "id_code": "1",
                            "mode": "1 1",
                            "price": 1,
                            "product_name": "摩托",  // 商品名
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 1,
                            "stock_count": 11020
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

订单邮费
=============
根据物流地址获取订单邮费标准

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/freight``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
      "data": {
        "freight": 0
      },
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
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

用户确认收货状态
================
用户更新确认收货状态

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
                "status": 20,  // 订单状态
                "store_name": "第一家(None)",  // 店铺名称
                "total_amount": 3,  // 商品金额
                "total_quantity": 3,  // 商品总数量
                "blessing_utterance": "嘿嘿嘿",  // 买家寄语
                "buyer_remark": "哈哈哈",  // 买家备注
                "payed_at": 12321312,  // 付款时间
                "received_at": 12321312,  // 签收时间
                "items": [
                    {
                        "commission_price": 0,  // 佣金
                        "commission_rate": 0,  // 佣金比
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 1,  // 交易价格
                        "express": 4,  // 快递公司ID
                        "express_at": 0,  // 发货时间
                        "express_no": null,  // 运单号
                        "id_code": "1",
                        "mode": "1 1",
                        "price": 1,
                        "product_name": "摩托",  // 商品名
                        "quantity": 3,  // 数量
                        "rid": "1",  // sku
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": 1,
                        "sale_price": 1,
                        "stock_count": 11020
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

取消订单状态
================
更新订单取消状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/cancel``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                    订单号
from_client            Integer     必需             1      1、商家取消订单 2、消费者取消订单
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
                    "status": 10,  // 订单状态
                    "store_name": "第一家(None)",  // 店铺名称
                    "total_amount": 3,  // 商品金额
                    "total_quantity": 3,  // 商品总数量
                    "blessing_utterance": "嘿嘿嘿",  // 买家寄语
                    "buyer_remark": "哈哈哈",  // 买家备注
                    "payed_at": 12321312,  // 付款时间
                    "received_at": 12321312,  // 签收时间
                    "items": [
                        {
                            "commission_price": 0,  // 佣金
                            "commission_rate": 0,  // 佣金比
                            "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                            "deal_price": 1,  // 交易价格
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "id_code": "1",
                            "mode": "1 1",
                            "price": 1,
                            "product_name": "摩托",  // 商品名
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 1,
                            "stock_count": 11020
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
                    "status": 12,  // 订单状态
                    "store_name": "第一家(None)",  // 店铺名称
                    "total_amount": 3,  // 商品金额
                    "total_quantity": 3,  // 商品总数量
                    "blessing_utterance": "嘿嘿嘿",  // 买家寄语
                    "buyer_remark": "哈哈哈",  // 买家备注
                    "payed_at": 12321312,  // 付款时间
                    "received_at": 12321312,  // 签收时间
                    "items": [
                        {
                            "commission_price": 0,  // 佣金
                            "commission_rate": 0,  // 佣金比
                            "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                            "deal_price": 1,  // 交易价格
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "id_code": "1",
                            "mode": "1 1",
                            "price": 1,
                            "product_name": "摩托",  // 商品名
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 1,
                            "stock_count": 11020
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
                    "status": 13,  // 订单状态
                    "store_name": "第一家(None)",  // 店铺名称
                    "total_amount": 3,  // 商品金额
                    "total_quantity": 3,  // 商品总数量
                    "blessing_utterance": "嘿嘿嘿",  // 买家寄语
                    "buyer_remark": "哈哈哈",  // 买家备注
                    "payed_at": 12321312,  // 付款时间
                    "received_at": 12321312,  // 签收时间
                    "items": [
                        {
                            "commission_price": 0,  // 佣金
                            "commission_rate": 0,  // 佣金比
                            "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                            "deal_price": 1,  // 交易价格
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "id_code": "1",
                            "mode": "1 1",
                            "price": 1,
                            "product_name": "摩托",  // 商品名
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 1,
                            "stock_count": 11020
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
                    "status": 16,  // 订单状态
                    "store_name": "第一家(None)",  // 店铺名称
                    "total_amount": 3,  // 商品金额
                    "total_quantity": 3,  // 商品总数量
                    "blessing_utterance": "嘿嘿嘿",  // 买家寄语
                    "buyer_remark": "哈哈哈",  // 买家备注
                    "payed_at": 12321312,  // 付款时间
                    "received_at": 12321312,  // 签收时间
                    "items": [
                        {
                            "commission_price": 0,  // 佣金
                            "commission_rate": 0,  // 佣金比
                            "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                            "deal_price": 1,  // 交易价格
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "id_code": "1",
                            "mode": "1 1",
                            "price": 1,
                            "product_name": "摩托",  // 商品名
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 1,
                            "stock_count": 11020
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
                    "status": 40,  // 订单状态
                    "store_name": "第一家(None)",  // 店铺名称
                    "total_amount": 3,  // 商品金额
                    "total_quantity": 3,  // 商品总数量
                    "blessing_utterance": "嘿嘿嘿",  // 买家寄语
                    "buyer_remark": "哈哈哈",  // 买家备注
                    "payed_at": 12321312,  // 付款时间
                    "received_at": 12321312,  // 签收时间
                    "items": [
                        {
                            "commission_price": 0,  // 佣金
                            "commission_rate": 0,  // 佣金比
                            "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                            "deal_price": 1,  // 交易价格
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "id_code": "1",
                            "mode": "1 1",
                            "price": 1,
                            "product_name": "摩托",  // 商品名
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 1,
                            "stock_count": 11020
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
                    "customer_order_id": null,  // 分销商订单编号
                    "discount_amount": 0,  // 店铺优惠金额 = 首单优惠 + 满减 + 优惠券
                    "first_discount": 0,  // 首单优惠
                    "freight": 14,  // 运费
                    "official_order_id": null,  // 官方平台订单号
                    "outside_target_id": "D18070316803529",  // 第三方平台订单号
                    "pay_amount": 17,  // 支付金额
                    "reach_minus": 0,  // 满减金额
                    "received_at": 0,  // 收货时间
                    "distributed": false,  // 分销订单
                    "remark": null,  // 卖家备注
                    "rid": "D18070316803529",  // 订单编号
                    "ship_mode": 1,  // 运送方式
                    "status": 45,  // 订单状态
                    "store_name": "第一家(None)",  // 店铺名称
                    "total_amount": 3,  // 商品金额
                    "total_quantity": 3,  // 商品总数量
                    "blessing_utterance": "嘿嘿嘿",  // 买家寄语
                    "buyer_remark": "哈哈哈",  // 买家备注
                    "payed_at": 12321312,  // 付款时间
                    "received_at": 12321312,  // 签收时间
                    "items": [
                        {
                            "commission_price": 0,  // 佣金
                            "commission_rate": 0,  // 佣金比
                            "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                            "deal_price": 1,  // 交易价格
                            "express": 4,  // 快递公司ID
                            "express_at": 0,  // 发货时间
                            "express_no": null,  // 运单号
                            "id_code": "1",
                            "mode": "1 1",
                            "price": 1,
                            "product_name": "摩托",  // 商品名
                            "quantity": 3,  // 数量
                            "rid": "1",  // sku
                            "s_color": "1",
                            "s_model": "1",
                            "s_weight": 1,
                            "sale_price": 1,
                            "stock_count": 11020
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


已完成订单状态
================
更新订单为已完成状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/up_finished_status``
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
                "status": 30,  // 订单状态
                "store_name": "第一家(None)",  // 店铺名称
                "total_amount": 3,  // 商品金额
                "total_quantity": 3,  // 商品总数量
                "blessing_utterance": "嘿嘿嘿",  // 买家寄语
                "buyer_remark": "哈哈哈",  // 买家备注
                "payed_at": 12321312,  // 付款时间
                "received_at": 12321312,  // 签收时间
                "items": [
                    {
                        "commission_price": 0,  // 佣金
                        "commission_rate": 0,  // 佣金比
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 1,  // 交易价格
                        "express": 4,  // 快递公司ID
                        "express_at": 0,  // 发货时间
                        "express_no": null,  // 运单号
                        "id_code": "1",
                        "mode": "1 1",
                        "price": 1,
                        "product_name": "摩托",  // 商品名
                        "quantity": 3,  // 数量
                        "rid": "1",  // sku
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": 1,
                        "sale_price": 1,
                        "stock_count": 11020
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


