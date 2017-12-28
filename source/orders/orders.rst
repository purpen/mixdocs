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




