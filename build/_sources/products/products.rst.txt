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


店铺授权商品列表
-----------------
获取店铺授权的商品列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/by_store``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
rid          String    必须                   店铺Id
cid          Number    可选                   分类Id
status       Integer   可选                   商品状态，1: 在售；-1：下架的
type         Integer   可选                   商品类别，1：自营商品；2：分销商品
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 10,
            "next": false,
            "prev": false,
            "products": [
                {
                    "cover": "http://xxx/_uploads/photos/180328/635419b82c5c66d.jpg",
                    "description": "",
                    "features": "",
                    "id_code": null,
                    "is_distributed": false,
                    "name": "测试库存变化",
                    "price": 78,
                    "rid": "118230338355",
                    "s_height": 0,
                    "s_length": 0,
                    "s_weight": 0,
                    "s_width": 0,
                    "sale_price": 0,
                    "status": true,
                    "sticked": true,
                    "stock_count": 68,
                    "store_id": 1
                },
                ...
                {
                    "cover": "http://xxx/_uploads/photos/180128/494e473ec90dffd.jpeg",
                    "description": "原创设计\r\n小米生态链出品\r\n米椒有售",
                    "features": null,
                    "id_code": null,
                    "is_distributed": false,
                    "name": "素士智能声波牙刷",
                    "price": 0,
                    "rid": "118280311037",
                    "s_height": 3,
                    "s_length": 20,
                    "s_weight": 20,
                    "s_width": 3,
                    "sale_price": 269,
                    "status": true,
                    "sticked": null,
                    "stock_count": 11,
                    "store_id": 1
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


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
            "content": [
                {
                    "content": "湿度理工哈个阿里戈中国结",
                    "type": "text"
                },
                {
                    "content": "http://xxx/_uploads/photos/180202/ccab9ae0ab96840.jpg",
                    "type": "image"
                },
                {
                    "content": "http://xxx/_uploads/photos/180202/f51932c571ba21f.jpg",
                    "type": "image"
                },
                {
                    "content": "http://xxx/_uploads/photos/180202/f51932c571ba21f.jpg",
                    "type": "image"
                },
                {
                    "content": "最具推荐的奇石文化",
                    "type": "text"
                }
            ],
            "images": [
                {
                    "created_at": 1517503809,
                    "filename": "炮兵系列-RCL-G100数据线800x800-1.jpg",
                    "filepath": "180202/f51932c571ba21f.jpg",
                    "id": 12,
                    "view_url": "http://xxx/_uploads/photos/180202/f51932c571ba21f.jpg"
                },
                {
                    "created_at": 1517503810,
                    "filename": "炮兵系列-RCL-G100数据线800x800-6.jpg",
                    "filepath": "180202/a6ca6a209d29c8d.jpg",
                    "id": 17,
                    "view_url": "http://xxx/_uploads/photos/180202/a6ca6a209d29c8d.jpg"
                }
            ],
            "tags": "设计,骑士，文化"
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
store_rid    String    可选                  店铺编号
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
          "cover": "http://xxx/_uploads/photos/171228/67a86ca36b30ec7.jpg",
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

* API接口请求地址：``/products/skus``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
rid          String    必须                  商品Id, 逗号隔开，可以批量获取
store_rid    String    可选                  店铺编号
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

``注意`` 单一结果格式

.. code-block:: javascript

    {
        "data": {
            "colors": [
                {
                    "name": "深红色",
                    "valid": true
                }
            ],
            "items": [
                {
                    "cover": "http://xxx/_uploads/photos/180302/496886303714e7e.jpg",
                    "mode": "深红色",
                    "price": "45.00",
                    "product_name": "测试供应商方式",
                    "rid": "118130473518",
                    "s_color": "深红色",
                    "s_model": "",
                    "s_weight": "0.00",
                    "sale_price": "0.00",
                    "stock_count": 8
                },
                {
                    "cover": "http://xxx/_uploads/photos/180202/a653192ecd0ec6f.jpg",
                    "mode": "",
                    "price": "45.00",
                    "product_name": "测试供应商方式",
                    "rid": "118150444328",
                    "s_color": "",
                    "s_model": "",
                    "s_weight": "0.00",
                    "sale_price": "0.00",
                    "stock_count": 0
                }
            ],
            "modes": []
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

``注意`` 批量结果格式

.. code-block:: javascript

    {
        "data": {
            "8320517984": {
                "colors": [],
                "items": [
                    {
                        "cover": "xxx/_uploads/photos/180302/496886303714e7e.jpg",
                        "mode": "",
                        "price": "45.00",
                        "product_name": "新产品07",
                        "rid": "118100775815",
                        "s_color": "",
                        "s_model": "",
                        "s_weight": "0.00",
                        "sale_price": "43.00",
                        "stock_count": 4
                    }
                ],
                "modes": []
            },
            "8806471923": {
                "colors": [
                    {
                        "name": "蓝色",
                        "valid": true
                    },
                    {
                        "name": "绿色",
                        "valid": true
                    }
                ],
                "items": [
                    {
                        "cover": "http://xxx/_uploads/photos/180202/a653192ecd0ec6f.jpg",
                        "mode": "蓝色",
                        "price": "45.00",
                        "product_name": "新产品07",
                        "rid": "118280229131",
                        "s_color": "蓝色",
                        "s_model": "",
                        "s_weight": "0.00",
                        "sale_price": "3.00",
                        "stock_count": 100
                    },
                    {
                        "cover": "http://xxx/_uploads/photos/180202/fe572a90b3c6228.jpg",
                        "mode": "绿色",
                        "price": "45.00",
                        "product_name": "新产品07",
                        "rid": "118280080780",
                        "s_color": "绿色",
                        "s_model": "",
                        "s_weight": "0.00",
                        "sale_price": "23.00",
                        "stock_count": 500
                    }
                ],
                "modes": []
            }
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
is_distributed         Bool        可选          False      是否分销
s_weight               Float       可选                     重量
s_length               Float       可选                     长
s_width                Float       可选                     宽
s_height               Float       可选                     高
skus                   Array       必需                     商品sku信息
=====================  ==========  =========  ==========  =============================

商品sku请求参数
~~~~~~~~~~~~~~~
=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
id_code                String      可选                     商品69码
s_model                String      可选                     型号
s_color                String      可选                     颜色
s_weight               Float       可选                     重量
cost_price             Float       可选                     成本价
price                  Float       必需                     销售价
sale_price             Float       可选                     促销价
commission_price       Float       可选                     佣金
stock_quantity         Integer     可选                     库存数
remark                 String      可选                     备注
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~

.. code-block:: javascript

    {"name": "新产品05", "brand_id": 1, "category_id": 2, "cover_id": 22, "cost_price": 23.00, "price": 45.00, "sale_price": 43, "description": "新潮产品描述","features": "最具创新力", "sticked": false, "is_distributed": true,
     "skus": [
        {"id_code": "6948451231567", "s_model": "iphone6", "s_color": "白色", "s_weight": 1.2, "cost_price": 3500, "price": 4000, "sale_price": 3700, "stock_quantity": 12, "remark": "商品sku1的备注信息", "commission_price": 23},
        ...
        {"id_code": "6948451564461", "s_model": "iphone7", "s_color": "黑色", "s_weight": 1.4, "cost_price": 5500, "price": 7000, "sale_price": 6000, "stock_quantity": 42, "remark": "商品sku2的备注信息", "commission_price": 34}
      ]
    }

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
            "is_distributed": true,
            "name": "新产品05",
            "price": 45,
            "rid": "8478210953",
            "s_height": 0,
            "s_length": 0,
            "s_weight": 0,
            "s_width": 0,
            "sale_price": 43,
            "sticked": false,
            "is_distributed": true
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

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "cover": "http://xxxx/_uploads/photos/180224/c833237a728a1ed.jpg",
            "description": "新潮产品999描述07",
            "features": "最具创新99力",
            "id_code": null,
            "is_distributed": false,
            "name": "新产品0007",
            "price": 45,
            "rid": "8245178063",
            "s_height": 0,
            "s_length": 0,
            "s_weight": 0,
            "s_width": 0,
            "sale_price": 43,
            "sticked": true,
            "is_distributed": false
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
            "code": 400,
            "message": "分销商品, 佣金必须设置!"
        },
        "success": false
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
            "code": 403,
            "message": "商品已被分销，不能删除商品!"
        },
        "success": false
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

* API接口请求地址：``/wishlist``
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

* API接口请求地址：``/wishlist``
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
            "code": 204,
            "message": "All deleted."
        },
        "success": true
    }

商品喜欢
----------------
添加用户商品喜欢

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/userlike``
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

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 403,
            "message": "不能重复操作!"
        },
        "success": false
    }


取消商品喜欢
----------------
取消用户商品喜欢

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/userlike``
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
            "code": 204,
            "message": "All deleted."
        },
        "success": true
    }


