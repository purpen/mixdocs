==================
物流运费模块
==================


获取快递鸟物流公司编码列表
---------------------------
获取物流公司的快递鸟编码

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/kdniao_code``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "kdniao_code": [
                {
                    "code": "ZTO",
                    "id": 1,
                    "name": "中通快递"
                },
                {
                    "code": "YTO",
                    "id": 2,
                    "name": "圆通速递"
                },
                {
                    "code": "EMS",
                    "id": 3,
                    "name": "EMS"
                },
                {
                    "code": "JD",
                    "id": 4,
                    "name": "京东物流"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


获取物流信息
----------------
获取商品物流实时信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/information``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
logistic_code          String        必需                      运单编号
kdn_company_code       String        必需                      快递鸟物流公司编码
=====================  ===========  ==========  ===========  ==============================

参考示例：

.. code-block:: javascript

    {
        "logistic_code":"1199965242414",
        "kdn_company_code":"EMS"
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "EBusinessID": "1302778",
            "LogisticCode": "1199965242414",
            "ShipperCode": "EMS",
            "State": "3",
            "Success": true,
            "Traces": [
                {
                    "AcceptStation": "天津市邮政速递物流公司武清区分公司崔黄口揽投部已收件（揽投员姓名：李静,联系电话:）",
                    "AcceptTime": "2018-05-21 07:46:00"
                },
                {
                    "AcceptStation": "已离开天津市邮政速递物流公司武清区分公司崔黄口揽投部，发往天津处理中心",
                    "AcceptTime": "2018-05-21 08:39:17"
                },
                {
                    "AcceptStation": "离开天津市 发往北京市",
                    "AcceptTime": "2018-05-21 20:35:42"
                },
                {
                    "AcceptStation": "到达  中国邮政速递物流股份有限公司北京市国货航航空邮件处 处理中心",
                    "AcceptTime": "2018-05-21 23:15:00"
                },
                {
                    "AcceptStation": "离开中国邮政速递物流股份有限公司北京市国货航航空邮件处 发往北京邮政速递安定门区域分公司北苑营投部",
                    "AcceptTime": "2018-05-22 05:15:05"
                },
                {
                    "AcceptStation": "北京邮政速递安定门区域分公司北苑营投部安排投递，预计23:59:00前投递（投递员姓名：韩方朋;联系电话：18519363520）",
                    "AcceptTime": "2018-05-22 07:54:02"
                },
                {
                    "AcceptStation": "投递并签收，签收人：他人收 超市",
                    "AcceptTime": "2018-05-22 12:49:50"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


添加物流公司信息
----------------
某商家添加物流公司信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/express``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
name                   String       必需                       模板名称
code                   String       必需                       物流公司编码
contact_name           String       必需                       联系人姓名
contact_mobile         String       可选                       联系人手机
contact_phone          String       可选                       联系人电话
description            String       可选                       描述
is_default             Bool         可选                       是否默认
customer_name          String       可选                       电子面单账号
customer_pwd           String       可选                       电子面单密码
send_site              String       可选                       发送网站
=====================  ===========  ==========  ===========  ==============================

参考示例：

.. code-block:: javascript

    {
        "name":"EMS",
        "code":"EMS",
        "contact_name":"田帅",
        "is_default":true
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "code": "EMS",
            "contact_mobile": null,
            "contact_name": "田帅",
            "contact_phone": null,
            "created_at": 1528703231,
            "customer_name": null,
            "customer_pwd": null,
            "description": null,
            "id": 6,
            "is_default": true,
            "name": "EMS",
            "send_site": null,
            "updated_at": 1528703231
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


修改物流公司信息
----------------
某商家修改物流公司信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/express``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    Integer      必需                       物流公司id
name                   String       可选                       模板名称
code                   String       可选                       物流公司编码
contact_name           String       可选                       联系人姓名
contact_mobile         String       可选                       联系人手机
contact_phone          String       可选                       联系人电话
description            String       可选                       描述
is_default             Bool         可选                       是否默认
customer_name          String       可选                       电子面单账号
customer_pwd           String       可选                       电子面单密码
send_site              String       可选                       发送网站
=====================  ===========  ==========  ===========  ==============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "code": "EMS",
            "contact_mobile": null,
            "contact_name": "用户",
            "contact_phone": null,
            "created_at": 1528703231,
            "customer_name": null,
            "customer_pwd": null,
            "description": null,
            "id": 6,
            "is_default": false,
            "name": "EMS",
            "send_site": null,
            "updated_at": 1528704875
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


返回错误格式：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }


查询物流公司列表
----------------
某商家查询物流公司列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/express``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "count": 3,
            "next": "http://0.0.0.0:9000/api/v1.0/logistics/express?page=2",
            "expresses": [
                {
                    "code": "EMS",
                    "contact_mobile": null,
                    "contact_name": "EMS",
                    "contact_phone": null,
                    "created_at": 1528703231,
                    "customer_name": null,
                    "customer_pwd": null,
                    "description": null,
                    "id": 6,
                    "is_default": false,
                    "name": "EMS",
                    "send_site": null,
                    "updated_at": 1528704875
                }
            ],
            "prev": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


删除物流公司信息
----------------
某商家删除物流公司信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/express``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    Integer      必需                       物流公司id
=====================  ===========  ==========  ===========  ==============================

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


返回错误格式：

.. code-block:: javascript

    {
        "status": {
            "code": 400,
            "message": "Freight template quote this information!" // 运费模板引用该信息
        },
        "success": false
    }


设置默认物流公司
----------------
某商家设置默认物流公司

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/express/set_default``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    Integer      必需                       物流公司id
=====================  ===========  ==========  ===========  ==============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "code": "EMS",
            "contact_mobile": null,
            "contact_name": "田帅",
            "contact_phone": null,
            "created_at": 1528439830,
            "customer_name": null,
            "customer_pwd": null,
            "description": null,
            "id": 5,
            "is_default": true,
            "name": "EMS",
            "send_site": null,
            "updated_at": 1528707342
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


返回错误格式：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }


添加运费模板信息
----------------
某商家添加运费模板信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/freight_template``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
name                   String        必需                      模板名称
express_id             Integer       必需                      物流公司id
pricing_method         Integer       可选          1           计价方式 1、按件数 2、按重量
first_item             Integer       可选          1           首件
first_weight           Numeric       可选          0           首重
first_amount           Numeric       可选          0           首费
continuous_item        Integer       可选          1           续件
continuous_weight      Numeric       可选          0           续费
continuous_amount      Numeric       可选          0           续重
place_ids              String        可选                      运送地区,多个地区逗号隔开
is_free                Bool          可选          False       是否包邮
is_default             Bool          可选          False       是否默认
=====================  ===========  ==========  ===========  ==============================

参考示例：

.. code-block:: javascript

    {
        "name":"模板一",
        "express_id":4,
        "place_ids":"1,2"
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "continuous_amount": 0,
            "continuous_item": 1,
            "continuous_weight": 0,
            "created_at": 1528708060,
            "express": "圆通",
            "first_amount": 0,
            "first_item": 1,
            "first_weight": 0,
            "id": 6,
            "is_default": false,
            "is_free": false,
            "name": "模板一",
            "place": [
                {
                    "name": "北京",
                    "oid": 1,
                    "pid": null,
                    "sort_by": 1,
                    "status": true
                },
                {
                    "name": "天津",
                    "oid": null,
                    "pid": null,
                    "sort_by": null,
                    "status": null
                }
            ],
            "pricing_method": 1
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


修改运费模板信息
----------------
某商家修改运费模板信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/freight_template``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    Integer       必需                      模板id
name                   String        可选                      模板名称
express_id             Integer       可选                      物流公司id
pricing_method         Integer       可选          1           计价方式 1、按件数 2、按重量
first_item             Integer       可选          1           首件
first_weight           Numeric       可选          0           首重
first_amount           Numeric       可选          0           首费
continuous_item        Integer       可选          1           续件
continuous_weight      Numeric       可选          0           续费
continuous_amount      Numeric       可选          0           续重
place_ids              String        可选                      运送地区,多个地区逗号隔开
is_free                Bool          可选          False       是否包邮
is_default             Bool          可选          False       是否默认
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "continuous_amount": 0,
            "continuous_item": 1,
            "continuous_weight": 0,
            "created_at": 1528708416,
            "express": "圆通",
            "first_amount": 0,
            "first_item": 1,
            "first_weight": 0,
            "id": 8,
            "is_default": true,
            "is_free": false,
            "name": "模板一",
            "place": [
                {
                    "name": "北京",
                    "oid": 1,
                    "pid": null,
                    "sort_by": 1,
                    "status": true
                }
            ],
            "pricing_method": 1
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


查询运费模板信息
----------------
某商家查询运费模板信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/freight_template``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript


    {
        "data": {
            "count": 8,
            "freight_template": [
                {
                    "continuous_amount": 0,
                    "continuous_item": 1,
                    "continuous_weight": 0,
                    "created_at": 1528708416,
                    "express": "圆通",
                    "first_amount": 0,
                    "first_item": 1,
                    "first_weight": 0,
                    "id": 8,
                    "is_default": true,
                    "is_free": false,
                    "name": "模板一",
                    "place": [
                        {
                            "name": "北京",
                            "oid": 1,
                            "pid": null,
                            "sort_by": 1,
                            "status": true
                        }
                    ],
                    "pricing_method": 1
                }
            ],
            "next": "http://0.0.0.0:9000/api/v1.0/logistics/freight_template?page=2",
            "prev": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


删除运费模板信息
----------------
某商家删除运费模板信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/freight_template``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    Integer       必需                      模板id
=====================  ===========  ==========  ===========  ==============================

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

返回错误格式：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }


设置默认运费模板
----------------
某商家设置默认运费模板

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/freight_template/set_default``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    Integer       必需                      模板id
=====================  ===========  ==========  ===========  ==============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "continuous_amount": 0,
            "continuous_item": 1,
            "continuous_weight": 0,
            "created_at": 1528708389,
            "express": "圆通",
            "first_amount": 0,
            "first_item": 1,
            "first_weight": 0,
            "id": 7,
            "is_default": true,
            "is_free": false,
            "name": "模板一",
            "place": [
                {
                    "name": "北京",
                    "oid": 1,
                    "pid": null,
                    "sort_by": 1,
                    "status": true
                }
            ],
            "pricing_method": 1
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


返回错误格式：

.. code-block:: javascript

    {
      "status": {
        "code": 404,
        "message": "Not Found"
      },
      "success": false
    }
