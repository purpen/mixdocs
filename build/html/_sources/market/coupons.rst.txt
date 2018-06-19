====================
营销工具/优惠券模块
====================


优惠券、满减活动列表
----------------------
获取优惠券、满减活动列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
page             Number    可选         1         当前页码
per_page         Number    可选         10        每页数量
status           String    可选         1         优惠券状态 -1: 禁用；1：正常；2：已结束
type             Number    可选                   是否满减活动 3、满减
===============  ========  =========  ========  ====================================

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
            "count": 3,
            "coupons": [
                {
                    "amount": 2,  // 面值
                    "code": "UJXFRHYDMQW",  // 优惠券代码
                    "count": 100,  // 数量
                    "created_at": 1528947024,
                    "end_date": 2147483647,
                    "limit_products": [],  // 限制商品
                    "min_amount": 30,  // 最小金额限制
                    "name": "FB",  //
                    "reach_amount": 30,  // 满足金额
                    "start_date": 0,  //
                    "status": 1,  // 优惠券状态
                    "type": 3,  // 优惠券类型
                    "type_text": "消费满30.00元可减2.00元"  // 描述
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
                        "type_text": "部分商品可用"
                    },
                    "get_at": null,  // 获得时间
                    "is_used": false,  // 是否使用
                    "order_rid": null,  // 订单编号
                    "used_at": null  // 使用时间
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

============  ========  =========  ========  ====================================
名称           类型      是否必须    默认值     描述说明
============  ========  =========  ========  ====================================
pay_amount     Number    必填                 订单总金额
product_rid    String    必填                 当前商品编号
============  ========  =========  ========  ====================================

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
                    "max": true,  // 是金额最大的优惠券
                    "min_amount": 0,
                    "name": "满减活动",
                    "reach_amount": 100,
                    "start_date": 1520265600,
                    "status": 1,
                    "type": 2,
                    "type_text": "部分商品可用"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


符合条件的满减活动
-----------------------
符合某条件的满减活动

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons/full_reduction``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

============  ========  =========  ========  ====================================
名称           类型      是否必须    默认值     描述说明
============  ========  =========  ========  ====================================
pay_amount     Number    必填                 订单总金额
============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "amount": 2,
            "code": "UWIRJFAYXCL",
            "count": 1,
            "created_at": 1528946685,
            "end_date": 2147483647,
            "limit_products": [],
            "min_amount": 30,
            "name": "FB",
            "reach_amount": 30,
            "start_date": 0,
            "status": 1,
            "type": 3,
            "type_text": "消费满30.00元可减2.00元"
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
            "type_text": "部分商品可用"
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
name              String     必填                        优惠券名称
amount            Number     必填                        优惠券金额
got_count         Integer    必填                        领取数量
start_date        String     可选                        优惠券开始日期
end_date          String     可选                        优惠券结束日期
long_time         Bool       可选           false        是否长期有效
type              Integer    可选           1            优惠券类型 1、同享券 2、单享券 3、满减活动
min_amount        Number     可选                        最低金额限制，单享、同享填写
reach_amount      Number     可选                        满足金额 满减填写
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
            "type_text": "部分商品可用"  // 描述
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
            "type_text": "部分商品可用"
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


新用户72小时内首单9折
---------------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/market/coupons/new_user_discount``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
pay_amount  	 Number	    必填	 	             支付金额
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "discount_amount": 22.3,  // 优惠金额
            "pay_amount": 200.7  // 支付金额
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }





