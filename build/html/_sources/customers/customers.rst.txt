================
分销客户模块
================


分销客户列表
----------------
获取分销客户列表


接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/customers``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         10        每页数量
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "count": 1,
            "customers": [
                {
                    "address": "设计",
                    "grade": "一级代理",
                    "mobile": "18723435435",
                    "name": "宁波大中店",
                    "rid": "F2538047",
                    "status": 1
                }
            ],
            "next": null,
            "prev": null
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

分销客户详情
--------------------
单个分销客户详情信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/customers/<rid>``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "address": "设计",
            "grade": "一级代理",
            "mobile": "18723435435",
            "name": "宁波大中店",
            "rid": "F2538047",
            "status": 1
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


新增分销客户
----------------
新增分销客户接口

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/customers``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

**客户基本参数:**

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
grade_id               Integer     必需                     客户等级
name                   String      必需                     客户姓名
province               String      可选                     省
city                   Integer     可选                     市
area                   Integer     可选                     区
street_address         String      可选                     地址
mobile                 String      必填                     手机号
phone                  String      可选
email                  String      可选
qq                     String      可选
=====================  ==========  =========  ==========  =============================

**客户登录信息:**

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
account                String      必需                     登录账号（邮箱或手机号）
pwd                    String      必需                     登录密码
first_forced           Bool        可选        True         是否强制客户第一次登录修改密码
=====================  ==========  =========  ==========  =============================

请求示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript

    {"grade_id":1, "name": "销2", "mobile": 13829839078, "phone": "", "email": "fx01@moebeast.com", "qq":"", "province": "北京", "city": "朝阳区", "area": "中关村", "street_address": "4hao", "account": "fx01@moebeast.com", "pwd": "moe0001", "first_forced": 1}

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "address": "4hao",
            "grade": "一级代理",
            "mobile": "13829839078",
            "name": "销2",
            "rid": "F7813469",
            "status": 1
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }

更新分销客户
----------------
更新分销客户接口

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/customers``
* API接口请求方法：``PUT``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

**客户基本参数:**

=====================  ==========  =========  ==========  =============================
名称                    类型        是否必须     默认值       描述说明
=====================  ==========  =========  ==========  =============================
grade_id               Integer     必需                     客户等级
name                   String      必需                     客户姓名
province               String      可选                     省
city                   Integer     可选                     市
area                   Integer     可选                     区
street_address         String      可选                     地址
mobile                 String      必填                     手机号
phone                  String      可选
email                  String      可选
qq                     String      可选
=====================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "address": "4hao",
            "grade": "一级代理",
            "mobile": "13829839078",
            "name": "销3",
            "rid": "F7813469",
            "status": 1
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


删除分销客户
----------------
删除分销客户接口

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/customers/<rid>``
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

