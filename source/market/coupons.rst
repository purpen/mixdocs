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
* API接口请求方法：``GET``
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

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
amount            Number     必填                  优惠券金额
start_date        Integer    可选                  优惠券过期日期
end_date          Integer    可选                  优惠券过期日期
min_amount        Number     可选                  最低金额限制
reach_amount      Number     可选                  满足金额
name              String     可选                  优惠券名称
product_rid       String     可选                  商品SKU
status            Bool       可选        True      红包状态： True 正常；False 禁用；
===============  ========  =========  ========  ====================================

.. code-block:: javascript

    {"amount": 2.00, "name": "FB",  "start_date": 0, "min_amount": 30.00 }


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
