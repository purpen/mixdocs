=============
分类模块
=============

全部分类列表
-------------
获取商家全部有效的分类列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/all_categories``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "data": {
            "k_1_0": [
                {
                    "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                    "description": "",
                    "id": 1,
                    "name": "箱包&包袋",
                    "pid": 0,
                    "sort_order": 1,
                    "status": 1
                },
                {
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180530/72de0b9ca1ae5a3.jpg",
                    "description": "",
                    "id": 2,
                    "name": "玩具&娱乐",
                    "pid": 0,
                    "sort_order": 6,
                    "status": 1
                }
            ],
            "k_1_1": [
                {
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180530/72de0b9ca1ae5a3.jpg",
                    "description": "",
                    "id": 16,
                    "name": "儿童手工艺",
                    "pid": 1,
                    "sort_order": 11,
                    "status": 1
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


店铺分类列表
----------------
获取商申请品牌馆授权的分类列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/store/categories``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
sid          String    可选                  店铺编号
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: category_list.js
    :language: javascript


分类列表
-------------
获取商品有效的分类列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/categories``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         100       每页数量
pid          Number    可选         0         父级ID
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: category_list.js
    :language: javascript


相邻分类列表
--------------------
获取相邻（同级）分类列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/categories/siblings``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         100       每页数量
cid          Number    可选         0         分类ID
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: category_list.js
    :language: javascript


新增分类
-------------
商家自定义分类

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/categories``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
pid            Number    可选        0         父级ID
name           String    必填                  分类名称
description    String    可选                  分类描述
sort_order     Number    可选        0         排序，数字越大越靠前
=============  ========  =========  ========  ====================================

请求示例
~~~~~~~~~~~~~~~

.. raw:: html

    <p class="text-danger">
        <small><span class="glyphicon glyphicon-star"></span></small>
        请求参数必须以 JSON 格式形式，服务端才会获取请求的数据。
    </p>

.. code-block:: javascript

    {"name": "新分类名称", "sort_order": 5, "description": "新分类描述说明"}

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
      "data": {
        "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
        "description": "新分类描述说明",
        "id": 21,
        "name": "新分类名称",
        "pid": 0,
        "sort_order": 5,
        "status": 1
      },
      "status": {
        "code": 201,
        "message": "All created."
      }
    }


更新分类
-------------
商家修改自定义分类

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/categories/<id>``
* API接口请求方法：``PUT``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
pid            Number    可选        0         父级ID
name           String    必填                  分类名称
description    String    可选                  分类描述
sort_order     Number    可选        1         排序，数字越大越靠前
=============  ========  =========  ========  ====================================

请求示例
~~~~~~~~~~~~~~~

参数要求参考 *新增分类* 示例

.. code-block:: javascript

    {"name": "新分类名称-更新"}


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

   {
      "data": {
        "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
        "description": "新分类描述说明",
        "id": 21,
        "name": "新分类名称-更新",
        "pid": 0,
        "sort_order": 5,
        "status": 1
      },
      "status": {
        "code": 200,
        "message": "Ok all right."
      }
    }


删除分类
------------
删除商家自定义分类

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/categories/<id>``
* API接口请求方法：``DELETE``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
id           Number    必须                  分类ID
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 204,
            "message": "All deleted."
        },
        "success": true
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 403,
            "message": "该分类包含商品, 不能删除！"
        },
        "success": false
    }


全部官方分类列表
-------------------
获取官方全部有效的分类列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/official/all_categories``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

.. code-block:: javascript

    {
        "data": {
            "k_1_0": [
                {
                    "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
                    "description": "",
                    "id": 1,
                    "name": "箱包&包袋",
                    "pid": 0,
                    "sort_order": 1,
                    "status": 1
                },
                {
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180530/72de0b9ca1ae5a3.jpg",
                    "description": "",
                    "id": 2,
                    "name": "玩具&娱乐",
                    "pid": 0,
                    "sort_order": 6,
                    "status": 1
                }
            ],
            "k_1_1": [
                {
                    "cover": "http://127.0.0.1:9000/_uploads/photos/180530/72de0b9ca1ae5a3.jpg",
                    "description": "",
                    "id": 16,
                    "name": "儿童手工艺",
                    "pid": 1,
                    "sort_order": 11,
                    "status": 1
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


官方分类列表
---------------
获取商品有效的分类列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/official/categories``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
page         Number    可选         1         当前页码
per_page     Number    可选         100       每页数量
pid          Number    可选         0         父级ID
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: category_list.js
    :language: javascript

新增官方分类
-------------
增加官方分类, 所有商家都使用

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/official/categories``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
pid            Number    可选        0         父级ID
name           String    必填                  分类名称
description    String    可选                  分类描述
sort_order     Number    可选        0         排序，数字越大越靠前
=============  ========  =========  ========  ====================================

请求示例
~~~~~~~~~~~~~~~

.. code-block:: javascript

    {"name": "新官方分类名称", "sort_order": 5, "description": "新分类描述说明"}

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
      "data": {
        "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
        "description": "新分类描述说明",
        "id": 21,
        "name": "新官方分类名称",
        "pid": 0,
        "sort_order": 5,
        "status": 1
      },
      "status": {
        "code": 201,
        "message": "All created."
      }
    }


更新官方分类
-------------
官方修改分类, 同步所有商家

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/official/categories/<id>``
* API接口请求方法：``PUT``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
pid            Number    可选        0         父级ID
name           String    必填                  分类名称
description    String    可选                  分类描述
sort_order     Number    可选        1         排序，数字越大越靠前
=============  ========  =========  ========  ====================================

请求示例
~~~~~~~~~~~~~~~

参数要求参考 *新增官方分类* 示例

.. code-block:: javascript

    {"name": "新官方分类名称-更新"}


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

   {
      "data": {
        "cover": "http://kg.erp.taihuoniao.com/static/img/default-logo-180x180.png",
        "description": "新分类描述说明",
        "id": 21,
        "name": "新官方分类名称-更新",
        "pid": 0,
        "sort_order": 5,
        "status": 1
      },
      "status": {
        "code": 200,
        "message": "Ok all right."
      }
    }


删除官方分类
------------
官方删除分类, 同步所有商家

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/official/categories/<id>``
* API接口请求方法：``DELETE``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
id           Number    必须                  分类ID
===========  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 204,
            "message": "All deleted."
        },
        "success": true
    }

请求 ``失败`` 返回结果：

.. code-block:: javascript

    {
        "status": {
            "code": 403,
            "message": "该分类包含商品, 不能删除！"
        },
        "success": false
    }


分类商品列表
----------------------
获取指定分类下的商品列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/category/products``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
page                 Number      可选         1          当前页码
per_page             Number      可选         10         每页数量
id                   Number      必须                    当前分类编号
cids                 String      可选                    当前分类子分类编号, 多个用, 分割
qk                   String      可选                    搜索关键词
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
sort_type            Number      可选                    排序方式 1=综合排序, 2=价格由低至高, 3=价格由高至低
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
sort_newest          Number      可选         0          是否按最新排序: 0=否, 1=是
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. literalinclude:: product_list.js
    :language: javascript


分类商品数量
----------------------
获取指定分类下的商品数量

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/category/products/count``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

==================  ==========  =========  ==========  =============================
名称                 类型        是否必须     默认值       描述说明
==================  ==========  =========  ==========  =============================
id                   Number      必须                    当前分类编号
cids                 String      可选                    当前分类子分类编号, 多个用, 分割
qk                   String      可选                    搜索关键词
min_price            Number      可选                    价格区间： 最小价格
max_price            Number      可选                    价格区间： 最大价格
is_free_postage      Number      可选         0          是否包邮: 0=全部, 1=包邮
is_preferential      Number      可选         0          是否特惠: 0=全部, 1=特惠
is_custom_made       Number      可选         0          是否可定制: 0=全部, 1=可定制
==================  ==========  =========  ==========  =============================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data":
            "count": 1
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

