=============
生活志模块
=============

文章--发布
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/articles``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
channel_id       Number      必须                    频道编号
title            String      必须                    标题
description      String      可选                    摘要, 最多120个字符
content          String      必须                    正文
cover_id         Number      必须                    头图编号
label_id         Number      可选                    标签编号
sid              String      可选                    店铺编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "audit_status": "1: 待审核  2: 审核通过  3: 审核不通过",
            "channel_id": 2,
            "channel_name": "创作人专访",
            "content": "正文...",
            "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
            "cover_id": 2,
            "created_at": "创建时间",
            "description": "摘要...",
            "rid": 4,
            "refuse_reason": "审核不通过的原因",
            "label_id": 2,
            "label_name": "文化",
            "published_at": "发布时间",
            "status": "1: 草稿箱  2: 发布  3: 禁用",
            "store": "如果有推荐店铺, 这里是店铺的基本信息...",
            "store_name": "发布文章的品牌馆名",
            "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
            "type": "1: 文章  2: 种草  3: 视频",
            "user_avator": "用户头像",
            "user_name": "用户名",
            "browse_count": "浏览数",
            "comment_count": "评论数",
            "is_follow": "是否互相关注",
            "is_follow_store": "是否关注推荐的店铺",
            "like_count": "喜欢数",
            "praise_count": "点赞数"
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


修改文章--发布
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/articles``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    生活志文章编号
channel_id       Number      必须                    频道编号
title            String      必须                    标题
description      String      可选                    摘要, 最多120个字符
content          String      必须                    正文
cover_id         Number      必须                    头图编号
label_id         Number      可选                    标签编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上发布文章 **


文章--存草稿箱
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/articles/draft``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
channel_id       Number      可选                    频道编号
title            String      可选                    标题
description      String      可选                    摘要, 最多120个字符
content          String      可选                    正文
cover_id         Number      可选                    头图编号
label_id         Number      可选                    标签编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "audit_status": "1: 待审核  2: 审核通过  3: 审核不通过",
            "channel_id": 2,
            "channel_name": "创作人专访",
            "content": "正文...",
            "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
            "cover_id": 2,
            "created_at": "创建时间",
            "description": "摘要...",
            "rid": 4,
            "refuse_reason": "审核不通过的原因",
            "label_id": 2,
            "label_name": "文化",
            "published_at": "发布时间",
            "status": "1: 草稿箱  2: 发布  3: 禁用",
            "store": "如果有推荐店铺, 这里是店铺的基本信息...",
            "store_name": "发布文章的品牌馆名",
            "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
            "type": "1: 文章  2: 种草  3: 视频",
            "user_avator": "用户头像",
            "user_name": "用户名",
            "browse_count": "浏览数",
            "comment_count": "评论数",
            "is_follow": "是否互相关注",
            "is_follow_store": "是否关注店铺",
            "like_count": "喜欢数",
            "praise_count": "点赞数"
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


修改文章--存草稿箱
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/articles/draft``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    文章编号
channel_id       Number      可选                    频道编号
title            String      可选                    标题
description      String      可选                    摘要, 最多120个字符
content          String      可选                    正文
cover_id         Number      可选                    头图编号
label_id         Number      可选                    标签编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上保存文章到草稿箱 **


种草一下--发布
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/grasses``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
title            String      必须                    标题
description      String      可选                    摘要, 最多120个字符
content          String      必须                    正文
cover_id         Number      必须                    头图编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "audit_status": 1,
            "content": "<div><p>描述信息</p><p><img src='https://kg.erp.taihuoniao.com/20180719/0056FmbFmpYVJhfRzC-6_IlweYXCB26b.jpg'></p><p><a href='' target='_blank' lexivip='true' rid='29308342245'>产品：女神挎包</a></p></div>",
            "deal_content": [
                {
                    "content": "高性能游戏独立显卡厚度",
                    "rid": "3817596",
                    "type": "text"
                },
                {
                    "content": "https://kg.erp.taihuoniao.com/20180719/0056FmbFmpYVJhfRzC-6_IlweYXCB26b.jpg",
                    "rid": "6058134",
                    "type": "image"
                },
                {
                    "big_picture": "此处显示大图还是小图。 true为大图， false小图",
                    "content": {
                        "category_id": 0,
                        "commission_price": 246.68,
                        "commission_rate": 13.5,
                        "cover": "http://127.0.0.1:9000/_uploads/photos/180718/f1a30ad8b52107c.gif",
                        "cover_id": 14,
                        "custom_details": "",
                        "delivery_country": "",
                        "delivery_country_id": null,
                        "features": "价格超值(5) 大小合适(4) 面料舒适(4) 尺码精准(3) 尺码合适(3) 做工精良(2) 简单得体(2) 使命必达 简约大方",
                        "have_distributed": false,
                        "id_code": "",
                        "is_custom_made": false,
                        "is_custom_service": false,
                        "is_distributed": true,
                        "is_free_postage": false,
                        "is_made_holiday": false,
                        "is_proprietary": true,
                        "is_sold_out": false,
                        "like_count": 0,
                        "made_cycle": 0,
                        "material_id": 4,
                        "material_name": "毛线",
                        "max_price": 2234.5,
                        "max_sale_price": 2145,
                        "min_price": 1234.5,
                        "min_sale_price": 1145,
                        "modes": [
                            "大 白色23",
                            "小 白色22"
                        ],
                        "name": "1夏季新款修身短袖t恤男韩版潮流男士翻领polo衫男体恤",
                        "published_at": 1532325331,
                        "real_price": 2234.5,
                        "real_sale_price": 2145,
                        "rid": "8241530769",
                        "second_category_id": 0,
                        "status": 1,
                        "sticked": false,
                        "store_name": "店铺名",
                        "store_rid": "1234567891",
                        "style_id": null,
                        "style_name": "",
                        "top_category_id": 0,
                        "total_stock": 10
                    },
                    "rid": "8241530769",
                    "type": "product"
                }
            ],
            "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
            "cover_id": 2,
            "description": "摘要...",
            "published_at": 1533353944,
            "refuse_reason": null,
            "rid": 5,
            "status": 1,
            "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
            "type": 1,
            "user_avator": "用户头像",
            "user_name": "用户名",
            "browse_count": "浏览数",
            "comment_count": "评论数",
            "is_follow": "是否互相关注",
            "is_follow_store": "是否关注店铺",
            "like_count": "喜欢数",
            "praise_count": "点赞数"
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


修改种草一下--发布
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/grasses``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    生活志文章编号
title            String      必须                    标题
description      String      可选                    摘要, 最多120个字符
content          String      必须                    正文
cover_id         Number      必须                    头图编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上发布种草一下 **


种草一下--存草稿箱
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/grasses/draft``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
title            String      可选                    标题
description      String      可选                    摘要, 最多120个字符
content          String      可选                    正文
cover_id         Number      可选                    头图编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "audit_status": 1,
            "content": "正文...",
            "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
            "cover_id": 2,
            "created_at": "创建时间",
            "description": "摘要...",
            "published_at": 1533353944,
            "refuse_reason": null,
            "rid": 5,
            "status": 1,
            "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
            "type": 2,
            "user_avator": "用户头像",
            "user_name": "用户名",
            "browse_count": "浏览数",
            "comment_count": "评论数",
            "is_follow": "是否互相关注",
            "is_follow_store": "是否关注店铺",
            "like_count": "喜欢数",
            "praise_count": "点赞数"
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


修改种草一下--存草稿箱
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/grasses/draft``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    种草一下编号
title            String      可选                    标题
description      String      可选                    摘要, 最多120个字符
content          String      可选                    正文
cover_id         Number      可选                    头图编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上保存文章到草稿箱 **


删除生活志
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    生活志编号
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


所有生活志列表
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/all``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
type             Number      可选         0          生活志类型: 0=全部, 1=文章, 2=种草清单
status           Number      可选         0          生活志类型: 0=全部, 1=草稿箱, 2=发布, 3=禁用
audit_status     Number      可选         0          生活志类型: 0=全部, 1: 待审核  2: 审核通过  3: 审核不通过
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "life_records": [
                {
                    "audit_status": 2,
                    "channel_id": 4,
                    "channel_name": "手作教学",
                    "content": "saf",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533290214,
                    "description": "还是飞机沙发斯蒂芬但是发生的发生偶师傅师傅",
                    "label_id": 2,
                    "label_name": "文化",
                    "published_at": 1533290214,
                    "refuse_reason": null,
                    "rid": 1,
                    "status": 2,
                    "title": "哈是否哈哈",
                    "type": 1,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "is_follow_store": "是否关注店铺",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
                },
                {
                    "audit_status": 2,
                    "content": "新正文...",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533353214,
                    "description": "新摘要...",
                    "published_at": 1533353214,
                    "refuse_reason": null,
                    "rid": 4,
                    "status": 2,
                    "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
                    "type": 1,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "is_follow_store": "是否关注店铺",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
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


生活志列表
----------------------
获取发布且审核通过的文章/种草一下

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
type             Number      可选         0          生活志类型: 0=全部, 1=文章, 2=种草清单
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "life_records": [
                {
                    "audit_status": 2,
                    "channel_id": 4,
                    "channel_name": "手作教学",
                    "content": "saf",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533290214,
                    "description": "还是飞机沙发斯蒂芬但是发生的发生偶师傅师傅",
                    "label_id": 2,
                    "label_name": "文化",
                    "published_at": 1533290214,
                    "refuse_reason": null,
                    "rid": 1,
                    "status": 2,
                    "title": "哈是否哈哈",
                    "type": 1,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "is_follow_store": "是否关注店铺",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
                },
                {
                    "audit_status": 2,
                    "content": "新正文...",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533353214,
                    "description": "新摘要...",
                    "published_at": 1533353214,
                    "refuse_reason": null,
                    "rid": 4,
                    "status": 2,
                    "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
                    "type": 1,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "is_follow_store": "是否关注店铺",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
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


审核中生活志列表
----------------------
获取发布但在审核中的文章/种草一下

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/audit``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
type             Number      可选         0          生活志类型: 0=全部, 1=文章, 2=种草清单
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "life_records": [
                {
                    "audit_status": 1,
                    "channel_id": 4,
                    "channel_name": "手作教学",
                    "content": "saf",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533353214,
                    "description": "摘要...",
                    "label_id": 2,
                    "label_name": "文化",
                    "published_at": 1533290214,
                    "refuse_reason": null,
                    "rid": 1,
                    "status": 2,
                    "title": "标题...",
                    "type": 1,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "is_follow_store": "是否关注店铺",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
                },
                {
                    "audit_status": 2,
                    "content": "新正文...",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533353214,
                    "description": "新摘要...",
                    "published_at": 1533353214,
                    "refuse_reason": null,
                    "rid": 4,
                    "status": 2,
                    "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
                    "type": 1,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "is_follow_store": "是否关注店铺",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
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


草稿箱中生活志列表
----------------------
获取在草稿箱中的文章/种草一下

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/drafts``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
type             Number      可选         0          生活志类型: 0=全部, 1=文章, 2=种草清单
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "life_records": [
                {
                    "audit_status": 1,
                    "channel_id": 4,
                    "channel_name": "手作教学",
                    "content": "saf",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533353214,
                    "description": "摘要...",
                    "label_id": 2,
                    "label_name": "文化",
                    "published_at": 1533290214,
                    "refuse_reason": null,
                    "rid": 1,
                    "status": 1,
                    "title": "标题...",
                    "type": 1,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "is_follow_store": "是否关注店铺",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
                },
                {
                    "audit_status": 1,
                    "content": "新正文...",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533353214,
                    "description": "新摘要...",
                    "published_at": 1533353214,
                    "refuse_reason": null,
                    "rid": 4,
                    "status": 1,
                    "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
                    "type": 1,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "is_follow_store": "是否关注店铺",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
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


生活志详情
----------------------
获取文章/种草一下内容详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/detail``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    生活志编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "audit_status": 2,
            "channel_id": 4,
            "channel_name": "手作教学",
            "content": "saf",
            "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
            "cover_id": 2,
            "created_at": 1533353214,
            "deal_content": [
                {
                    "content": "心仪的<span class=\"ql-size-large\">文具</span>对你来说是什么?我记得 我<strong>18岁之前</strong>,屯文具是我的毕生追求。",
                    "rid": "4263718",
                    "type": "text"
                },
                {
                    "content": "https://kg.erp.taihuoniao.com/20180719/0056FmbFmpYVJhfRzC-6_IlweYXCB26b.jpg",
                    "rid": "7894125",
                    "type": "image"
                },
                {
                    "content": {
                        "category_id": 628,
                        "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                        "cover_id": 2,
                        "custom_details": "可以刻名字,生辰八字",
                        "delivery_country": "",
                        "delivery_country_id": null,
                        "features": "获得更多的成长值，加速商铺成长获取更多特权：发布三星级及以上的产品可以获得与星级数量等额的成长值，每日上限为20点；",
                        "id_code": "88888888",
                        "is_custom_made": true,
                        "is_custom_service": true,
                        "is_distributed": false,
                        "is_free_postage": false,
                        "is_made_holiday": false,
                        "is_sold_out": true,
                        "like_count": 0,
                        "made_cycle": 5,
                        "material_id": 2,
                        "material_name": "皮革",
                        "max_price": 0,
                        "max_sale_price": 0,
                        "min_price": 0,
                        "min_sale_price": 0,
                        "modes": [],
                        "name": "分销客户2-商品13",
                        "published_at": 0,
                        "rid": "8753906124",
                        "second_category_id": 628,
                        "status": 0,
                        "sticked": false,
                        "store_name": "分销商品2",
                        "store_rid": "1234567891",
                        "style_id": null,
                        "style_name": "",
                        "top_category_id": 600,
                        "total_stock": 0
                    },
                    "rid": "8753906124",
                    "type": "product"
                },
                {
                    "content": "作品的",
                    "rid": "7632508",
                    "type": "blockquote"
                },
                {
                    "content": [
                        {
                            "content": "是现在美的东",
                            "rid": "0967584",
                            "type": "li"
                        },
                        {
                            "content": "西太多了。",
                            "rid": "3156924",
                            "type": "li"
                        }
                    ],
                    "rid": "5261378",
                    "type": "ol"
                }
            ],
            "description": "摘要...",
            "label_id": 2,
            "label_name": "文化",
            "published_at": 1533290214,
            "refuse_reason": null,
            "rid": 1,
            "status": 2,
            "title": "标题...",
            "type": 2,
            "browse_count": "浏览数",
            "comment_count": "评论数",
            "is_follow": "是否互相关注",
            "is_follow_store": "是否关注店铺",
            "like_count": "喜欢数",
            "praise_count": "点赞数"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


种草清单推荐列表
----------------------
获取推荐的种草清单列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/recommend``
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
            "count": 2,
            "life_records": [
                {
                    "audit_status": 2,
                    "content": "正文...",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533353214,
                    "description": "摘要...",
                    "published_at": 1533353944,
                    "refuse_reason": null,
                    "rid": 5,
                    "status": 2,
                    "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
                    "type": 2,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
                },
                {
                    "audit_status": 2,
                    "content": "新正文...",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533353214,
                    "description": "新摘要...",
                    "published_at": 1533353214,
                    "refuse_reason": null,
                    "rid": 4,
                    "status": 2,
                    "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
                    "type": 2,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
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


频道列表
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/channels``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
type             Number      可选         2          频道类型: 0=全部, 1=官方频道, 2=商家频道
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "channels": [
                {
                    "id": 3,
                    "name": "生活记事",
                    "type": 1
                },
                {
                    "id": 4,
                    "name": "手作教学",
                    "type": 1
                },
                {
                    "id": 5,
                    "name": "创作人专访",
                    "type": 2
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


添加频道
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/channels``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
type             Number      可选         2          频道类型: 1=官方频道, 2=商家频道
name             String      必须                    频道名
sort_order       Number      可选         1          频道序号
status           Bool        可选         False      是否可以: True=可用  False=禁用
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "id": 6,
            "name": "创作专访",
            "type": "频道类型 1=官方频道, 2=商家频道"
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


修改频道
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/channels``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
type             Number      可选         2          频道类型: 1=官方频道, 2=商家频道
name             String      必须                    频道名
sort_order       Number      可选         1          频道序号
status           Bool        可选         False      是否可以: True=可用  False=禁用
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "id": 6,
            "name": "新创作专访",
            "type": "频道类型 1=官方频道, 2=商家频道"
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除频道
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/channels``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
id               Number      必须                    频道编号
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


创作人专访频道列表
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/creator_story``
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
            "count": 2,
            "life_records": [
                {
                    "audit_status": 2,
                    "content": "正文...",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533353214,
                    "description": "摘要...",
                    "published_at": 1533353944,
                    "refuse_reason": null,
                    "rid": 5,
                    "status": 2,
                    "store": {
                        推荐的品牌馆基本信息...
                    },
                    "store_name": "该生活志所属的品牌馆",
                    "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
                    "type": 2,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
                },
                {
                    "audit_status": 2,
                    "content": "新正文...",
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180707/77409c8ab9b0abf.jpg",
                    "cover_id": 2,
                    "created_at": 1533353214,
                    "description": "新摘要...",
                    "published_at": 1533353214,
                    "refuse_reason": null,
                    "rid": 4,
                    "status": 2,
                    "store": {
                        推荐的品牌馆基本信息...
                    },
                    "store_name": "该生活志所属的品牌馆",
                    "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
                    "type": 2,
                    "user_avator": "用户头像",
                    "user_name": "用户名",
                    "browse_count": "浏览数",
                    "comment_count": "评论数",
                    "is_follow": "是否互相关注",
                    "like_count": "喜欢数",
                    "praise_count": "点赞数"
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


生活记事频道列表
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/life_remember``
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

** 同上创作人专访频道返回示例 **


手作教学频道列表
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/hand_teach``
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

** 同上创作人专访频道返回示例 **


种草笔记频道列表
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/grass_note``
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

** 同上创作人专访频道返回示例 **


猜你喜欢
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/guess_likes``
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

** 同上创作人专访频道返回示例 **


精彩故事
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/wonderful_stories``
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

** 同上创作人专访频道返回示例 **


相关故事推荐
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/similar``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
rid              Number      必须                    当前浏览的生活志编号
===============  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

** 同上创作人专访频道返回示例 **


喜欢生活志
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/user_likes``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    生活志编号
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


删除喜欢生活志
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/user_likes``
* API接口请求方法：``Delete``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    生活志编号
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


点赞生活志
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/praises``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    生活志编号
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


取消点赞生活志
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/praises``
* API接口请求方法：``Delete``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    生活志编号
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


评论生活志
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/comments``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              Number      必须                    生活志编号
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


删除生活志评论
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/comments``
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

* API接口请求地址：``/life_records/comments/praises``
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

* API接口请求地址：``/life_records/comments/praises``
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



获取生活志评论
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/comments``
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
            "next": false,
            "prev": false
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

* API接口请求地址：``/life_records/child_comments``
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
            "next": false,
            "prev": false
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


推荐商品
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/recommend_products``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
rid          Number    必须                   生活志编号
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: ../products/product_list.js
    :language: javascript


获取生活志标签列表
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/life_records/labels``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "labels": [
                {
                    "id": 1,
                    "name": "手作"
                },
                {
                    "id": 2,
                    "name": "文化"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

