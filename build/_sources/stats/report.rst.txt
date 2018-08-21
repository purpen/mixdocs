=============
报表模块
=============

店铺销售统计
----------------
获取某个店铺销售额及订单数


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/stats/report_store``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
store_rid    String    必选                   店铺编号
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "month_sale_amount": {
                "total_amount": 1019,
                "total_count": 13
            },
            "today_sale_amount": {
                "total_amount": null,
                "total_count": 0
            },
            "week_sale_amount": {
                "total_amount": null,
                "total_count": 0
            }
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

