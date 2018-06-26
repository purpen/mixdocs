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


优惠活动列表
----------------------
获取优惠活动列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/activities``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
page             Number    可选         1         当前页码
per_page         Number    可选         10        每页数量
status           String    可选         1         活动状态 1: 进行中；2：待生效；3：已结束
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "activities": [
                {
                    "id": 24,  // 活动id
                    "end_date": 1530547200,  // 结束时间
                    "name": "优惠活动2",  // 活动名称
                    "start_date": 1528560000,  // 开始时间
                    "surplus_days": 7,  // 剩余天数
                    "total_quantity": 2000,  // 总数量
                    "type": 2  // 类型
                    "coupon_items": [
                        {
                            "amount": 1,  // 面值
                            "code": "USNAKJEQROH",  // 优惠券代码
                            "created_at": 1530001603,  // 创建时间
                            "days": 7,  // 有效天数
                            "min_amount": 90,  // 限制金额
                            "pickup_count": 0,  // 领取数量
                            "surplus_count": 1000,  // 使用数量
                            "type": 2,  // 类型
                            "type_text": "部分商品可用"
                        }
                    ]
                }
            ],
            "count": 3,
            "next": "http://0.0.0.0:9000/api/v1.0/market/activities?page=2&status=1",
            "prev": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


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
* API接口用户授权：token

请求参数
~~~~~~~~~~~~~~~

===============  ========  =============  ============  ============================================
名称               类型       是否必须        默认值         描述说明
===============  ========  =============  ============  ============================================
name              String     必填                        活动名称
start_date        String     必填                        活动开始日期
end_date          String     必填                        活动结束日期
coupon_type       Integer    必填           1            优惠券类型 1、同享券 2、单享券
coupon_items      Array      必填                        优惠券信息列表
===============  ========  =============  ============  ============================================

**优惠券信息列表:**

===============  ========  =============  ============  ============================================
名称               类型       是否必须        默认值         描述说明
===============  ========  =============  ============  ============================================
coupon_items:
amount            Number     必填                        优惠券金额
got_count         Integer    必填                        领取数量
min_amount        Number     必填                        最低金额限制
days              Integer    必填                        有效天数
product_rid       Array      可选                        优惠商品列表
===============  ========  =============  ============  ============================================

**参考示例**

.. code-block:: javascript

    {
        "name":"优惠活动2",
        "start_date":"2018-06-29",
        "end_date":"2018-07-03",
        "coupon_type":2,
        "coupon_items":[
            {
                "amount":1,
                "min_amount":90,
                "got_count":1000,
                "days":7,
                "product_rids":["1","2"]
            },
        ]
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "created_at": 1529998307,  // 创建时间
            "name": "优惠活动2",  //  活动名称
            "start_date": 1530201600  // 活动开始时间
            "end_date": 1530547200,  // 活动结束时间
            "items": [
                {
                    "amount": 1,  // 优惠金额
                    "code": "UVGKCSLIMOA",  // 优惠券code
                    "count": 1000,  // 优惠券数量
                    "created_at": 1529998307,  // 创建时间
                    "days": 7,  // 有效天数
                    "min_amount": 90,  // 限制最小金额
                    "products": [
                        {
                            "name": "摩托",  // 优惠商品
                            "rid": "1"  // 商品rid
                        }
                    ],
                    "type": 2,  // 优惠券类型
                    "type_text": "部分商品可用"
                }
            ],
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


新增满减活动
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/market/full_reduction/create``
* API接口请求方法：``POST``
* API接口用户授权：token

请求参数
~~~~~~~~~~~~~~~

===============  ========  =============  ============  ============================================
名称               类型       是否必须        默认值         描述说明
===============  ========  =============  ============  ============================================
name              String     必填                        活动名称
start_date        String     必填                        活动开始日期
end_date          String     必填                        活动结束日期
amount_items      Array      必填                        满减活动阶梯阶梯
===============  ========  =============  ============  ============================================

**优惠券信息列表:**

===============  ========  =============  ============  ============================================
名称               类型       是否必须        默认值         描述说明
===============  ========  =============  ============  ============================================
amount_items:
amount            Number     必填                        优惠券金额
reach_amount      Number     必填                        满足金额
===============  ========  =============  ============  ============================================

**参考示例**

.. code-block:: javascript

    {
        "name":"满减活动2",
        "start_date":"2018-06-29",
        "end_date":"2018-07-03",
        "amount_items":[
            {
                "amount":1,
                "reach_amount":10
            }
        ]
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "created_at": 1529994132,  // 创建时间
            "name": "满减活动2",  // 活动名称
            "start_date": 1530201600  // 活动开始时间
            "end_date": 1530547200,  // 活动结束时间
            "items": [
                {
                    "amount": 1,  // 优惠金额
                    "code": "URONCLZBYXT",  // 优惠券名称
                    "reach_amount": 10,  // 满减金额
                    "type": 3,  // 优惠券类型
                    "type_text": "消费满10.00元可减1.00元"
                }
            ]
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





