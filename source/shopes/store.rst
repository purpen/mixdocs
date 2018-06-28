================
店铺模块
================

获取店铺信息
------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/info``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
rid          String    必填                  店铺编号
===========  ========  =========  ========  ==============================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "areacode": "+86",
            "bgcover": {
                "created_at": null,
                "filename": "e",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                "id": 2,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
            },
            "browse_number": 0,
            "categories": [
                "手机"
            ],
            "city": "北京",
            "country": "中国",
            "created_at": 1529143434,
            "delivery_city": "北京",
            "delivery_country ": "中国",
            "delivery_province": "北京",
            "description": null,
            "detail": {
                "content": "要下雨了",
                "id": 1,
                "store_rid": "99627015"
            },
            "distribution_type": 0,
            "fans_count": 0,
            "logo": {
                "created_at": null,
                "filename": "a",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                "id": 1,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"
            },
            "mobile": "15555555555",
            "name": "太火鸟",
            "phone": "0314-7894561",
            "province": "北京",
            "rid": "99627015",
            "status": 1,
            "tag_line": "处处蚊子咬",
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

获取店铺(品牌馆)品牌故事
--------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/detail``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
rid          String    必填                  店铺编号
===========  ========  =========  ========  ==============================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "content": "床前明月光",
            "id": 1,
            "store_rid": "99627015"
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

品牌馆基本信息设置或更新
--------------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/setting``
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
            "areacode": "+86",
            "bgcover": {
                "created_at": null,
                "filename": "e",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                "id": 2,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
            },
            "browse_number": 0,
            "categories": [
                "手机",
                "电脑"
            ],
            "city": "北京",
            "country": "中国",
            "created_at": 1529143434,
            "delivery_city": "北京",
            "delivery_country": "中国",
            "delivery_province": "北京",
            "description": null,
            "detail": {
                "content": "床前明月光",
                "id": 1,
                "store_rid": "99627015"
            },
            "distribution_type": 0,
            "fans_count": 0,
            "logo": {
                "created_at": null,
                "filename": "a",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                "id": 1,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"
            },
            "mobile": "15555555555",
            "name": "太火鸟",
            "phone": "0314-7894561",
            "province": "北京",
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

店铺（品牌馆）信息设置或更新
------------------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/extend_setting``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
categories              Array       必须                      产品分类ID
delivery_country_id     Integer     必须                      发货国家ID
delivery_province_id    Integer     必须                      发货省ID
delivery_city_id        Integer     必须                      发货市ID
country_id              Integer     必须                      商家位置国家ID
province_id             Integer     必须                      商家位置省ID
city_id                 Integer     必须                      商家位置市ID
areacode                String      必须                      区号
mobile                  String      必须                      手机号
phone                   String      可选                      固定电话
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {"categories":[1,7,9],"delivery_country_id":1,"delivery_province_id":1,"delivery_city_id":1,"country_id":1,"province_id":1,"city_id":1, "areacode":"+86","mobile":"15555555555", "phone":"0314-7894561"}

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
            "code": 400,
            "message": "请选择产品类别"
        },
        "success": false
    }

更新店铺基本信息及扩展信息
--------------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/update_setting``
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
categories              Array       必须                      产品分类ID
delivery_country_id     Integer     必须                      发货国家ID
delivery_province_id    Integer     必须                      发货省ID
delivery_city_id        Integer     必须                      发货市ID
country_id              Integer     必须                      商家位置国家ID
province_id             Integer     必须                      商家位置省ID
city_id                 Integer     必须                      商家位置市ID
areacode                String      必须                      区号
mobile                  String      必须                      手机号
phone                   String      可选                      固定电话
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "areacode": "+86",
            "bgcover": {
                "created_at": null,
                "filename": "e",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                "id": 2,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
            },
            "browse_number": 0,
            "categories": [
                "手机"
            ],
            "city": "北京",
            "country": "中国",
            "created_at": 1529143434,
            "delivery_city": "北京",
            "delivery_country": "中国",
            "delivery_province": "北京",
            "description": null,
            "detail": {
                "content": "床前明月光",
                "id": 1,
                "store_rid": "99627015"
            },
            "distribution_type": 0,
            "fans_count": 0,
            "logo": {
                "created_at": null,
                "filename": "a",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                "id": 1,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"
            },
            "mobile": "15555555555",
            "name": "太火鸟",
            "phone": "0314-7894561",
            "province": "北京",
            "rid": "99627015",
            "status": 1,
            "tag_line": "处处蚊子咬",
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


新增或更新店铺品牌故事
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/<string:rid>/detail``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid             String      必须                  店铺编号
content         String      必须                  店铺介绍
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "content": "要下雨了",
            "id": 1,
            "store_rid": "99627015"
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


更新休馆设置
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/update_closed``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
begin_date    String    可选                   休馆开始时间
end_date      String    可选                   休馆结束时间
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "areacode": "+86",
            "begin_date": "2018-06-26",
            "bgcover": {
                "created_at": null,
                "filename": "e",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                "id": 2,
                "type": null,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
            },
            "browse_number": 0,
            "categories": [],
            "city": "北京",
            "city_id": 1,
            "country": "中国",
            "country_id": 1,
            "created_at": 1529143434,
            "delivery_city": "北京",
            "delivery_city_id": 1,
            "delivery_country ": "中国",
            "delivery_country_id": 1,
            "delivery_province": "北京",
            "delivery_province_id": 1,
            "description": null,
            "detail": {
                "content": "要下雨了",
                "id": 1,
                "store_rid": "99627015"
            },
            "distribution_type": 0,
            "end_date": "2018-06-26",
            "fans_count": 0,
            "logo": {
                "created_at": null,
                "filename": "a",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                "id": 1,
                "type": null,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"
            },
            "mobile": "15555555555",
            "name": "嘎哈很多",
            "phone": "0314-7894561",
            "province": "北京",
            "province_id": 1,
            "rid": "99627015",
            "status": 1,
            "tag_line": "处处蚊子咬",
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
rid            String    必须                   店铺编号
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
rid              String      必须               店铺编号
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

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
status        Integer    必填          1        公告状态:是否发布，1、默认草稿；2、发布可见
===========  ========  =========  ========  ==============================================

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


添加或更新公告信息
-------------------


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
status          Integer       必须      1            状态：是否发布，1、默认草稿；2、发布可见
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
rid             String      必须                  店铺编号
ip_addr         String      可选                  访问时IP
agent           String      可选                  访问时代理
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

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
rid          String    必填                  店铺编号
page         Number    可选         1        当前页码
per_page     Number    可选         12       每页数量
===========  ========  =========  ========  ==============================================

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



