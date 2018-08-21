===================
订单销售统计模块
===================


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


