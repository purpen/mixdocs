=============
商品模块
=============

分类的商品列表
----------------
获取商品全部或某分类下列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
cid          Number    可选                   分类Id
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: product_list.js
    :language: javascript


品牌的商品列表
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/by_brand/<rid>``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
rid          String    必须                   品牌Id
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: product_list.js
    :language: javascript


商品基本信息
----------------
获取商品的详细基本信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/<rid>``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": {
        "cover": "http://xxx/_uploads/photos/171010/22f8415ad675f22.jpeg",
        "id_code": null,
        "name": "铠甲",
        "rid": "117210230003",
        "s_height": 0,
        "s_length": 0,
        "s_weight": 0,
        "s_width": 0,
        "sale_price": 60
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



商品详情内容
----------------
获取商品的详细内容

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/<rid>/detail``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": {
        "content": "这是净化器，编辑更新",
        "tags": "净化器，智能"
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


商品SKU信息
----------------
获取商品的SKU信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/by_sku``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
rid          String    必须                  sku id, 如批量请求，请逗号隔开
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": [
        {
          "cost_price": "24.00",
          "cover": "http://127.0.0.1:5000/_uploads/photos/171228/67a86ca36b30ec7.jpg",
          "id_code": "",
          "mode": "iPhone8 红色",
          "product_name": "iPhoneX 手机壳",
          "rid": "118040911719",
          "s_color": "红色",
          "s_model": "iPhone8",
          "s_weight": "0.00",
          "sale_price": "69.00",
          "stock_count": 0
        }
      ],
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


商品SKU列表
----------------
获取商品的SKU列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/<rid>/skus``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": [
        {
          "cost_price": "24.00",
          "cover": "/static/img/mic_logo180x180.jpg",
          "mode": "iPhoneX 黑色",
          "id_code": "",
          "product_name": "iPhoneX 手机壳",
          "rid": "117280530556",
          "s_color": "黑色",
          "s_model": "iPhoneX",
          "s_weight": "0.00",
          "sale_price": "69.00",
          "stock_count": 10
        },
        {
          "cost_price": "24.00",
          "cover": "/static/img/mic_logo180x180.jpg",
          "mode": "iPhoneX 白色",
          "id_code": "",
          "product_name": "iPhoneX 手机壳",
          "rid": "117280969019",
          "s_color": "白色",
          "s_model": "iPhoneX",
          "s_weight": "0.00",
          "sale_price": "69.00",
          "stock_count": 10
        }
      ],
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


新增商品 <未开通>
------------------


更新商品 <未开通>
------------------


删除商品 <未开通>
------------------

