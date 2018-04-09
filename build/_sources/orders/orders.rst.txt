===============
订单模块
===============
全渠道订单同步接口


订单列表
=======================
获取全部或某个状态下订单列表


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
status       Number    可选                   订单状态
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: order_list.js


订单详情
=============
单个订单详情信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/<rid>``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
      "data": {
        "buyer_address": "蛇经二路",
        "buyer_city": "北京",
        "buyer_country": "",
        "buyer_name": "小山",
        "buyer_phone": "18562030986",
        "buyer_province": "北京",
        "buyer_remark": "",
        "buyer_tel": "",
        "buyer_zipcode": "100024",
        "created_at": 1508601507,
        "discount_amount": 0,
        "express_at": 0,
        "express_name": "顺丰",
        "express_no": null,
        "freight": 0,
        "outside_target_id": "C17210871196",
        "pay_amount": 1398,
        "received_at": 0,
        "remark": "测试订单",
        "serial_no": "C17210871196",
        "status": 1,
        "store_name": "华住商城",
        "total_amount": 1398,
        "total_quantity": 2
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
discount_amount        Float       可选                    优惠金额
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
                "buyer_address": "xomge",
                "buyer_city": "顺义区",
                "buyer_country": "中国",
                "buyer_name": "tian",
                "buyer_phone": "18610320751",
                "buyer_province": "北京",
                "buyer_remark": "快递发乎",
                "buyer_tel": "18610320751",
                "buyer_zipcode": "",
                "created_at": 1523267509,
                "discount_amount": 5,
                "express_at": 0,
                "express_name": "",
                "express_no": null,
                "freight": 10,
                "items": [
                    {
                        "cost_price": "23.00",
                        "cover": "http://xxx/_uploads/photos/180302/496886303714e7e.jpg",
                        "deal_price": 78,
                        "discount_amount": 5,
                        "id_code": "",
                        "mode": "深红色",
                        "price": "45.00",
                        "product_name": "测试供应商方式",
                        "quantity": 1,
                        "rid": "118130473518",
                        "s_color": "深红色",
                        "s_model": "",
                        "s_weight": "0.00",
                        "sale_price": "0.00",
                        "stock_count": 4
                    }
                ],
                "outside_target_id": "132234",
                "pay_amount": 83,
                "received_at": 0,
                "remark": null,
                "rid": "D18040997285314",
                "ship_mode": 1,
                "status": 1,
                "store_name": "D3IN未来店(小程序)",
                "total_amount": 78,
                "total_quantity": 1
            },
            "pay_params": {
                "appId": "wx11363b7f6f****ac8",
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

