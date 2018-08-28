=============
用户认证模块
=============


用户登录
-------------
**登录成功后，返回的token请妥善保存，以后需要登录访问的接口，请务必带上token参数。**


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/login``
* API接口请求方法：``POST``


请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
email           String    必须                 登录账号
password        String    必须                 登录密码
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

正确结果格式::

    {
        "data": {
            "created_at": 1533179299,
            "expiration": 2592000,
            "is_small_b": true, // 是不是小b
            "is_first_login": false,
            "is_supplier": false, // 是不是商家
            "store_rid": "97958360",  // 店铺id
            "token": "eyJhbGciOiJIUzI1NiIsImlhdCI6MTUzMzE3OTI5OSwiZXhwIjoxNTM1NzcxMjk5fQ.eyJpZCI6Mn0.oVhyK3aLIRU9WpqF3wfHYm-fMIVGwYZBUyqs2C3GEns"
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
        "message": "Email or Password is error!"
      },
      "success": false
    }


商家登录后台
-------------
``注意`` 此接口不支持签名验证


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/business_login``
* API接口请求方法：``POST``


请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
email           String    必须                 登录账号
password        String    必须                 登录密码
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~
``注意`` 登录成功后，返回的token请妥善保存，以后需要登录访问的接口，请务必带上token参数。

JSON数据格式

正确结果格式::

    {
        "data": {
            "created_at": 1523927428,
            "expiration": 2592000,
            "store_rid": "Q4209136",
            "token": "eyJhbGciOiJIUzI1NiIsIPuVGBJ7bUPTJklWBJZOdZXKzCVCfxQxHlhA"
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
        "message": "Email or Password is error!"
      },
      "success": false
    }

商家换取授权Token
-------------------
``注意`` 此接口不支持签名验证


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/exchange_token``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
store_rid       String    必须                 登录账号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~
``注意`` 成功返回后，返回的key/access_token请妥善保存至本地，丢失或过期后需再次登录换取。


正确结果格式::

    {
        "data": {
            "access_token": "cfe49b2ddaa797a5884ecc583137bb58706d677b",
            "app_key": "sNcMxUrRLzfiGnZ2hd4E",
            "store": {
                "areacode": null,
                "begin_date": "",
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
                "delivery_date": "",
                "delivery_province": "",
                "delivery_province_id": 0,
                "description": null,
                "detail": "",
                "distribution_type": 0,
                "end_date": "",
                "fans_count": 0,
                "is_closed": false,
                "logo": "http://kg.erp.taihuoniao.com",
                "mobile": null,
                "name": "淘宝",
                "pattern": 1,
                "phone": null,
                "province": "",
                "province_id": 0,
                "rid": "98049276",
                "status": 1,
                "tag_line": null,
                "type": 1
            }
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
        "code": 403,
        "message": "店铺未设置授权信息!"
      },
      "success": false
    }


用户注册
-------------
用户公开注册接口


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/register``
* API接口请求方法：``POST``


请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
areacode        String    可选        +86      区号
verify_code     String    必须                 手机验证码
email           String    必须                 登录账号 - 必须保持唯一
username        String    可选                 用户名/昵称 - 必须保持唯一
password        String    必须                 登录密码
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

正确结果格式::

    {
      "status": {
        "code": 201,
        "message": "All created."
      },
      "success": true
    }

错误结果格式::

    {
      "status": {
        "code": 400,
        "message": "Email already exist!"
      },
      "success": false
    }


获取Token
-------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/token``
* API接口请求方法：``POST``


请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
email           String    必须                 登录账号
password        String    必须                 登录密码
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

正确结果格式::

    {
      "data": {
        "expiration": 7200,
        "token": "eyJhbGciOiJIUzI1rcrRWZlkG4prQC2HsluIzpekrGnd7_MtLlA"
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
        "code": 401,
        "message": "Unauthorized access."
      },
      "success": false
    }

用户退出
-------------
``注意`` 收到请求回结果后，客户端同步清空缓存token

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/logout``
* API接口请求方法：``POST``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

正确结果格式::

    {
      "status": {
        "code": 401,
        "message": "Logout"
      },
      "success": true
    }


忘记密码
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/find_pwd``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
areacode        String    可选        +86      区号
verify_code     String    必须                 手机验证码
email           String    必须                 手机号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "is_user": true  // 是不是用户
            "areacode": "+86",
            "email": "13001179400"
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
            "message": "短信验证码错误"
        },
        "success": false
    }

重置密码
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/modify_pwd``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

==================  ========  =========  ========  ====================================
名称                 类型      是否必须    默认值     描述说明
==================  ========  =========  ========  ====================================
email                String    必须                 手机号
password             String    必须                 密码
affirm_password      String    必须                 确认密码
==================  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "created_at": 1532523429,
            "expiration": 2592000,
            "token": "eyJhbGciOiJIUzI1NiIsImlhdCI6MTUzMjUyMzQyOSwiZXhwIjoxNTM1MTE1NDI5fQ.eyJpZCI6NH0.d2Jza6ZRbPuvD6JuICCELHJd5F31e8HNMo5dsJY5Tuk"
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
            "message": "短信验证码错误"
        },
        "success": false
    }

app注册
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/app_register``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
areacode        String    可选        +86      区号
email           String    必须                 手机号
verify_code     String    必选                 验证码
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "areacode": "+86",
            "email": "13001179411"
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
            "message": "手机号未设置或格式有误"
        },
        "success": false
    }

设置密码
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/set_password``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

==================  ========  =========  ========  ====================================
名称                 类型      是否必须    默认值     描述说明
==================  ========  =========  ========  ====================================
areacode             String    可选        +86      区号
email                String    必须                 手机号
password             String    必须                 密码
affirm_password      String    必须                 确认密码
==================  ========  =========  ========  ====================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "created_at": 1532522531,
            "expiration": 2592000,
            "token": "eyJhbGciOiJIUzI1NiIsImlhdCI6MTUzMjUyMjUzMSwiZXhwIjoxNTM1MTE0NTMxfQ.eyJpZCI6MTZ9._yfN5fiiN1hsn8kZttvHEHYwL_KbUEK1RljcLTHm6_I"
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
            "message": "两次输入密码不一致, 请重新输入"
        },
        "success": false
    }

app动态登陆
-------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/app_dynamic_login``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

==================  ========  =========  ========  ====================================
名称                 类型      是否必须    默认值     描述说明
==================  ========  =========  ========  ====================================
areacode             String    可选        +86      区号
email                String    必须                 手机号
verify_code          String    必须                 验证码
==================  ========  =========  ========  ====================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "avatar": "http://0.0.0.0:9000/_uploads/photos/static/img/default2-logo-180x180.png",  // 头像
            "created_at": 1533178967,
            "expiration": 2592000,
            "is_small_b": false,  // 是不是小b
            "is_first_login": false,
            "is_supplier": false,  // 是不是商家
            "mobile": "+86-13645647894",
            "store_rid": "",  // 店铺id
            "token": "eyJhbGciOiJIUzI1NiIsImlhdCI6MTUzMzE3ODk2NywiZXhwIjoxNTM1NzcwOTY3fQ.eyJpZCI6Mn0.YGTBoGb8OZS_S98OOwviDA9fwZC8Brni8mIAiGFzRq4",
            "uid": "17048395612",
            "username": "wdd"  // 用户名
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
            "message": "验证码已过期"
        },
        "success": false
    }


获取手机号地区编码
--------------------
获取手机号地区编码

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/area_code``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选                   每页数量，默认全返回
status       Integer   可选          2         是否开通 0、不开通 1、开通 2、全部
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "area_codes": [
                {
                    "areacode": "+853",  // 地区手机区号
                    "en_name": "macao",  // 地区英文名
                    "id": 3,  // 地区id
                    "name": "中国澳门",  // 地区名称
                    "status": true  // 是否开通

                }
            ],
            "count": 3,
            "next": null,
            "prev": "http://0.0.0.0:9000/api/v1.0/auth/area_code?page=2"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



首次注册后完善个人资料
-----------------------


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/auth/complete_info``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
avatar_id     Integer    必须                   头像ID
username      String     必须                   用户名
date          String     可选                   生日;格式2000-02-02
gender        Integer    可选         0         性别;0女1男
===========  ========  =========  ========  ====================================

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
            "code": 400,
            "message": "请先上传头像"
        },
        "success": false
    }


