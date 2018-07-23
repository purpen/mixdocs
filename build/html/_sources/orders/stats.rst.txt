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
date_time              String      必需                    统计日期月份 如:'2018-06'
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
            "count": 2,
            "next": null,
            "orders": [
                {
                    "actual_account_amount": 491.04,  // 实际入账金额
                    "actual_income": 570,  // 实际收入
                    "commission_price": 0,  // 佣金
                    "customer_order_id": null,  // 分销订单编号
                    "discount_amount": 2,  // 优惠金额
                    "freight": 347,  // 运费
                    "is_settlement": true,  // 是否结算
                    "order_serial_no": "D18070546197320",  // 订单编号
                    "payed_at": 1530781909,  // 交易时间
                    "received_at": 1530384400,  // 交易完成时间
                    "service_fee": 68.4,  // 服务费
                    "total_amount": 225  // 订单商品价格
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
date_time              String      必需                    统计日期月份 如:'2018-06'
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "actual_account_amount": 542.08,  // 实际入账
            "commission_price": 0,  // 佣金总计
            "count": 4,  // 订单数
            "discount_amount": 6,  // 优惠总计
            "month": 7,  // 月份
            "service_fee": 73.92,  // 服务费总计
            "status": 3,  // 结算状态：1、待汇款 2、已汇款 3、待确认
            "total_sales_amount": 616,  // 可结算销售总额
            "year": 2018  // 年
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
date_time              String      必需                    统计日期月份 如:'2018-06'
page                   Number      可选         1          当前页码
per_page               Number      可选         10         每页数量
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 2,
            "next": null,
            "orders": [
                {
                    "actual_account_amount": 9.99,  // 实际入账
                    "actual_income": 11.1,  // 实际获得佣金
                    "commission_price": 11.1, // 佣金
                    "customer_order_id": null,
                    "discount_amount": 0, // 优惠金额
                    "freight": 1120, // 运费
                    "is_settlement": true,  // 是否结算
                    "order_serial_no": "D18070507481253", // 订单号
                    "payed_at": 1530781909, // 交易时间
                    "received_at": 1530946080, // 交易完成时间
                    "service_fee": 1.11, // 服务费
                    "total_amount": 111 // 订单商品价格
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
date_time              String      必需                    统计日期月份 如:'2018-06'
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "actual_account_amount": 0.9, // 实际入账金额
            "commission_price": 1, // 实际获得佣金
            "count": 1, // 订单数
            "month": 7, // 月份
            "service_fee": 0.1,
            "status": 3,  // 结算状态：1、待汇款 2、已汇款 3、待确认
            "total_sales_amount": 120, // 累计销售额
            "year": 2018 // 年
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



我的订单、我的分销订单对账单
---------------------------------
我的订单、我的分销订单对账单

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/orders/statements``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
date_time              String      必需                    统计日期月份 如:'2018-06'
status                 Number      可选         1          1、日汇总 2、月汇总
is_distributed         Number      可选         0          0、我的订单 1、我的分销订单
page                   Number      可选         1          当前页码
per_page               Number      可选         10         每页数量
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 1,
            "next": null,
            "prev": null,
            "statements": [
                {
                    "actual_account_amount": 1494.24,  // 实际入账金额
                    "actual_income": 1698,  // 收入
                    "date": "2018-07-01",  // 日期
                    "service_fee": 203.76  // 服务费
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }




我的订单、我的分销订单交易记录
---------------------------------
我的订单、我的分销订单交易记录

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/orders/transactions``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
start_time             String      必需                    统计开始日期
end_time               String      必需                    统计结束日期
status                 Number      可选                    1、待结算 2、成功 3、失败 4、退款
is_distributed         Number      可选         0          0、我的订单 1、我的分销订单
rid                    String      可选                    订单编号
page                   Number      可选         1          当前页码
per_page               Number      可选         10         每页数量
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 2,
            "next": null,
            "prev": null,
            "transactions": [
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
                    "payment_slip": "1234567890", // 支付单号
                    "refund_amount": "1234567890", // 退款金额
                    "outside_target_id": "D18070316803529",  // 第三方平台订单号
                    "pay_amount": 17,  // 支付金额
                    "reach_minus": 0,  // 满减金额
                    "received_at": 0,  // 收货时间
                    "distributed": false,  // 分销订单
                    "remark": null,  // 卖家备注
                    "rid": "D18070316803529",  // 订单编号
                    "ship_mode": 1,  // 运送方式
                    "status": 5,  // 订单状态
                    "store_name": "第一家(None)",  // 店铺名称
                    "total_amount": 3,  // 商品金额
                    "total_quantity": 3  // 商品总数量
                    "transaction_status": 1  // 交易记录状态，1、待结算 2、成功 3、失败 4、退款
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
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


账户管理订单汇总
--------------------
账户管理订单汇总

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/account_collect``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  ===============================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  ===============================================
date_range              String      必需                   时间段 'week'近7天 'month'近一月 'year'近一年
=====================  ==========  =========  ==========  ===============================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "pending_settlement_amount": 161.7,  // 待结算金额
            "time_sale_amount": 161.7,  // 按时间查询的销售额
            "total_sale_amount": 161.7  // 总销售额
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


账户管理分销订单汇总
--------------------
账户管理分销订单汇总

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/distribute_account_collect``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "pending_commission_price": 1.3,  // 待结算佣金收入
            "time_commission_price": 1.3,  // 按时间查询的销售额
            "total_commission_price": 1.3  // 累计分销佣金
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



我的订单确认结算
--------------------
我的订单确认结算

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/orders/confirm_settlement``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
date_time              String      必需                    统计日期月份 如:'2018-06'
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "actual_account_amount": 209.44,  // 应收款 = 汇款金额
            "commission_price": 2,  // 佣金总计
            "count": 2,  // 交易完成订单数量
            "created_at": 1531883404,  // 确认时间
            "discount_amount": 0,  // 优惠总计
            "is_distributed": false,  // 是否分销订单
            "month": 7,  // 月份
            "remittance_amount": 0,  // 汇款金额
            "remittance_at": 0,  // 汇款时间
            "remittance_id": 0,  // 汇款人
            "service_fee": 28.56,  // 技术服务费
            "status": 1,  // 汇款状态 1、待汇款 2、已汇款 3、待确认
            "total_sales_amount": 238,  // 可结算销售额、累计销售额
            "year": 2018  // 年
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }



我的分销订单确认结算
--------------------
我的分销订单确认结算

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/distribute_orders/confirm_settlement``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
date_time              String      必需                    统计日期月份 如:'2018-06'
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "actual_account_amount": 209.44,  // 应收款 = 汇款金额
            "commission_price": 2,  // 佣金总计
            "count": 2,  // 交易完成订单数量
            "created_at": 1531883404,  // 确认时间
            "discount_amount": 0,  // 优惠总计
            "is_distributed": false,  // 是否分销订单
            "month": 7,  // 月份
            "remittance_amount": 0,  // 汇款金额
            "remittance_at": 0,  // 汇款时间
            "remittance_id": 0,  // 汇款人
            "service_fee": 28.56,  // 技术服务费
            "status": 1,  // 汇款状态 1、待汇款 2、已汇款 3、待确认
            "total_sales_amount": 238,  // 可结算销售额、累计销售额
            "year": 2018  // 年
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


