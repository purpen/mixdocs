=================
商品材料模块
=================


官方材料列表
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/official/materials``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 3,
            "materials": [
                {
                    "id": 1,
                    "is_official": true,
                    "name": "金",
                    "sort_order": 3
                },
                {
                    "id": 2,
                    "is_official": true,
                    "name": "银",
                    "sort_order": 2
                },
                {
                    "id": 3,
                    "is_official": true,
                    "name": "铜",
                    "sort_order": 1
                }
            ],
            "next": false,
            "prev": false
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


新增官方材料
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/official/materials``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
name           String    必填                  材料名称
sort_order     Number    可选        0         排序，数字越大越靠前
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "id": 4,
            "is_official": true,
            "name": "铁",
            "sort_order": 4
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


修改官方材料
-------------
增加官方材料, 所有商家都可使用

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/official/materials/4``
* API接口请求方法：``PUT``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
name           String    必填                  分类名称
sort_order     Number    可选        0         排序，数字越大越靠前
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "id": 4,
            "is_official": true,
            "name": "锌",
            "sort_order": 4
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除官方材料
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/official/materials/4``
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


