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
labels           Array       可选                    标签
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
            "labels": [
                "手作",
                "原创"
            ],
            "published_at": "发布时间",
            "status": "1: 草稿箱  2: 发布  3: 禁用",
            "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
            "type": "1: 文章  2: 种草  3: 视频"
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
labels           Array       可选                    标签
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
labels           Array       可选                    标签
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
            "labels": [
                "手作",
                "原创"
            ],
            "published_at": "发布时间",
            "status": "1: 草稿箱  2: 发布  3: 禁用",
            "title": "她手绘出来的童话馆的小公主居然偷偷跑出来了",
            "type": "1: 文章  2: 种草  3: 视频"
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
labels           Array       可选                    标签
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
            "type": 1
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
            "type": 2
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
                    "labels": ["手作"],
                    "published_at": 1533290214,
                    "refuse_reason": null,
                    "rid": 1,
                    "status": 2,
                    "title": "哈是否哈哈",
                    "type": 1
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
                    "type": 1
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
                    "labels": ["手作"],
                    "published_at": 1533290214,
                    "refuse_reason": null,
                    "rid": 1,
                    "status": 2,
                    "title": "标题...",
                    "type": 1
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
                    "type": 1
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
                    "labels": ["手作"],
                    "published_at": 1533290214,
                    "refuse_reason": null,
                    "rid": 1,
                    "status": 1,
                    "title": "标题...",
                    "type": 1
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
                    "type": 1
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
                    "content": "商品名称：Apple苹果MacBookPro13英寸i5(15英寸i7)超薄笔记本电脑2017年新款15.4英寸i716G1TB固态BAR【官方标配】灰色2017年新款商品编号：29534568036店铺：黑海数码全球购旗舰店商品毛重：2.5kg货号：笔记本系统：其他显卡类别：高性能游戏独立显卡厚度",
                    "rid": "3817596",
                    "type": "text"
                },
                {
                    "content": "https://kg.erp.taihuoniao.com/20180719/0056FmbFmpYVJhfRzC-6_IlweYXCB26b.jpg",
                    "rid": "6058134",
                    "type": "image"
                },
                {
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
            "description": "摘要...",
            "labels": ["手作"],
            "published_at": 1533290214,
            "refuse_reason": null,
            "rid": 1,
            "status": 2,
            "title": "标题...",
            "type": 2
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
                    "type": 2
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
                    "type": 2
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

