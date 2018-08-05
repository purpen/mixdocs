================
店铺模块
================

获取开馆指引
--------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/store_headline``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式


.. code-block:: javascript

    {
        "data": {
            "order_count": 85,  // 售出的订单数
            "username_one": "关羽",  // 用户名
            "username_two": "孙权"  // 用户名
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

获取特色品牌馆列表
--------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/column/feature_store``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
page         Number    可选         1        当前页码
per_page     Number    可选         10       每页数量
===========  ========  =========  ========  ==============================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "next": false,
            "prev": false,
            "stores": [
                {
                    "area": "",
                    "area_id": 0,
                    "areacode": null, // 区号
                    "begin_date": "",  // 休馆开始日期
                    "bgcover": "http://kg.erp.taihuoniao.com",  // 背景图
                    "bgcover_id": 0,
                    "browse_number": 0,  // 浏览人数
                    "categories": [],  // 商品分类
                    "city": "",
                    "city_id": "",
                    "country": "中国",
                    "country_id": 1,
                    "created_at": 1532759899,
                    "delivery_city": "",  // 发货城市
                    "delivery_city_id": "",
                    "delivery_country": "中国",  // 发货国家
                    "delivery_country_id": 1,
                    "delivery_date": "",  // 恢复发货日期
                    "delivery_province": "",  // 发货省份
                    "delivery_province_id": 0,
                    "description": null,
                    "detail": "",  // 品牌故事
                    "distribution_type": 0,
                    "end_date": "",  // 休馆结束日期
                    "fans_count": 0,  // 粉丝数量
                    "is_closed": false,  // 是否闭馆
                    "is_followed": false,  // 是否关注过
                    "logo": "http://kg.erp.taihuoniao.com",  // 店铺logo
                    "logo_id": 0,
                    "mobile": null,  // 手机号
                    "name": "天猫",  // 店铺名
                    "pattern": 1,  // 品牌馆营业模型
                    "phone": null,  // 座机号
                    "products_cover": [
                        "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png"
                    ],  // 山品封面图
                    "province": "",
                    "province_id": 0,
                    "rid": "91708429",
                    "status": 1,
                    "store_products_counts": 1,  // 上架商品数量
                    "tag_line": null,
                    "type": 1
                }
            ],
            "title": "特色品牌馆"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

获取品牌馆主信息
------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/master_info``
* API接口请求方法：``GET``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "area": "", // 区域
            "area_id": null, // 区域ID
            "areacode": null,  // 区号
            "avatar": {
                "created_at": null,
                "filename": "d",
                "filepath": "static/img/default-logo-180x180.png",
                "id": 1,
                "type": null,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/static/img/default-logo-180x180.png"
            },  // 头像url
            "avatar_id": 1,  // 头像ID
            "brand_name": null,
            "city": "",  // 城市
            "city_id": null,  // 城市ID
            "country": "", // 国家
            "country_id": null,  // 国家ID
            "email": null,  // 邮箱
            "id": 1,
            "label_libraries": [], // 商品标签
            "mobile": null, // 手机号
            "name": "张飞", // 姓名
            "province": "", // 省
            "province_id": null,
            "user_identity": 1 // 用户身份, 1、独立设计师；2、艺术家；3、手做人；4、业余设计师(原创设计达人):11、原创商户经营
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
            "message": "商家未认证"
        },
        "success": false
    }

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
            "area": "",
            "area_id": 0,
            "areacode": "+86",
            "begin_date": "",  // 休馆时间
            "bgcover": {
                "created_at": null,
                "filename": "e",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                "id": 2,
                "type": null,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
            },
            "bgcover_id": 2,  // 背景
            "browse_number": 2,  // 浏览人数
            "categories": [
                [
                    1,
                    "手机"
                ],
                [
                    2,
                    "电脑"
                ]
            ],
            "city": "北京",
            "city_id": 1,
            "country": "中国",
            "country_id": 1,
            "created_at": 1530951138,
            "delivery_city": "北京",
            "delivery_city_id": 1,
            "delivery_country": "中国",
            "delivery_country_id": 1,
            "delivery_date": "",  // 恢复发货时间
            "delivery_province": "北京",
            "delivery_province_id": 1,
            "description": "大雨还在下,你的心里怕不怕",  // 描述
            "detail": "",  // 详情
            "distribution_type": 2, // 分销设置
            "end_date": "",  // 休馆结束日期
            "fans_count": 0,  // 粉丝数
            "is_closed": false,  // 是否休馆
            "logo": {
                "created_at": null,
                "filename": "a",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                "id": 1,
                "type": null,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"
            },
            "logo_id": 1,
            "mobile": "15555555555",
            "name": "雨一直下",  // 名称
            "pattern": 1,
            "phone": "0314-7894561",
            "province": "北京",
            "province_id": 1,
            "rid": "97409251",
            "status": 1,
            "tag_line": "处处蚊子咬",  // 宣传语
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
            "content": "<p>窗前明月光jhhhhhhhhhhhhhhhhhhfaklshklshdkfhjkalhskdhfks思考方式减肥反复反复反复反复反反复复思考顶顶顶顶顶的大街上的开发可阿克苏到就发开了速度发货快啦速度发货阿克苏到恢复卡了速度发货卡死了地方好阿克苏到恢复克拉三东方喀什到恢复卡萨丁发哈里开始地方阿克苏到恢复卡号的分离卡水电费阿克苏到恢复克拉三东方和阿克苏到恢复快啦收到话费啊速度快发货可历史的恢复啊上课得恢复卡了速度发货阿克苏地方哈来看速度发货阿克苏到恢复卡了速度发货啊上课点复活快啦速度发货</p>",
            "id": 1,
            "store_rid": "97958360",
            "summary": "窗前明月光jhhhhhhhhhhhhhhhhhhfaklshklshdkfhjkalhskdhfks思考方式减肥反复反复反复反复反反复复思考顶顶顶顶顶的大街上的开发可阿克苏到就发开了速度发货快啦速度发货阿克苏到恢复卡了速度发货卡死了地方好阿克苏到恢复克拉三东方喀什到恢复卡萨丁发哈",
            "updated_at": 1532171850
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

获取店铺(品牌馆)展示信息
--------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/avatar``
* API接口请求方法：``GET``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "logo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
            "name": "嘎哈很多",
            "pattern": 1
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

获取店铺(品牌馆)资质信息
--------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/qualification``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "already_pay": 500,
            "also_need_pay": 500,
            "company_qualification": [
                {
                    "created_at": null,
                    "filename": "e",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                    "id": 2,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
                },
                {
                    "created_at": null,
                    "filename": "r",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539oo.jpg",
                    "id": 3,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539oo.jpg"
                }
            ],
            "contract_sn": null,
            "current_date": null,
            "expiration_date": null,
            "need_pay": "1000",
            "product_price": "100,1000",
            "secured_trade": false,
            "status": 2,
            "user_type": 3
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


申请生活馆
--------------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/apply_life_store``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

==================  ========  =========  ========  ====================================
名称                 类型      是否必须    默认值     描述说明
==================  ========  =========  ========  ====================================
name                 String    必须                 真实姓名
areacode             String    可选        +86      区号
mobile               String    必须                 手机号
verify_code          String    必须                 验证码
==================  ========  =========  ========  ====================================

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
        "success": true
    }


请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 400,
            "message": "短信验证码错误"
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

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
is_closed                Bool      可选        False       是否开启休馆
begin_date               String    可选                    休馆开始时间
end_date                 String    可选                    休馆结束时间
delivery_date            String    可选                    恢复发货时间
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "areacode": null,
            "begin_date": "2018-06-26",  // 休馆开始时间
            "bgcover": "http://kg.erp.taihuoniao.com",
            "browse_number": 0,
            "categories": [],
            "city": "",
            "city_id": "",
            "country": "中国",
            "country_id": 1,
            "created_at": 1530674482,
            "delivery_city": "",
            "delivery_city_id": "",
            "delivery_country ": "中国",
            "delivery_country_id": 1,
            "delivery_date": "2018-06-30", // 恢复发货时间
            "delivery_province": "",
            "delivery_province_id": 0,
            "description": null,
            "detail": "",
            "distribution_type": 0,
            "end_date": "2018-06-26", // 休馆结束时间
            "fans_count": 0,
            "is_closed": false, // 是否开启休馆
            "logo": "http://kg.erp.taihuoniao.com",
            "mobile": null,
            "name": "淘宝",
            "pattern": -1,
            "phone": null,
            "province": "",
            "province_id": 0,
            "rid": "98049276",
            "status": 1,
            "tag_line": null,
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
            "fans_count": 1,  // 粉丝数
            "status": true  // 点击关注后的状态
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
            "fans_count": 0,  // 粉丝数
            "status": false  // 关注状态 取消关注后为false
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


获取当前用户是否关注店铺
--------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/follow/get_status``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
rid           String      必须               店铺编号
===========  ========  =========  ========  ==============================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "status": true  // 已关注
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
openid       String    必须                  用户唯一标识
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
            "next_url": false,
            "prev_url": false,
            "total_page": 1,
            "user_parties": [
                {
                    "about_me": null,
                    "area": "",
                    "area_id": null,
                    "avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",  // 头像
                    "avatar_id": null,
                    "city": "",
                    "city_id": null,
                    "country": "",
                    "country_id": null,
                    "created_at": 1531567480,
                    "date": "",
                    "description": null,
                    "email": "13001145666",
                    "gender": 0,
                    "last_seen": 1531567480,
                    "mail": null,
                    "master_uid": 0,
                    "mobile": "13001145666",
                    "province": "",
                    "province_id": null,
                    "uid": "17210896435",
                    "username": "13001145666"
                },
                {
                    "about_me": "我是个好人",
                    "area": "鱼泉乡",
                    "area_id": 10000,
                    "avatar": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",  // 头像
                    "avatar_id": 1,
                    "city": "北京",
                    "city_id": 1,
                    "country": "",
                    "country_id": null,
                    "created_at": 1531125527,
                    "date": "1992-12-26",
                    "description": null,
                    "email": "13001179400",
                    "gender": 0,
                    "last_seen": 1531842343,
                    "mail": "asd@163.com",
                    "master_uid": 2,
                    "mobile": null,
                    "province": "北京",
                    "province_id": 1,
                    "uid": "19138405762",
                    "username": "超看看人"
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


获取小b商家馆主身份
------------------------------
**30天内完成3个订单成为达人馆主, 小b每次进入生活馆调用此接口**

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/finished_orders``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid             String      必须                    店铺编号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "is_finished": false   // false没完成3单, true为完成
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
            "message": "店铺不存在"
        },
        "success": false
    }

申请小程序
-------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/wxapp_application``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
country_id      Integer     可选      1        申请国家ID
main_type       Integer     可选      1        主体类型，1、个人；2、公司；
email           String      必须               邮箱
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "country": "中国",
            "country_id": 1,
            "created_at": 1530674482,
            "email": "8888888@qq.com",
            "fail_reason": null,
            "id": 3,
            "main_type": 1,
            "master_uid": 2,
            "pwd": 089741,
            "status": 0   // 状态: -1 申请失败； 0 默认状态；1 申请中；2 申请成功；
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

获取申请小程序信息
---------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/wxapp_application``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "country": "中国",
            "country_id": 1,
            "created_at": 1530674482,
            "email": "8888888@qq.com",
            "fail_reason": null,
            "id": 3,
            "main_type": 1,
            "master_uid": 2,
            "pwd": 089741,
            "status": 0   // 状态: -1 申请失败； 0 默认状态；1 申请中；2 申请成功；
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

更新分销设置
---------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/update_distribution_type``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =================================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =================================================
rid                     String      必须                    店铺编号
distribution_type       Integer     可选        0           店铺分销设置: 0、不分销  1、全品分销  2、单品分销
=====================  ==========  =========  ==========  =================================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "distribution_type": 0
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


编辑小b商家生活馆
---------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/edit_store``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =================================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =================================================
rid                     String      必须                    店铺编号
name                    String      必须                    品牌馆名称
description             String      必须                    生活馆简介
=====================  ==========  =========  ==========  =================================================

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

获取小b商家生活馆
---------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/life_store``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =================================================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =================================================
rid                     String      必须                    店铺编号
=====================  ==========  =========  ==========  =================================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "description": "大雨还在下,你的心里怕不怕",
            "name": "雨一直下"
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
