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

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
status	     Number	   可选	 	             订单状态 1、待发货 2、待收货 3、待评价
no_pay       Number    可选                   未付款  0、未付款
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ====================================

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
            "buyer_address": "朝阳区",  // 买家地址
            "buyer_city": "北京",  // 买家城市
            "buyer_country": "中国",  // 买家国家
            "buyer_name": "田帅",  // 买家姓名
            "buyer_phone": "13278989898",  // 买家手机
            "buyer_province": "北京",  // 买家省
            "buyer_remark": null,  // 买家备注
            "buyer_tel": null,  // 买家电话
            "buyer_zipcode": null,  // 买家邮政编码
            "created_at": 1528620896,  // 订单时间
            "customer_order_id": null,  // 关联分销商订单编号
            "discount_amount": 0,  // 优惠金额
            "express_at": 0,  // 发货时间
            "express_name": "",  // 快递公司
            "express_no": null,  // 运单号
            "freight": 0,  // 运费
            "items": [
                {
                    "cost_price": "1.00",  // 采购价
                    "cover": "http://0.0.0.0:9000/_uploads/photos/1",  // 商品图片
                    "deal_price": 999.1,  // 交易单价
                    "discount_amount": 0,  // 优惠金额
                    "id_code": "1",  // 商品编码
                    "mode": "1 1",  // 型号
                    "price": "1.00",  // 零售价
                    "product_name": "摩托",  // 商品名
                    "quantity": 3,  // 购买数量
                    "rid": "1",  // sku_serial_no
                    "s_color": "1",  // 颜色
                    "s_model": "1",  // 型号
                    "s_weight": "1.00",  // 重量
                    "sale_price": "1.00",  // 促销价
                    "stock_count": 11089  // 库存
                },
                {
                    "cost_price": "2.00",
                    "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                    "deal_price": 999.1,
                    "discount_amount": 0,
                    "id_code": "1",
                    "mode": "2 2",
                    "price": "2.00",
                    "product_name": "汽车",
                    "quantity": 1,
                    "rid": "2",
                    "s_color": "2",
                    "s_model": "2",
                    "s_weight": "2.00",
                    "sale_price": "2.00",
                    "stock_count": 22106
                }
            ],
            "outside_target_id": "D18061062954387",  // 第三方平台订单编号
            "pay_amount": 3996.4,  // 支付金额
            "received_at": 0,  // 收货时间
            "remark": null,  // 卖家备注
            "rid": "D18061062954387",  // 订单编号
            "ship_mode": 1,  // 物流方式 1、快递；2、自提；
            "status": 40,  // 订单状态
            "store_name": "第一家(None)",  // 店铺名称
            "total_amount": 3996.4,  // 总金额
            "total_quantity": 4  // 总数量
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
ship_mode              Integer     可选           1         1、快递方式；2、自提方式；
outside_target_id      String      可选
freight                Integer     可选          0          邮费
first_discount         Integer     可选          0          首单优惠金额
reach_minus            Integer     可选          0          满减优惠金额
invoice_type           Integer     可选          1          发票类型
invoice_info           String      可选          {}
buyer_remark           String      可选                     买家备注
from_client            String      可选                     来源客户端，1、小程序；2、H5 3、App 4、TV 5、POS 6、PAD
affiliate_code         String      可选                     推广码
coupon_code            String      可选                     优惠券码
customer_code          String      可选                     分销商代码
sync_pay               Integer     可选                     是否同步返回支付参数
=====================  ==========  =========  ==========  =============================

**订单明细参数:**

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
items:
rid                    String      必需                    sku
quantity               Number      必需         1          购买数量
deal_price             Float       必需                    交易价格
warehouse_id           Number      可选                    发货的仓库ID
=====================  ==========  =========  ==========  =============================

参考示例：

.. code-block:: javascript

    {"freight":0,"invoice_type":1,"invoice_info":{},"address_rid": "5748231905",
    "items": [{"rid":"117280530556","quantity":1,"deal_price":23, "discount_amount":0,
    "warehouse_id":0}],"outside_target_id":132234,"buyer_remark":"","from_client":1,
    "affiliate_code":"mix001","affiliate_code":"mix001","sync_pay":1}

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "order": {
                "buyer_address": "朝阳区",  // 买家地址
                "buyer_city": "北京",  // 买家城市
                "buyer_country": "中国",  // 买家国家
                "buyer_name": "田帅",  // 买家姓名
                "buyer_phone": "13278989898",  // 买家手机
                "buyer_province": "北京",  // 买家省
                "buyer_remark": null,  // 买家备注
                "buyer_tel": null,  // 买家电话
                "buyer_zipcode": null,  // 买家邮政编码
                "created_at": 1528620896,  // 订单时间
                "customer_order_id": null,  // 关联分销商订单编号
                "discount_amount": 0,  // 优惠金额
                "express_at": 0,  // 发货时间
                "express_name": "",  // 快递公司
                "express_no": null,  // 运单号
                "freight": 0,  // 运费
                "items": [
                    {
                        "cost_price": "1.00",  // 采购价
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",  // 商品图片
                        "deal_price": 999.1,  // 交易单价
                        "discount_amount": 0,  // 优惠金额
                        "id_code": "1",  // 商品编码
                        "mode": "1 1",  // 型号
                        "price": "1.00",  // 零售价
                        "product_name": "摩托",  // 商品名
                        "quantity": 3,  // 购买数量
                        "rid": "1",  // sku_serial_no
                        "s_color": "1",  // 颜色
                        "s_model": "1",  // 型号
                        "s_weight": "1.00",  // 重量
                        "sale_price": "1.00",  // 促销价
                        "stock_count": 11089  // 库存
                    },
                    {
                        "cost_price": "2.00",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 999.1,
                        "discount_amount": 0,
                        "id_code": "1",
                        "mode": "2 2",
                        "price": "2.00",
                        "product_name": "汽车",
                        "quantity": 1,
                        "rid": "2",
                        "s_color": "2",
                        "s_model": "2",
                        "s_weight": "2.00",
                        "sale_price": "2.00",
                        "stock_count": 22106
                    }
                ],
                "outside_target_id": "D18061062954387",  // 第三方平台订单编号
                "pay_amount": 3996.4,  // 支付金额
                "received_at": 0,  // 收货时间
                "remark": null,  // 卖家备注
                "rid": "D18061062954387",  // 订单编号
                "ship_mode": 1,  // 物流方式 1、快递；2、自提；
                "status": 40,  // 订单状态
                "store_name": "第一家(None)",  // 店铺名称
                "total_amount": 3996.4,  // 总金额
                "total_quantity": 4  // 总数量
            },
            "pay_params": {
                "appId": "wx11363b7f6f****ac8",  // WXPAY_APP_ID
                "code_url": "weixin://wxpay/bizpayurl?pr=jKmv7J3",
                "nonceStr": "zGDhaNmaN6LVVohjTZhwUXSxKKDAkMVt",
                "package": "prepay_id=wx100027305593446cd7271ce00685789643",
                "pay_sign": "4BF3410EBC0***537F0E82C9C302F404",
                "prepay_id": "wx100027305593446cd***1ce00685789643",
                "signType": "MD5",
                "timeStamp": 1523291250
            }
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

签收订单状态
================
更新订单签收状态

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
                "buyer_name": "小帅",
                "buyer_phone": "18610320751",
                "buyer_province": "北京市",
                "buyer_remark": "",
                ...
                "rid": "D18030120453196",
                "status": -1,
                "store_name": "D3IN微商城(小程序)",
                "total_amount": 149,
                "total_quantity": 1
            }
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
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "order": {
                "buyer_name": "小帅",
                "buyer_phone": "18610320751",
                "buyer_province": "北京市",
                "buyer_remark": "",
                ...
                "rid": "D18030120453196",
                "status": -1,
                "store_name": "D3IN微商城(小程序)",
                "total_amount": 149,
                "total_quantity": 1
            }
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
                "buyer_address": "大街",
                "buyer_city": "北京",
                "buyer_country": "中国",
                "buyer_name": "田帅",
                "buyer_phone": "13278989898",
                "buyer_province": "北京",
                "buyer_remark": null,
                "buyer_tel": null,
                "buyer_zipcode": null,
                "created_at": 1528620141,
                "customer_order_id": null,
                "discount_amount": 0,
                "express_at": 0,
                "express_name": "",
                "express_no": null,
                "freight": 0,
                "items": [
                    {
                        "cost_price": "1.00",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 999.1,
                        "discount_amount": 0,
                        "id_code": "1",
                        "mode": "1 1",
                        "price": "1.00",
                        "product_name": "摩托",
                        "quantity": 3,
                        "rid": "1",
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": "1.00",
                        "sale_price": "1.00",
                        "stock_count": 11089
                    },

                ],
                "outside_target_id": "D18061015836402",
                "pay_amount": 3996.4,
                "received_at": 0,
                "remark": null,
                "rid": "D18061015836402",
                "ship_mode": 1,
                "status": 10,
                "store_name": "第一家(None)",
                "total_amount": 3996.4,
                "total_quantity": 4
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
                "buyer_address": "大街",
                "buyer_city": "北京",
                "buyer_country": "中国",
                "buyer_name": "田帅",
                "buyer_phone": "13278989898",
                "buyer_province": "北京",
                "buyer_remark": null,
                "buyer_tel": null,
                "buyer_zipcode": null,
                "created_at": 1528620141,
                "customer_order_id": null,
                "discount_amount": 0,
                "express_at": 0,
                "express_name": "",
                "express_no": null,
                "freight": 0,
                "items": [
                    {
                        "cost_price": "1.00",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 999.1,
                        "discount_amount": 0,
                        "id_code": "1",
                        "mode": "1 1",
                        "price": "1.00",
                        "product_name": "摩托",
                        "quantity": 3,
                        "rid": "1",
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": "1.00",
                        "sale_price": "1.00",
                        "stock_count": 11089
                    },

                ],
                "outside_target_id": "D18061015836402",
                "pay_amount": 3996.4,
                "received_at": 0,
                "remark": null,
                "rid": "D18061015836402",
                "ship_mode": 1,
                "status": 12,
                "store_name": "第一家(None)",
                "total_amount": 3996.4,
                "total_quantity": 4
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
                "buyer_address": "大街",
                "buyer_city": "北京",
                "buyer_country": "中国",
                "buyer_name": "田帅",
                "buyer_phone": "13278989898",
                "buyer_province": "北京",
                "buyer_remark": null,
                "buyer_tel": null,
                "buyer_zipcode": null,
                "created_at": 1528620141,
                "customer_order_id": null,
                "discount_amount": 0,
                "express_at": 0,
                "express_name": "",
                "express_no": null,
                "freight": 0,
                "items": [
                    {
                        "cost_price": "1.00",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 999.1,
                        "discount_amount": 0,
                        "id_code": "1",
                        "mode": "1 1",
                        "price": "1.00",
                        "product_name": "摩托",
                        "quantity": 3,
                        "rid": "1",
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": "1.00",
                        "sale_price": "1.00",
                        "stock_count": 11089
                    },

                ],
                "outside_target_id": "D18061015836402",
                "pay_amount": 3996.4,
                "received_at": 0,
                "remark": null,
                "rid": "D18061015836402",
                "ship_mode": 1,
                "status": 13,
                "store_name": "第一家(None)",
                "total_amount": 3996.4,
                "total_quantity": 4
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
                "buyer_address": "大街",
                "buyer_city": "北京",
                "buyer_country": "中国",
                "buyer_name": "田帅",
                "buyer_phone": "13278989898",
                "buyer_province": "北京",
                "buyer_remark": null,
                "buyer_tel": null,
                "buyer_zipcode": null,
                "created_at": 1528620141,
                "customer_order_id": null,
                "discount_amount": 0,
                "express_at": 0,
                "express_name": "",
                "express_no": null,
                "freight": 0,
                "items": [
                    {
                        "cost_price": "1.00",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 999.1,
                        "discount_amount": 0,
                        "id_code": "1",
                        "mode": "1 1",
                        "price": "1.00",
                        "product_name": "摩托",
                        "quantity": 3,
                        "rid": "1",
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": "1.00",
                        "sale_price": "1.00",
                        "stock_count": 11089
                    },

                ],
                "outside_target_id": "D18061015836402",
                "pay_amount": 3996.4,
                "received_at": 0,
                "remark": null,
                "rid": "D18061015836402",
                "ship_mode": 1,
                "status": 16,
                "store_name": "第一家(None)",
                "total_amount": 3996.4,
                "total_quantity": 4
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
                "buyer_address": "大街",
                "buyer_city": "北京",
                "buyer_country": "中国",
                "buyer_name": "田帅",
                "buyer_phone": "13278989898",
                "buyer_province": "北京",
                "buyer_remark": null,
                "buyer_tel": null,
                "buyer_zipcode": null,
                "created_at": 1528620141,
                "customer_order_id": null,
                "discount_amount": 0,
                "express_at": 0,
                "express_name": "",
                "express_no": null,
                "freight": 0,
                "items": [
                    {
                        "cost_price": "1.00",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 999.1,
                        "discount_amount": 0,
                        "id_code": "1",
                        "mode": "1 1",
                        "price": "1.00",
                        "product_name": "摩托",
                        "quantity": 3,
                        "rid": "1",
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": "1.00",
                        "sale_price": "1.00",
                        "stock_count": 11089
                    },

                ],
                "outside_target_id": "D18061015836402",
                "pay_amount": 3996.4,
                "received_at": 0,
                "remark": null,
                "rid": "D18061015836402",
                "ship_mode": 1,
                "status": 40,
                "store_name": "第一家(None)",
                "total_amount": 3996.4,
                "total_quantity": 4
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
                "buyer_address": "大街",
                "buyer_city": "北京",
                "buyer_country": "中国",
                "buyer_name": "田帅",
                "buyer_phone": "13278989898",
                "buyer_province": "北京",
                "buyer_remark": null,
                "buyer_tel": null,
                "buyer_zipcode": null,
                "created_at": 1528620141,
                "customer_order_id": null,
                "discount_amount": 0,
                "express_at": 0,
                "express_name": "",
                "express_no": null,
                "freight": 0,
                "items": [
                    {
                        "cost_price": "1.00",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 999.1,
                        "discount_amount": 0,
                        "id_code": "1",
                        "mode": "1 1",
                        "price": "1.00",
                        "product_name": "摩托",
                        "quantity": 3,
                        "rid": "1",
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": "1.00",
                        "sale_price": "1.00",
                        "stock_count": 11089
                    },

                ],
                "outside_target_id": "D18061015836402",
                "pay_amount": 3996.4,
                "received_at": 0,
                "remark": null,
                "rid": "D18061015836402",
                "ship_mode": 1,
                "status": 45,
                "store_name": "第一家(None)",
                "total_amount": 3996.4,
                "total_quantity": 4
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
                "buyer_address": "大街",
                "buyer_city": "北京",
                "buyer_country": "中国",
                "buyer_name": "田帅",
                "buyer_phone": "13278989898",
                "buyer_province": "北京",
                "buyer_remark": null,
                "buyer_tel": null,
                "buyer_zipcode": null,
                "created_at": 1528620141,
                "customer_order_id": null,
                "discount_amount": 0,
                "express_at": 0,
                "express_name": "",
                "express_no": null,
                "freight": 0,
                "items": [
                    {
                        "cost_price": "1.00",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 999.1,
                        "discount_amount": 0,
                        "id_code": "1",
                        "mode": "1 1",
                        "price": "1.00",
                        "product_name": "摩托",
                        "quantity": 3,
                        "rid": "1",
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": "1.00",
                        "sale_price": "1.00",
                        "stock_count": 11089
                    },

                ],
                "outside_target_id": "D18061015836402",
                "pay_amount": 3996.4,
                "received_at": 0,
                "remark": null,
                "rid": "D18061015836402",
                "ship_mode": 1,
                "status": 30,
                "store_name": "第一家(None)",
                "total_amount": 3996.4,
                "total_quantity": 4
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


