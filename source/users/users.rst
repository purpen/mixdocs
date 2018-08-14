=========
用户模块
=========

更新用户最后进入的生活馆
--------------------------
**核心小程序会用到, 移动端不需要**

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/update_last_store_rid``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
last_store_rid            String     是                   用户最后所停留的生活馆编号
=====================  ==========  =========  ==========  =============================

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


获取生活馆动态
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/user_dynamic``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
page         Number    可选         1        当前页码
per_page     Number    可选         10       每页数量
===========  ========  =========  ========  ==============================================

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "count": 5,
            "lines": [
                {
                    "created_at": 1534094558,  // 发布时间
                    "shop_window": {  // 橱窗信息
                        "comment_count": null,  // 评论数
                        "description": "去去去去去去去去去去",  // 描述
                        "is_follow": false,  // 是否关注过
                        "keywords": [],
                        "like_count": null,  // 喜欢的人数
                        "product_count": 5,  // 商品数量
                        "product_covers": [  // 商品图片
                            "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png",
                            "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png",
                            "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png",
                            "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png",
                            "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png"
                        ],
                        "products": [  // 商品
                            {
                                "category_id": 0,
                                "cover": "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png",
                                "cover_id": 1,
                                "custom_details": null,
                                "features": null,
                                "id_code": null,
                                "is_custom_made": null,
                                "is_custom_service": null,
                                "is_distributed": null,
                                "is_free_postage": null,
                                "is_made_holiday": null,
                                "is_sold_out": false,
                                "like_count": null,
                                "made_cycle": null,
                                "material_id": null,
                                "material_name": "",
                                "max_price": 0,
                                "max_sale_price": 0,
                                "min_price": 0,
                                "min_sale_price": 0,
                                "modes": [],
                                "name": "飞机",
                                "published_at": null,
                                "rid": "97958360",
                                "second_category_id": 0,
                                "status": 1,
                                "sticked": null,
                                "style_id": null,
                                "style_name": "",
                                "top_category_id": 0,
                                "total_stock": null
                            }

                        ],
                        "rid": 1,
                        "title": "啊啊啊啊啊啊啊啊啊",  // 标题
                        "user_avatar": "http://0.0.0.0:9000/_uploads/photos/FlHKgXPzqwjPC7pD5Z_SfdL0R8hE",  // 用户头像
                        "user_name": "亮晶晶"  // 用户名
                    }
                },
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

获取别人生活馆动态
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/other_user_dynamic``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
uid          String    必须                  被查看用户编号
page         Number    可选         1        当前页码
per_page     Number    可选         10       每页数量
===========  ========  =========  ========  ==============================================

获取关注的用户列表
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/followed_users``
* API接口请求方法：``GET``
* API接口用户授权：``token``

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
            "followed_users": [
                {
                    "about_me": null,
                    "area": "",
                    "area_id": 0,
                    "areacode": "+86",
                    "avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                    "avatar_id": 0,
                    "city": "",
                    "city_id": 0,
                    "country": "",
                    "country_id": null,
                    "created_at": 1532574628,
                    "date": "",
                    "description": null,
                    "email": "13001179499",
                    "gender": 0,
                    "is_distributor": false,
                    "last_seen": 1532574628,
                    "mail": null,
                    "master_uid": 0,
                    "mobile": null,
                    "followed_status": 2,  // 关注状态, 0:未关注, 1:已关注, 2:相互关注
                    "phone": null,
                    "province": "",
                    "province_id": 0,
                    "street_address": null,
                    "uid": "14519608273",
                    "user_areacode": null,
                    "username": "13001179499"
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

获取别人关注的用户列表
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/other_followed_users``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
uid          String    必须                  被查看用户编号
page         Number    可选         1        当前页码
per_page     Number    可选         10       每页数量
===========  ========  =========  ========  ==============================================

获取用户的粉丝列表
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/user_fans``
* API接口请求方法：``GET``
* API接口用户授权：``token``

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
            "count": 1,
            "next": false,
            "prev": false,
            "user_fans": [
                {
                    "about_me": null,
                    "area": "",
                    "area_id": 0,
                    "areacode": "+86",
                    "avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                    "avatar_id": 0,
                    "city": "",
                    "city_id": 0,
                    "country": "",
                    "country_id": null,
                    "created_at": 1532574628,
                    "date": "",
                    "description": null,
                    "email": "13001179499",
                    "gender": 0,
                    "is_distributor": false,
                    "last_seen": 1532574628,
                    "mail": null,
                    "master_uid": 0,
                    "mobile": null,
                    "followed_status": 2,  // 关注状态, 0:未关注, 1:已关注, 2:相互关注
                    "phone": null,
                    "province": "",
                    "province_id": 0,
                    "street_address": null,
                    "uid": "14519608273",
                    "user_areacode": null,
                    "username": "13001179499"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

获取别人的粉丝列表
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/other_user_fans``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
uid          String    必须                  被查看用户编号
page         Number    可选         1        当前页码
per_page     Number    可选         10       每页数量
===========  ========  =========  ========  ==============================================

获取自己个人中心
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/user_center``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "about_me": "肚子好饿",  // 签名
            "avatar": "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png",  // 头像
            "followed_stores_counts": 2,  // 关注的店铺数量
            "followed_users_counts": 0,  // 关注的用户数量
            "fans_counts": 0,  // 粉丝数量
            "user_like_counts": 0,  // 喜欢的数量
            "username": "张飞",  // 用户名
            "wish_list_counts": 0  // 收藏的数量
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


获取别人个人中心
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/other_user_center``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
uid            String     是                  用户编号
===========  ========  =========  ========  ==============================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "about_me": "肚子好饿",  // 签名
            "avatar": "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png",  // 头像
            "followed_stores_counts": 2,  // 关注的店铺数量
            "followed_users_counts": 0,  // 关注的用户数量
            "fans_counts": 0,  // 粉丝数量
            "user_like_counts": 0,  // 喜欢的数量
            "username": "张飞",  // 用户名
            "wish_list_counts": 0  // 收藏的数量
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


获取用户关注的店铺列表
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/followed_stores``
* API接口请求方法：``GET``
* API接口用户授权：``token``

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
                    "areacode": null,
                    "begin_date": "",
                    "bgcover": "http://kg.erp.taihuoniao.com",
                    "bgcover_id": 0,
                    "browse_number": 0,
                    "categories": [],
                    "city": "",
                    "city_id": "",
                    "country": "中国",
                    "country_id": 1,
                    "created_at": 1532759838,
                    "delivery_city": "",
                    "delivery_city_id": "",
                    "delivery_country": "中国",
                    "delivery_country_id": 1,
                    "delivery_date": "",
                    "delivery_province": "",
                    "delivery_province_id": 0,
                    "description": null,
                    "detail": "",
                    "distribution_type": 0,
                    "end_date": "",
                    "fans_count": 0,
                    "followed_status": 1,  // 是否关注过, 0:未关注; 1:已关注
                    "is_closed": false,
                    "logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "logo_id": 0,
                    "mobile": null,
                    "name": "京东",  // 设计馆名称
                    "pattern": 1,
                    "phone": null,
                    "products_count": 0,
                    "province": "",
                    "province_id": 0,
                    "rid": "95492837",
                    "status": 1,
                    "tag_line": null,
                    "type": 1
                },
                {
                    "area": "",
                    "area_id": 0,
                    "areacode": null,
                    "begin_date": "",
                    "bgcover": "http://kg.erp.taihuoniao.com",
                    "bgcover_id": 0,
                    "browse_number": 0,
                    "categories": [],
                    "city": "",
                    "city_id": "",
                    "country": "中国",
                    "country_id": 1,
                    "created_at": 1532760796,
                    "delivery_city": "",
                    "delivery_city_id": "",
                    "delivery_country": "中国",
                    "delivery_country_id": 1,
                    "delivery_date": "",
                    "delivery_province": "",
                    "delivery_province_id": 0,
                    "description": null,
                    "detail": "",
                    "distribution_type": 0,
                    "end_date": "",
                    "fans_count": 0,
                    "followed_status": 1,  // 是否关注过, 0:未关注; 1:已关注
                    "is_closed": false,
                    "logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "logo_id": 0,
                    "mobile": null,
                    "name": "拼多多",  // 设计馆名称
                    "pattern": 1,
                    "phone": null,
                    "products_count": 0,
                    "province": "",
                    "province_id": 0,
                    "rid": "93921078",
                    "status": 1,
                    "tag_line": null,
                    "type": 1
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

获取别人关注的店铺列表
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/other_followed_stores``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
uid          String    必须                  被查看用户编号
page         Number    可选         1        当前页码
per_page     Number    可选         10       每页数量
===========  ========  =========  ========  ==============================================

获取用户喜欢的数量
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/user_like_counts``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "user_like_counts": 1
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

获取用户收藏数量
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/wish_list_counts``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "wish_list_counts": 0
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

获取用户关注的设计馆数量
--------------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/followed_stores_counts``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "followed_stores_counts": 0
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

获取用户关注人数
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/followed_users_counts``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "followed_users_counts": 2
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

获取用户粉丝数
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/fans_counts``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "fans_counts": 2
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

用户资料
----------
获取当前登录账户的用户资料

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/profile``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "about_me": "我是个好人",
            "avatar": {
                "created_at": null,
                "filename": "a",
                "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                "id": 1,
                "type": null,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"  // 头像url
            },
            "avatar_id": 1,  // 头像ID
            "city": "北京",
            "city_id": 1,
            "country": "中国",
            "country_id": 1,
            "created_at": 1531125527,  // 创建时间
            "date": "1992-12-26",  // 生日
            "description": null,
            "email": "13001179400",
            "gender": 0, // 性别 0默认为女
            "last_seen": 1531563816,
            "mail": "asd@163.com",  // 邮箱
            "master_uid": 2,
            "mobile": null,
            "province": "北京",
            "province_id": 1,
            "uid": "19138405762",
            "username": "盖世火锅" // 用户名
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


获取用户身份
----------------------------------


接口说明
~~~~~~~~~~~~~~


* API接口请求地址：``/users/identity``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

正确结果格式::

    {
        "data": {
            "id_card": "456123456789", // 身份证号
            "name": "张飞",  // 姓名
            "status": 4,   // 认证状态, 只有为4的时候是已认证
            "user_identity": 1  // 用户身份; 1、独立设计师；2、艺术家；3、手做人；4、业余设计师(原创设计达人):11、原创商户经营
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

获取合同附件
----------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/contract_attachment``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "attachment": "http://0.0.0.0:9000/_uploads/photos/static/img/default-logo-180x180.png", // 附件url
            "begin_at": 0,  // 合同开始时间
            "contract_sn": "MF201807201906",  // 合同编号
            "end_at": 0  // 合同结束时间
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


获取专利附件
----------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/patent_attachment``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "patent_file": [
                {
                    "created_at": null,
                    "filename": "d",
                    "filepath": "static/img/default-logo-180x180.png",
                    "id": 1,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/static/img/default-logo-180x180.png" // 专利附件url
                },
                {
                    "created_at": null,
                    "filename": "e",
                    "filepath": "static/img/default2-logo-180x180.png",
                    "id": 2,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png"
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

关注用户
-------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/follow/user``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
uid              String     必须                 被关注用户ID
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "followed_status": 2  //关注状态, 0:未关注; 1:已关注; 2:相互关注
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
            "message": "用户不存在"
        },
        "success": false
    }

取消关注用户
-------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/unfollow/user``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
uid              String     必须                 被关注用户ID
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "followed_status": 0
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
            "message": "用户不存在"
        },
        "success": false
    }

获取用户是否被关注
---------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/get_followed_status``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
uid              String     必须                 被关注用户ID
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "followed_status": 1
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
            "message": "用户不存在"
        },
        "success": false
    }

更新用户信息
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users``
* API接口请求方法：``PUT``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
username         String     可选                 昵称 - 必须保持唯一
avatar_id        Integer    可选          0      用户头像ID
about_me         String     可选                 个人介绍
gender           Integer    可选          0      性别
area_id          Integer    可选                 区域ID
province_id      Integer    可选                 省ID
city_id          Integer    可选                 市ID
mail             String     可选                 邮箱
date             String     可选                 出生日期
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

正确结果格式::

    {
        "data": {
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
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

错误结果格式::

    {
        "status": {
            "code": 400,
            "message": "盖世火锅 already existed!"
        },
        "success": false
    }

编辑用户头像
-----------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/update_avatar``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
avatar_id        Integer    必须                 用户头像ID
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "about_me": "我是个好人",  // 关于我
            "area": "鱼泉乡",  // 区域
            "area_id": 10000,
            "avatar": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png", // 头像url
            "avatar_id": 0,  // 头像ID
            "city": "北京",  //市
            "city_id": 1,
            "country": "",
            "country_id": null,
            "created_at": 1531125527,  // 创建时间
            "date": "1992-12-26",  // 生日
            "description": null,
            "email": "13001179400",
            "gender": 0,  // 性别
            "last_seen": 1531842343,
            "mail": "asd@163.com",  // 邮箱
            "master_uid": 2,
            "mobile": null,
            "province": "北京", // 省
            "province_id": 1,
            "uid": "19138405762",
            "username": "超人啊"  // 用户名
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
            "message": "用户头像有误"
        },
        "success": false
    }

添加或修改(个人或管理员)基本信息
----------------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/authenticate_info``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
user_type                Integer   可选           1          用户类型，1、个人；2、原创工作室；3、原创品牌公司
avatar_id                Integer   必须                      头像
name                     String    必须                      姓名
user_identity            Integer   可选           1          用户身份, 1、独立设计师；2、艺术家；3、手做人；4、业余设计师(原创设计达人)
id_card                  String    必须                      身份证号
front_card_photo_id      Integer   必须                      身份证正面照ID
reverse_card_photo_id    Integer   必须                      身份证反面照ID
holding_card_photo_id    Integer   必须                      手持身份证正面照ID
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
    "user_type":3,"name":"毛爷","avatar_id":1,"user_identity":1,"id_card":"13082119921226801x","front_card_photo_id":1,"reverse_card_photo_id":2,"holding_card_photo_id":3
    }

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
            "message": "Authenticate failed!"
        },
        "success": false
    }

添加或修改个人商家联系信息
----------------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/authenticate_contact_info``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
areacode                 String    可选          +86         区号
mobile                   String    必须                      手机号
email                    String    必须                      邮箱
phone                    String    可选                      固定电话
wechat                   String    必须                      微信号
qq                       String    可选                      QQ号
country_id               Integer   必须                      国家ID
province_id              Integer   必须                      省ID
city_id                  Integer   可选                      市ID
area_id                  Integer   可选                      区域ID
street_address           String    必须                      详细地址
urgent_contact_name      String    必须                      紧急联系人姓名
urgent_contact_mobile    String    必须                      紧急联系人电话
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
    "areacode":"+86","mobile":"13001179400","wechat":"jksjk45","country_id":1,"province_id":1,"city_id":1,"area_id":2,"street_address":"中南海","urgent_contact_name":"普京","urgent_contact_mobile":"15879456532","email":"1346555456@qq.com","phone":"0314-4567891","qq":"1345678956"
    }

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
            "message": "Authenticate failed!"
        },
        "success": false
    }

添加或修改品牌公司商家联系信息
----------------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/administrator_contact_info``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
areacode                 String    可选          +86         区号
mobile                   String    必须                      手机号
email                    String    必须                      邮箱
wechat                   String    必须                      微信号
qq                       String    可选                      QQ号
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
    "areacode":"+86","mobile":"13001179400","wechat":"jksjk45","email":"1346555456@qq.com","qq":"1345678956"
    }

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
            "message": "Authenticate failed!"
        },
        "success": false
    }

添加或修改商家公司信息
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/authenticate_company_info``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
company_name             String    必须                      公司名称
phone                    String    可选                      固定电话
url                      String    可选                      公司网址
country_id               Integer   必须                      国家ID
province_id              Integer   必须                      省ID
city_id                  Integer   可选                      市ID
area_id                  Integer   可选                      区域ID
street_address           String    必须                      详细地址
company_qualification    Array     必须                      公司资质ID
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
       "company_name":"京东", "url":"https://www.jd.com", "country_id":1,"province_id":1,"city_id":1,"area_id":2,"street_address":"中南海","phone":"0314-4567891","company_qualification":[1,2,9]
    }

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
            "message": "Authenticate failed!"
        },
        "success": false
    }

添加或修改商家品牌信息
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/authenticate_brand_info``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
product_scope            Integer   可选           1          商品范畴，1、原创商品，由本人或团队独立思考设计；2、十年老件；3、授权贩售，由设计师或者设计师代理经销的商品；4、其他
other_scope              String    可选                      其他范畴
brand_name               String    必须                      品牌名称
sale_platform            Array     可选                      上线平台名称
link                     Array     可选                      上线平台链接
product_category         String    必须                      商品所属类别
patent                   Bool      可选       False          品牌商品是否有专利
patent_file              Array     可选                      专利文件ID
packaging                Bool      可选       False          是否提供包装
packaging_file           Array     可选                      包装文件ID
attachments              Array     必须                      原创商品图片ID
product_price            Array     必须                      商品价格范围
secured_trade            Bool      必选        False         是否成为消保人
label_libraries          Array     可选                      商品标签ID
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
          "product_category":"无人机","attachments":[1,2,3,4,5,9],"product_price":[22,99], "sale_platform":["京东","淘宝","天猫"],"product_scope":1, "brand_name":"jkss ","link":["https://www.taobao.com","https://www.jingdong.com","https://www.tianmao.com"],"patent":true,"patent_file":[1,2,9],"packaging":true,"packaging_file":[2,3,9],"label_libraries":[1, 2,3], "secured_trade":true
    }

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
            "message": "Authenticate failed!"
        },
        "success": false
    }


获取认证信息
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/authenticate``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "area": "",
            "area_id": 0,
            "areacode": null,
            "attachments": [
                {
                    "created_at": null,
                    "filename": "a",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                    "id": 1,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"
                }
            ],
            "avatar": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
            "avatar_id": 1,
            "brand_name": "jkss ",
            "city": "北京",
            "city_id": 1,
            "company_name": null,
            "company_qualification": [],
            "country": "中国",
            "country_id": 1,
            "customized": true,
            "email": "45668794@qq.com",
            "error_content": "",
            "front_card_photo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
            "front_card_photo_id": 1,
            "holding_card_photo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539oo.jpg",
            "holding_card_photo_id": 3,
            "id": 32,
            "id_card": "13082119921226801x",
            "label_libraries": [],
            "link": [
                "https://www.taobao.com",
                "https://www.jingdong.com",
                "https://www.tianmao.com"
            ],
            "mobile": "13645647895",
            "name": "毛爷",
            "other_scope": "",
            "own_brand": false,
            "packaging": true,
            "packaging_file": [
                {
                    "created_at": null,
                    "filename": "e",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                    "id": 2,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
                }
            ],
            "patent": true,
            "patent_file": [
                {
                    "created_at": null,
                    "filename": "a",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                    "id": 1,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"
                }
            ],
            "phone": "",
            "product_category": "无人机",
            "product_price": "22,99",
            "product_scope": 1,
            "province": "北京",
            "province_id": 1,
            "qq": "",
            "reverse_card_photo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
            "reverse_card_photo_id": 2,
            "sale_platform": [
                "京东",
                "淘宝",
                "天猫"
            ],
            "secured_trade": true,
            "status": 4,
            "street_address": "天安门",
            "urgent_contact_mobile": null,
            "urgent_contact_name": null,
            "url": null,
            "user_identity": 11,
            "user_type": 3,
            "wechat": null
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

删除用户认证缓存信息
--------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/delete_authenticate_info``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
authenticate_id   Integer   必须                  用户认证ID
user_type         Integer   必须                  用户类型
===============  ========  =========  ========  ====================================

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


返回审核状态
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/get_authenticate_status``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
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

签署或修改或续签合同
---------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/contract``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
second_party      String    必须                  乙方
country_id        Integer   必须                  国家ID
province_id       Integer   必须                  省ID
city_id           Integer   可选                  市ID
area_id           Integer   可选                  区域ID
street_address    String    必须                  详细地址
name              String    必须                  联系人
areacode          String    可选        +86       区号
mobile            String    必须                  手机号
email             String    必须                  邮箱
bank_name         String    必须                  银行名称
username          String    必须                  户名
bank_addr         String    必须                  开户行
account           String    必须                  账号
===============  ========  =========  ========  ====================================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {"second_party":"京东商城","country_id":1,"province_id":1,"city_id":1,"area_id":5,"street_address":"中南海","name":"马化腾","areacode":"+86","mobile":"13004578966","email":"8888888@qq.com","bank_name":"中国银行", "username":"雷军","bank_addr":"朝阳区酒仙桥支行", "account":"6214865188793549"}

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "account": "6214865188793549",
            "area": "",
            "area_id": null,
            "areacode": "+86",
            "attachment_id": 0,
            "bank_addr": "朝阳区酒仙桥支行",
            "bank_name": "中国银行",
            "begin_at": 0,
            "city": "北京",
            "city_id": 1,
            "contract_sn": "MT201807036128",
            "country": "中国",
            "country_id": 1,
            "email": "8888888@qq.com",
            "end_at": 0,
            "id": 1,
            "master_uid": 2,
            "mobile": "13004578966",
            "name": "马化腾",
            "province": "北京",
            "province_id": 1,
            "second_party": "京东商城",
            "status": 2,
            "street_address": null,
            "username": "雷军"
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
            "message": "请输入开户银行"
        },
        "success": false
    }


获取合同信息
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/contract``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "account": "6214865188793549",
            "area": "",
            "area_id": null,
            "areacode": "+86",
            "attachment_id": 0,
            "bank_addr": "朝阳区酒仙桥支行",
            "bank_name": "中国银行",
            "begin_at": 1530609462,
            "city": "北京",
            "city_id": 1,
            "contract_sn": "MT201807036128",
            "country": "中国",
            "country_id": 1,
            "email": "8888888@qq.com",
            "end_at": 1562145462,
            "id": 1,
            "master_uid": 2,
            "mobile": "13004578966",
            "name": "马化腾",
            "province": "北京",
            "province_id": 1,
            "second_party": "京东商城",
            "status": 2,
            "street_address": null,
            "username": "雷军"
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

确认签署合同
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/affirm_contract``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
begin_at          Integer    可选                  合同签署日期
end_at            Integer    可选                  合同结束日期
authorizer        String     必须                  合同签字人
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "account": "6214865188793549",
            "area": "",
            "area_id": null,
            "areacode": "+86",
            "attachment_id": 0,
            "bank_addr": "朝阳区酒仙桥支行",
            "bank_name": "中国银行",
            "begin_at": 1530609462,
            "city": "北京",
            "city_id": 1,
            "contract_sn": "MT201807036128",
            "country": "中国",
            "country_id": 1,
            "email": "8888888@qq.com",
            "end_at": 1562145462,
            "id": 1,
            "master_uid": 2,
            "mobile": "13004578966",
            "name": "马化腾",
            "province": "北京",
            "province_id": 1,
            "second_party": "京东商城",
            "status": 2,
            "street_address": null,
            "username": "雷军"
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


编辑商家基本信息
-----------------

接口说明
~~~~~~~~~~~~~~


* API接口请求地址：``/users/basic_info``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
username         String      必须                 用户名
avatar_id        Integer     必须                 用户头像ID
gender           Integer     可选          0      性别; 0女1男
date             String      可选                 出生日期
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "about_me": "好人",
            "area": "",  // 区域
            "area_id": 0,
            "avatar": "http://0.0.0.0:9000/_uploads/photos/static/img/default-logo-180x180.png",  // 头像url
            "avatar_id": 1,  // 头像ID
            "city": "北京",  // 城市
            "city_id": 1,
            "country": "中国", // 国家
            "country_id": 1,
            "created_at": 1532055457,
            "date": "2000-02-02",  // 生日
            "description": null,
            "email": "13001179400",
            "gender": 0,  // 性别
            "last_seen": 1532055457,
            "mail": "4568794@qq.com",  // 邮箱
            "master_uid": 2,
            "mobile": "+86-13645647894",
            "phone": "0134-78945612",  // 固话
            "province": "北京",  // 省份
            "province_id": 1,
            "street_address": "天安门",  // 详细地址
            "uid": "17048395612",
            "user_areacode": [
                "+86",  // 个人资料中区号
                "13645647894"  // 个人资料中手机号
            ],
            "username": "张飞"  // 用户名
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


编辑商家联系信息
-----------------

接口说明
~~~~~~~~~~~~~~


* API接口请求地址：``/users/contact_info``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
country_id              Integer      必须                  国家ID
province_id             Integer      必须                  省ID
city_id                 Integer      可选                  市ID
area_id                 Integer      可选                  区域ID
street_address          String       必须                  详细地址
areacode                String       可选          +86     区号
mobile                  String       必须                  手机号
phone                   String       可选          0       座机号
mail                    String       必须                  邮箱
verify_code             String       可选                  手机验证码
email_verify_code       String       可选                  邮箱验证码
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {"country_id":1,"province_id":1,"city_id":1,"street_address":"天安门","mobile":"13645647894","mail":"4568794@qq.com"}

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "about_me": "好人",
            "area": "",
            "area_id": 0,
            "areacode": "+86",
            "avatar": "http://0.0.0.0:9000/_uploads/photos/static/img/default-logo-180x180.png",
            "avatar_id": 1,
            "city": "北京",
            "city_id": 1,
            "country": "中国",
            "country_id": 1,
            "created_at": 1532055457,
            "date": "2000-02-02",
            "description": null,
            "email": "13001179400",
            "gender": 0,
            "last_seen": 1532055457,
            "mail": "4568794@qq.com",
            "master_uid": 2,
            "mobile": "+86-13645647894",
            "phone": "0134-78945612",  // 固话
            "province": "北京",
            "province_id": 1,
            "street_address": "天安门",
            "uid": "17048395612",
            "user_areacode": [
                "+86",  // 个人资料中区号
                "13645647894"  // 个人资料中手机号
            ],
            "username": "张飞"
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


获取商家个人信息
-----------------

接口说明
~~~~~~~~~~~~~~


* API接口请求地址：``/users/supplier_info``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript


    {
        "data": {
            "about_me": "好人",
            "area": "",  // 区域
            "area_id": 0,
            "avatar": "http://0.0.0.0:9000/_uploads/photos/static/img/default-logo-180x180.png",  // 头像url
            "avatar_id": 1,  // 头像ID
            "city": "北京",  // 城市
            "city_id": 1,
            "country": "中国", // 国家
            "country_id": 1,
            "created_at": 1532055457,
            "date": "2000-02-02",  // 生日
            "description": null,
            "email": "13001179400",
            "gender": 0,  // 性别
            "last_seen": 1532055457,
            "mail": "4568794@qq.com",  // 邮箱
            "master_uid": 2,
            "mobile": "+86-13645647894",
            "phone": "0134-78945612",  // 固话
            "province": "北京",  // 省份
            "province_id": 1,
            "street_address": "天安门",  // 详细地址
            "uid": "17048395612",
            "user_areacode": [
                "+86",  // 个人资料中区号
                "13645647894"  // 个人资料中手机号
            ],
            "username": "张飞"  // 用户名
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

上传商品专利附件
-----------------

接口说明
~~~~~~~~~~~~~~


* API接口请求地址：``/users/patent_file``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
patent_file       Array      必须                  专利附件ID
===============  ========  =========  ========  ====================================

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
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }

获取缴纳保证金页面
---------------------

接口说明
~~~~~~~~~~~~~~


* API接口请求地址：``/users/deposit_page``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "already_pay": 500,  // 已支付金额
            "also_need_pay": 500, // 还需支付金额
            "need_pay": "1000",  // 总需支付金额
            "pay_at": null, // 支付时间
            "pay_way": 1, // 支付方式: 1、微信；2：支付宝；3、银联；
            "product_price": "100,1000",  // 商品价格区间
            "secured_trade": true, // 是否成为消保人
            "status": 1  // 支付状态: 1、部分缴纳；-1：未缴纳；2、全部缴纳；
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

缴纳或补缴保证金
-----------------

接口说明
~~~~~~~~~~~~~~


* API接口请求地址：``/users/deposit``
* API接口请求方法：``GET``
* API接口用户授权：``POST``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
current_pay       Number      必须                当次缴纳金额
need_pay          Number      必须                需缴纳金额
already_pay       Number      必须                已缴纳金额
pay_way           Number      必须                支付方式：1、微信；2：支付宝；3、银联；
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "already_pay": 500.9,
            "id": 1,
            "master_uid": 2,
            "need_pay": 1000,
            "pay_at": 1530455722,
            "pay_way": 1,
            "status": 1
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript
