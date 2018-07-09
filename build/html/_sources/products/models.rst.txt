=================
商品规格模块
=================

商品规格列表
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/models``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "models": [
                {
                    "id": 2,
                    "name": "iphone7",
                    "sort_order": 2
                },
                {
                    "id": 1,
                    "name": "iphone6",
                    "sort_order": 1
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


新增商品规格
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/products/models``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
name           String    必填                  规格名称
sort_order     Number    可选        0         排序，数字越大越靠前
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "id": 1,
            "name": "iphone6",
            "sort_order": 0
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除商品规格
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/products/models/1``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "status": {
            "code": 204,
            "message": "All deleted."
        },
        "success": true
    }


