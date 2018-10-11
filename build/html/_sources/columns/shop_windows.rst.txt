=============
橱窗模块
=============

推荐的橱窗
----------------------
获取官方推荐的橱窗---发现生活美学

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/recommend``
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
            "count": 8,
            "next": false,
            "prev": false,
            "shop_windows": [
                {
                    "comment_count": "评论数",
                    "description": "橱窗详情",
                    "is_follow": "是否关注过发布橱窗的用户",
                    "is_like": "是否喜欢过该橱窗",
                    "is_official": "是否官方橱窗",
                    "keywords": [
                        "橱窗关键词一",
                        "橱窗关键词二"
                    ],
                    "like_count": "橱窗喜欢数",
                    "product_count": 5,
                    "product_covers": [
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                        "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg"
                    ],
                    "products": [
                        {
                            "category_id": 18,
                            "commission_price": 846.89,
                            "commission_rate": 24.5,
                            "cover": "http://127.0.0.1:9000/_uploads/photos/180710/fbba50f0da91a7a.jpg",
                            "cover_id": 10,
                            "custom_details": "可以刻名字,生辰八字",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "features": "获得更多的成长值，加速商铺成长获取更多特权：发布三星级及以上的产品可以获得与星级数量等额的成长值，每日上限为20点；",
                            "have_distributed": true,
                            "id_code": "",
                            "is_custom_made": true,
                            "is_custom_service": true,
                            "is_distributed": true,
                            "is_free_postage": false,
                            "is_made_holiday": false,
                            "is_proprietary": false,
                            "is_sold_out": false,
                            "like_count": 1,
                            "made_cycle": 5,
                            "material_id": 4,
                            "material_name": "毛线",
                            "max_price": 5456.7,
                            "max_sale_price": 0,
                            "min_price": 3234.5,
                            "min_sale_price": 2245,
                            "modes": [
                                "3*1 白色",
                                "3*2 绿色",
                                "3*3 紫色"
                            ],
                            "name": "商品名",
                            "published_at": 1531213666,
                            "real_price": 5456.7,
                            "real_sale_price": 0,
                            "rid": "8479032186",
                            "second_category_id": 17,
                            "status": 1,
                            "sticked": false,
                            "store_name": "店铺名",
                            "store_rid": "店铺编号",
                            "style_id": "商品风格编号",
                            "style_name": "商品风格名",
                            "top_category_id": 1,
                            "total_stock": 45
                        },
                        {
                            同上商品基本信息...
                        },
                        {
                            同上商品基本信息...
                        }
                    ],
                    "rid": "橱窗编号",
                    "title": "橱窗标题",
                    "uid": "12795683104",
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "用户名"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


关注人的橱窗
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/follow``
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

** 同上推荐的橱窗返回示例 **


橱窗的信息
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/detail``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    橱窗编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "comment_count": 9, // 评论数
            "comments": [       // 橱窗最新三条评论
                {
                    "comment_id": 15,
                    "content": "评论内容！！！",
                    "created_at": 1539240015,
                    "is_praise": false,
                    "pid": 0,
                    "praise_count": 0,
                    "sub_comment_count": 0,    // 子评论数
                    "sub_comments": [],        // 子评论内容, 当子评论数大于2时取第一个子评论名
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "用户名(作者)"
                },
                {
                    "comment_id": 2,
                    "content": "评论内容！！！",
                    "created_at": 1533086656,
                    "is_praise": false,
                    "pid": 0,
                    "praise_count": 0,
                    "sub_comment_count": 4,
                    "sub_comments": [
                        {
                            "comment_id": 10,
                            "content": "评论内容！！！",
                            "created_at": 1533095621,
                            "is_praise": false,
                            "pid": 2,
                            "praise_count": 0,
                            "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                            "user_name": "用户名(作者)"
                        },
                        {
                            "comment_id": 9,
                            "content": "评论内容！！！",
                            "created_at": 1533095618,
                            "is_praise": false,
                            "pid": 2,
                            "praise_count": 0,
                            "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                            "user_name": "用户名(作者)"
                        }
                    ],
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "15210062187"
                },
                {
                    "comment_id": 1,
                    "content": "你说的真好",
                    "created_at": 1533086565,
                    "is_praise": false,
                    "pid": 0,
                    "praise_count": 1,
                    "sub_comment_count": 0,
                    "sub_comments": [],
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "用户名(作者)"
                }
            ],
            "current_page": 1,
            "description": "2018腾讯世界人工智能围棋大赛决赛将在中国棋院落下帷幕。",
            "is_follow": "是否关注过发布橱窗的用户",
            "is_like": "是否喜欢过该橱窗",
            "is_official": "是否官方橱窗",
            "keywords": [
                "棋牌",
                "人工智能"
            ],
            "like_count": 2,
            "product_count": 5,
            "product_covers": [
                "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg"
            ],
            "products": [
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                }
            ],
            "remain_count": 0,      // 剩余的评论数
            "rid": 1,
            "title": "橱窗标题",
            "total_count": 3,       // 总评论数
            "uid": "12795683104",
            "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
            "user_name": "用户名"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


发布橱窗
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
title            String      必须                    标题
description      String      必须                    简介
product_items    Array       必须                    橱窗商品
keywords         Array       可选                    关键词
===============  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "title": "橱窗标题",
        "description": "橱窗描述内容",
        "product_items": [
            {
                "rid": "8037295684",
                "cover_id": 115173
            },
            {
                "rid": "8758496102",
                "cover_id": 115181
            },
            {
                "rid": "8160827453",
                "cover_id": 115185
            }
        ],
        "keywords": ["女孩", "原创饰品", "七夕"]
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "comment_count": 9,
            "description": "橱窗描述",
            "is_follow": "是否关注过发布橱窗的用户",
            "is_like": "是否喜欢过该橱窗",
            "is_official": "false: 是否官方橱窗",
            "keywords": [
                "女孩",
                "原创饰品",
                "七夕"
            ],
            "like_count": 2,
            "product_count": 5,
            "product_covers": [
                "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg"
            ],
            "products": [
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                }
            ],
            "rid": 1,
            "title": "橱窗标题",
            "uid": "12795683104",
            "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
            "user_name": "用户名"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


更新橱窗
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    橱窗编号
title            String      必须                    标题
description      String      必须                    简介
rids             Array       必须                    橱窗商品
keywords         Array       可选                    关键词
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上发布橱窗返回示例 **


删除橱窗
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    橱窗编号
===============  ==========  =========  ==========  =============================

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


用户喜欢橱窗列表
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/user_likes``
* API接口请求方法：``GET``
* API接口用户授权：``token``

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
            "count": 8,
            "next": false,
            "prev": false,
            "shop_windows": [
                {
                    "comment_count": "评论数",
                    "description": "橱窗详情",
                    "is_follow": "是否关注过发布橱窗的用户",
                    "is_like": "是否喜欢过该橱窗",
                    "is_official": "是否官方橱窗",
                    "keywords": [
                        "橱窗关键词一",
                        "橱窗关键词二"
                    ],
                    "like_count": "橱窗喜欢数",
                    "product_count": 5,
                    "product_covers": [
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                        "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg"
                    ],
                    "products": [
                        {
                            "category_id": 18,
                            "commission_price": 846.89,
                            "commission_rate": 24.5,
                            "cover": "http://127.0.0.1:9000/_uploads/photos/180710/fbba50f0da91a7a.jpg",
                            "cover_id": 10,
                            "custom_details": "可以刻名字,生辰八字",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "features": "获得更多的成长值，加速商铺成长获取更多特权：发布三星级及以上的产品可以获得与星级数量等额的成长值，每日上限为20点；",
                            "have_distributed": true,
                            "id_code": "",
                            "is_custom_made": true,
                            "is_custom_service": true,
                            "is_distributed": true,
                            "is_free_postage": false,
                            "is_made_holiday": false,
                            "is_proprietary": false,
                            "is_sold_out": false,
                            "like_count": 1,
                            "made_cycle": 5,
                            "material_id": 4,
                            "material_name": "毛线",
                            "max_price": 5456.7,
                            "max_sale_price": 0,
                            "min_price": 3234.5,
                            "min_sale_price": 2245,
                            "modes": [
                                "3*1 白色",
                                "3*2 绿色",
                                "3*3 紫色"
                            ],
                            "name": "商品名",
                            "published_at": 1531213666,
                            "real_price": 5456.7,
                            "real_sale_price": 0,
                            "rid": "8479032186",
                            "second_category_id": 17,
                            "status": 1,
                            "sticked": false,
                            "store_name": "店铺名",
                            "store_rid": "店铺编号",
                            "style_id": "商品风格编号",
                            "style_name": "商品风格名",
                            "top_category_id": 1,
                            "total_stock": 45
                        },
                        {
                            同上商品基本信息...
                        },
                        {
                            同上商品基本信息...
                        }
                    ],
                    "rid": "橱窗编号",
                    "title": "橱窗标题",
                    "uid": "12795683104",
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "用户名"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


其他用户喜欢橱窗列表
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/other_user_likes``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
uid              String      必须                    用户编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 8,
            "next": false,
            "prev": false,
            "shop_windows": [
                {
                    "comment_count": "评论数",
                    "description": "橱窗详情",
                    "is_follow": "是否关注过发布橱窗的用户",
                    "is_like": "是否喜欢过该橱窗",
                    "is_official": "是否官方橱窗",
                    "keywords": [
                        "橱窗关键词一",
                        "橱窗关键词二"
                    ],
                    "like_count": "橱窗喜欢数",
                    "product_count": 5,
                    "product_covers": [
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                        "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg"
                    ],
                    "products": [
                        {
                            "category_id": 18,
                            "commission_price": 846.89,
                            "commission_rate": 24.5,
                            "cover": "http://127.0.0.1:9000/_uploads/photos/180710/fbba50f0da91a7a.jpg",
                            "cover_id": 10,
                            "custom_details": "可以刻名字,生辰八字",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "features": "获得更多的成长值，加速商铺成长获取更多特权：发布三星级及以上的产品可以获得与星级数量等额的成长值，每日上限为20点；",
                            "have_distributed": true,
                            "id_code": "",
                            "is_custom_made": true,
                            "is_custom_service": true,
                            "is_distributed": true,
                            "is_free_postage": false,
                            "is_made_holiday": false,
                            "is_proprietary": false,
                            "is_sold_out": false,
                            "like_count": 1,
                            "made_cycle": 5,
                            "material_id": 4,
                            "material_name": "毛线",
                            "max_price": 5456.7,
                            "max_sale_price": 0,
                            "min_price": 3234.5,
                            "min_sale_price": 2245,
                            "modes": [
                                "3*1 白色",
                                "3*2 绿色",
                                "3*3 紫色"
                            ],
                            "name": "商品名",
                            "published_at": 1531213666,
                            "real_price": 5456.7,
                            "real_sale_price": 0,
                            "rid": "8479032186",
                            "second_category_id": 17,
                            "status": 1,
                            "sticked": false,
                            "store_name": "店铺名",
                            "store_rid": "店铺编号",
                            "style_id": "商品风格编号",
                            "style_name": "商品风格名",
                            "top_category_id": 1,
                            "total_stock": 45
                        },
                        {
                            同上商品基本信息...
                        },
                        {
                            同上商品基本信息...
                        }
                    ],
                    "rid": "橱窗编号",
                    "title": "橱窗标题",
                    "uid": "12795683104",
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "用户名"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


喜欢橱窗
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/user_likes``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    橱窗编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除喜欢橱窗
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/user_likes``
* API接口请求方法：``Delete``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    橱窗编号
===============  ==========  =========  ==========  =============================

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


评论橱窗
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/comments``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    橱窗编号
pid              Number      可选        0           上级评论编号
content          String      必须                    评论内容
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "comment_id": "评论编号",
            "content": "评论内容",
            "created_at": "评论时间",
            "is_praise": "是否点过赞: true=点过赞,false=未点过赞",
            "pid": "上级评论编号",
            "praise_count": "评论点赞数"
            "user_avatar": "评论用户头像",
            "user_name": "评论用户名"
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除橱窗评论
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/comments``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    橱窗编号
comment_id       Number      必须                    评论编号
===============  ==========  =========  ==========  =============================

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


对评论点赞
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/comments/praises``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
comment_id       Number      必须                    评论编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除评论点赞
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/comments/praises``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
comment_id       Number      必须                    评论编号
===============  ==========  =========  ==========  =============================

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


获取橱窗评论
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/comments``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
sort_type        Number      可选         0          排序方式： 0=默认， 1=按点赞数， 2=按回复数
rid              Number      必须                    橱窗编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "comments": [
                {
                    "comment_id": 1,
                    "content": "评论",
                    "created_at": 1533095600,
                    "is_praise": true,
                    "pid": 0,
                    "praise_count": 1,
                    "sub_comment_count": 4,
                    "sub_comments": [
                        {
                            "comment_id": 14,
                            "content": "评论内容",
                            "created_at": 1533557451,
                            "is_praise": false,
                            "pid": 1,
                            "praise_count": 0,
                            "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                            "user_name": "评论用户名"
                        },
                        {
                            "comment_id": 13,
                            "content": "订单！！！",
                            "created_at": 1533095638,
                            "is_praise": false,
                            "pid": 1,
                            "praise_count": 0,
                            "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                            "user_name": "商品棒棒棒(作者)"
                        }
                    ],
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "评论用户名"
                },
                {
                    "comment_id": 2,
                    "content": "评论",
                    "created_at": 1533095600,
                    "is_praise": false,
                    "pid": 0,
                    "praise_count": 0,
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "评论用户名"
                }
            ],
            "count": 2,
            "current_page": 1,      // 当前评论页数
            "next": false,
            "prev": false,
            "remain_count": 0       // 剩余评论个数(此处指一级评论)
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


获取评论的子评论
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/child_comments``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
sort_type        Number      可选         0          排序方式： 0=默认， 1=按点赞数， 2=按回复数
pid              Number      必须                    父级评论编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "comments": [
                {
                    "comment_id": 7,
                    "content": "评论",
                    "created_at": 1533095600,
                    "is_praise": false,
                    "pid": 2,
                    "praise_count": 0,
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "评论用户名"
                },
                {
                    "comment_id": 8,
                    "content": "评论",
                    "created_at": 1533095600,
                    "is_praise": false,
                    "pid": 2,
                    "praise_count": 0,
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "评论用户名"
                }
            ],
            "count": 4,
            "current_page": 1,
            "next": false,
            "prev": false,
            "remain_count": 2
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


猜你喜欢
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/guess_like``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
rid              Number      必须                    当前浏览的橱窗编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 4,
            "next": false,
            "prev": false,
            "products": [
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                },
                {
                    商品基本信息...
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


相似橱窗
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/similar``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
rid              Number      必须                    当前浏览的橱窗编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 8,
            "next": false,
            "prev": false,
            "shop_windows": [
                {
                    "comment_count": "评论数",
                    "description": "橱窗详情",
                    "is_follow": "是否关注过发布橱窗的用户",
                    "is_like": "是否喜欢过该橱窗",
                    "is_official": "是否官方橱窗",
                    "keywords": [
                        "橱窗关键词一",
                        "橱窗关键词二"
                    ],
                    "like_count": "橱窗喜欢数",
                    "product_count": 5,
                    "product_covers": [
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                        "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg"
                    ],
                    "products": [
                        {
                            "category_id": 18,
                            "commission_price": 846.89,
                            "commission_rate": 24.5,
                            "cover": "http://127.0.0.1:9000/_uploads/photos/180710/fbba50f0da91a7a.jpg",
                            "cover_id": 10,
                            "custom_details": "可以刻名字,生辰八字",
                            "delivery_country": "",
                            "delivery_country_id": null,
                            "features": "获得更多的成长值，加速商铺成长获取更多特权：发布三星级及以上的产品可以获得与星级数量等额的成长值，每日上限为20点；",
                            "have_distributed": true,
                            "id_code": "",
                            "is_custom_made": true,
                            "is_custom_service": true,
                            "is_distributed": true,
                            "is_free_postage": false,
                            "is_made_holiday": false,
                            "is_proprietary": false,
                            "is_sold_out": false,
                            "like_count": 1,
                            "made_cycle": 5,
                            "material_id": 4,
                            "material_name": "毛线",
                            "max_price": 5456.7,
                            "max_sale_price": 0,
                            "min_price": 3234.5,
                            "min_sale_price": 2245,
                            "modes": [
                                "3*1 白色",
                                "3*2 绿色",
                                "3*3 紫色"
                            ],
                            "name": "商品名",
                            "published_at": 1531213666,
                            "real_price": 5456.7,
                            "real_sale_price": 0,
                            "rid": "8479032186",
                            "second_category_id": 17,
                            "status": 1,
                            "sticked": false,
                            "store_name": "店铺名",
                            "store_rid": "店铺编号",
                            "style_id": "商品风格编号",
                            "style_name": "商品风格名",
                            "top_category_id": 1,
                            "total_stock": 45
                        },
                        {
                            同上商品基本信息...
                        },
                        {
                            同上商品基本信息...
                        }
                    ],
                    "rid": "橱窗编号",
                    "title": "橱窗标题",
                    "user_avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "用户名"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


新增标签
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/keywords``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
name           String    必填                  标签名
sort_order     Number    可选         1        排序
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "name": "女孩",
            "rid": 46,
            "sort_order": 1
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除标签
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/keywords``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid            Number    必填                  标签编号
=============  ========  =========  ========  ====================================

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


获取所有标签
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/all_keywords``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "keywords": [
                {
                    "name": "女孩",
                    "rid": 47,
                    "sort_order": 1
                },
                {
                    "name": "原创饰品",
                    "rid": 48,
                    "sort_order": 2
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


清空所有标签
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/all_keywords``
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


获取热门标签
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/hot_keywords``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "keywords": [
                {
                    "id": 1,
                    "name": "原创定制好物",
                    "numbers": "20000 参与人数",
                    "sort_order": 1,
                    "type": "1 标签类型： 0=无， 1=活动"
                },
                {
                    "id": 2,
                    "name": "女孩",
                    "numbers": 8888,
                    "sort_order": 2,
                    "type": 0
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


搜索标签
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/shop_windows/search/keywords``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
page            Number    可选        1         当前页码
per_page        Number    可选        10        每页数量
qk              String    必填                  搜索关键字
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "keywords": [
                {
                    "name": "定制好设计",
                    "rid": 30,
                    "sort_order": 1
                },
                {
                    "name": "原创定制好物",
                    "rid": 27,
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


