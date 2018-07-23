=================
商品颜色模块
=================


官方颜色列表
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/official/colors``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "colors": [
                {
                    "id": 1,
                    "is_official": true,
                    "name": "白色",
                    "rgb": "#FFFFFF",
                    "sort_order": 116
                },
                {
                    "id": 2,
                    "is_official": true,
                    "name": "黑色",
                    "rgb": "#000102",
                    "sort_order": 115
                },
                {
                    "id": 15,
                    "is_official": true,
                    "name": "透明",
                    "rgb": "transparent",
                    "sort_order": 102
                },
                {
                    "id": 16,
                    "is_official": true,
                    "name": "多色",
                    "rgb": "multiple",
                    "sort_order": 101
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


新增官方颜色
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/official/colors``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
name           String    必填                  颜色名称
rgb            String    必填                  颜色rgb值, 正常以#开头,可以自定义特殊颜色
sort_order     Number    可选        0         排序，数字越大越靠前
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "id": 3,
            "is_official": true,
            "name": "蓝色",
            "rgb": "#2F8BBC",
            "sort_order": 3
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


修改官方颜色
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/official/colors/<id>``
* API接口请求方法：``PUT``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
name           String    必填                  颜色名称
rgb            String    必填                  颜色rgb值, 正常以#开头,可以自定义特殊颜色
sort_order     Number    可选        0         排序，数字越大越靠前
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "id": 3,
            "is_official": true,
            "name": "绿色",
            "rgb": "#2F8BBC",
            "sort_order": 4
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除官方颜色
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/official/colors/3``
* API接口请求方法：``DELETE``

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


商家颜色列表
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/colors``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "colors": [
                {
                    "id": 2,
                    "is_official": true,
                    "name": "黑色",
                    "rgb": null,
                    "sort_order": 2
                },
                {
                    "id": 1,
                    "is_official": false,
                    "name": "白色",
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


新增商家颜色
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/products/colors``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
name           String    必填                  颜色名称
sort_order     Number    可选        0         排序，数字越大越靠前
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "id": 6,
            "is_official": false,
            "name": "银色",
            "rgb": null,
            "sort_order": 0
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除商家颜色
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/products/colors/<id>``
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


