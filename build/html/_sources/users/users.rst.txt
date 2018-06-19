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


商家实名认证
-------------



接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/authenticate``
* API接口请求方法：``POST``
* API接口用户授权：``token``
请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
name                     String    必须                      姓名
id_card                  String    必须                      身份证号
front_card_photo_id      Integer   必须                      身份证正面照ID
reverse_card_photo_id    Integer   必须                      身份证反面照ID
holding_card_photo_id    Integer   必须                      手持身份证正面照ID
mobile                   String    必须                      手机号
email                    String    必须                      邮箱
phone                    String    可选                      固定电话
wechat                   String    必须                      微信号
qq                       String    可选                      QQ号
country_id               Integer   必须                      国家ID
province_id              Integer   必须                      省ID
city_id                  Integer   必须                      市ID
area_id                  Integer   必须                      区域ID
street_address           String    必须                      详细地址
urgent_contact_name      String    必须                      紧急联系人姓名
urgent_contact_mobile    String    必须                      紧急联系人电话
user_type                Integer   可选           1          用户类型，1、个人；2、原创工作室；3、原创品牌公司
product_scope            Integer   可选           1          商品范畴，1、原创商品，由本人或团队独立思考设计；2、十年老件；3、授权贩售，由设计师或者设计师代理经销的商品；4、其他
other_scope              String    可选                      其他范畴
own_brand                Bool      可选       False          是否拥有自己的品牌
brand_name               String    可选                      品牌名称
sale_platform            Array     可选                      上线平台名称
link                     Array     可选                      上线平台链接
product_category         String    必须                      商品所属类别
customized               Bool      可选       False          是否提供定制化服务
attachments              String    必须                      原创商品图片ID
product_price            String    必须                      商品价格范围
company_name             String    必须                      公司名称
url                      String    可选                      公司网址
company_qualification    String    必须                      公司资质
=====================  ==========  =========  ==========  =============================


请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "user_type":3,"name":"毛爷爷","avatar_id":1,"id_card":"13082119921226801x","front_card_photo_id":1,"reverse_card_photo_id":1,"holding_card_photo_id":1,"areacode":"+86","mobile":"13001179400","wechat":"jksjk45","country_id":1,"province_id":1,"city_id":1,"area_id":2,"street_address":"中南海","own_brand":true,"customized":true,"product_category":"无人机","attachments":[1,2,3],"product_price":"22~99","email":"1346555456@qq.com", "sale_platform":["京东","淘宝","天猫"],"product_scope":1, "brand_name":"jkss ","company_name":"京东", "url":"https://www.jd.com","link":["https://www.taobao.com","https://www.jingdong.com","https://www.tianmao.com"]
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

签署合同
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/contract``
* API接口请求方法：``GET,POST``
* API接口用户授权：``token``

API接口请求方法为 ``GET`` 时

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "account": "6214865188793549",
            "area": "顺义区",
            "bank_addr": "朝阳区酒仙桥支行",
            "bank_name": "中国银行",
            "brand_name": "jkss ",
            "city": "北京",
            "country": "中国",
            "current_time": 1529128217,
            "expiration_time": 1560664217,
            "id": 27,
            "master_uid": 2,
            "mobile": "13001179400",
            "name": "毛爷爷",
            "province": "北京",
            "street_address": "中南海",
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
API接口请求方法为 ``POST`` 时

请求参数
~~~~~~~~~~~~~~~

===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
bank_name         String    必须                  银行名称
username          String    必须                  户名
bank_addr         String    必须                  开户行
account           String    必须                  账号
===============  ========  =========  ========  ====================================
返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "account": "6214865188793549",
            "area": "杨镇地区",
            "areacode": "+86",
            "bank_addr": "朝阳区酒仙桥支行",
            "bank_name": "中国银行",
            "brand_name": "京东商城",
            "city": "北京",
            "country": "中国",
            "current_time": 1529150144,
            "expiration_time": 1560686144,
            "id": 27,
            "master_uid": 2,
            "mobile": "13004578966",
            "name": "马化腾",
            "province": "北京",
            "street_address": "中南海",
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

修改合同信息
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/contract``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {"brand_name":"小米之家","country_id":1,"province_id":1,"city_id":1,"area_id":2,"street_address":"中南海","name":"马化腾","mobile":"13004578966","email":"8888888@qq.com","bank_name":"中国银行", "username":"雷军","bank_addr":"朝阳区酒仙桥支行", "account":"6214865188793549"}

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "account": "6214865188793549",
            "area": "顺义区",
            "bank_addr": "朝阳区酒仙桥支行",
            "bank_name": "中国银行",
            "brand_name": "小米之家",
            "city": "北京",
            "country": "中国",
            "current_time": 1529137673,
            "expiration_time": 1560673673,
            "id": 27,
            "master_uid": 2,
            "mobile": "13004578966",
            "name": "马化腾",
            "province": "北京",
            "street_address": "中南海",
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
            "message": "Update failed!"
        },
        "success": false
    }
获取合同信息
-----------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/get_contract``
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
            "area": "顺义区",
            "bank_addr": "朝阳区酒仙桥支行",
            "bank_name": "中国银行",
            "brand_name": "jkss ",
            "city": "北京",
            "country": "中国",
            "current_time": 1529128217,
            "expiration_time": 1560664217,
            "id": 27,
            "master_uid": 2,
            "mobile": "13001179400",
            "name": "毛爷爷",
            "province": "北京",
            "street_address": "中南海",
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
保存用户第三方登陆信息
-------------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/users/save_user_info``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~


===============  ========  =========  ========  ====================================
名称              类型      是否必须    默认值     描述说明
===============  ========  =========  ========  ====================================
openid           String     必须                 用户唯一标识
nick_name        String     必须                 用户昵称
avatar           String     必须                 用户头像url
gender           Integer    可选          0      性别
country          String     必须                 国家
province         String     必须                 省
city             String     必须                 市
type             Integer    可选          1      来源类型 1、微信
===============  ========  =========  ========  ====================================
请求示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "openid":"jsdkj3j",
        "nick_name":"taihuoniao",
        "avatar":"weixin://wxpay/bizpayurl?pr=jKmv7J3",
        "country":"zhongguo",
        "province":"河北",
        "city":"保定"
    }
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
获取用户设置信息
-----------------

接口说明
~~~~~~~~~~~~~~


* API接口请求地址：``/users/settings``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "avatar": "http://xxxx/photos/180224/c833237a728a1ed.jpg",
            "nick_name": "taihuoniao"
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
avatar           String     可选                 用户头像url
gender           Integer    可选          0      性别
province         String     可选                 省
city             String     可选                 市
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
            "about_me": "php是最好的语言",
            "avatar": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
            "city": "南京",
            "date": "1992年12月16日",
            "email": "zhizhuren@163.com",
            "gender": 1,
            "id": 1,
            "master_uid": 0,
            "nick_name": "马化腾",
            "openid": "jsdkj3j",
            "province": "江苏",
            "user_id": 0,
            "wxapp_id": "1"
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

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "about_me": "php是最好的语言",
            "avatar": "http://127.0.0.1:9000/_uploads/photos/222222/5d2812257b539aa.jpg",
            "city": "南京",
            "date": "1992年12月16日",
            "email": "zhizhuren@163.com",
            "gender": 1,
            "id": 1,
            "master_uid": 0,
            "nick_name": "马化腾",
            "openid": "jsdkj3j",
            "province": "江苏",
            "user_id": 0,
            "wxapp_id": "1"
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