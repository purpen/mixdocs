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
          "area": "四环至五环之间",
          "city": "北京市",
          "first_name": "田",
          "full_name": "田帅",
          "is_default": false,
          "last_name": "帅",
          "mobile": "18610230451",
          "phone": "01084599328",
          "province": "北京",
          "rid": "57501684",
          "street_address": "751设计广场",
          "street_address_two": null,
          "town": "朝阳区",
          "zipcode": null
        },
        ...
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
        "area": "四环至五环之间",
        "city": "北京市",
        "first_name": "田",
        "full_name": "田帅",
        "is_default": false,
        "last_name": "帅",
        "mobile": "18610230451",
        "phone": "01084599328",
        "province": "北京",
        "rid": "58237496",
        "street_address": "751设计广场",
        "street_address_two": null,
        "town": "朝阳区",
        "zipcode": null
      },
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }


默认收货地址
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
        "area": "四环至五环之间",
        "city": "北京市",
        "first_name": "田",
        "full_name": "田帅",
        "is_default": true,
        "last_name": "帅",
        "mobile": "18610230451",
        "phone": "01084599328",
        "province": "北京",
        "rid": "5758463019",
        "street_address": "751设计广场",
        "street_address_two": null,
        "town": "朝阳区",
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
province_id             Number      必需                     省市
city_id                 Number      必需                     城区
town_id                 Number      可选                     镇/地区
area_id                 Number      可选                     村/区域
street_address          String      必需                     详细街道
street_address_two      String      可选
zipcode                 Number      可选                     邮编
is_default              Bool        可选        False        是否默认地址
is_overseas             Bool        可选        False        是否海外地址
user_custom_id          Integer     可选                     海关信息id
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": {
        "area": "四环至五环之间",
        "city": "北京市",
        "first_name": "田",
        "full_address": "北京顺义区光明街道",
        "full_name": "田帅",
        "is_default": true,
        "is_overseas": false,
        "last_name": "帅",
        "mobile": "18610230451",
        "phone": "01084599328",
        "province": "北京",
        "rid": "5748231905",
        "street_address": "751设计广场",
        "street_address_two": null,
        "town": "朝阳区",
        "zipcode": "100015"
      },
      "status": {
        "code": 201,
        "message": "All created."
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

* API接口请求地址：``/address/<rid>``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

``备注`` 与新增收货地址参数一致，请参考 `新增收货地址`_ 参数说明


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": {
        "area": "四环至五环之间",
        "city": "北京市",
        "first_name": "田",
        "full_address": "北京顺义区光明街道",
        "full_name": "田小北",
        "is_default": true,
        "is_overseas": false,
        "last_name": "小北",
        "mobile": "18610230451",
        "phone": "01084599328",
        "province": "北京",
        "rid": "5748231905",
        "street_address": "751设计广场",
        "street_address_two": null,
        "town": "朝阳区",
        "zipcode": "100015"
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


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": {
        "k_1_0": [
          {
            "name": "北京",
            "pid": 0,
            "rid": 1,
            "sort_by": 1,
            "status": true
          },
          {
            "name": "天津",
            "pid": 0,
            "rid": 8,
            "sort_by": 1,
            "status": true
          },
          {
            "name": "河北省",
            "pid": 0,
            "rid": 9,
            "sort_by": 1,
            "status": true
          },
          ...
        ],
        "k_2_1": [
          {
            "name": "北京市",
            "pid": 1,
            "rid": 3,
            "sort_by": 1,
            "status": true
          }
        ],
        "k_3_3": [
          {
            "name": "朝阳区",
            "pid": 3,
            "rid": 4,
            "sort_by": 1,
            "status": true
          },
          {
            "name": "海淀区",
            "pid": 3,
            "rid": 6,
            "sort_by": 1,
            "status": true
          },
          ...
        ],
        "k_4_4": [
          {
            "name": "四环至五环之间",
            "pid": 4,
            "rid": 5,
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
----------------
获取全部省市列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/places/provinces``
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
          "name": "北京",
          "pid": 0,
          "rid": 1,
          "sort_by": 1,
          "status": true
        },
        {
          "name": "天津",
          "pid": 0,
          "rid": 8,
          "sort_by": 1,
          "status": true
        },
        ...
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


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": [
        {
          "name": "北京市",
          "pid": 1,
          "rid": 3,
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


全部区镇列表
----------------
获取全部区镇列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/places/towns`` or ``/places/<pid>/towns`` <pid 可选父级ID>
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
          "name": "朝阳区",
          "pid": 3,
          "rid": 4,
          "sort_by": 1,
          "status": true
        },
        {
          "name": "海淀区",
          "pid": 3,
          "rid": 6,
          "sort_by": 1,
          "status": true
        },
        ...
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


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
      "data": [
        {
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


验证用户海关信息是否存在
----------------
验证用户海关信息是否存在

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/address/exists_custom``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "exists": true
        },
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
            "id_card": "13278989898",
            "id_card_back": 2,
            "id_card_front": 1,
            "user_id": 1
        },
        "status": {
            "code": 201,
            "message": "All created."
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
            "id_card": "13278989898",
            "id_card_back": 2,
            "id_card_front": 1,
            "user_id": 1
        },
        "status": {
            "code": 201,
            "message": "All created."
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

