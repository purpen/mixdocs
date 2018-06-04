=================
分销模块
=================


分销池
----------------
获取所有分销商品

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/fx_distribute/index``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~
===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
cid          Number    可选                   分类Id
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
sort         String    可选                   排序规则
qk           String    可选                   筛选条件
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "next": false,
            "prev": false,
            "products": [
                {
                    "commission_price": 99,
                    "commission_rate": 4.22,
                    "cost_price": "1234.00",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180529/fac7a2591ef0b48.jpg",
                    "description": "商品1描述",
                    "features": "商品特点",
                    "id_code": null,
                    "is_distributed": true,
                    "is_proprietary": false,
                    "name": "商品1名称",
                    "price": 2345,
                    "rid": "118290990628",
                    "s_height": 0,
                    "s_length": 0,
                    "s_weight": 0,
                    "s_width": 0,
                    "sale_price": 0,
                    "sticked": true,
                    "stock_count": 211
                },
                {
                    "commission_price": 89,
                    "commission_rate": 15.84,
                    "cost_price": "235.00",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180530/72de0b9ca1ae5a3.jpg",
                    "description": "",
                    "features": "",
                    "id_code": null,
                    "is_distributed": true,
                    "is_proprietary": true,
                    "name": "B-女装1",
                    "price": 562,
                    "rid": "118300122486",
                    "s_height": 0,
                    "s_length": 0,
                    "s_weight": 0,
                    "s_width": 0,
                    "sale_price": 0,
                    "sticked": false,
                    "stock_count": 101
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


立即分销/放入仓库
----------------
将分销池中的商品加入到自己店铺中

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/fx_distribute``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~
=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String       必须                   商品编号
product_packet_id      Integer      可选          0        商品组ID
status                 bool         必须                   商品状态, true=上架  false=下架
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
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
            "code": 403,
            "message": "您的店铺已经分销过该商品！"
        },
        "success": false
    }


取消分销
----------------
店铺取消分销该商品

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/fx_distribute``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~
===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
rid          String    必须                  商品编号
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


查看详情
----------------
查询店铺商品详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/fx_distribute/<string:rid>/detail``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~
===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
rid          String    必须                  商品编号
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "categories": [
                4
            ],
            "content": [],
            "images": [
                {
                    "created_at": 1527673385,
                    "filename": "n.jpg",
                    "filepath": "180530/72de0b9ca1ae5a3.jpg",
                    "id": 56,
                    "view_url": "http://127.0.0.1:9000/_uploads/photos/180530/72de0b9ca1ae5a3.jpg"
                }
            ],
            "skus": [
                {
                    "cost_price": "12345.00",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180530/72de0b9ca1ae5a3.jpg",
                    "id_code": "",
                    "mode": "36码 白",
                    "price": "23456.00",
                    "product_name": "B-男装1",
                    "rid": "118300195654",
                    "s_color": "白",
                    "s_model": "36码",
                    "s_weight": "0.00",
                    "sale_price": "0.00",
                    "stock_count": 56
                },
                {
                    "cost_price": "12345.00",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180530/72de0b9ca1ae5a3.jpg",
                    "id_code": "",
                    "mode": "37码 黑",
                    "price": "23456.00",
                    "product_name": "B-男装1",
                    "rid": "118300750761",
                    "s_color": "黑",
                    "s_model": "37码",
                    "s_weight": "0.00",
                    "sale_price": "0.00",
                    "stock_count": 35
                }
            ],
            "tags": ""
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
            "code": 403,
            "message": "此商品你无权操作！"
        },
        "success": false
    }


更新上架状态
----------------
更新店铺中商品的上架状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/fx_distribute/status``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String       必须                   商品编号
status                 String       必须                   商品状态, true:上架  false:下架
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
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
            "code": 400,
            "message": "此商品你无权操作!"
        },
        "success": false
    }


