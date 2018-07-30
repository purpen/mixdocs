==================
收货地址模块
==================


收货地址列表
----------------
获取某用户收货地址列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": [
            {
                "area": null,  // 区域
                "area_id": null,  // 区域oid
                "city": "北京",  // 城市
                "city_id": 1,  // 城市oid
                "country_id": 1,  // 国家id
                "first_name": "田",  // 姓
                "full_address": "北京北京大街",  // 地址
                "full_name": "田帅",  // 姓名
                "is_default": false,  // 是否默认
                "is_from_wx": false,  // 是否微信地址
                "is_overseas": false,  // 是否海外地址
                "last_name": null,  // 名
                "mobile": "13278989898",  // 手机
                "phone": null,  // 电话
                "province": "北京",  // 省
                "province_id": 1,  // 省oid
                "rid": "5254096781",  // 地址rid
                "street_address": "大街",  // 街道
                "street_address_two": null,  //
                "town": null,  // 镇
                "town_id": 0,  // 镇oid
                "user_custom": {  // 海关信息
                    "address_rid": "5126437908",
                    "id_card": "1232",
                    "id_card_back": {
                        "created_at": 1,
                        "filename": "1",
                        "filepath": "1",
                        "id": 1,
                        "type": 1,
                        "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                    },
                    "id_card_front": {
                        "created_at": 1,
                        "filename": "1",
                        "filepath": "1",
                        "id": 1,
                        "type": 1,
                        "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                    },
                    "user_id": 1
                },
                "zipcode": null
            }
        ],
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

收货地址详情
----------------
获取用户某条收货地址详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address/<rid>``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "area": null,  // 区域
            "area_id": null,  // 区域oid
            "city": "北京",  // 城市
            "city_id": 1,  // 城市oid
            "country_id": 1,  // 国家id
            "first_name": "田",  // 姓
            "full_address": "北京北京大街",  // 地址
            "full_name": "田帅",  // 姓名
            "is_default": false,  // 是否默认
            "is_from_wx": false,  // 是否微信地址
            "is_overseas": false,  // 是否海外地址
            "last_name": null,  // 名
            "mobile": "13278989898",  // 手机
            "phone": null,  // 电话
            "province": "北京",  // 省
            "province_id": 1,  // 省oid
            "rid": "5254096781",  // 地址rid
            "street_address": "大街",  // 街道
            "street_address_two": null,  //
            "town": null,  // 镇
            "town_id": 0,  // 镇oid
            "user_custom": {  // 海关信息
                "address_rid": "5126437908",
                "id_card": "1232",
                "id_card_back": {
                    "created_at": 1,
                    "filename": "1",
                    "filepath": "1",
                    "id": 1,
                    "type": 1,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                },
                "id_card_front": {
                    "created_at": 1,
                    "filename": "1",
                    "filepath": "1",
                    "id": 1,
                    "type": 1,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                },
                "user_id": 1
            },
            "zipcode": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


获取默认收货地址
----------------
获取某用户设置的默认收货地址

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address/is_default``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "area": null,  // 区域
            "area_id": null,  // 区域oid
            "city": "北京",  // 城市
            "city_id": 1,  // 城市oid
            "country_id": 1,  // 国家id
            "first_name": "田",  // 姓
            "full_address": "北京北京大街",  // 地址
            "full_name": "田帅",  // 姓名
            "is_default": false,  // 是否默认
            "is_from_wx": false,  // 是否微信地址
            "is_overseas": false,  // 是否海外地址
            "last_name": null,  // 名
            "mobile": "13278989898",  // 手机
            "phone": null,  // 电话
            "province": "北京",  // 省
            "province_id": 1,  // 省oid
            "rid": "5254096781",  // 地址rid
            "street_address": "大街",  // 街道
            "street_address_two": null,  //
            "town": null,  // 镇
            "town_id": 0,  // 镇oid
            "user_custom": {  // 海关信息
                "address_rid": "5126437908",
                "id_card": "1232",
                "id_card_back": {
                    "created_at": 1,
                    "filename": "1",
                    "filepath": "1",
                    "id": 1,
                    "type": 1,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                },
                "id_card_front": {
                    "created_at": 1,
                    "filename": "1",
                    "filepath": "1",
                    "id": 1,
                    "type": 1,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                },
                "user_id": 1
            },
            "zipcode": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


设置默认收货地址
----------------
更新某收货地址为默认收货地址

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address/<rid>/set_default``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }


新增收货地址
----------------
某用户新增收货地址

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须    默认值        描述说明
=====================  ==========  =========  ==========  =============================
first_name              String      必需                     姓
last_name               String      可选                     名
phone                   String      可选                     电话
mobile                  String      必需                     手机号码
country_id              Number      可选        1            国家id
province_id             Number      必需                     省oid
city_id                 Number      必需                     城区oid
town_id                 Number      可选                     镇/地区oid
area_id                 Number      可选                     村/区域oid
street_address          String      必需                     详细街道
street_address_two      String      可选
zipcode                 Number      可选                     邮编
is_default              Bool        可选        False        是否默认地址
is_overseas             Bool        可选        False        是否海外地址
id_card                 String      可选                     身份证号
id_card_front           Integer     可选                     身份证正面照片图片资源id
id_card_back            Integer     可选                     身份证背面照片图片资源id
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "area": null,  // 区域
            "area_id": null,  // 区域oid
            "city": "北京",  // 城市
            "city_id": 1,  // 城市oid
            "country_id": 1,  // 国家id
            "first_name": "田",  // 姓
            "full_address": "北京北京大街",  // 地址
            "full_name": "田帅",  // 姓名
            "is_default": false,  // 是否默认
            "is_from_wx": false,  // 是否微信地址
            "is_overseas": false,  // 是否海外地址
            "last_name": null,  // 名
            "mobile": "13278989898",  // 手机
            "phone": null,  // 电话
            "province": "北京",  // 省
            "province_id": 1,  // 省oid
            "rid": "5254096781",  // 地址rid
            "street_address": "大街",  // 街道
            "street_address_two": null,  //
            "town": null,  // 镇
            "town_id": 0,  // 镇oid
            "user_custom": {  // 海关信息
                "address_rid": "5126437908",
                "id_card": "1232",
                "id_card_back": {
                    "created_at": 1,
                    "filename": "1",
                    "filepath": "1",
                    "id": 1,
                    "type": 1,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                },
                "id_card_front": {
                    "created_at": 1,
                    "filename": "1",
                    "filepath": "1",
                    "id": 1,
                    "type": 1,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                },
                "user_id": 1
            },
            "zipcode": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

请求 **失败** 返回结果：

.. code-block:: javascript

    {
      "status": {
        "code": 400,
        "message": "Name can't empty!"
      },
      "success": false
    }

更新收货地址
----------------
某用户更新收货地址

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须    默认值        描述说明
=====================  ==========  =========  ==========  =============================
rid                     String      必需                     收货地址rid
first_name              String      必需                     姓
last_name               String      可选                     名
phone                   String      可选                     电话
mobile                  String      必需                     手机号码
country_id              Number      可选        1            国家id
province_id             Number      必需                     省oid
city_id                 Number      必需                     城区oid
town_id                 Number      可选                     镇/地区oid
area_id                 Number      可选                     村/区域oid
street_address          String      必需                     详细街道
street_address_two      String      可选
zipcode                 Number      可选                     邮编
is_default              Bool        可选        False        是否默认地址
is_overseas             Bool        可选        False        是否海外地址
id_card                 String      可选                     身份证号
id_card_front           Integer     可选                     身份证正面照片图片资源id
id_card_back            Integer     可选                     身份证背面照片图片资源id
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "area": null,  // 区域
            "area_id": null,  // 区域oid
            "city": "北京",  // 城市
            "city_id": 1,  // 城市oid
            "country_id": 1,  // 国家id
            "first_name": "田",  // 姓
            "full_address": "北京北京大街",  // 地址
            "full_name": "田帅",  // 姓名
            "is_default": false,  // 是否默认
            "is_from_wx": false,  // 是否微信地址
            "is_overseas": false,  // 是否海外地址
            "last_name": null,  // 名
            "mobile": "13278989898",  // 手机
            "phone": null,  // 电话
            "province": "北京",  // 省
            "province_id": 1,  // 省oid
            "rid": "5254096781",  // 地址rid
            "street_address": "大街",  // 街道
            "street_address_two": null,  //
            "town": null,  // 镇
            "town_id": 0,  // 镇oid
            "user_custom": {  // 海关信息
                "address_rid": "5126437908",
                "id_card": "1232",
                "id_card_back": {
                    "created_at": 1,
                    "filename": "1",
                    "filepath": "1",
                    "id": 1,
                    "type": 1,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                },
                "id_card_front": {
                    "created_at": 1,
                    "filename": "1",
                    "filepath": "1",
                    "id": 1,
                    "type": 1,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
                },
                "user_id": 1
            },
            "zipcode": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

请求 **失败** 返回结果：

.. code-block:: javascript

    {
      "status": {
        "code": 400,
        "message": "Name can't empty!"
      },
      "success": false
    }

删除收货地址
----------------
用户删除收货地址

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address/<rid>``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }


全部地点列表
----------------
一次获取全部地点列表，优化缓存结果

.. raw:: html

    <p class="text-danger">
        <small><span class="glyphicon glyphicon-star"></span></small>
        key格式组成：'k' + 层级 (layer) + 父级ID (pid), 客户端可以根据此格式获取数据。
    </p>

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/places``
* API接口请求方法：``GET``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
country_id             Integer      必需                       国家地区id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "k_1_None": [
                {
                    "area_scope": null, // 区域范围
                    "name": "北京",
                    "oid": 1,
                    "pid": null,
                    "sort_by": 1,
                    "status": true // 状态：显示 True; 隐藏 False
                },
                {
                    "area_scope": null,
                    "name": "山东",
                    "oid": 3,
                    "pid": null,
                    "sort_by": 1,
                    "status": true
                }
            ],
            "k_2_3": [
                {
                    "area_scope": null,
                    "name": "淄博",
                    "oid": 4,
                    "pid": 3,
                    "sort_by": 1,
                    "status": true
                },
                {
                    "area_scope": null,
                    "name": "济南",
                    "oid": 5,
                    "pid": 3,
                    "sort_by": null,
                    "status": true
                }
            ],
            "k_3_4": [
                {
                    "area_scope": null,
                    "name": "周村",
                    "oid": 6,
                    "pid": 4,
                    "sort_by": 1,
                    "status": true
                }
            ],
            "k_4_6": [
                {
                    "area_scope": null,
                    "name": "青年路",
                    "oid": 8,
                    "pid": 6,
                    "sort_by": 1,
                    "status": true
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


全部省市列表
--------------------
一次获取全部省市地点列表，优化缓存结果

.. raw:: html

    <p class="text-danger">
        <small><span class="glyphicon glyphicon-star"></span></small>
        key格式组成：'k' + 层级 (layer) + 父级ID (pid), 客户端可以根据此格式获取数据。
    </p>

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/places/provinces_cities``
* API接口请求方法：``GET``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
country_id             Integer      必需                       国家地区id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "k_1_None": [
                {
                    "area_scope": null,
                    "name": "北京",
                    "oid": 1,
                    "pid": null,
                    "sort_by": 1,
                    "status": true
                },
                {
                    "area_scope": null,
                    "name": "山东",
                    "oid": 3,
                    "pid": null,
                    "sort_by": 1,
                    "status": true
                }
            ],
            "k_2_3": [
                {
                    "area_scope": null,
                    "name": "济南",
                    "oid": 5,
                    "pid": 3,
                    "sort_by": null,
                    "status": true
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



全部省级列表
----------------
获取全部省级列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/places/provinces``
* API接口请求方法：``GET``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
country_id             Integer      必需                       国家地区id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": [
            {
                "area_scope": null,
                "name": "北京",
                "oid": 1,
                "pid": null,
                "sort_by": 1,
                "status": true
            },
            {
                "area_scope": null,
                "name": "山东",
                "oid": 3,
                "pid": null,
                "sort_by": 1,
                "status": true
            }
        ],
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

全部城市列表
----------------
获取全部城市列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/places/cities`` or ``/places/<pid>/cities`` <pid 可选父级ID>
* API接口请求方法：``GET``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
country_id             Integer      必需                       国家地区id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": [
            {
                "area_scope": null,
                "name": "济南",
                "oid": 5,
                "pid": 3,
                "sort_by": null,
                "status": true
            }
        ],
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


全部区镇列表
----------------
获取全部区镇列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/places/towns`` or ``/places/<pid>/towns`` <pid 可选父级ID>
* API接口请求方法：``GET``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
country_id             Integer      必需                       国家地区id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": [
        {
          "area_scope": null,
          "name": "朝阳区",
          "pid": 3,
          "rid": 4,
          "sort_by": 1,
          "status": true
        },
      ],
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }

全部村域列表
----------------
获取全部村域列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/places/areas`` or ``/places/<pid>/areas`` <pid 可选父级ID>
* API接口请求方法：``GET``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
country_id             Integer      必需                       国家地区id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": [
        {
          "area_scope": null,
          "name": "四环至五环之间",
          "pid": 4,
          "rid": 5,
          "sort_by": 1,
          "status": true
        }
        ...
      ],
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }

新增地址海关信息
----------------
某用户新增地址海关信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address/custom``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须    默认值        描述说明
=====================  ==========  =========  ==========  =============================
address_rid             String      必需                     收货地址rid
id_card                 String      必需                     身份证号
id_card_front           Integer     必需                     身份证正面照片图片资源id
id_card_back            Integer     必需                     身份证背面照片图片资源id
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "address_rid": "5608945713",  // 收货地址rid
            "id_card": "27812768766",  // 身份证号
            "id_card_back": {  // 身份证背面
                "created_at": 3,
                "filename": "3",
                "filepath": "3",
                "id": 3,
                "type": 3,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/3"
            },
            "id_card_front": {  // 身份证后面
                "created_at": 3,
                "filename": "3",
                "filepath": "3",
                "id": 3,
                "type": 3,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/3"
            },
            "user_id": 2  //
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


请求 **失败** 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 400,
            "message": "Create failed!"
        },
        "success": false
    }


更新地址海关信息
----------------
某用户更新地址海关信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address/custom``
* API接口请求方法：``PUT``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须    默认值        描述说明
=====================  ==========  =========  ==========  =============================
address_rid             String      必需                     地址rid
id_card                 String      可选                     身份证号
id_card_front           Integer     可选                     身份证正面照片图片资源id
id_card_back            Integer     可选                     身份证背面照片图片资源id
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "address_rid": "5608945713",  // 收货地址rid
            "id_card": "27812768766",  // 身份证号
            "id_card_back": {  // 身份证背面
                "created_at": 3,
                "filename": "3",
                "filepath": "3",
                "id": 3,
                "type": 3,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/3"
            },
            "id_card_front": {  // 身份证后面
                "created_at": 3,
                "filename": "3",
                "filepath": "3",
                "id": 3,
                "type": 3,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/3"
            },
            "user_id": 2  //
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

请求 **失败** 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }


删除地址海关信息
----------------
某用户删除地址海关信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address/custom``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须    默认值        描述说明
=====================  ==========  =========  ==========  =============================
address_rid             String      必需                     地址rid
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

请求 **失败** 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 404,
            "message": "Not Found"
        },
        "success": false
    }


获取用户收货地址海关信息
----------------------------
获取用户收货地址海关信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address/custom``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "address_rid": "5608945713",  // 收货地址rid
            "id_card": "27812768766",  // 身份证号
            "id_card_back": {  // 身份证背面
                "created_at": 3,
                "filename": "3",
                "filepath": "3",
                "id": 3,
                "type": 3,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/3"
            },
            "id_card_front": {  // 身份证后面
                "created_at": 3,
                "filename": "3",
                "filepath": "3",
                "id": 3,
                "type": 3,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/3"
            },
            "user_id": 2  //
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

