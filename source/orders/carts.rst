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
            "item_count": 7,  // 购物车中商品总数
            "items": [
                {
                    "option": "其他",
                    "product": {
                        "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "city": "",
                        "commission_price": null,
                        "commission_rate": null,
                        "country": "",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "cover_id": 1,
                        "delivery_city": "北京",  //发货城市
                        "delivery_country": "",  //发货国家
                        "delivery_country_id": null,
                        "delivery_province": "北京",//发货省
                        "distribution_type": 1,
                        "fans_count": 1231,
                        "fid": "Ft178504962",  // 运费模板fid
                        "is_free_postage": false,
                        "mode": "1 1",
                        "price": 11,  // 零售价
                        "product_name": "摩托",
                        "product_rid": "1",
                        "product_total_stock": 2, // 商品库存数
                        "province": "",
                        "rid": "1",
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": 1,
                        "sale_price": 10, // 促销价
                        "status": 1,  // 商品状态: 0: 仓库中 1: 出售中  2: 下架中
                        "sku_status": 2,  // sku状态 1、在售 3 删除
                        "stock_count": 10207,
                        "stock_quantity": 10207,  // sku库存数
                        "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "store_name": "第一家",  // 商品所属店铺名称
                        "store_rid": "2",
                        "tag_line": "1",
                        "town": ""
                    },
                    "quantity": 3,
                    "rid": "2",
                }
            ]
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
            "item_count": 2  // 购物车中商品总数
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
rid              String      必填                                    sku_rid
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
                "option": "其他",
                "product": {
                    "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "city": "",
                    "commission_price": null,
                    "commission_rate": null,
                    "country": "",
                    "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "cover_id": 1,
                    "delivery_city": "北京",  //发货城市
                    "delivery_country": "",  //发货国家
                    "delivery_country_id": null,
                    "delivery_province": "北京",//发货省
                    "distribution_type": 1,
                    "fans_count": 1231,
                    "fid": "Ft178504962",  // 运费模板fid
                    "is_free_postage": false,
                    "mode": "1 1",
                    "price": 11,  // 零售价
                    "product_name": "摩托",
                    "product_rid": "1",
                    "product_total_stock": 2, // 商品库存数
                    "province": "",
                    "rid": "1",
                    "s_color": "1",
                    "s_model": "1",
                    "s_weight": 1,
                    "sale_price": 10, // 促销价
                    "status": 1,  // 商品状态: 0: 仓库中 1: 出售中  2: 下架中
                    "sku_status": 2,  // sku状态 1、在售 3 删除
                    "stock_count": 10207,
                    "stock_quantity": 10207,  // sku库存数
                    "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "store_name": "第一家",  // 商品所属店铺名称
                    "store_rid": "2",
                    "tag_line": "1",
                    "town": ""
                },
                "quantity": 4,
                "rid": "1",
            },
            "item_count": 7  // 购物车中商品总数
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
            "cart": {
                "option": null,
                "product": {
                    "option": "其他",
                    "product": {
                        "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "city": "",
                        "commission_price": null,
                        "commission_rate": null,
                        "country": "",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "cover_id": 1,
                        "delivery_city": "北京",  //发货城市
                        "delivery_country": "",  //发货国家
                        "delivery_country_id": null,
                        "delivery_province": "北京",//发货省
                        "distribution_type": 1,
                        "fans_count": 1231,
                        "fid": "Ft178504962",  // 运费模板fid
                        "is_free_postage": false,
                        "mode": "1 1",
                        "price": 11,  // 零售价
                        "product_name": "摩托",
                        "product_rid": "1",
                        "product_total_stock": 2, // 商品库存数
                        "province": "",
                        "rid": "1",
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": 1,
                        "sale_price": 10, // 促销价
                        "status": 1,  // 商品状态: 0: 仓库中 1: 出售中  2: 下架中
                        "sku_status": 2,  // sku状态 1、在售 3 删除
                        "stock_count": 10207,
                        "stock_quantity": 10207,  // sku库存数
                        "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "store_name": "第一家",  // 商品所属店铺名称
                        "store_rid": "2",
                        "tag_line": "1",
                        "town": ""
                    },
                    "quantity": 3,  // 购买数量
                    "rid": "2",  // sku
                },
            "item_count": 3  // 购物车中商品总数
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


移除购物车
----------------
从购物车移除某商品

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/cart/remove``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========================  ==========  =======================
名称              类型         是否必须                     默认值       描述说明
===============  ==========  =========================  ==========  =======================
open_id          String      独立小程序端必填                          独立小程序openid
rids             Array       必需                                    删除的sku_rid
===============  ==========  =========================  ==========  =======================

参考示例：

.. code-block:: javascript

    {
        "open_id":"12312321343",
        "rids":["12","22"]
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "item_count": 2  // 购物车剩余数量
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



重选规格
----------------
重选规格

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/cart/re_election``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========================  ==========  =======================
名称              类型         是否必须                    默认值       描述说明
===============  ==========  =========================  ==========  =======================
old_sku           String      必填                                    旧商品sku
new_sku           String      必填                                    新商品sku
new_quantity      Integer     必填                        1           新商品购买数量
===============  ==========  =========================  ==========  =======================

参考示例：

.. code-block:: javascript

    {
        "old_sku":"1",
        "new_sku":"2",
        "new_quantity":2

    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "cart": {
                "option": "其他",
                "product": {
                    "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "city": "",
                    "commission_price": null,
                    "commission_rate": null,
                    "country": "",
                    "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "cover_id": 1,
                    "delivery_city": "北京",  //发货城市
                    "delivery_country": "",  //发货国家
                    "delivery_country_id": null,
                    "delivery_province": "北京",//发货省
                    "distribution_type": 1,
                    "fans_count": 1231,
                    "fid": "Ft178504962",  // 运费模板fid
                    "is_free_postage": false,
                    "mode": "1 1",
                    "price": 11,  // 零售价
                    "product_name": "摩托",
                    "product_rid": "1",
                    "product_total_stock": 2, // 商品库存数
                    "province": "",
                    "rid": "1",
                    "s_color": "1",
                    "s_model": "1",
                    "s_weight": 1,
                    "sale_price": 10, // 促销价
                    "status": 1,  // 商品状态: 0: 仓库中 1: 出售中  2: 下架中
                    "sku_status": 2,  // sku状态 1、在售 3 删除
                    "stock_count": 10207,
                    "stock_quantity": 10207,  // sku库存数
                    "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                    "store_name": "第一家",  // 商品所属店铺名称
                    "store_rid": "2",
                    "tag_line": "1",
                    "town": ""
                },
                "quantity": 4,
                "rid": "1",
            },
            "item_count": 7  // 购物车中商品总数
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


