================
购物车模块
================


购物车信息
----------------
获取当前购物车信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/cart``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  ==============================  ==========  =======================
名称              类型         是否必须                         默认值       描述说明
===============  ==========  ==============================  ==========  =======================
open_id          String      独立小程序端必填，其他端不填                     独立小程序openid
===============  ==========  ==============================  ==========  =======================

参考示例：

* 小程序接口请求参数传递：``/cart?open_id=123231231``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "item_count": 2,
            "items": [
                {
                    "option": "",
                    "product": {
                        "cost_price": "189.00",
                        "cover": "http://127.0.0.1:9000/_uploads/photos/180128/494e473ec90dffd.jpeg",
                        "id_code": "",
                        "mode": "白色",
                        "price": "None",
                        "product_name": "素士智能声波牙刷",
                        "rid": "118280601730",
                        "s_color": "白色",
                        "s_model": "",
                        "s_weight": "20.00",
                        "sale_price": "269.00",
                        "stock_count": 10
                    },
                    "quantity": 1,
                    "rid": "118280601730",
                    "user_id": 2
                },
                ...
            ],
            "total_quantity": 2
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }

获取购物车商品数
----------------
获取购物车商品数目

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/cart/item_count``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  ==============================  ==========  =======================
名称              类型         是否必须                         默认值       描述说明
===============  ==========  ==============================  ==========  =======================
open_id          String      独立小程序端必填，其他端不填                     小程序openid
===============  ==========  ==============================  ==========  =======================

参考示例：

* 小程序接口请求参数传递：``/cart/item_count?open_id=123231231``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "item_count": 2
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }


加入购物车
----------------
添加购物车商品

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/cart``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========================  ==========  =======================
名称              类型         是否必须                    默认值       描述说明
===============  ==========  =========================  ==========  =======================
rid              String      必填                                    商品Id
quantity         Integer     可选                        1           购买数量
option           String      可选                                    其他选项
open_id          String      独立小程序端必填                           独立小程序openid
===============  ==========  =========================  ==========  =======================

参考示例：

.. code-block:: javascript

    {
        "open_id":"12312321343",
        "rid":"12",
        "quantity":3,
        "option":"其他"
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "cart": {
                "option": null,
                "product": {
                    "cost_price": "24.00",
                    "cover": "http://xxx/_uploads/photos/180202/f51932c571ba21f.jpg",
                    "id_code": "",
                    "mode": "棕色",
                    "price": "68.00",
                    "product_name": "数据大仙",
                    "rid": "118020098269",
                    "s_color": "棕色",
                    "s_model": "",
                    "s_weight": "0.00",
                    "sale_price": "0.00",
                    "stock_count": 0
                },
                "quantity": 2,
                "rid": "118020098269",
                "user_id": 2
            },
            "item_count": 3
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
      "status": {
        "code": 401,
        "message": "Unauthorized access."
      },
      "success": false
    }
    或
    {
        "status": {
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }


更新购物车
----------------
更新购物车商品信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/cart``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  ==============================  ==========  =======================
名称              类型         是否必须                          默认值       描述说明
===============  ==========  ==============================  ==========  =======================
rid              String      必填                                         商品Id
quantity         Integer     可选                             1           购买数量
option           String      可选                                         其他选项
open_id          String      独立小程序端必填                               独立小程序openid
===============  ==========  ==============================  ==========  =======================

参考示例：

.. code-block:: javascript

    {
        "open_id":"12312321343",
        "rid":"12",
        "quantity":3,
        "option":"其他"
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": {
        "option": null,
        "product": {
          "cost_price": "24.00",
          "cover": "/static/img/mic_logo180x180.jpg",
          "id_code": "",
          "mode": "iPhoneX 白色",
          "product_name": "iPhoneX 手机壳",
          "rid": "117280969019",
          "s_color": "白色",
          "s_model": "iPhoneX",
          "s_weight": "0.00",
          "sale_price": "69.00",
          "stock_count": 10
        },
        "quantity": 1,
        "rid": "117280969019",
        "user_id": 1
      },
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }


请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
      "status": {
        "code": 401,
        "message": "Unauthorized access."
      },
      "success": false
    }
    或
    {
        "status": {
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }


移除购物车
----------------
从购物车移除某商品

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/cart/<string:rid>/remove``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========================  ==========  =======================
名称              类型         是否必须                     默认值       描述说明
===============  ==========  =========================  ==========  =======================
open_id          String      独立小程序端必填                          独立小程序openid
===============  ==========  =========================  ==========  =======================

参考示例：

.. code-block:: javascript

    {
        "open_id":"12312321343"
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "item_count": 2
        },
        "status": {
            "code": 204,
            "message": "All deleted."
        },
        "success": true
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }


清空购物车
----------------
从购物车移除所有商品

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/cart``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========================  ==========  =======================
名称              类型         是否必须                     默认值       描述说明
===============  ==========  =========================  ==========  =======================
open_id          String      独立小程序端必填                           独立小程序openid
===============  ==========  =========================  ==========  =======================

参考示例：

.. code-block:: javascript

    {
        "open_id":"12312321343"
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "item_count": 0
        },
        "status": {
            "code": 204,
            "message": "All deleted."
        },
        "success": true
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }