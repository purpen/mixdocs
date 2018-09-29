=================
公用接口模块
=================

幻灯图列表
-----------------
获取某个推荐位幻灯图列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/common/slides``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
spot         String    必需                  位置编号
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
      "data": {
        "slides": [
          {
            "description": "情人节",
            "image": "_uploads/photos/180104/d27aae678ce6652.jpg",
            "link": "http://www.mi.com",
            "rid": 7,
            "sort_order": 3,
            "status": true,
            "title": "情人节",
            "type": 1
          },
          ...
        ]
      },
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }


搜索关键词历史
----------------------
获取历史搜索过的关键词列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/search/history``
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
            "count": 1,
            "next": true,
            "prev": false,
            "search_items": [
                {
                    "query_word": "电源",
                    "search_at": 1520149158,
                    "search_times": 1,
                    "total_count": 0
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


核心平台--搜索关键词历史
----------------------------
获取核心平台用户搜索关键词记录

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/core_platforms/search/history``
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
            "count": 1,
            "next": true,
            "prev": false,
            "search_items": [
                {
                    "query_word": "电源",
                    "search_at": 1520149158,
                    "search_times": 1,
                    "total_count": 0
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


核心平台--热门搜索
----------------------------
获取一周内搜索次数最多的6个关键词

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/core_platforms/search/week_hot``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 1,
            "next": true,
            "prev": false,
            "search_items": [
                {
                    "query_word": "电源",
                    "search_at": 1520149158,
                    "search_times": 1,
                    "total_count": 0
                },
                {
                    "query_word": "电脑",
                    "search_at": 1534245501,
                    "search_times": 1,
                    "total_count": 12
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


核心平台--热门推荐
----------------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/core_platforms/search/hot_recommend``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "hot_recommends": [
                {
                    "recommend_cover": "设置的封面图",
                    "recommend_cover_id": "封面图编号",
                    "recommend_id": "热门推荐编号",
                    "recommend_title": "设置的标题",
                    "target_type": "1=商品, 2=店铺",
                    "店铺基本信息, 参考店铺说明..."
                },
                {
                    "recommend_cover": "设置的封面图",
                    "recommend_cover_id": "封面图编号",
                    "recommend_id": "热门推荐编号",
                    "recommend_title": "设置的标题",
                    "target_type": "1=商品, 2=店铺",
                    "商品基本信息, 参考店铺说明..."
                },
                {
                    "recommend_cover": "设置的封面图",
                    "recommend_cover_id": "封面图编号",
                    "recommend_id": "热门推荐编号",
                    "recommend_title": "设置的标题",
                    "target_type": "1=商品, 2=店铺",
                    "商品基本信息, 参考店铺说明..."
                },
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

核心平台--搜索
----------------------------
搜索全平台商品/品牌馆/用户

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/core_platforms/search``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
qk           String    必须                   关键词
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 3,
            "next": false,
            "prev": true,
            "qk": "商品分享",
            "search_items": [
                {
                    "matches": [
                        {
                            "match": "false, 该关键词是否匹true为匹配, false则没匹配到",
                            "word": "商品"
                        },
                        {
                            "match": true,
                            "word": "分享"
                        }
                    ],
                    "name": "商品名",
                    "serial_no": "8208961374",
                    "target_type": "1=商品, 2=原创品牌设计馆, 3=用户",
                    "title": "商品"
                },
                {
                    "matches": [
                        {
                            "match": false,
                            "word": "商品"
                        },
                        {
                            "match": true,
                            "word": "分享"
                        }
                    ],
                    "name": "品牌馆名",
                    "serial_no": "19620734815",
                    "target_type": 2,
                    "title": "品牌馆"
                }
                {
                    "matches": [
                        {
                            "match": false,
                            "word": "商品"
                        },
                        {
                            "match": true,
                            "word": "分享"
                        }
                    ],
                    "name": "用户名",
                    "serial_no": "19620734815",
                    "target_type": 3,
                    "title": "用户"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


核心平台--搜索商品列表
----------------------------
获取搜索核心平台的商品列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/core_platforms/search/products``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
page                    Number      可选         1         当前页码
per_page                Number      可选         10        每页数量
cids                    Number      可选                   分类Id, 多个用,隔开
status                  Number      可选         1         商品状态 -1: 所有 0:仓库中; 1:出售中; 2:下架中; 3:已售罄
qk                      String      必须                   搜索关键字
min_price               Number      可选                   价格区间： 最小价格
max_price               Number      可选                   价格区间： 最大价格
sort_type               Number      可选         0         排序: 1=综合排序, 2=价格由低至高, 3=价格由高至低
is_free_postage         Number      可选         0         是否包邮: 0=全部, 1=包邮
is_preferential         Number      可选         0         是否特惠: 0=全部, 1=特惠
is_custom_made          Number      可选         0         是否可定制: 0=全部, 1=可定制
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: products/product_list.js
    :language: javascript


核心平台--搜索商品数量
----------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/core_platforms/search/products/count``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
cids                    Number      可选                   分类Id, 多个用,隔开
status                  Number      可选         1         商品状态 -1: 所有 0:仓库中; 1:出售中; 2:下架中; 3:已售罄
qk                      String      必须                   搜索关键字
min_price               Number      可选                   价格区间： 最小价格
max_price               Number      可选                   价格区间： 最大价格
is_free_postage         Number      可选         0         是否包邮: 0=全部, 1=包邮
is_preferential         Number      可选         0         是否特惠: 0=全部, 1=特惠
is_custom_made          Number      可选         0         是否可定制: 0=全部, 1=可定制
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 16
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


核心平台--搜索店铺列表
----------------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/core_platforms/search/stores``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
page                    Number      可选         1         当前页码
per_page                Number      可选         10        每页数量
qk                      String      可选                   搜索关键字
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "next": false,
            "prev": false,
            "qk": "搜索关键字",
            "stores": [
                {
                    店铺基本信息..., 附带下面额外参数
                    "is_follow_store": "true, 是否关注过店铺, true表示关注过",
                    "product_count": 19,
                    "products": [
                        "店铺中10个商品信息"
                    ]
                },
                {
                    店铺基本信息..., 附带下面额外参数
                    "is_follow_store": "false, 是否关注过店铺, true表示关注过",
                    "product_count": 2,
                    "products": [
                        "店铺中10个商品信息"
                    ]
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


核心平台--搜索用户列表
----------------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/core_platforms/search/users``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
page                    Number      可选         1         当前页码
per_page                Number      可选         10        每页数量
qk                      String      可选                   搜索关键字
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 2,
            "next": false,
            "prev": false,
            "qk": "搜索关键字",
            "users": [
                {
                    用户基本信息..., 附带下面额外参数
                    "follow_status": "0=未关注, 1=已关注, 2=互相关注",
                    "user_like_counts": 6,
                    "wish_list_counts": 2
                },
                {
                    用户基本信息..., 附带下面额外参数
                    "is_follow_store": "0=未关注, 1=已关注, 2=互相关注",
                    "user_like_counts": 15,
                    "wish_list_counts": 21
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


小程序绑定手机号发送验证码
---------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/wx_bind_mobile_verify_code``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
mobile        String    必须                  手机号
area_code     String    可选         +86      区号
===========  ========  =========  ========  ====================================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {"mobile":"1760035156", "area_code":"+86"}

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "phone_verify_code": "5702"
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
            "message": "手机号未设置或有误"
        },
        "success": false
    }


注册发送短信验证码
--------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/register_verify_code``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
mobile        String    必须                  手机号
area_code     String    可选         +86      区号
===========  ========  =========  ========  ====================================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {"mobile":"1760035156", "area_code":"+86"}

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "phone_verify_code": "5702"
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
            "message": "手机号未设置或有误"
        },
        "success": false
    }

忘记密码发送短信验证码
-----------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/find_pwd_verify_code``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
mobile        String    必须                  手机号
area_code     String    可选         +86      区号
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "phone_verify_code": "5702"
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
            "message": "该用户不存在，请核对"
        },
        "success": false
    }

动态登陆发送短信验证码
----------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/dynamic_login_verify_code``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
mobile        String    必须                  手机号
area_code     String    可选         +86      区号
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "phone_verify_code": "5702"
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
            "message": "该用户不存在，请核对"
        },
        "success": false
    }

绑定银行卡发送短信验证码
-------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/edit_account_verify_code``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
mobile        String    必须                  手机号
area_code     String    可选         +86      区号
tail          String    必须                  银行卡后四位
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "phone_verify_code": "5702"
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
            "message": "手机号未设置或有误"
        },
        "success": false
    }

账户解除绑定银行卡发送短信验证码
---------------------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/remove_binding``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
mobile        String    必须                  手机号
area_code     String    可选         +86      区号
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "phone_verify_code": "5702"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

发送邮件验证码
-----------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/email_verify_code``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
email          String    必须                  邮箱
===========  ========  =========  ========  ====================================

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