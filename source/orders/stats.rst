================
统计模块
================


销售额汇总信息
----------------
获取当前销售额汇总信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/stat_collect``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            // 今日
            "today": {
                "sale_amount": 1000,
                "order_quantity": 100,
                "day_yoy": -0.12  // 日同比
            },

            // 7日
            "seven_days": {
                "sale_amount": 1000,
                "order_quantity": 100,
                "week_yoy": 0.12  // 周同比
            },

            // 30天
            "thirty_days": {
                "sale_amount": 1000,
                "order_quantity": 100,
                "month_yoy": 0.12  // 月同比
            }
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
          },
          "success": true
    }


销售额趋势图
----------------
获取销售额趋势

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/sale_amount_trend``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
start_time             String      必需                    统计开始日期
end_time               String      必需                    统计结束日期
=====================  ==========  =========  ==========  =============================

参考示例：

.. code-block:: javascript

    {
        "start_time":"2018-05-19",
        "end_time":"2018-05-22"
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "sale_amount_data": [
                {
                    "sale_amount": 88,
                    "time": 1526659200
                },
                {
                    "sale_amount": 23,
                    "time": 1526745600
                },
                {
                    "sale_amount": 98,
                    "time": 1526832000
                },
                {
                    "sale_amount": 111,
                    "time": 1526918400
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

订单量趋势图
----------------
获取订单量趋势

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/order_quantity_trend``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
start_time             String      必需                    统计开始日期
end_time               String      必需                    统计结束日期
=====================  ==========  =========  ==========  =============================

参考示例：

.. code-block:: javascript

    {
        "start_time":"2018-05-19",
        "end_time":"2018-05-22"
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "order_quantity_data": [
                {
                    "order_quantity": 888,
                    "time": 1526659200
                },
                {
                    "order_quantity": 321,
                    "time": 1526745600
                },
                {
                    "order_quantity": 988,
                    "time": 1526832000
                },
                {
                    "order_quantity": 1111,
                    "time": 1526918400
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


销售排行榜
----------------
获取销售排行榜

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/sale_leader_board``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
start_time             String      必需                    统计开始日期
end_time               String      必需                    统计结束日期
=====================  ==========  =========  ==========  =============================

参考示例：

.. code-block:: javascript

    {
        "start_time":"2018-05-19",
        "end_time":"2018-05-22"
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "sale_log_statistics": [
                {
                    "name": "摩托车",
                    "proportion": 0.1590909090909091,
                    "quantity": 391,
                    "sale_amount": 1489003
                },
                {
                    "name": "电单车",
                    "proportion": 0.10090909090909092,
                    "quantity": 213,
                    "sale_amount": 644785
                },
                {
                    "name": "电视",
                    "proportion": 0.06090909090909092,
                    "quantity": 1307,
                    "sale_amount": 58803
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



我的订单结算列表
----------------
我的订单结算列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/orders``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
start_time             String      必需                    统计开始日期
end_time               String      必需                    统计结束日期
page                   Number      可选         1          当前页码
per_page               Number      可选         10         每页数量
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

``注：`` 如果customer_code不为null，则是分销员售卖订单

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 6,
            "next": null,
            "orders": [
                {
                    "actual_income": 535.8,  // 实际收入
                    "commission_price": 0,  // 佣金
                    "customer_code": null,  // 分销店铺
                    "discount_amount": 24.2,  // 优惠
                    "freight": 338,  // 运费
                    "payed_at": 1530781909,  // 交易时间
                    "received_at": 1530781909,  // 交易完成时间
                    "serial_no": "D18070571028695",  // 订单编号
                    "service_fee": 64.296,  // 服务费
                    "total_amount": 222  // 订单商品价格
                },
            ],
            "prev": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


我的订单结算汇总
----------------
我的订单结算汇总

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/orders_collect``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
start_time             String      必需                    统计开始日期
end_time               String      必需                    统计结束日期
page                   Number      可选         1          当前页码
per_page               Number      可选         10         每页数量
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "accountable_amount": 2566.78,  // 应收款金额
            "actual_income": 2916.8,  // 可结算销售总额
            "commission_price": 0,  // 佣金总计
            "count": 6,  // 订单数量
            "discount_amount": 34.2,  // 优惠总计
            "service_fee": 350.02  // 服务费
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



我的分销订单结算列表
--------------------
我的分销订单结算列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/distribute_orders``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
start_time             String      必需                    统计开始日期
end_time               String      必需                    统计结束日期
page                   Number      可选         1          当前页码
per_page               Number      可选         10         每页数量
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 3,
            "next": null,
            "orders": [
                {
                    "commission_price": 11.1,  // 佣金
                    "payed_at": 1530781909,  // 交易时间
                    "received_at": 1530781909,  // 交易完成时间
                    "serial_no": "D18070558301647",  // 订单编号
                    "service_fee": 1.11,  // 服务费
                    "total_amount": 111  // 商品价格
                },
            ],
            "prev": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


我的分销订单结算汇总
--------------------
我的分销订单结算汇总

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/distribute_orders_collect``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
start_time             String      必需                    统计开始日期
end_time               String      必需                    统计结束日期
page                   Number      可选         1          当前页码
per_page               Number      可选         10         每页数量
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "accountable_amount": 29.97,  // 应收销售收益
            "commission_price": 33.3,  // 佣金总计
            "count": 3,  // 订单数量
            "pay_amount": 3693,  // 累计销售额
            "service_fee": 3.33  // 服务费
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }
