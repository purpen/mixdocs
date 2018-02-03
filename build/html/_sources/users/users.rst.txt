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


