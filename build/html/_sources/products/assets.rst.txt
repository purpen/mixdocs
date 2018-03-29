================
附件模块
================


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
directory    String    必须                   某个目录
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
                    "is_default": true,
                    "name": "默认目录",
                    "parent_id": 0,
                    "rid": 2,
                    "top": 0,
                    "type": 1
                },
                ...
                {
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
            "next": null,
            "parent_directory": "",
            "prev": null
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

获取上传附件Token
-----------------------
获取上传附件（包括图片）Token

上传流程机制，参考文档：`<https://developer.qiniu.com/kodo/manual/1208/upload-token>`_

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/assets/up_token``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
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

删除附件 <未开通>
-----------------------
删除某个附件图片
