===============
账户模块
===============

绑定银行卡
=============
绑定银行卡

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/pay_account``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
account_type           Integer     可选          1         账户类型 1、个人账户 2、企业账户
country_id             Integer     可选          1         国家id
province_oid           Integer     必需                    省份id
city_oid               Integer     必需                    市区id
bank_card_id           Integer     必需                    图片id
name                   String      必需                    户名
account                String      必需                    账户号
bank                   String      必需                    开户银行
branch_name            String      必需                    开户支行
mobile                 String      必需                    预留手机号
verify_code            String      必需                    验证码
=====================  ==========  =========  ==========  =============================

参考示例：

.. code-block:: javascript

    {
        "account_type":1,
        "country_id":1,
        "province_oid":3,
        "city_oid":4,
        "bank_card_id":1,
        "name":"田帅",
        "account":"8888 8888 8888 8888",
        "bank":"招商银行",
        "branch_name":"大望路支行",
        "mobile":"18788888888",
        "verify_code":"0299"
    }


返回示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "data": {
            "account": "8888888888888888",  // 账户号
            "area": {
                "area_code": "+86",
                "area_name": "中国"
            },
            "bank": "招商银行",  // 开户银行
            "bank_card": {
                "created_at": 1,
                "filename": "1",
                "filepath": "1",
                "id": 1,
                "type": 1,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
            },
            "branch_name": "大望路支行",  // 开户支行
            "city_name": "淄博",  // 市
            "mobile": "18788888888",  // 手机号
            "name": "田帅",  // 户名
            "province_name": "山东",  // 省
            "type": 1  // 账户类型1、个人账户 2、企业账户
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


查看银行卡
=============
查看银行卡

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/pay_account``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "data": {
            "account": "8888888888888888",  // 账户号
            "area": {
                "area_code": "+86",
                "area_name": "中国"
            },
            "bank": "招商银行",  // 开户银行
            "bank_card": {
                "created_at": 1,
                "filename": "1",
                "filepath": "1",
                "id": 1,
                "type": 1,
                "view_url": "http://0.0.0.0:9000/_uploads/photos/1"
            },
            "branch_name": "大望路支行",  // 开户支行
            "city_name": "淄博",  // 市
            "mobile": "18788888888",  // 手机号
            "name": "田帅",  // 户名
            "province_name": "山东",  // 省
            "type": 1  // 账户类型1、个人账户 2、企业账户
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



解绑银行卡
=============
解绑银行卡

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/pay_account``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
mobile                 String      必需                    预留手机号
verify_code            String      必需                    验证码
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript


    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



添加收款方式
=============
添加收款方式

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/receipt_methods``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
account_type           Integer     可选          1         收款方式 1、支付宝
name                   String      必需                    户名
account                String      必需                    账户号
=====================  ==========  =========  ==========  =============================

参考示例：

.. code-block:: javascript

    {
        "account_type":1,
        "name":"田帅",
        "account":"13288888888"
    }


返回示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "data": {
            "account": "13288888888",  // 账户号
            "id": 2,
            "name": "田帅",  //户名
            "type": 1  // 收款方式 1、支付宝
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }



收款方式列表
=============
收款方式列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/receipt_methods``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "data": [
            {
                "account": "13288888888",  // 账户号
                "id": 2,
                "name": "田帅",  //户名
                "type": 1  // 收款方式 1、支付宝
            }
        ],
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



收款方式详情
=============
收款方式详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/receipt_methods/<int:id>``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "data": {
            "account": "13288888888",  // 账户号
            "id": 2,
            "name": "田帅",  //户名
            "type": 1  // 收款方式 1、支付宝
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


删除收款方式
=============
删除收款方式

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/receipt_methods/<int:id>``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


验证该商户是否绑定银行卡
============================
验证该商户是否绑定银行卡

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/pay_account/is_set``
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



小b商家提现
=============
小b商家提现

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/pay_account/life_cash_money``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
store_rid              String      必需                    店铺rid
open_id                String      必需                    open_id
user_name              String      必需                    用户真实姓名
=====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "data": {
            "actual_account_amount": 11,  // 实际提现金额
            "actual_amount": 11,  // 提现金额
            "created_at": 1534581237,  // 提现时间
            "receive_target": 1,  // 提现到 1、微信零钱包
            "record_id": 3,  // 记录id
            "service_fee": 0,  // 服务费
            "status": 2,  // 提现状态 1、审核中 2、成功 3、失败
            "store_rid": "2"  //  生活馆rid
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



