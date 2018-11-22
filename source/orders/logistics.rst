==================
物流运费模块
==================


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
order_rid              String        可选                      订单编号
=====================  ===========  ==========  ===========  ==============================

参考示例：

.. code-block:: javascript

    {
        "logistic_code":"1199965242414",
        "kdn_company_code":"EMS",
        "order_rid":"D1892378976",
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "EBusinessID": "1302778",
            "LogisticCode": "1199965242414",  // 物流运单号
            "ShipperCode": "EMS",  // 快递公司编码
            "State": "3",  // 物流状态：2-在途中,3-签收,4-问题件
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


获取官方支持的物流公司列表
------------------------------------
获取官方支持的物流公司列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/official/express``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
name                   String        可选                      物流公司名称
=====================  ===========  ==========  ===========  ==============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript


    {
        "data": {
            "expresses": [  // 全国
                {
                    "code": "ZJS",  // 物流公司code
                    "contact_mobile": "18788888888",
                    "contact_name": "庞123",
                    "contact_phone": "",
                    "created_at": 1531902650,
                    "customer_name": "",
                    "customer_pwd": "",
                    "description": "",
                    "id": 6,  //
                    "is_default": false,  // 是否常用
                    "name": "宅急送",  // 物流公司名称
                    "send_site": "",
                    "updated_at": 1536252153
                }
            ],
            "often_expresses": [  // 常用
                {
                    "code": "EMS",
                    "contact_mobile": "13260180698",
                    "contact_name": "EMS",
                    "contact_phone": "",
                    "created_at": 1536249836,
                    "customer_name": "",
                    "customer_pwd": "",
                    "description": "",
                    "id": 7,
                    "is_default": true,
                    "name": "EMS",
                    "send_site": "",
                    "updated_at": 1536249848
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
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

**运费模板基本参数:**

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
name                   String        必需                      模板名称
pricing_method         Integer       可选          1           计价方式 1、按件数 2、按重量
items                  Array         可选          []          物流公司默认信息
=====================  ===========  ==========  ===========  ==============================

**物流公司默认信息:**

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
items:
express_id             Integer       必须                      物流公司id
first_item             Integer       可选          1           首件
first_weight           Numeric       可选          0           首重
first_amount           Numeric       可选          0           首费
continuous_item        Integer       可选          1           续件
continuous_weight      Numeric       可选          0           续费
continuous_amount      Numeric       可选          0           续重
min_days               Integer       可选          0           最少天数
max_days               Integer       可选          0           最多天数
place_items            Array         可选          []          指定城市设置
=====================  ===========  ==========  ===========  ==============================

**指定城市设置:**

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
place_items:
first_item             Integer       可选          1           首件
first_weight           Numeric       可选          0           首重
first_amount           Numeric       可选          0           首费
continuous_item        Integer       可选          1           续件
continuous_weight      Numeric       可选          0           续费
continuous_amount      Numeric       可选          0           续重
place_oid              Array         可选          []          运送地区oid,元素为Integer
=====================  ===========  ==========  ===========  ==============================

参考示例：

.. code-block:: javascript

    {
        "name":"运费模板2",
        "pricing_method":1,
        "items":[
            {
                "express_id":4,
                "min_days":3,
                "max_days":5,
                "first_item":1,
                "first_amount":10,
                "continuous_item":1,
                "continuous_amount":20,
                "place_items":[
                    {
                        "first_item":1,
                        "first_amount":10,
                        "continuous_item":1,
                        "continuous_amount":20,
                        "place_oid":[1,2]
                    },
                    {
                        "first_item":2,
                        "first_amount":20,
                        "continuous_item":1,
                        "continuous_amount":20,
                        "place_oid":[3]
                    }
                ]
            },
            {
                "express_id":5,
                "min_days":3,
                "max_days":5,
                "first_item":1,
                "first_amount":10,
                "continuous_item":1,
                "continuous_amount":20,
                "place_items":[
                    {
                        "first_item":1,
                        "first_amount":10,
                        "continuous_item":1,
                        "continuous_amount":20,
                        "place_oid":[1]
                    }
                ]
            }

        ]
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "name": "运费模板3",  // 运费模板Id
            "pricing_method": 1,  // 计费方式
            "rid": "Ft726918503",  // 模板rid
            "update_at": 1528707342, //最后修改时间
            "items": [
                {
                    "continuous_amount": 20,  // 续费
                    "continuous_item": 1,  // 续件
                    "continuous_weight": 0,  // 续重
                    "express_code": "YTO",  // 物流公司code
                    "express_id": 4,  // 物流公司id
                    "express_name": "圆通",  // 物流公司名
                    "first_amount": 10,  // 首费
                    "first_item": 1,  // 首件
                    "first_weight": 0,  // 首重
                    "is_default": true,  // 是否默认
                    "max_days": 5,  // 最长天数
                    "min_days": 3,  // 最小天数
                    "place_items": [
                        {
                            "continuous_amount": 20,
                            "continuous_item": 1,
                            "continuous_weight": 0,
                            "first_amount": 10,
                            "first_item": 1,
                            "first_weight": 0,
                            "is_default": false,
                            "places": [
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "北京",
                                    "place_oid": 1
                                },
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "天津",
                                    "place_oid": 2
                                }
                            ],
                            "rid": "Fi153042768"  // item_rid
                        },
                    ],
                    "rid": "Fi618937502"  // item_rid
                },
            ],

        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }



复制运费模板信息
----------------
某商家复制运费模板信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/freight_template/copy``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    String        必需                      模板rid
=====================  ===========  ==========  ===========  ==============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "name": "运费模板3",  // 运费模板Id
            "pricing_method": 1,  // 计费方式
            "rid": "Ft726918503",  // 模板rid
            "update_at": 1528707342, //最后修改时间
            "items": [
                {
                    "continuous_amount": 20,  // 续费
                    "continuous_item": 1,  // 续件
                    "continuous_weight": 0,  // 续重
                    "express_code": "YTO",  // 物流公司code
                    "express_id": 4,  // 物流公司id
                    "express_name": "圆通",  // 物流公司名
                    "first_amount": 10,  // 首费
                    "first_item": 1,  // 首件
                    "first_weight": 0,  // 首重
                    "is_default": true,  // 是否默认
                    "max_days": 5,  // 最长天数
                    "min_days": 3,  // 最小天数
                    "place_items": [
                        {
                            "continuous_amount": 20,
                            "continuous_item": 1,
                            "continuous_weight": 0,
                            "first_amount": 10,
                            "first_item": 1,
                            "first_weight": 0,
                            "is_default": false,
                            "places": [
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "北京",
                                    "place_oid": 1
                                },
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "天津",
                                    "place_oid": 2
                                }
                            ],
                            "rid": "Fi153042768"  // item_rid
                        },
                    ],
                    "rid": "Fi618937502"  // item_rid
                },
            ],

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

**运费模板基本参数:**

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    String        必需                      运费模板rid
name                   String        可选                      模板名称
pricing_method         Integer       可选          1           计价方式 1、按件数 2、按重量
items                  Array         可选          []          物流公司默认信息
=====================  ===========  ==========  ===========  ==============================

**物流公司默认信息:**

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
items:
rid                    String        必需                      运费模板明细rid
express_id             String        可选                      物流公司id
first_item             Integer       可选          1           首件
first_weight           Numeric       可选          0           首重
first_amount           Numeric       可选          0           首费
continuous_item        Integer       可选          1           续件
continuous_weight      Numeric       可选          0           续费
continuous_amount      Numeric       可选          0           续重
min_days               Integer       可选          0           最少天数
max_days               Integer       可选          0           最多天数
place_items            Array         可选          []          指定城市设置
=====================  ===========  ==========  ===========  ==============================

**指定城市设置:**

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
place_items:
rid                    String        必需                      运费模板明细rid
first_item             Integer       可选          1           首件
first_weight           Numeric       可选          0           首重
first_amount           Numeric       可选          0           首费
continuous_item        Integer       可选          1           续件
continuous_weight      Numeric       可选          0           续费
continuous_amount      Numeric       可选          0           续重
place_oid              Array         可选          []          运送地区oid,元素为Integer
=====================  ===========  ==========  ===========  ==============================

参考示例：

.. code-block:: javascript


    {
        "rid":"Ft415967803",
        "name":"运费模板777",
        "pricing_method":1,
        "items":[
            {
                "rid":"Fi804531692",
                "express_id":4,
                "min_days":3,
                "max_days":5,
                "first_item":1,
                "first_amount":10,
                "continuous_item":1,
                "continuous_amount":20,
                "place_items":[
                    {
                        "rid":"Fi174680952",
                        "first_item":1,
                        "first_amount":10,
                        "continuous_item":1,
                        "continuous_amount":20,
                        "place_oid":[1,2,3]
                    },
                    {
                        "rid":11111,
                        "first_item":2,
                        "first_amount":20,
                        "continuous_item":1,
                        "continuous_amount":20,
                        "place_oid":[2]
                    }
                ]
            },
            {
                "rid":2222222,
                "express_id":5,
                "min_days":3,
                "max_days":5,
                "first_item":1,
                "first_amount":10,
                "continuous_item":1,
                "continuous_amount":20,
                "place_items":[
                    {
                        "rid":333333,
                        "first_item":1,
                        "first_amount":10,
                        "continuous_item":1,
                        "continuous_amount":20,
                        "place_oid":[3]
                    }
                ]
            }

        ]
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "name": "运费模板3",  // 运费模板Id
            "pricing_method": 1,  // 计费方式
            "rid": "Ft726918503",  // 模板rid
            "update_at": 1528707342, //最后修改时间
            "items": [
                {
                    "continuous_amount": 20,  // 续费
                    "continuous_item": 1,  // 续件
                    "continuous_weight": 0,  // 续重
                    "express_code": "YTO",  // 物流公司code
                    "express_id": 4,  // 物流公司id
                    "express_name": "圆通",  // 物流公司名
                    "first_amount": 10,  // 首费
                    "first_item": 1,  // 首件
                    "first_weight": 0,  // 首重
                    "is_default": true,  // 是否默认
                    "max_days": 5,  // 最长天数
                    "min_days": 3,  // 最小天数
                    "place_items": [
                        {
                            "continuous_amount": 20,
                            "continuous_item": 1,
                            "continuous_weight": 0,
                            "first_amount": 10,
                            "first_item": 1,
                            "first_weight": 0,
                            "is_default": false,
                            "places": [
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "北京",
                                    "place_oid": 1
                                },
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "天津",
                                    "place_oid": 2
                                }
                            ],
                            "rid": "Fi153042768"  // item_rid
                        },
                    ],
                    "rid": "Fi618937502"  // item_rid
                },
            ],

        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


查询运费模板信息列表
----------------------
某商家查询运费模板信息列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/freight_template``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
rid          String    可选                   模板rid
===========  ========  =========  ========  ====================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "count": 14,
            "freight_template": [
                {
                    "items": [
                        "name": "运费模板3",  // 运费模板Id
                        "pricing_method": 1,  // 计费方式
                        "rid": "Ft726918503",  // 模板rid
                        "update_at": 1528707342, //最后修改时间
                        "items": [
                            {
                                "continuous_amount": 20,  // 续费
                                "continuous_item": 1,  // 续件
                                "continuous_weight": 0,  // 续重
                                "express_code": "YTO",  // 物流公司code
                                "express_id": 4,  // 物流公司id
                                "express_name": "圆通",  // 物流公司名
                                "first_amount": 10,  // 首费
                                "first_item": 1,  // 首件
                                "first_weight": 0,  // 首重
                                "is_default": true,  // 是否默认
                                "max_days": 5,  // 最长天数
                                "min_days": 3,  // 最小天数
                                "place_items": [
                                    {
                                        "continuous_amount": 20,
                                        "continuous_item": 1,
                                        "continuous_weight": 0,
                                        "first_amount": 10,
                                        "first_item": 1,
                                        "first_weight": 0,
                                        "is_default": false,
                                        "places": [
                                            {
                                                "area_scope": 1,  // 区域范围
                                                "place_name": "北京",
                                                "place_oid": 1
                                            },
                                            {
                                                "area_scope": 1,  // 区域范围
                                                "place_name": "天津",
                                                "place_oid": 2
                                            }
                                        ],
                                        "rid": "Fi153042768"  // item_rid
                                    },
                                ],
                                "rid": "Fi618937502"  // item_rid
                            },
                        ],
                    ],
                    "name": "运费模板2",
                    "pricing_method": 1,
                    "rid": "Ft290486375",
                    "update_at": 1529927222
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



独立-用户查询运费模板详情
-------------------------------
独立-用户查询运费模板详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/freight_template/<string:rid>``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    String        必需                      模板rid
product_rid            String        必需                      商品rid
=====================  ===========  ==========  ===========  ==============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "name": "运费模板3",  // 运费模板Id
            "pricing_method": 1,  // 计费方式
            "rid": "Ft726918503",  // 模板rid
            "update_at": 1528707342, //最后修改时间
            "items": [
                {
                    "continuous_amount": 20,  // 续费
                    "continuous_item": 1,  // 续件
                    "continuous_weight": 0,  // 续重
                    "express_code": "YTO",  // 物流公司code
                    "express_id": 4,  // 物流公司id
                    "express_name": "圆通",  // 物流公司名
                    "first_amount": 10,  // 首费
                    "first_item": 1,  // 首件
                    "first_weight": 0,  // 首重
                    "is_default": true,  // 是否默认
                    "max_days": 5,  // 最长天数
                    "min_days": 3,  // 最小天数
                    "place_items": [
                        {
                            "continuous_amount": 20,
                            "continuous_item": 1,
                            "continuous_weight": 0,
                            "first_amount": 10,
                            "first_item": 1,
                            "first_weight": 0,
                            "is_default": false,
                            "places": [
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "北京",
                                    "place_oid": 1
                                },
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "天津",
                                    "place_oid": 2
                                }
                            ],
                            "rid": "Fi153042768"  // item_rid
                        },
                    ],
                    "rid": "Fi618937502"  // item_rid
                },
            ],

        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



核心-用户查询运费模板详情
-------------------------------
核心-用户查询运费模板详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/core_freight_template/<string:rid>'``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    String        必需                      模板rid
product_rid            String        必需                      商品rid
store_rid              String        必需                      店铺rid
=====================  ===========  ==========  ===========  ==============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "name": "运费模板3",  // 运费模板Id
            "pricing_method": 1,  // 计费方式
            "rid": "Ft726918503",  // 模板rid
            "update_at": 1528707342, //最后修改时间
            "items": [
                {
                    "continuous_amount": 20,  // 续费
                    "continuous_item": 1,  // 续件
                    "continuous_weight": 0,  // 续重
                    "express_code": "YTO",  // 物流公司code
                    "express_id": 4,  // 物流公司id
                    "express_name": "圆通",  // 物流公司名
                    "first_amount": 10,  // 首费
                    "first_item": 1,  // 首件
                    "first_weight": 0,  // 首重
                    "is_default": true,  // 是否默认
                    "max_days": 5,  // 最长天数
                    "min_days": 3,  // 最小天数
                    "place_items": [
                        {
                            "continuous_amount": 20,
                            "continuous_item": 1,
                            "continuous_weight": 0,
                            "first_amount": 10,
                            "first_item": 1,
                            "first_weight": 0,
                            "is_default": false,
                            "places": [
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "北京",
                                    "place_oid": 1
                                },
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "天津",
                                    "place_oid": 2
                                }
                            ],
                            "rid": "Fi153042768"  // item_rid
                        },
                    ],
                    "rid": "Fi618937502"  // item_rid
                },
            ],

        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



商家查询运费模板详情
-----------------------
某商家查询运费模板详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/master_freight_template/<string:rid>``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    String        必需                      模板rid
=====================  ===========  ==========  ===========  ==============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "name": "运费模板3",  // 运费模板Id
            "pricing_method": 1,  // 计费方式
            "rid": "Ft726918503",  // 模板rid
            "update_at": 1528707342, //最后修改时间
            "items": [
                {
                    "continuous_amount": 20,  // 续费
                    "continuous_item": 1,  // 续件
                    "continuous_weight": 0,  // 续重
                    "express_code": "YTO",  // 物流公司code
                    "express_id": 4,  // 物流公司id
                    "express_name": "圆通",  // 物流公司名
                    "first_amount": 10,  // 首费
                    "first_item": 1,  // 首件
                    "first_weight": 0,  // 首重
                    "is_default": true,  // 是否默认
                    "max_days": 5,  // 最长天数
                    "min_days": 3,  // 最小天数
                    "place_items": [
                        {
                            "continuous_amount": 20,
                            "continuous_item": 1,
                            "continuous_weight": 0,
                            "first_amount": 10,
                            "first_item": 1,
                            "first_weight": 0,
                            "is_default": false,
                            "places": [
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "北京",
                                    "place_oid": 1
                                },
                                {
                                    "area_scope": 1,  // 区域范围
                                    "place_name": "天津",
                                    "place_oid": 2
                                }
                            ],
                            "rid": "Fi153042768"  // item_rid
                        },
                    ],
                    "rid": "Fi618937502"  // item_rid
                },
            ],

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
rid                    String        必需                      模板rid
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




获取每件商品的物流公司列表
-----------------------------
获取每件商品的物流公司列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/product/express``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

**运费信息基本参数:**

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
items                  Array         必须                      店铺详情
=====================  ===========  ==========  ===========  ==============================

**店铺详情:**

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
items:
rid                    String        必须                      店铺rid
sku_items              Array         必须          1           商品详情
=====================  ===========  ==========  ===========  ==============================

**商品详情:**

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
sku                    String         必须                     sku
=====================  ===========  ==========  ===========  ==============================


参考示例：

.. code-block:: javascript


    {
        "items":[
            {
                "rid":"2",
                "sku_items":[
                    {
                        "sku":"2"
                    }

                    ]
            }
        ]
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript


    {
        "data": {
            "2": {  // 店铺rid
                "2": {  // 商品sku
                    "express": [
                        {
                            "express_code": "YTO",  // 物流公司code
                            "express_id": 4,  // 物流公司id
                            "express_name": "圆通",  // 物流公司名称
                            "is_default": true,  // 是否默认物流公司
                            "max_days": 5,  // 最大天数
                            "min_days": 3  // 最小天数
                        }
                    ]
                }
            }
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



计算运费
-----------------------------
计算运费

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/freight/calculate``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~


**运费信息基本参数:**


=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
address_rid            String        必须                      地址rid
items                  Array         必须                      店铺详情
=====================  ===========  ==========  ===========  ==============================


**店铺详情:**


=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
items:
rid                    String        必须                      店铺rid
sku_items              Array         必须          1           商品详情
=====================  ===========  ==========  ===========  ==============================


**商品详情:**


=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
sku                    String         必须                     sku
quantity               Integer        必须                     数量
express_id             Integer        必须                     物流公司id
=====================  ===========  ==========  ===========  ==============================



参考示例：

.. code-block:: javascript

    {
        "address_rid":"5125783409",
        "items":[
                    {
                        "rid":"2",
                        "sku_items":[
                            {
                                "sku":"2",
                                "quantity":20,
                                "express_id":4
                            }

                        ]
                    }
            ]
    }


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript


    {
        "data": {
            "2": 65  // 每家店铺的运费
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



验证该商户是否设置物流模板
-----------------------------
验证该商户是否设置物流模板

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/freight_template/is_set``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "status": true  // true 已设置  false 未设置
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



相同物流模板下的物流公司列表
----------------------------------
相同物流模板下的物流公司列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/logistics/same_template_express``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~


**运费信息基本参数:**


=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
address_rid            String        必须                      地址rid
fid                    String        必须                      运费模板rid
items                  Array         必须                      商品详情
=====================  ===========  ==========  ===========  ==============================

**商品详情:**


=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
items:
sku                    String         必须                     sku
quantity               Integer        必须                     数量
=====================  ===========  ==========  ===========  ==============================



参考示例：

.. code-block:: javascript

    {
        "address_rid":"5125783409",
        "fid":"Ft178504962",
        "items":[
            {
               "sku":"2",
               "quantity":10
            },
            {
                "sku":"1",
                "quantity":8
            }

        ]
    }

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript


    {
        "data": [
            {
                "express_code": "YTO",  // 物流公司code
                "express_id": 4,  // 物流公司id
                "express_name": "圆通",  // 物流公司名称
                "freight": 350,  // 运费
                "max_days": 3,  // 最大天数
                "min_days": 3  // 最小天数
            },
            {
                "express_code": "ZJS",
                "express_id": 6,
                "express_name": "宅急送",
                "freight": 349,
                "max_days": 3,
                "min_days": 3
            }
        ],
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }




