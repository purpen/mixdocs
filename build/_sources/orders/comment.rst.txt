==================
订单评价模块
==================


订单评价管理列表
----------------
获取某商家订单评价管理列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/comment/manage``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "comments": [
                {
                    "comment_query": 2,
                    "score": 4,
                    "sku_id": 2
                }
            ],
            "count": 2,
            "next": "http://0.0.0.0:9000/api/v1.0/orders/comment/manage?page=2",
            "prev": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


订单商品评价列表
----------------
获取某商家订单商品评价列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/comment/list``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    Integer       必需                      商品sku_id
=====================  ===========  ==========  ===========  ==============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "comment": [
                {
                    "children_comment": [
                        {
                            "children_comment": [],
                            "content": "可以",
                            "created_at": 1528339994,
                            "id": 4,
                            "images": [
                                {
                                    "created_at": 1,
                                    "filename": "1",
                                    "filepath": "1",
                                    "id": 1,
                                    "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                                },
                                {
                                    "created_at": 2,
                                    "filename": "2",
                                    "filepath": "2",
                                    "id": 2,
                                    "view_url": "http://0.0.0.0:9000/_uploads/photos/2"
                                }
                            ],
                            "pid": 3,
                            "sku_id": 1,
                            "sku_score": 1,
                            "user_id": 2,
                            "user_name": null
                        }
                    ],
                    "content": "这件商品不错",
                    "created_at": 1528283251,
                    "id": 3,
                    "images": [
                        {
                            "created_at": 1,
                            "filename": "1",
                            "filepath": "1",
                            "id": 1,
                            "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                        },
                        {
                            "created_at": 2,
                            "filename": "2",
                            "filepath": "2",
                            "id": 2,
                            "view_url": "http://0.0.0.0:9000/_uploads/photos/2"
                        }
                    ],
                    "pid": 0,
                    "sku_id": 1,
                    "sku_score": 5,
                    "user_id": 1,
                    "user_name": null
                }
            ],
            "count": 1,
            "next": null,
            "prev": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


添加商品评价
----------------
某用户给某订单中的商品添加评价

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/product/comment/create``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    Integer       必需                      商品sku_id
order_serial           String        必需                      订单编号
content                String       必需                      评论内容
score                  Integer       必需                      评论星级
pid                    Integer       可选                      父级评论id
asset_ids              String        可选                      图片id, 多个图片逗号隔开
=====================  ===========  ==========  ===========  ==============================

参考示例：

.. code-block:: javascript

    {
        "rid":2,
        "order_serial":"D18061059304628",
        "content":"这个不错",
        "score":5,
        "asset_ids":"1,2"
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "content": "这个不错",
            "created_at": 1528700217,
            "id": 6,
            "images": [
                {
                    "created_at": 1,
                    "filename": "1",
                    "filepath": "1",
                    "id": 1,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                },
                {
                    "created_at": 2,
                    "filename": "2",
                    "filepath": "2",
                    "id": 2,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/2"
                }
            ],
            "pid": 0,
            "rid": "D18061059304628",
            "sku_id": 2,
            "sku_score": 5,
            "user_id": 1
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除订单商品评价
----------------
某用户删除某商品的评价列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/orders/comment/delete``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    Integer       必需                      商品sku_id
=====================  ===========  ==========  ===========  ==============================

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
