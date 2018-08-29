================
供应商/品牌模块
================


品牌列表
----------------
获取商品所属的品牌

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/brands``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: brand_list.js
    :language: javascript


品牌详情
----------------
获取品牌的详细信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/brands/<rid>``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "banner": "http://127.0.0.1:9000/_uploads/photos/170724/5d2812257b539aa.jpg",
            "description": "",
            "features": "针对婴幼儿产品",
            "is_recommended": false,
            "logo": "http://127.0.0.1:9000/_uploads/photos/171010/22f8415ad675f22.jpeg",
            "name": "吻吻鱼",
            "rid": "600000001",
            "sort_order": 2,
            "status": 1
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
            "message": "No result matched."
        },
        "success": false
    }


新增品牌
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/brands``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
name             String    必填                  品牌名称
features         String    可选                  品牌亮点
description      String    可选                  品牌说明
supplier_id      Integer   可选                  所属供应商
is_recommended   Bool      可选        False     是否推荐
sort_order       Number    可选        1         排序，数字越大越靠前
===============  ========  =========  ========  ====================================

请求示例
~~~~~~~~~~~~~~~

.. raw:: html

    <p class="text-danger">
        <small><span class="glyphicon glyphicon-star"></span></small>
        请求参数必须以 JSON 格式形式，服务端才会获取请求的数据。
    </p>

.. code-block:: javascript

    { "name":"新品牌3", "features": "性价比最佳", "description": "新品牌说明", "is_recommended": 0, "sort_order": 1, "supplier_id": 10 }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
      "data": {
        "banner": "",
        "description": "新品牌说明",
        "features": "性价比最佳",
        "is_recommended": false,
        "logo": "",
        "name": "新品牌3",
        "rid": "600001002",
        "sort_order": 1,
        "status": 1
      },
      "status": {
        "code": 201,
        "message": "All created."
      },
      "success": true
    }



更新品牌
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/brands/<rid>``
* API接口请求方法：``PUT``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
name             String    可选                  品牌名称
features         String    可选                  品牌亮点
description      String    可选                  品牌说明
supplier_id      Integer   可选                  所属供应商
is_recommended   Bool      可选        False     是否推荐
sort_order       Number    可选        1         排序，数字越大越靠前
===============  ========  =========  ========  ====================================

请求示例
~~~~~~~~~~~~~~~

.. raw:: html

    <p class="text-danger">
        <small><span class="glyphicon glyphicon-star"></span></small>
        请求参数必须以 JSON 格式形式，服务端才会获取请求的数据。
    </p>

.. code-block:: javascript

    { "name":"新品牌3-up", "features": "性价比最佳-up", "description": "新品牌说明-up", "is_recommended": 1 }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
      "data": {
        "banner": "",
        "description": "新品牌说明-up",
        "features": "性价比最佳-up",
        "is_recommended": true,
        "logo": "",
        "name": "新品牌3-更名",
        "rid": "600001002",
        "sort_order": 1,
        "status": 1
      },
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }


删除品牌
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/brands/<rid>``
* API接口请求方法：``DELETE``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }
