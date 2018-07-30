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
status       Number    可选         1         商品状态  0=仓库中, 1=出售中,  2=下架中, 3=已售罄
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
status       Number    可选         -1        商品状态 0: 仓库中  1: 上架中  2: 下架中,  3: 已售罄
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
                    "commission_price": 30,
                    "commission_rate": 5.3,
                    "cover": "http://xxx/_uploads/photos/171010/fe7380064e18135.jpg",
                    "custom_details": "定制详情",
                    "features": "这是商品推荐语",
                    "id_code": "6915545123548",
                    "is_custom_made": true,
                    "is_custom_service": true,
                    "is_distributed": true,
                    "is_free_postage": false,
                    "is_made_holiday": true,
                    "like_count": 333,
                    "made_cycle": 5,
                    "max_price": 1888,
                    "max_sale_price": 1699,
                    "min_price": 1388,
                    "min_sale_price": 1299,
                    "name": "速腾套装",
                    "published_at": 1546121488,
                    "rid": "117210372661",
                    "status": 1,
                    "sticked": null,
                    "stock_count": 35
                }
            ],
            "prev": false,
            "qk": "套装",
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

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
page                    Number      可选         1         当前页码
per_page                Number      可选         10        每页数量
start_date              String      可选                   发布日期的开始日期
end_date                String      可选                   发布日期的结束日期
cid                     Number      可选                   分类Id
status                  Number      可选         1         商品状态 0:仓库中; 1:出售中; 2:下架中; 3:已售罄
is_distributed          Number      可选                   商品类别 0: 全部; 1：自营商品；2：分销商品
qk                      String      可选                   搜索关键字
out_of_stock            Number      可选         0         商品库存 0: 全部; 1: 数量不足
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: product_list.js
    :language: javascript


多个商品基本信息
------------------
获取多个商品的详细基本信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/many_products``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rids                    String      是                     商品编号, 多个用,号隔开
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "products": [
                {
                    "category_id": 628,
                    "commission_price": 172.83,
                    "commission_rate": 5,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "custom_details": "可以刻名字,生辰八字",
                    "features": "获得更多的成长值，加速商铺成长获取更多特权：发布三星级及以上的产品可以获得与星级数量等额的成长值，每日上限为20点；",
                    "id_code": "",
                    "is_custom_made": true,
                    "is_custom_service": true,
                    "is_distributed": true,
                    "is_free_postage": false,
                    "is_made_holiday": false,
                    "is_proprietary": true,
                    "is_sold_out": true,
                    "like_count": 0,
                    "made_cycle": 5,
                    "material_id": 2,
                    "material_name": "皮革",
                    "max_price": 3456.7,
                    "max_sale_price": 0,
                    "min_price": 1111,
                    "min_sale_price": 0,
                    "modes": [
                        "1",
                        "中 黑色",
                        "小 蓝色"
                    ],
                    "name": "商品9",
                    "published_at": 1531037601,
                    "real_price": 3456.7,
                    "real_sale_price": 0,
                    "rid": "8843256790",
                    "second_category_id": 628,
                    "status": 0,
                    "sticked": false,
                    "top_category_id": 600,
                    "total_stock": 0
                },
                {
                    "category_id": 628,
                    "commission_price": 172.83,
                    "commission_rate": 5,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "custom_details": "可以刻名字,生辰八字",
                    "features": "获得更多的成长值，加速商铺成长获取更多特权：发布三星级及以上的产品可以获得与星级数量等额的成长值，每日上限为20点；",
                    "id_code": "",
                    "is_custom_made": true,
                    "is_custom_service": true,
                    "is_distributed": true,
                    "is_free_postage": false,
                    "is_made_holiday": false,
                    "is_proprietary": true,
                    "is_sold_out": false,
                    "like_count": 0,
                    "made_cycle": 5,
                    "material_id": 2,
                    "material_name": "皮革",
                    "max_price": 2,
                    "max_sale_price": 0,
                    "min_price": 2,
                    "min_sale_price": 0,
                    "modes": [
                        "1",
                        "中 黑色",
                        "小 蓝色"
                    ],
                    "name": "商品10",
                    "published_at": 0,
                    "real_price": 2,
                    "real_sale_price": 0,
                    "rid": "8698317405",
                    "second_category_id": 628,
                    "status": 0,
                    "sticked": false,
                    "top_category_id": 600,
                    "total_stock": 41
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
        "brand": null,
        "commission_price": 30,
        "commission_rate": 5.3,
        "cover": "http://xxx/_uploads/photos/171010/fe7380064e18135.jpg",
        "custom_details": "定制详情",
        "features": "这是商品推荐语",
        "id_code": "6915545123548",
        "is_custom_made": true,
        "is_custom_service": true,
        "is_distributed": true,
        "is_free_postage": false,
        "is_made_holiday": true,
        "like_count": 333,
        "made_cycle": 5,
        "max_price": 1888,
        "max_sale_price": 1699,
        "min_price": 1388,
        "min_sale_price": 1299,
        "name": "速腾套装",
        "published_at": 1546121488,
        "rid": "117210372661",
        "status": 1,
        "sticked": null,
        "total_stock": 35
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


商品全部信息
----------------
获取商品的所有详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/<rid>/all_detail``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "assets": [
                {
                    "created_at": 1530933787,
                    "filename": "z.jpg",
                    "filepath": "180707/77409c8ab9b0abf.jpg",
                    "id": 2,
                    "type": 1,
                    "view_url": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg"
                }
            ],
            "category_id": 628,
            "commission_price": 117.84,
            "commission_rate": 3.5,
            "content": "商品图文详情",
            "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
            "cover_id": 2,
            "custom_details": "可以刻名字,生辰八字",
            "features": "商品特点",
            "fid": "11111",
            "id_code": "",
            "is_custom_made": true,
            "is_custom_service": true,
            "is_distributed": true,
            "is_free_postage": false,
            "is_made_holiday": false,
            "is_proprietary": true,
            "is_sold_out": false,
            "keywords": "苹果,明星,博客,象棋",
            "labels": [
                {
                    "id": 1,
                    "name": "独家贩售",
                    "sort_order": 109
                },
                {
                    "id": 2,
                    "name": "环保有机",
                    "sort_order": 108
                },
                {
                    "id": 3,
                    "name": "手工制作",
                    "sort_order": 107
                },
                {
                    "id": 4,
                    "name": "机械制作",
                    "sort_order": 107
                }
            ],
            "like_count": 0,
            "made_cycle": 5,
            "material_id": 1,
            "max_price": 3456.7,
            "max_sale_price": 3367,
            "min_price": 1234.5,
            "min_sale_price": 1145,
            "modes": [
                "大 白色",
                "中 黑色",
                "小 蓝色"
            ],
            "name": "商品2",
            "product_return_policy": "退换货规则",
            "published_at": 1530949344,
            "real_price": 3456.7,
            "real_sale_price": 3367,
            "return_policy_id": 1,
            "rid": "8527906841",
            "second_category_id": 628,
            "skus": [
                {
                    "commission_price": 17.18,
                    "commission_rate": 1.5,
                    "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                    "cover_id": null,
                    "id_code": null,
                    "mode": "大 白色",
                    "price": 1234.5,
                    "product_name": "商品2",
                    "rid": "8085694327",
                    "s_color": "白色",
                    "s_model": "大",
                    "s_weight": 2.5,
                    "sale_price": 1145,
                    "stock_count": 5,
                    "stock_quantity": 5
                },
                {
                    "commission_price": 56.4,
                    "commission_rate": 2.5,
                    "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                    "cover_id": null,
                    "id_code": null,
                    "mode": "中 黑色",
                    "price": 2345.6,
                    "product_name": "商品2",
                    "rid": "8568012439",
                    "s_color": "黑色",
                    "s_model": "中",
                    "s_weight": 2.5,
                    "sale_price": 2256,
                    "stock_count": 15,
                    "stock_quantity": 15
                },
                {
                    "commission_price": 117.84,
                    "commission_rate": 3.5,
                    "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                    "cover_id": null,
                    "id_code": null,
                    "mode": "小 蓝色",
                    "price": 3456.7,
                    "product_name": "商品2",
                    "rid": "8493850612",
                    "s_color": "蓝色",
                    "s_model": "小",
                    "s_weight": 2.5,
                    "sale_price": 3367,
                    "stock_count": 25,
                    "stock_quantity": 25
                }
            ],
            "status": 1,
            "sticked": false,
            "stock_count": 45,
            "top_category_id": 600,
            "total_stock": 45
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
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
            "content": "产品内容详情",
            "images": [
                {
                    "created_at": 1527587113,
                    "filename": "m.jpg",
                    "filepath": "180529/e5a6b51ad55208d.jpg",
                    "id": 5,
                    "type": 1,
                    "view_url": "http://127.0.0.1:9000/_uploads/photos/180529/e5a6b51ad55208d.jpg"
                },
                {
                    "created_at": 1527587113,
                    "filename": "l.jpg",
                    "filepath": "180529/4158809a4303eab.jpg",
                    "id": 6,
                    "type": 1,
                    "view_url": "http://127.0.0.1:9000/_uploads/photos/180529/4158809a4303eab.jpg"
                }
            ],
            "keywords": "苹果,明星,博客,象棋",
            "product_return_policy": "除定制化、一次性使用商品，特殊订单项目外，如果由于个人原因您对购买的礼品不满意，在乐喜您可以在收到订单后隔日起算享受7天内退货或更换礼品服务。礼品寄出和退回运费将由消费者自行负担，请保持礼品及包裝完整寄回，经过创作人确认无误后，即可退换货。"
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


SKU信息
----------------
根据sku编号获取该商品sku的详细信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/by_sku``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
rids         String    必须                  sku id, 如批量请求，请逗号隔开
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "8207431865": {
                "cover": "http://127.0.0.1:9000/_uploads/photos/180707/912fc59a8199d04.jpg",
                "cover_id": 4,
                "fid": "11111",
                "mode": "大 白色",
                "price": 1234.5,
                "product_name": "商品名",
                "rid": "8207431865",
                "s_color": "白色",
                "s_model": "大",
                "s_weight": 2.5,
                "sale_price": 1145,
                "stock_count": 5,
                "stock_quantity": 5,
                "store_name": "店铺名"
            },
            "8601459278": {
                "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                "cover_id": null,
                "fid": "",
                "mode": "中 黑色",
                "price": 2,
                "product_name": "商品名",
                "rid": "8601459278",
                "s_color": "黑色",
                "s_model": "中",
                "s_weight": 2.5,
                "sale_price": 0,
                "stock_count": 15,
                "stock_quantity": 15,
                "store_name": "分销商品2"
            }
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


店铺SKU信息
----------------
按店铺编号分类根据sku编号获取的信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/by_store_sku``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
rids         String    必须                  sku id, 如批量请求，请逗号隔开
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "店铺编号1": [
                {
                    "commission_price": 482.68,
                    "commission_rate": 21.5,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180710/d110096746d9c52.jpg",
                    "cover_id": 12,
                    "delivery_country": "发货地",
                    "delivery_country_id": "发货地编号",
                    "fid": "运费模板编号",
                    "mode": "3*1 白色",
                    "price": 3234.5,
                    "product_name": "商品名",
                    "product_rid": "8479032186",
                    "rid": "8136802479",
                    "s_color": "白色",
                    "s_model": "3*1",
                    "s_weight": 2.5,
                    "sale_price": 2245,
                    "stock_count": 5,
                    "stock_quantity": 5,
                    "store_name": "店铺名",
                    "store_rid": "店铺编号1"
                }
            ],
            "店铺编号2": [
                {
                    "commission_price": 17.18,
                    "commission_rate": 1.5,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/912fc59a8199d04.jpg",
                    "cover_id": 4,
                    "delivery_country": "发货地",
                    "delivery_country_id": "发货地编号",
                    "fid": "运费模板编号",
                    "mode": "大 白色",
                    "price": 1234.5,
                    "product_name": "商品名",
                    "product_rid": "8715243680",
                    "rid": "8207431865",
                    "s_color": "白色",
                    "s_model": "大",
                    "s_weight": 2.5,
                    "sale_price": 1145,
                    "stock_count": 5,
                    "stock_quantity": 5,
                    "store_name": "店铺名2",
                    "store_rid": "店铺编号2"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


商品SKU信息
----------------
获取商品的SKU信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/skus``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

================   ========  =========  ========  ====================================
名称               类型       是否必须    默认值     描述说明
================   ========  =========  ========  ====================================
rid                String    必须                  sku id, 如批量请求，请逗号隔开
store_rid          String    可选                  店铺编号
commission_data    Number    可选         0        是否获取分销数据 0=不获取, 1=获取
================   ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "colors": [
                {
                    "name": "白色",
                    "valid": true
                },
                {
                    "name": "黑色",
                    "valid": true
                }
            ],
            "items": [
                {
                    "commission_price": 18.52,
                    "commission_rate": 1.5,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180529/e5a6b51ad55208d.jpg",
                    "mode": "大 白色",
                    "price": "1234.50",
                    "product_name": "B-新增商品第一步3",
                    "rid": "8194832760",
                    "s_color": "白色",
                    "s_model": "大",
                    "s_weight": "2.50",
                    "sale_price": "2345.00",
                    "stock_count": 5
                },
                {
                    "commission_price": 120.98,
                    "commission_rate": 3.5,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180529/925ebbac8f1c78a.jpg",
                    "mode": "小 白色",
                    "price": "3456.70",
                    "product_name": "B-新增商品第一步3",
                    "rid": "8730816945",
                    "s_color": "蓝色",
                    "s_model": "小",
                    "s_weight": "2.50",
                    "sale_price": "4567.00",
                    "stock_count": 25
                }
            ],
            "modes": [
                {
                    "name": "大",
                    "valid": true
                },
                {
                    "name": "小",
                    "valid": true
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
            "message": "No result matched."
        },
        "success": false
    }


商品SKU列表
----------------
获取商品的SKU列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/many_skus``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

================  ========  =========  ========  ====================================
名称              类型      是否必须     默认值     描述说明
================  ========  =========  ========  ====================================
rid                String    必须                  商品Id, 逗号隔开，可以批量获取
store_rid          String    可选                  店铺编号
commission_data    Number    可选         0        是否获取分销数据 0=不获取, 1=获取
================  ========  =========  ========  ====================================

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
                    "commission_price": 18.52,
                    "commission_rate": 1.5,
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
                    "commission_price": 18.52,
                    "commission_rate": 1.5,
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


获取商品基本信息
----------------------
获取商品发布第一步数据

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/<rid>/publish_one``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必须                    商品编号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "assets": [
                {
                    "created_at": 1527587113,
                    "filename": "m.jpg",
                    "filepath": "180529/e5a6b51ad55208d.jpg",
                    "id": 5,
                    "view_url": "http://127.0.0.1:9000/_uploads/photos/180529/e5a6b51ad55208d.jpg"
                }
            ],
            "category_id": 333,
            "content": "图文详情",
            "cover": "http://127.0.0.1:9000/_uploads/photos/180529/4158809a4303eab.jpg",
            "cover_id": 2,
            "custom_details": "可以刻名字,生辰八字",
            "features": "商品推荐语",
            "id_code": "10086",
            "is_custom_made": true,
            "is_custom_service": true,
            "is_distributed": false,
            "is_free_postage": false,
            "is_made_holiday": false,
            "keywords": "苹果,手机,电脑",
            "labels": [
                {
                    "id": 2,
                    "name": "环保有机",
                    "sort_order": 1
                },
                {
                    "id": 3,
                    "name": "手工制作",
                    "sort_order": 1
                },
                {
                    "id": 4,
                    "name": "原创礼品",
                    "sort_order": 1
                }
            ],
            "made_cycle": 5,
            "material_id": 1,
            "name": "商品名",
            "published_at": 0,
            "rid": "8520961834",
            "second_category_id": 17,
            "status": 0,
            "sticked": false,
            "top_category_id": 1,
            "stock_count": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


发布商品第一步
------------------
发布商品基本信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/publish_one``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
sid                    String      可选                     店铺编号
category_id            Number      必须                     分类ID
name                   String      必须                     商品名称
id_code                String      可选                     商品编码
asset_ids              Array       必须                     商品图片
material_id            Number      必须                     材质
features               String      必须                     宣传语或优势亮点
content                String      必须                     图文详情
keywords               Array       可选                     商品关键词
is_custom_service      Bool        可选                     是否定制化服务
custom_details         String      可选                     定制详情
labels                 Array       必填                     商品标签
is_custom_made         Bool        必填                     是否接单定制
made_cycle             Number      可选                     制作周期
is_made_holiday        Bool        可选                     制作周期是否包含节假日
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "category_id": 9,
        "name": "商品名",
        "id_code": "10086",
        "asset_ids": [7,8,9],
        "material_id": 1,
        "features": "商品推荐语",
        "content": "图文详情",
        "keywords": ["苹果", "手机", "电脑"],
        "is_custom_service": true,
        "custom_details": "可以刻名字,生辰八字",
        "labels": [2,3,4],
        "is_custom_made": true,
        "made_cycle": 5,
        "is_made_holiday": false
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "assets": [
                {
                    "created_at": 1527587113,
                    "filename": "m.jpg",
                    "filepath": "180529/e5a6b51ad55208d.jpg",
                    "id": 5,
                    "view_url": "http://127.0.0.1:9000/_uploads/photos/180529/e5a6b51ad55208d.jpg"
                }
            ],
            "category_id": 333,
            "content": "图文详情",
            "cover": "http://127.0.0.1:9000/_uploads/photos/180529/4158809a4303eab.jpg",
            "cover_id": 2,
            "custom_details": "可以刻名字,生辰八字",
            "features": "商品推荐语",
            "id_code": "10086",
            "is_custom_made": true,
            "is_custom_service": true,
            "is_distributed": false,
            "is_free_postage": false,
            "is_made_holiday": false,
            "keywords": "苹果,手机,电脑",
            "labels": [
                {
                    "id": 2,
                    "name": "环保有机",
                    "sort_order": 1
                },
                {
                    "id": 3,
                    "name": "手工制作",
                    "sort_order": 1
                },
                {
                    "id": 4,
                    "name": "原创礼品",
                    "sort_order": 1
                }
            ],
            "made_cycle": 5,
            "material_id": 1,
            "name": "商品名",
            "published_at": 0,
            "rid": "8520961834",
            "second_category_id": 17,
            "status": 0,
            "sticked": false,
            "top_category_id": 1,
            "stock_count": null
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


更新商品第一步
------------------
更新商品基本信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/publish_one?rid=8984507632``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

** 除同上新增参数要求, 增加查询字符串rid **

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                     String     必须                     商品编号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "assets": [
                {
                    "created_at": 1527587113,
                    "filename": "m.jpg",
                    "filepath": "180529/e5a6b51ad55208d.jpg",
                    "id": 5,
                    "view_url": "http://127.0.0.1:9000/_uploads/photos/180529/e5a6b51ad55208d.jpg"
                }
            ],
            "category_id": 333,
            "content": "新图文详情",
            "cover": "http://127.0.0.1:9000/_uploads/photos/180529/4158809a4303eab.jpg",
            "cover_id": 2,
            "custom_details": "可以刻名字,生辰八字",
            "features": "新商品推荐语",
            "id_code": "10086",
            "is_custom_made": true,
            "is_custom_service": true,
            "is_distributed": false,
            "is_free_postage": false,
            "is_made_holiday": false,
            "keywords": "苹果,手机,电脑",
            "labels": [
                {
                    "id": 2,
                    "name": "环保有机",
                    "sort_order": 1
                },
                {
                    "id": 3,
                    "name": "手工制作",
                    "sort_order": 1
                },
                {
                    "id": 4,
                    "name": "原创礼品",
                    "sort_order": 1
                }
            ],
            "made_cycle": 5,
            "material_id": 1,
            "name": "新商品名",
            "published_at": 0,
            "rid": "8520961834",
            "second_category_id": 17,
            "status": 0,
            "sticked": false,
            "top_category_id": 1,
            "stock_count": null
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


获取商品详细信息
----------------------
获取商品发布第二步数据

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/<rid>/publish_two``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必须                    商品编号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "fid": 2,
            "is_distributed": true,
            "product_return_policy": "退换货规则, 不能小于20个字符.",
            "return_policy_id": 1,
            "skus": [
                {
                    "commission_price": 23.33,
                    "commission_rate": 1.89,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180529/e5a6b51ad55208d.jpg",
                    "cover_id": 1,
                    "id_code": null,
                    "mode": "大 白色1",
                    "price": 1234.5,
                    "product_name": "B-修改商品第一步1",
                    "rid": "8624130758",
                    "s_color": "白色1",
                    "s_model": "大",
                    "s_weight": 2.5,
                    "sale_price": 2345,
                    "stock_count": 5
                },
                {
                    "commission_price": 77.66,
                    "commission_rate": 3.31,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180529/4158809a4303eab.jpg",
                    "cover_id": 2,
                    "id_code": null,
                    "mode": "中 黑色1",
                    "price": 2345.6,
                    "product_name": "B-修改商品第一步1",
                    "rid": "8165279083",
                    "s_color": "黑色1",
                    "s_model": "中",
                    "s_weight": 2.5,
                    "sale_price": 3456,
                    "stock_count": 15
                },
                {
                    "commission_price": 88.66,
                    "commission_rate": 2.57,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180529/925ebbac8f1c78a.jpg",
                    "cover_id": 3,
                    "id_code": null,
                    "mode": "小 蓝色1",
                    "price": 3456.7,
                    "product_name": "B-修改商品第一步1",
                    "rid": "8823067419",
                    "s_color": "蓝色1",
                    "s_model": "小",
                    "s_weight": 2.5,
                    "sale_price": 4567,
                    "stock_count": 25
                },
                {
                    "commission_price": 55.55,
                    "commission_rate": 1.61,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180529/925ebbac8f1c78a.jpg",
                    "cover_id": 4,
                    "id_code": null,
                    "mode": "小 蓝色1",
                    "price": 3456.7,
                    "product_name": "B-修改商品第一步1",
                    "rid": "8056431928",
                    "s_color": "蓝色1",
                    "s_model": "小",
                    "s_weight": 2.5,
                    "sale_price": 4567,
                    "stock_count": 25
                }
            ],
            "stock_count": 70
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


发布或更新商品第二步: 放入仓库
---------------------------------
发布或更新商品详细信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/publish_two/warehouse``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
sid                    String      可选                     店铺编号
rid                    String      必须                     商品编号
fid                    String      必须                     运费模板编号
return_policy_id       Integer     必须                     退换货编号
product_return_policy  String      必须                     退换货规则
is_distributed         Bool        必须                     商品是否分销
commission_rate        Number      可选                     佣金比率
skus                   Array       必须                     商品sku信息

sku参数信息
rid                    String      可选                     sku编号,新增时为null
cover_id               Number      可选                     封面图ID
s_color                String      可选                     颜色
s_model                String      可选                     型号
s_weight               Number      必需                     重量
stock_quantity         Number      必须                     数量
price                  Number      必需                     销售价
sale_price             Number      可选                     促销价
commission_rate        Number      可选                     佣金比率
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "sid": "1234567891",
        "rid" : "8390824751",
        "fid": "ft156513594",
        "return_policy_id": 1,
        "product_return_policy": "退换货规则",
        "status": 0,
        "is_distributed": true,
        "commission_rate": 2.5,
        "skus": [
            {
                "rid": null,
                "cover_id":  6,
                "s_color": "黑色",
                "s_model": "中",
                "price": 2345.6,
                "sale_price": 2256,
                "s_weight": 2.5,
                "stock_quantity": 15,
                "commission_rate": 2.5
            },
            {
                "rid": null,
                "cover_id":  7,
                "s_color": "蓝色",
                "s_model": "小",
                "price": 3456.7,
                "sale_price": 3367,
                "s_weight": 2.5,
                "stock_quantity": 25,
                "commission_rate": 3.5
            }
        ]
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "fid": 2,
            "is_distributed": true,
            "product_return_policy": "退换货规则, 不能小于20个字符.",
            "return_policy_id": 1,
            "skus": [
                {
                    "commission_rate": 2.34,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180529/925ebbac8f1c78a.jpg",
                    "id_code": null,
                    "mode": "小 黑色",
                    "price": 2345.6,
                    "product_name": "商品名"
                    "rid": "8823067419",
                    "s_color": "黑色",
                    "s_model": "小",
                    "s_weight": 2.5,
                    "sale_price": 2256,
                    "stock_count": 15
                },
                {
                    "commission_rate": 5.55,
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180529/925ebbac8f1c78a.jpg",
                    "id_code": null,
                    "mode": "小 蓝色",
                    "price": 3456.7,
                    "product_name": "商品名",
                    "rid": "8056431928",
                    "s_color": "蓝色",
                    "s_model": "小",
                    "s_weight": 2.5,
                    "sale_price": 3367,
                    "stock_count": 25
                }
            ],
            "stock_count": 70
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


发布或更新商品第二步: 发布
------------------------------
发布或更新商品详细信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/publish_two``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

** 同上发布或更新商品第二步, 放入仓库 **

返回示例
~~~~~~~~~~~~~~~

** 同上发布或更新商品第二步, 放入仓库 **


拷贝商品
------------------
拷贝商品的全部信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/copy``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
sid                    String      可选                     店铺编号
rid                    String      必须                     商品编号
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "assets": [
                {
                    "created_at": 1530933787,
                    "filename": "z.jpg",
                    "filepath": "180707/77409c8ab9b0abf.jpg",
                    "id": 2,
                    "type": 1,
                    "view_url": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg"
                }
            ],
            "category_id": 628,
            "commission_price": 117.84,
            "commission_rate": 3.5,
            "content": "商品图文详情",
            "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
            "cover_id": 2,
            "custom_details": "可以刻名字,生辰八字",
            "features": "商品特点",
            "fid": "11111",
            "id_code": "",
            "is_custom_made": true,
            "is_custom_service": true,
            "is_distributed": true,
            "is_free_postage": false,
            "is_made_holiday": false,
            "is_proprietary": true,
            "is_sold_out": false,
            "keywords": "苹果,明星,博客,象棋",
            "labels": [
                {
                    "id": 1,
                    "name": "独家贩售",
                    "sort_order": 109
                },
                {
                    "id": 2,
                    "name": "环保有机",
                    "sort_order": 108
                },
                {
                    "id": 3,
                    "name": "手工制作",
                    "sort_order": 107
                },
                {
                    "id": 4,
                    "name": "机械制作",
                    "sort_order": 107
                }
            ],
            "like_count": 0,
            "made_cycle": 5,
            "material_id": 1,
            "max_price": 3456.7,
            "max_sale_price": 3367,
            "min_price": 1234.5,
            "min_sale_price": 1145,
            "modes": [
                "大 白色",
                "中 黑色",
                "小 蓝色"
            ],
            "name": "商品2",
            "product_return_policy": "退换货规则",
            "published_at": 1530949344,
            "real_price": 3456.7,
            "real_sale_price": 3367,
            "return_policy_id": 1,
            "rid": "8527906841",
            "second_category_id": 628,
            "skus": [
                {
                    "commission_price": 17.18,
                    "commission_rate": 1.5,
                    "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                    "cover_id": null,
                    "id_code": null,
                    "mode": "大 白色",
                    "price": 1234.5,
                    "product_name": "商品2",
                    "rid": "8085694327",
                    "s_color": "白色",
                    "s_model": "大",
                    "s_weight": 2.5,
                    "sale_price": 1145,
                    "stock_count": 5,
                    "stock_quantity": 5
                },
                {
                    "commission_price": 56.4,
                    "commission_rate": 2.5,
                    "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                    "cover_id": null,
                    "id_code": null,
                    "mode": "中 黑色",
                    "price": 2345.6,
                    "product_name": "商品2",
                    "rid": "8568012439",
                    "s_color": "黑色",
                    "s_model": "中",
                    "s_weight": 2.5,
                    "sale_price": 2256,
                    "stock_count": 15,
                    "stock_quantity": 15
                },
                {
                    "commission_price": 117.84,
                    "commission_rate": 3.5,
                    "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                    "cover_id": null,
                    "id_code": null,
                    "mode": "小 蓝色",
                    "price": 3456.7,
                    "product_name": "商品2",
                    "rid": "8493850612",
                    "s_color": "蓝色",
                    "s_model": "小",
                    "s_weight": 2.5,
                    "sale_price": 3367,
                    "stock_count": 25,
                    "stock_quantity": 25
                }
            ],
            "status": 1,
            "sticked": false,
            "stock_count": 45,
            "top_category_id": 600,
            "total_stock": 45
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
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

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String      必需                     商品Id, 逗号隔开，可以批量删除
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
            "code": 403,
            "message": "分销商品，不能删除!"
        },
        "success": false
    }



商品状态统计
----------------
统计店铺授权商品不同状态的数量

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/statistical``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
sid                     String      可选                   店铺编号
start_date              String      可选                   发布日期的开始日期
end_date                String      可选                   发布日期的结束日期
cid                     Number      可选                   分类Id
is_distributed          Number      可选                   商品类别 0: 全部; 1：自营商品；2：分销商品
qk                      String      可选                   搜索关键字
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": [
            {
                "count": 9,
                "name": "仓库中",
                "status": 0
            },
            {
                "count": 17,
                "name": "出售中",
                "status": 1
            },
            {
                "count": 0,
                "name": "已下架",
                "status": 2
            },
            {
                "count": 5,
                "name": "已售罄",
                "status": 3
            }
        ],
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


分销设置
----------------
店铺自营且未分销的商品设置分销佣金

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/<rid>/distribute_setting``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String       必须                   商品编号
skus                   Array        必须                   商品sku信息

sku参数信息
rid                    String      必须                    商品sku编号
commission_rate        Number      必须                    佣金比率
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
     "skus": [
        {"sku": "118300547193", "commission_rate": 5.50},
        {"sku": "118300602895", "commission_rate": 13.60},
        {"sku": "118300401483", "commission_rate": 20},
      ]
    }

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


商品上架
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/status/up``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String       必须                   商品Id, 逗号隔开，可以批量修改
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


商品下架
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/status/down``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
rid                    String       必须                   商品Id, 逗号隔开，可以批量修改
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


用户商品记录
----------------
获取用户操作商品的相关记录

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``注意: 并非独立接口只针对需要获取用户操作商品相关记录``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

==============  ========  =========  ========  ====================================
名称             类型      是否必须    默认值     描述说明
==============  ========  =========  ========  ====================================
user_record      Bool     可选        False     是否获取用户操作商品记录
==============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: product_list.js
    :language: javascript


商品风格列表
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/products/styles``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "styles": [
                {
                    "id": 1,
                    "name": "可爱"
                },
                {
                    "id": 2,
                    "name": "简约"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


