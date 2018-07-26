================
附件模块
================


获取上传附件Token
-----------------------
获取上传附件（包括图片）Token

上传流程机制，参考文档：`<https://developer.qiniu.com/kodo/manual/1208/upload-token>`_

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/assets/up_token``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "directory_id": 2,
            "user_id": 4,
            "up_endpoint": "https://up.qbox.me",
            "up_token": "AWTEpwVNmNcVjsIL-vS1hOabJ0NgIfNDzvTbDb4i:OgsNLotOvWrTLDv7_QOSREvN2Zo=:eyJzY29wZSI6ImZya2luZyIsImRlYWRsaW5lIjoxNTIxNzcxNzI1LCJjYWxsYmFja1VybCI6Imh0dHA6Ly8xMjcuMC4wLjE6OTAwMC9vcGVuL3Fpbml1L25vdGlmeSIsImNhbGxiYWNrQm9keSI6ImZpbGVwYXRoPSQoa2V5KSZmaWxlbmFtZT0kKGZuYW1lKSZmaWxlc2l6ZT0kKGZzaXplKSZtaW1lPSQobWltZVR5cGUpJnVzZXJfaWQ9JCh4OnVzZXJfaWQpJndpZHRoPSQoaW1hZ2VJbmZvLndpZHRoKSZoZWlnaHQ9JChpbWFnZUluZm8uaGVpZ2h0KSZleHQ9JChleHQpJmRpcmVjdG9yeT0kKHg6ZGlyZWN0b3J5KSIsInNhdmVLZXkiOiIkKHllYXIpJChtb24pJChkYXkpLyQoZXRhZykkKGV4dCkiLCJmc2l6ZUxpbWl0IjoyMDk3MTUyMCwicmV0dXJuVXJsIjoiIiwicmV0dXJuQm9keSI6IiJ9"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


获取普通用户上传附件Token
-----------------------
获取普通用户上传附件（包括图片）Token

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/assets/user_upload_token``
* API接口请求方法：``GET``
* API接口用户授权：``token``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "directory_id": 2,
            "user_id": 4,
            "up_endpoint": "https://up.qbox.me",
            "up_token": "AWTEpwVNmNcVjsIL-vS1hOabJ0NgIfNDzvTbDb4i:OgsNLotOvWrTLDv7_QOSREvN2Zo=:eyJzY29wZSI6ImZya2luZyIsImRlYWRsaW5lIjoxNTIxNzcxNzI1LCJjYWxsYmFja1VybCI6Imh0dHA6Ly8xMjcuMC4wLjE6OTAwMC9vcGVuL3Fpbml1L25vdGlmeSIsImNhbGxiYWNrQm9keSI6ImZpbGVwYXRoPSQoa2V5KSZmaWxlbmFtZT0kKGZuYW1lKSZmaWxlc2l6ZT0kKGZzaXplKSZtaW1lPSQobWltZVR5cGUpJnVzZXJfaWQ9JCh4OnVzZXJfaWQpJndpZHRoPSQoaW1hZ2VJbmZvLndpZHRoKSZoZWlnaHQ9JChpbWFnZUluZm8uaGVpZ2h0KSZleHQ9JChleHQpJmRpcmVjdG9yeT0kKHg6ZGlyZWN0b3J5KSIsInNhdmVLZXkiOiIkKHllYXIpJChtb24pJChkYXkpLyQoZXRhZykkKGV4dCkiLCJmc2l6ZUxpbWl0IjoyMDk3MTUyMCwicmV0dXJuVXJsIjoiIiwicmV0dXJuQm9keSI6IiJ9"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


附件列表
-----------------------
获取附件（包括图片）列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/assets``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
rid          Number    可选         0         目录编号
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
            "all_directory": [
                {
                    "assets_count": "目录中图片个数",
                    "is_default": true,
                    "name": "默认目录",
                    "parent_id": 0,
                    "rid": 2,
                    "top": 0,
                    "type": 1
                },
                ...
                {
                    "assets_count": 3,
                    "is_default": false,
                    "name": "产品",
                    "parent_id": 0,
                    "rid": 3,
                    "top": 0,
                    "type": 1
                }
            ],
            "assets": [
                {
                    "created_at": 1519470547,
                    "filename": "悦音REW-A01有线耳机800x800-2.jpg",
                    "filepath": "180224/7f7ccaa87cec381.jpg",
                    "id": 19,
                    "view_url": "http://127.0.0.1:9000/_uploads/photos/180224/7f7ccaa87cec381.jpg"
                },
                ...
                {
                    "created_at": 1519471156,
                    "filename": "悦音REW-A01有线耳机800x800-5.jpg",
                    "filepath": "180224/c833237a728a1ed.jpg",
                    "id": 22,
                    "view_url": "http://127.0.0.1:9000/_uploads/photos/180224/c833237a728a1ed.jpg"
                }
            ],
            "count": 4,
            "next": false,
            "parent_directory": "",
            "prev": false
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
            "message": "此文件目录不存在！"
        },
        "success": false
    }


目录列表
-----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/directories``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===========  ========  =========  ========  ====================================
名称          类型      是否必须    默认值     描述说明
===========  ========  =========  ========  ====================================
parent_id    Number    可选         0         父级目录编号
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
            "count": 4,
            "directories": [
                {
                    "assets_count": 10,
                    "is_default": false,
                    "name": "目录名1",
                    "parent_id": 0,
                    "rid": 2,
                    "top": 1,
                    "type": 1
                },
                {
                    "assets_count": 7,
                    "is_default": false,
                    "name": "目录名2",
                    "parent_id": 0,
                    "rid": 4,
                    "top": 1,
                    "type": 1
                },
                {
                    "assets_count": 6,
                    "is_default": false,
                    "name": "目录名3",
                    "parent_id": 0,
                    "rid": 5,
                    "top": 1,
                    "type": 1
                },
                {
                    "assets_count": 5,
                    "is_default": false,
                    "name": "目录名4",
                    "parent_id": 0,
                    "rid": 11,
                    "top": 1,
                    "type": 1
                }
            ],
            "next": false,
            "prev": false
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


新增目录
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/directories``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
name           String    必填                  材料名称
parent_id      Number    可选        0         上级目录编号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "assets_count": 0,
            "is_default": false,
            "name": "目录名",
            "parent_id": 0,
            "rid": 12,
            "top": 1,
            "type": 1
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


修改目录
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/directories/<:rid>``
* API接口请求方法：``PUT``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid            Number    必须                  目录编号
name           String    可选                  材料名称
parent_id      Number    可选        0         上级目录编号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "assets_count": 0,
            "is_default": false,
            "name": "新目录名",
            "parent_id": 12,
            "rid": 13,
            "top": 2,
            "type": 1
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


删除目录
-------------

接口说明
~~~~~~~~~~~~~

* API接口请求地址：``/directories/<rid>``
* API接口请求方法：``DELETE``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid            Number    必须                  目录编号
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "status": {
            "code": 204,
            "message": "All deleted."
        },
        "success": true
    }


删除附件
-----------------------
删除某个附件图片

* API接口请求地址：``/assets/<rid>``
* API接口请求方法：``DELETE``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid            Number    必须                  目录编号
source_rid     String    可选                  附件来源编号
source_type    Number    可选         0        附件来源类型: 0=无, 1=商品, 2=商品sku
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "status": {
            "code": 204,
            "message": "All deleted."
        },
        "success": true
    }


