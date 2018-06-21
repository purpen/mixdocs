================
店铺模块
================

基本信息设置
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/settings``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
categories              Array       必须                      产品分类ID
country_id              Integer     必须                      国家ID
delivery_province_id    Integer     必须                      发货省ID
delivery_city_id        Integer     必须                      发货市ID
current_city_id         Integer     必须                      商家位置ID
areacode                String      必须                      区号
mobile                  String      必须                      手机号
phone                   String      可选                      固定电话
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {"categories":[1,2,3],"country_id":1,"delivery_province_id":1,"delivery_city_id":1,"area_id":2,"current_city_id":1,"street_address":"中南海", "areacode":"+86","mobile":"15789456545", "phone":"0314-7894561"}

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "rid": "91957806"
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
            "message": "请选择产品类别"
        },
        "success": false
    }

基本信息设置
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/<string:rid>/settings``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~
``同上``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "rid": "99627015"
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
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }

店铺设置
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/<string:rid>``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
name                    String      必须                      品牌馆名称
logo_id                 Integer     必须                      品牌馆logoID
bgcover_id              Integer     必须                      品牌馆背景图ID
tag_line                String      必须                      宣传语
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "area": "顺义区",
            "areacode": "+86",
            "bgcover": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
            "browse_number": 0,
            "categories": [
                "手机"
            ],
            "country_id": "中国",
            "current_city_id": "北京",
            "delivery_city_id": "北京",
            "delivery_province_id": "北京",
            "description": null,
            "distribution_type": 0,
            "fans_count": 0,
            "logo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
            "mobile": "15555555555",
            "name": "太火鸟",
            "phone": "0314-7894561",
            "rid": "99627015",
            "status": 1,
            "tag_line": "我就独风景还是可故事",
            "type": 1
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
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }

修改店铺设置
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/<string:rid>``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

``同上``

关注店铺
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/follow/store``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
serial_no    String    必须                   店铺编号
===========  ========  =========  ========  ====================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "fans_count": 1
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
            "code": 400,
            "message": "Store is None"
        },
        "success": false
    }

取消关注
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/unfollow/store``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
serial_no       String      必须               店铺编号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "fans_count": 0
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
            "code": 400,
            "message": "Store is None"
        },

        "success": false
    }

获取公告信息
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/announcement``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "content": "床前明月光",
            "id": 11,
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
            "message": "Not Found"
        },
        "success": false
    }


添加公告信息
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/announcement``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
content         String        必须                  公告内容
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": {
            "content": "大漠孤烟直",
            "id": 14,
            "status": 1
        }
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }

更新公告信息
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/announcement``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~
=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
content         String        必须                  公告内容
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": {
            "content": "大漠孤烟直",
            "id": 13,
            "status": 1
        }
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }

删除公告信息
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/announcement``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

.. code-block:: javascript

    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

获取店铺基本信息
------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/<string:rid>``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "bgcover": "http://0.0.0.0:9000/_uploads/photos/s",
            "description": null,
            "distribution_type": 0,
            "logo": "http://0.0.0.0:9000/_uploads/photos/s",
            "name": "eee",
            "rid": "92935418",
            "status": 1,
            "tag_line": "aaaa",
            "type": 1
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
            "message": "Not Found"
        },
        "success": false
    }

获取店铺信息
------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/info``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "area": "顺义区",
            "areacode": "+86",
            "bgcover": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
            "browse_number": 0,
            "categories": [],
            "country_id": "中国",
            "created_at": 1529143434,
            "current_city_id": "北京",
            "delivery_city_id": "北京",
            "delivery_province_id": "北京",
            "description": null,
            "distribution_type": 0,
            "fans_count": 0,
            "logo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539oo.jpg",
            "mobile": "15555555555",
            "name": "唯品会",
            "phone": "0314-7894561",
            "rid": "99627015",
            "status": 1,
            "tag_line": "六月的雨",
            "type": 1
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
            "message": "Not Found"
        },
        "success": false
    }

添加店铺访问者记录
-----------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/visitor``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~
=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
openid          String      必须                  用户唯一标识
rid             String      必须                  店铺序列号
ip_addr         String      必须                  访问时IP
agent           String      必须                  访问时代理
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1_1 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Version/10.0",
            "id": 6,
            "ip_addr": "114.242.250.38",
            "master_uid": 2,
            "user_party_id": 2
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
            "message": "Bad request"
        },
        "success": false
    }

获取店铺访问者记录
-----------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/<string:rid>/visitor``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "next_url": null,
            "prev_url": null,
            "store_Visitors": [
                {
                    "agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1_1 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Version/10.0",
                    "id": 6,
                    "ip_addr": "114.242.250.38",
                    "master_uid": 2,
                    "user_party_id": 6
                },
                {
                    "agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1_1 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Version/10.0",
                    "id": 5,
                    "ip_addr": "114.242.250.38",
                    "master_uid": 2,
                    "user_party_id": 1
                }
            ],
            "total_page": 3,
            "user_parties": [
                {
                    "about_me": null,
                    "avatar": "http://xxxx/photos/180224/c833237a728a1ed.jpg",
                    "city": "保定",
                    "date": "",
                    "email": null,
                    "gender": 0,
                    "id": 6,
                    "master_uid": 0,
                    "nick_name": "李彦宏",
                    "openid": "jsdkj3j",
                    "province": "河北",
                    "user_id": 0,
                    "wxapp_id": "1"
                },
                {
                    "about_me": "php是最好的语言",
                    "avatar": "http://127.0.0.1:9000/_uploads/photjpgos/222222/5d2812257b539aa.",
                    "city": "南京",
                    "date": "1992年12月16日",
                    "email": "zhizhuren@163.com",
                    "gender": 1,
                    "id": 1,
                    "master_uid": 2,
                    "nick_name": "马化腾",
                    "openid": "jsdkj3j",
                    "province": "江苏",
                    "user_id": 0,
                    "wxapp_id": "1"
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
            "message": "Not Found"
        },
        "success": false
    }

获取店铺详细信息
-----------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/<string:rid>/detail``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "avatar": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
            "city_name": "北京",
            "country_name": "中国",
            "created_at": 1529143434,
            "is_settings": true,
            "logo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539oo.jpg",
            "name": "毛爷爷",
            "store_detail": {
                "content": " 雨过天晴！",
                "id": 1,
                "store_rid": "99627015"
            },
            "store_name": "唯品会",
            "tag_line": "六月的雨"
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
            "message": "Not Found"
        },
        "success": false
    }

添加店铺详品牌故事
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/detail``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid             String        必须                  店铺编号
content         String        必须                  店铺介绍
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "content": "京东JD.COM-专业综合网上购物商城，销售超数万品牌，4020万种商品，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、旅游等13大品类。京东PLUS会员，免费体验30天！京东秉承客户为先， 100％正品行货保障，提供全国联保，机打发票，专业配送，售后服务！",
            "created_at": 1528425548,
            "id": 4,
            "store_rid": "95637824"
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
            "message": "Bad request"
        },
        "success": false
    }

新店铺详品牌故事
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/<string:rid>detail``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
content         String        必须                  店铺介绍
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "content": "接口数据客观会计管理三十六计",
            "created_at": null,
            "id": 1,
            "store_rid": "92846390"
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
            "message": "Not Found"
        },
        "success": false
    }

删除店铺详品牌故事
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/<string:rid>detail``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

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
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }
