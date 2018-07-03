=========
用户模块
=========

用户资料
----------
获取当前登录账户的用户资料

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
      "data": {
        "email": "test@mixpu.com",
        "last_seen": 1511335583,
        "uid": "12497380613",
        "username": "updatename"
      },
      "status": {
        "code": 200,
        "message": "Ok all right."
      },
      "success": true
    }




更新用户信息
-------------
更新当前登录账户的用户信息


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users``
* API接口请求方法：``PUT``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
username        String    可选                 昵称 - 必须保持唯一
name            String    可选                 真实姓名
about_me        String    可选                 个人介绍
mobile          String    可选                 手机号
description     String    可选                 备注说明
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

正确结果格式::

    {
      "data": {
        "about_me": "小孩很可爱",
        "description": null,
        "email": "test@mixpu.com",
        "last_seen": 1511335583,
        "master_uid": 0,
        "mobile": null,
        "name": "天小山",
        "uid": "12497380613",
        "username": "demo01"
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
        "message": "demo already existed!"
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
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "account": null,
            "area": "顺义区",
            "areacode": "+86",
            "attachments": [
                {
                    "created_at": null,
                    "filename": "a",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                    "id": 1,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"
                },
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
                },
                {
                    "created_at": null,
                    "filename": "h",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539ii.jpg",
                    "id": 4,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539ii.jpg"
                },
                {
                    "created_at": null,
                    "filename": "p",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539mm.jpg",
                    "id": 5,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539mm.jpg"
                }
            ],
            "avatar": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
            "bank_addr": null,
            "bank_name": null,
            "brand_name": "jkss ",
            "city": "北京",
            "company_name": "京东",
            "company_qualification": [
                {
                    "created_at": null,
                    "filename": "a",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                    "id": 1,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"
                },
                {
                    "created_at": null,
                    "filename": "e",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                    "id": 2,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
                }
            ],
            "contract_sn": "",
            "country": "中国",
            "current_date": "",
            "customized": true,
            "email": "1346555456@qq.com",
            "expiration_date": "",
            "front_card_photo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
            "holding_card_photo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539oo.jpg",
            "id": 30,
            "id_card": "13082119921226801x",
            "label_libraries": [
                [
                    1,
                    "十年老件"
                ],
                [
                    2,
                    "手工制作"
                ],
                [
                    3,
                    "机械制作"
                ]
            ],
            "link": [
                "https://www.taobao.com",
                "https://www.jingdong.com",
                "https://www.tianmao.com"
            ],
            "master_uid": 2,
            "mobile": "13001179400",
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
            "patent": true,
            "patent_file": [
                {
                    "created_at": null,
                    "filename": "a",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
                    "id": 1,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg"
                },
                {
                    "created_at": null,
                    "filename": "e",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                    "id": 2,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
                }
            ],
            "phone": "0314-4567891",
            "product_category": "无人机",
            "product_price": "22,99",
            "product_scope": "原创商品，由本人或团队独立思考设计",
            "province": "北京",
            "qq": "1345678956",
            "reverse_card_photo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
            "sale_platform": [
                "京东",
                "淘宝",
                "天猫"
            ],
            "secured_trade": true,
            "status": 1,
            "street_address": "中南海",
            "urgent_contact_mobile": "15879456532",
            "urgent_contact_name": "普京",
            "url": "https://www.jd.com",
            "user_identity": 1,
            "user_type": 3,
            "username": null,
            "wechat": "jksjk45"
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

返回审核状态
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/get_authenticate_status``
* API接口请求方法：``GET``
* API接口用户授权：``token``

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

更新认证状态
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/up_authenticate_status``
* API接口请求方法：``PUT``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~


===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
status           Integer   可选         1        认证状态：1、待审；-1：禁用；2、正常
===============  ========  =========  ========  ====================================


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
        "success": {
            "is_setting": true
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
begin_at          String    可选                  合同签署日期
end_at            String    可选                  合同结束日期
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

编辑个人资料
-----------------

接口说明
~~~~~~~~~~~~~~


* API接口请求地址：``/users/info``
* API接口请求方法：``PUT``

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
openid           String     必须                 用户唯标识
nick_name        String     可选                 用户昵称
avatar_id        Integer    可选                 用户头像ID
about_me         String     可选                 个人介绍
gender           Integer    可选          0      性别
province_id      Integer    可选                 省ID
city_id          Integer    可选                 市ID
type             Integer    可选          1      来源类型 1、微信
email            String     可选                 邮箱
date             String     可选                 出生日期
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "created_at": 1529067075,
            "user_party": {
                "about_me": null,
                "avatar": "http://xxxx/photos/180224/c833237a728a1ed.jpg",
                "city": "保定",
                "date": "",
                "email": null,
                "gender": 0,
                "id": 1,
                "master_uid": 2,
                "nick_name": "丁磊",
                "openid": "jsdkj3j",
                "province": "河北",
                "wxapp_id": "1"
            }
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

获取个人资料
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/info``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ==============================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ==============================================
openid         String    必填                  用户标识
===========  ========  =========  ========  ==============================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "created_at": 1529067075,
            "user_party": {
                "about_me": null,
                "avatar": "http://xxxx/photos/180224/c833237a728a1ed.jpg",
                "city": "保定",
                "date": "",
                "email": null,
                "gender": 0,
                "id": 1,
                "master_uid": 2,
                "nick_name": "丁磊",
                "openid": "jsdkj3j",
                "province": "河北",
                "wxapp_id": "1"
            }
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
gender           Integer     可选          0      性别
date             String      可选                 出生日期
===============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "about_me": null,
            "avatar": null,
            "date": "2008-05-15",
            "description": null,
            "email": "13001179400",
            "gender": 1,
            "last_seen": 1530422428,
            "master_uid": 0,
            "mobile": null,
            "name": null,
            "uid": "19562310748",
            "username": "火烈鸟"
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

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
country_id        Integer   必须                  国家ID
province_id       Integer   必须                  省ID
city_id           Integer   可选                  市ID
area_id           Integer   可选                  区域ID
street_address    String    必须                  详细地址
areacode          String    可选          +86     区号
mobile            String    必须                  手机号
phone             String    可选          0       座机号
email             String    必须                  邮箱
===============  ========  =========  ========  ====================================

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {"country_id":1,"province_id":1,"city_id":1,"street_address":"天安门","mobile":"13645647894","email":"4568794@qq.com"}

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
            "account": null,
            "area": "",
            "areacode": "+86",
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
            "bank_addr": null,
            "bank_name": null,
            "brand_name": "jkss ",
            "city": "北京",
            "company_name": "京东",
            "company_qualification": [
                {
                    "created_at": null,
                    "filename": "e",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                    "id": 2,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
                }
            ],
            "contract_sn": "",
            "country": "中国",
            "current_date": "",
            "customized": true,
            "email": "4568794@qq.com",
            "expiration_date": "",
            "front_card_photo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
            "holding_card_photo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539oo.jpg",
            "id": 30,
            "id_card": "13082119921226801x",
            "label_libraries": [
                [
                    1,
                    "十年老件"
                ],
                [
                    2,
                    "手工制作"
                ],
                [
                    3,
                    "机械制作"
                ]
            ],
            "link": [
                "https://www.taobao.com",
                "https://www.jingdong.com",
                "https://www.tianmao.com"
            ],
            "master_uid": 2,
            "mobile": "13645647894",
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
            "patent": true,
            "patent_file": [
                {
                    "created_at": null,
                    "filename": "e",
                    "filepath": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
                    "id": 2,
                    "type": null,
                    "view_url": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg"
                }
            ],
            "phone": "",
            "product_category": "无人机",
            "product_price": "22,99",
            "product_scope": "原创商品，由本人或团队独立思考设计",
            "province": "北京",
            "qq": "1345678956",
            "reverse_card_photo": "http://0.0.0.0:9000/_uploads/photos/http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539bb.jpg",
            "sale_platform": [
                "京东",
                "淘宝",
                "天猫"
            ],
            "secured_trade": true,
            "status": 1,
            "street_address": "天安门",
            "urgent_contact_mobile": "15879456532",
            "urgent_contact_name": "普京",
            "url": "https://www.jd.com",
            "user_identity": 1,
            "user_type": 3,
            "username": null,
            "wechat": "jksjk45"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": {
            "about_me": null,
            "avatar": null,
            "date": "2008-05-15",
            "description": null,
            "email": "13001179400",
            "gender": 1,
            "last_seen": 1530422428,
            "master_uid": 0,
            "mobile": null,
            "name": null,
            "uid": "19562310748",
            "username": "火烈鸟"
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
            "need_pay": "99",
            "product_price": "22,99",
            "secured_trade": true,
            "status": ""
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
pay_at            String      必须                支付时间
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

