===================
app版本管理模块
===================

ios最新版本
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/app_versions/ios``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "description": [
                "1、生活馆全新改版，给你不一样的产品体验；",
                "2、修复已知bug，闪退问题，让您有更棒的购物体验；",
                "3、功能完善。"
            ],
            "version": "v1.0.1"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


android最新版本
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/app_versions/android``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "description": [
                "1、生活馆全新改版，给你不一样的产品体验；",
                "2、修复已知bug，闪退问题，让您有更棒的购物体验；",
                "3、功能完善。"
            ],
            "version": "v1.0.1"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


ios启动页图片
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/guide/ios``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            // micro=640×1136，small=750×1334，middle=1242×2208， big=1125×2436，
            "big": "http://kg.erp.taihuoniao.com/20180910/4607FlR2IbV390NUSHE6DXFKKWmghvB-.png",
            "micro": "http://kg.erp.taihuoniao.com/20180910/4609FutzCIzakzbarEw14acvnD6Z-elf.png",
            "middle": "http://kg.erp.taihuoniao.com/20180910/4609FgDkp-m8ibSFOMrP3Nj6qClgsavr.png",
            "small": "http://kg.erp.taihuoniao.com/20180910/4609Fgtti95byW2Rbr_lbI9sW2w5Gspw.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


android启动页图片
----------------------

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/market/guide/android``
* API接口请求方法：``GET``

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            // micro=640×1136，small=750×1334，middle=1242×2208， big=1125×2436，
            "big": "http://kg.erp.taihuoniao.com/20180910/4607FlR2IbV390NUSHE6DXFKKWmghvB-.png",
            "micro": "http://kg.erp.taihuoniao.com/20180910/4609FutzCIzakzbarEw14acvnD6Z-elf.png",
            "middle": "http://kg.erp.taihuoniao.com/20180910/4609FgDkp-m8ibSFOMrP3Nj6qClgsavr.png",
            "small": "http://kg.erp.taihuoniao.com/20180910/4609Fgtti95byW2Rbr_lbI9sW2w5Gspw.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }
