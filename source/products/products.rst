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


最新商品列表（新品上市）
----------------------------
获取最新商品列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/latest``
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

.. literalinclude:: product_list.js
    :language: javascript


推荐商品列表
----------------------------
获取推荐商品列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/sticked``
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

.. literalinclude:: product_list.js
    :language: javascript


搜索商品列表
----------------------------
获取搜索商品列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/search/products``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
qk           String    必选                   搜索关键词
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "next": false,
            "paginated_products": [
                {
                    "cover": "xxxx/_uploads/photos/180202/82200e8db7bb80d.jpg",
                    "description": "数据线",
                    "id_code": null,
                    "name": "数据大仙",
                    "price": 68,
                    "rid": "118020994530",
                    "s_height": 0,
                    "s_length": 0,
                    "s_weight": 0,
                    "s_width": 0,
                    "sale_price": 60,
                    "sticked": false
                }
            ],
            "prev": false,
            "qk": "数据线",
            "total_count": 1
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


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


新增商品
------------------
新增商品信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
name                   String      必需                     商品名称
cover_id               Integer     必需                     封面图ID
category_id            Integer     可选                     分类ID
brand_id               Integer     可选                     品牌ID
id_code                String      可选                     69码
cost_price             Float       可选                     成本价
price                  Float       必需                     销售价
sale_price             Float       可选                     促销价
description            String      可选                     描述
features               String      可选                     宣传语或优势亮点
sticked                Bool        可选          False      是否推荐
status                 Bool        可选          True       上架或下架
s_weight               Float       可选                     重量
s_length               Float       可选                     长
s_width                Float       可选                     宽
s_height               Float       可选                     高
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~

.. code-block:: javascript

    {"name": "新产品05", "brand_id": 1, "category_id": 2, "cover_id": 22, "cost_price": 23.00, "price": 45.00, "sale_price": 43, "description": "新潮产品描述","features": "最具创新力", "sticked": 0  }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "cover": "http://xxxx/photos/180224/c833237a728a1ed.jpg",
            "description": "新潮产品描述",
            "features": "最具创新力",
            "id_code": null,
            "name": "新产品05",
            "price": 45,
            "rid": "8478210953",
            "s_height": 0,
            "s_length": 0,
            "s_weight": 0,
            "s_width": 0,
            "sale_price": 43,
            "sticked": false
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


更新商品
------------------
更新商品信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/<rid>``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

** 同上新增参数要求 **

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "cover": "http://xxxx/_uploads/photos/180224/c833237a728a1ed.jpg",
            "description": "新潮产品999描述07",
            "features": "最具创新99力",
            "id_code": null,
            "name": "新产品0007",
            "price": 45,
            "rid": "8245178063",
            "s_height": 0,
            "s_length": 0,
            "s_weight": 0,
            "s_width": 0,
            "sale_price": 43,
            "sticked": false
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除商品
------------------
删除某商品及sku信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/<rid>``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

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


收藏列表
----------------
获取收藏商品列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/wishlist``
* API接口请求方法：``GET``
* API接口用户授权：``token``

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

.. code-block:: javascript

    {
        "data": {
            "count": 1,
            "next": null,
            "prev": null,
            "products": [
                {
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180202/82200e8db7bb80d.jpg",
                    "description": "数据线",
                    "id_code": null,
                    "name": "数据大仙",
                    "price": 68,
                    "rid": "118020994530",
                    "s_height": 0,
                    "s_length": 0,
                    "s_weight": 0,
                    "s_width": 0,
                    "sale_price": 60,
                    "sticked": false
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


添加收藏
----------------
添加收藏商品

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/wishlist/addto``
* API接口请求方法：``POST``
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
            "code": 201,
            "message": "All created."
        },
        "success": true
    }

删除收藏
----------------
删除收藏商品

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/wishlist/remove``
* API接口请求方法：``POST``
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
            "code": 204,
            "message": "All deleted."
        },
        "success": true
    }
