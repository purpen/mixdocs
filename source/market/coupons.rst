====================
营销工具/优惠券模块
====================


优惠券列表
----------------
获取优惠券列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
status       String    可选         N01       N01: 未使用;N02: 已使用; N03: 已过期
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: coupons_list.js
    :language: javascript


正在活动中的优惠券列表
----------------------
获取活动中优惠券列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons/activity``
* API接口请求方法：``POST``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "activity_coupons": [
                {
                    "amount": 5,
                    "code": "UDNHISFAMRJ",
                    "created_at": 1520269560,
                    "limit_products": "",
                    "min_amount": 0,
                    "name": "满减活动",
                    "reach_amount": 100,
                    "start_date": 1520265600,
                    "status": 1,
                    "type": 2,
                    "type_text": "最低消费0.00元可用"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


用户优惠券列表
----------------
获取用户优惠券列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/user_coupons``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
status       String    可选         N01       N01: 未使用;N02: 已使用; N03: 已过期
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 1,
            "coupons": [
                {
                    "coupon": {
                        "amount": 5,
                        "code": "UDNHISFAMRJ",
                        "created_at": 1520269560,
                        "limit_products": "",
                        "min_amount": 0,
                        "name": "满减活动",
                        "reach_amount": 100,
                        "start_date": 1520265600,
                        "status": 1,
                        "type": 2,
                        "type_text": "最低消费0.00元可用"
                    },
                    "get_at": null,
                    "is_used": false,
                    "order_rid": null,
                    "used_at": null
                }
            ],
            "next": null,
            "prev": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


符合条件的优惠券列表
-----------------------
符合某条件的优惠券列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons/available``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
pay_amount    Number    必填                 订单总金额
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

``注意`` 返回结果有max标识，则为系统自动匹配优惠最大金额.

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "available_coupons": [
                {
                    "amount": 5,
                    "code": "UDNHISFAMRJ",
                    "created_at": 1520269560,
                    "end_date": 1522339200,
                    "limit_products": "",
                    "max": true,
                    "min_amount": 0,
                    "name": "满减活动",
                    "reach_amount": 100,
                    "start_date": 1520265600,
                    "status": 1,
                    "type": 2,
                    "type_text": "最低消费0.00元可用"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

优惠券详情
----------------
获取优惠券的详细信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons/<rid>``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "amount": 5,
            "code": "UDNHISFAMRJ",
            "created_at": 1520269560,
            "limit_products": "",
            "min_amount": 0,
            "name": "满减活动",
            "reach_amount": 100,
            "start_date": 1520265600,
            "status": 1,
            "type": 2,
            "type_text": "最低消费0.00元可用"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

新增优惠券
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons/create``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =============  ============  ============================================
名称               类型       是否必须        默认值         描述说明
===============  ========  =============  ============  ============================================
amount            Number     必填                        优惠券金额
got_count         Integer    必填                        领取数量
start_date        String     可选                        优惠券开始日期
end_date          String     可选                        优惠券结束日期
long_time         Bool       可选           false        是否长期有效
type              Integer    可选           1            优惠券类型 1、同享券 2、单享券
min_amount        Number     可选                        最低金额限制
reach_amount      Number     可选                        满足金额
name              String     可选                        优惠券名称
product_rid       String     可选                        商品编号,多个以逗号分隔
status            Integer    可选           1            优惠券状态：-1: 禁用；1：正常；2：已结束
===============  ========  =============  ============  ============================================

.. code-block:: javascript

    {
        "amount": 2,
        "name": "FB",
        "min_amount": 30.00,
        "start_date": "2018-05-06",
        "end_date": "2018-09-10",
        "product_rids":"1,2",
        "type":2,
        "count":100
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "amount": 2,  // 面值
            "code": "UHBITCVQLEZ",  // 优惠券编码
            "created_at": 1528893582,  // 创建时间
            "end_date": 1536508800,  // 结束时间
            "got_count": 100,  // 领取数量
            "limit_products": [  // 限制使用某些商品
                {
                    "cost_price": "1.00",
                    "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                    "description": "1",
                    "features": "1",
                    "id_code": "1",
                    "is_distributed": true,
                    "name": "摩托",
                    "price": 1,
                    "published_at": 1,
                    "rid": "1",
                    "s_height": 1,
                    "s_length": 1,
                    "s_weight": 1,
                    "s_width": 1,
                    "sale_price": 1,
                    "sticked": true,
                    "stock_count": 11077
                },
            ],
            "min_amount": 30,  // 限制最低消费金额
            "name": "FB",  // 优惠券名称
            "reach_amount": 30,  // 满足金额
            "start_date": 1525536000,  // 开始时间
            "status": 1,  // 优惠券状态
            "type": 2,  // 优惠券类型
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


领取优惠券
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons/grant``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
rid              String     可选                  备注
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "amount": 5,
            "code": "UDNHISFAMRJ",
            "created_at": 1520269560,
            "limit_products": "",
            "min_amount": 0,
            "name": "满减活动",
            "reach_amount": 100,
            "start_date": 1520265600,
            "status": 1,
            "type": 2,
            "type_text": "最低消费0.00元可用"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

禁用优惠券
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons/<rid>/disabled``
* API接口请求方法：``POST``
* API接口用户授权：``token``

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


使用优惠券
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons/use``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
rid              String     可选                  优惠券code
pay_amount  	 Number	    必填	 	             支付金额
===============  ========  =========  ========  ====================================

参考示例：

.. code-block:: javascript

    {
        "rid":"URZJALNVYTH",
        "pay_amount":1000
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "discount_amount": 2,  // 优惠金额
            "pay_amount": 998  // 支付金额
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



