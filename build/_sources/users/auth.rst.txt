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
            "created_at": 1523607872,
            "expiration": 2592000,
            "token": "eyJhbGciOiJIUzI1NiL7Pxx5kfO-3vXsulI5K49K91z6chFdZvHFMt98"
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
``等待开放``


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


