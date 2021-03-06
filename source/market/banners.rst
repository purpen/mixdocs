====================
营销工具/广告模块
====================


生成推广图
----------------------
生成带有小程序码宣传图

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/wxa_card``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
auth_app_id    String    必填                  小程序id
path           String    必填                  访问路径
rid            String    必填                  场景参数
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "wxa_image": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


生成小程序码
----------------------
生成不同大小的小程序码

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/wxa_code``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
auth_app_id    String    必填                  小程序id
path           String    必填                  访问路径
rid            String    必填                  场景参数
width          Number    必填                  小程序码宽度
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "wxa_image": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


生成分享海报图
----------------------
乐喜平台生生成分享海海报图片

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/wxa_poster``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
auth_app_id    String    必填                  小程序id
path           String    必填                  访问路径
type           Number    必填                  平台类型  1=品牌馆, 2=生活馆, 3=独立小程序分享商品, 4=核心平台分享商品, 5=种草笔记，6=文章详情
rid            String    必填                  分享编号
scene          String    必填                  场景参数： 商品编号-店铺编号  例：8945120367-94395210
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


分享品牌馆卡片
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/share/store``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid            String    必填                  品牌馆编号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


分享品牌馆海报图
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/share/store_poster``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid            String    必填                  品牌馆编号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://s3.lexivip.com/lexi/20181203/zpQOKXFqaAWwBJytCGuR.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


分享生活馆卡片
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/share/life_store``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid            String    必填                  生活馆编号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


邀请好友开馆卡片
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/share/invite_carde``
* API接口请求方法：``POST``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


分享优惠劵
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/share/coupons``
* API接口请求方法：``POST``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


邀请好友开馆海报
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/share/invite_poster``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
auth_app_id    String    必填                  小程序id
path           String    必填                  访问路径
scene          String    必填                  场景参数
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


生成橱窗分享海报图
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/share/shop_window_poster``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
auth_app_id    String    必填                  小程序id
path           String    必填                  访问路径
rid            String    必填                  橱窗编号
scene          String    必填                  场景参数
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


生成商品分享卡片
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/share/product_card``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid            String    必填                  商品编号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


获取生活志分享卡片
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/share/life_record_card``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid            String    必填                  生活志编号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


获取邀请好友海报
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/invitation/user``
* API接口请求方法：``POST``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


广告列表
----------------
获取广告列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/banners``
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

.. code-block:: javascript

    {
        "data": {
            "banners": [
                {
                    "height": 40,
                    "name": "广告",
                    "rid": "8548462054",
                    "status": 1,
                    "width": 30
                },
                {
                    "height": 20,
                    "name": "001",
                    "rid": "8946315464",
                    "status": 1,
                    "width": 20
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


广告图列表
----------------
获取广告位中广告图列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/banners/<rid>``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==============  ========  =========  ========  ====================================
名称             类型      是否必须    默认值     描述说明
==============  ========  =========  ========  ====================================
rid             String    必须                   广告编号
==============  ========  =========  ========  ====================================

``目前支持的编号: 精选顶部广告--小程序=hotpick_ad, 精选顶部广告--app=hotpick_app, 探索顶部广告=explore_ad, 精选内容区广告=content_ad, 选品中心推荐=center_ad, 发现头部广告=discover_ad``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "banner_images": [
                {
                    "description": "广告图描述",
                    "image": "http://127.0.0.1:9000/_uploads/photos/180530/72de0b9ca1ae5a3.jpg",
                    "link": "链接地址",
                    "rid": 4,
                    "sort_order": "排序",
                    "status": true,
                    "title": "标题",
                    "type": "1=链接地址, 2=商品, 3=分类, 4=品牌, 5=专题, 6=生活志文章, 7=生活志种草清单, 8=小程序链接, 9=集合, 10=橱窗"
                },
                {
                    "description": "广告图描述",
                    "image": "http://127.0.0.1:9000/_uploads/photos/180530/72de0b9ca1ae5a3.jpg",
                    "link": "链接地址",
                    "rid": 3,
                    "sort_order": 1,
                    "status": true,
                    "title": "标题",
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


精选顶部广告
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/banners/handpick``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

** 同上广告图列表返回示例 **


精选内容区广告
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/banners/handpick_content``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

** 同上广告图列表返回示例 **


探索顶部广告
----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/banners/explore``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

** 同上广告图列表返回示例 **


新增广告信息<未开通>
--------------------
新增广告信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/banners/create``
* API接口请求方法：``POST``
* API接口用户授权：``token``


更新广告信息<未开通>
--------------------
更新广告信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/banners/update``
* API接口请求方法：``PUT``
* API接口用户授权：``token``


删除广告信息<未开通>
--------------------
删除广告信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/banners/delete``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``
