=============
栏目商品模块
=============

栏目商品
----------------------
获取对应栏目中的商品

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/products``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
page                 Number      可选         1          当前页码
per_page             Number      可选         10         每页数量
code                 String      必须                    栏目简码
view_more            Number      可选         0          是否查看更多: 0=否, 1=是
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
sort_type            Number      可选         0          排序: 0=不限, 1=综合排序, 2=价格由低至高, 3=价格由高至低
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
sort_newest          Number      可选         0          是否按最新排序: 0=否, 1=是
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 6,
            "next": false,
            "prev": false,
            "products": [
                {
                    "商品基本信息..."
                }
            ],
            "title": "标题名称"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


精选--人气推荐
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/handpick_recommend``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
page                 Number      可选         1          当前页码
per_page             Number      可选         10         每页数量
view_more            Number      可选         0          是否查看更多: 0=否, 1=是
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
sort_type            Number      可选         0          排序: 0=不限, 1=综合排序, 2=价格由低至高, 3=价格由高至低
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
sort_newest          Number      可选         0          是否按最新排序: 0=否, 1=是
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上获取栏目商品 **


人气推荐数量
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/handpick_recommend/count``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 21
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


精选--乐喜优选
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/handpick_optimization``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
page                 Number      可选         1          当前页码
per_page             Number      可选         10         每页数量
view_more            Number      可选         0          是否查看更多: 0=否, 1=是
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
sort_type            Number      可选         0          排序: 0=不限, 1=综合排序, 2=价格由低至高, 3=价格由高至低
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
sort_newest          Number      可选         0          是否按最新排序: 0=否, 1=是
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上获取栏目商品 **


乐喜优选数量
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/handpick_optimization/count``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 21
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


探索--新品速递
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/handpick_new_express``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
page                 Number      可选         1          当前页码
per_page             Number      可选         10         每页数量
view_more            Number      可选         0          是否查看更多: 0=否, 1=是
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
sort_type            Number      可选         0          排序: 0=不限, 1=综合排序, 2=价格由低至高, 3=价格由高至低
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
sort_newest          Number      可选         0          是否按最新排序: 0=否, 1=是
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上获取栏目商品 **


新品速递数量
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/handpick_new_express/count``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 21
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


探索--编辑推荐
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/explore_recommend``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
page                 Number      可选         1          当前页码
per_page             Number      可选         10         每页数量
view_more            Number      可选         0          是否查看更多: 0=否, 1=是
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
sort_type            Number      可选         0          排序: 0=不限, 1=综合排序, 2=价格由低至高, 3=价格由高至低
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
sort_newest          Number      可选         0          是否按最新排序: 0=否, 1=是
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上获取栏目商品 **


编辑推荐数量
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/explore_recommend/count``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 21
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


探索--优质新品
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/explore_new``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
page                 Number      可选         1          当前页码
per_page             Number      可选         10         每页数量
view_more            Number      可选         0          是否查看更多: 0=否, 1=是
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
sort_type            Number      可选         0          排序: 0=不限, 1=综合排序, 2=价格由低至高, 3=价格由高至低
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
sort_newest          Number      可选         0          是否按最新排序: 0=否, 1=是
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上获取栏目商品 **


优质新品数量
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/explore_new/count``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 21
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


集合基本信息
----------------------
只返回集合的基本信息，不包含任何集合中商品信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/collections/basic``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "collections": [
                {
                    "cover": "https://s3.lexivip.com/20181025/1803FrUcuFryIETqw24TuP1oNyIS714Y.png",
                    "id": 7,
                    "name": "女生日常",
                    "sub_name": "看你的千面色彩"
                },
                {
                    "cover": "https://s3.lexivip.com/20181025/5603FtZVhDCnTCEUwupgmH3HjzuX3cc4.jpg",
                    "id": 5,
                    "name": "男生潮品",
                    "sub_name": "懂你的潮品好物"
                }
            ],
            "count": 2,
            "next": false,
            "prev": false,
            "title": "集合"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

探索--集合
----------------------
集合查看全部，包含集合基本信息和其中四个商品的基本信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/collections``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "collections": [
                {
                    "count": 8,
                    "cover": "https://s3.lexivip.com/20181025/1803FrUcuFryIETqw24TuP1oNyIS714Y.png",
                    "id": 24,
                    "name": "女生日常",
                    "products": [
                        {
                            "cover": "https://s3.lexivip.com/20180925/5755Fusb0HJurLVQtqe2ylItLRM3VuUv.jpg",
                            "rid": "8876905123",
                            "status": 1
                        },
                        {
                            "cover": "https://s3.lexivip.com/lxServer/1532604236757.JPG",
                            "rid": "8059314678",
                            "status": 1
                        },
                        {
                            "cover": "https://s3.lexivip.com/lxServer/1533623666074.jpg",
                            "rid": "8729451036",
                            "status": 1
                        },
                        {
                            "cover": "https://s3.lexivip.com/20181003/5302Fh2qNBwuC96CFd-I9M2J3Jt9lJB-.jpg",
                            "rid": "8745209136",
                            "status": 1
                        }
                    ],
                    "sub_name": "看你的千面色彩"
                }
            ],
            "count": 2,
            "next": false,
            "prev": false,
            "title": "集合"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


集合详情
----------------------
集合的详情和集合中所有商品的信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/collections/detail``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page              Number      可选         1          当前页码
per_page          Number      可选         10         每页数量
id                Number      必须                    集合编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data":
            "count": 8,
            "cover": "http://127.0.0.1:9000/_uploads/photos/180707/61b85f8fe19d59f.jpg",
            "id": 7,
            "name": "主题标题",
            "products": [
                {
                    "cover": "https://s3.lexivip.com/lxServer/1535384922675.jpg",
                    "is_free_postage": false,
                    "like_count": 0,
                    "min_price": 180,
                    "min_sale_price": 0,
                    "name": "[香港原創] CLASSY 意大利皮革錶帶",
                    "rid": "8910352476",
                    "status": 1,
                    "store_rid": "91758940"
                }
            ],
            "sub_name": "主题标题二"
            "next": true,
            "prev": false,
            "title": "校园活动专场"
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


探索--特惠好设计
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/preferential_design``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
page                 Number      可选         1          当前页码
per_page             Number      可选         10         每页数量
view_more            Number      可选         0          是否查看更多: 0=否, 1=是
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
sort_type            Number      可选         0          排序: 0=不限, 1=综合排序, 2=价格由低至高, 3=价格由高至低
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
sort_newest          Number      可选         0          是否按最新排序: 0=否, 1=是
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上获取栏目商品 **


特惠好设计数量
----------------------
按筛选条件统计出商品数量

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/preferential_design/count``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
cids                 String      可选                    分类Id, 多个用, 分割
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 1
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


探索--百元好物
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/affordable_goods``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
view_more        Number      可选         0          是否查看更多: 0=否, 1=是
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上获取栏目商品 **

精选--今日推荐
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/daily_recommends``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
client_type      Number      可选         1          客户端类型 1=小程序 2=app
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "daily_recommends": [
                {
                    "cover": "封面图",
                    "cover_id": 2,
                    "id": 2,
                    "mask_color": "#ffffff",
                    "name": "主题002",
                    "products": [
                        {
                            "主题商品基本信息"
                        },
                        {
                            "主题商品基本信息"
                        }
                    ],
                    "recommend_description": "推荐描述内容",
                    "recommend_id": "今日推荐编号",
                    "recommend_label": "推荐标签",
                    "recommend_title": "推荐标题",
                    "rids": [
                        "8265498731",
                        "8698317405"
                    ],
                    "sort_order": 12,
                    "sub_name": "",
                    "target_type": "推荐类型: 1=生活志文章, 2=种草清单 3=主题 4=商品 5=小程序链接"
                },
                {
                    "recommend_description": "推荐描述",
                    "recommend_id": 3,
                    "recommend_label": "推荐标签",
                    "recommend_title": "推荐标题",
                    "target_type": "推荐类型: 1=生活志文章, 2=种草清单 3=主题 4=商品 5=小程序链接",
                    "audit_status": 3,
                    "content": "正文",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/912fc59a8199d04.jpg",
                    "cover_id": 4,
                    "created_at": 1533384818,
                    "deal_content": [
                        "正文处理之后内容"
                    ],
                    "description": "摘要...",
                    "published_at": 1533384903,
                    "refuse_reason": "拒绝原因",
                    "rid": 11,
                    "status": 1,
                    "store_name": "店铺名",
                    "title": "标题",
                    "type": 2,
                    "user_avator": "用户头像",
                    "user_name": "用户名"
                }
            ],
            "next": false,
            "prev": false,
            "title": "今日推荐"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


栏目对应的浏览记录
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/browse_records``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
code             String      必须                    栏目编码: 编辑推荐=e_recommend, 优质精品=e_new, 特惠好设计=preferential_design, 百元好物=affordable_goods
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 15,
            "next": true,
            "prev": false,
            "users": [
                {
                    "about_me": "我是个好人",  // 关于我
                    "area": "鱼泉乡",  // 区域
                    "area_id": 10000,
                    "avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png", // 头像url
                    "avatar_id": 0,  // 头像ID
                    "city": "北京",
                    "city_id": 1,
                    "country": "",
                    "country_id": null,
                    "created_at": 1531125527,  // 创建时间
                    "date": "1992-12-26",  // 生日
                    "description": null,
                    "email": "13001179400",
                    "gender": 0,  // 性别 0默认为女
                    "last_seen": 1531842343,
                    "mail": "asd@163.com",  // 邮箱
                    "master_uid": 2,
                    "mobile": null,
                    "province": "北京",
                    "province_id": 1,
                    "uid": "19138405762",
                    "username": "超人啊"  // 用户名
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

