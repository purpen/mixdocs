=========================
营销工具/一元送礼模块
=========================


查看今日礼物
----------------------
查看今日礼物

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/product``
* API接口请求方法：``GET``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "assets": [
                {
                    "created_at": 1541599579,
                    "filename": "1.jpg",
                    "filepath": "20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg",
                    "id": 38641,
                    "type": 1,
                    "view_url": "https://s3.lexivip.com/20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg"
                },
            ],
            "price": 189,  // 销售价
            "product_name": "望北原创自制 2018年新款简约百搭休闲裤九分裤",
            "product_rid": "8670312598",
            "quantity": 20,  // 可送数量
            "real_price": 178, // 实际价格
            "sale_price": 178, // 折扣价
            "surplus_count": 20  // 剩余数量
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


新增送礼活动
----------------
新增送礼活动

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
openid                 String        必需                      openid
people_num             Number        必需                      最少人数
product_rid            String        必需                      商品rid
days                   Number        必需                      活动天数
blessing               String        可选                      祝福语
pay_type               Number        可选             1        支付类型 1、微信
sync_pay               Number        可选             1        是否同步返回支付参数 0、否 1、是
auth_app_id            String        可选                      auth_app_id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript

    {
        "data": {
            "activity_rid": "Y18112357682",  // 活动编号
            "actual_payment": 1,  // 实际支付金额
            "pay_params": {}
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


查看活动详情
----------------------
查看活动详情

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/<string:rid>``
* API接口请求方法：``GET``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    String        必需                      活动rid
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "days": 3,  // 活动天数
            "end_at": 1543665172,  // 活动结束时间
            "start_time": 1542966869,  // 开始时间
            "current_time": 1542966869,  // 当前时间
            "people_count": 1,  // 当前参与人数
            "blessing": '哈哈哈',  // 祝福语
            "product": {
                "assets": [   // 商品图片
                    {
                        "created_at": 1541599579,
                        "filename": "1.jpg",
                        "filepath": "20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg",
                        "id": 38641,
                        "type": 1,
                        "view_url": "https://s3.lexivip.com/20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg"
                    }
                ],
                "price": 189,  // 销售价
                "product_name": "望北原创自制 2018年新款简约百搭休闲裤九分裤",  // 商品名
                "product_rid": "8670312598",  // 商品rid
                "real_price": 178,  // 真实价格
                "sale_price": 178  // 折扣价
            },
            "status": 1,  // 活动状态 2、抽奖中 3、开奖成功 4、已失效
            "surplus_count": 19,  // 剩余人数
            "total_people_count": 20,  // 需要人数
            "owner_store": {
                "store_bgcover": "https://s3.lexivip.com/20180911/4148FlTE2Q_LRdlouNbvyf_E3HTjWHJB.png",  // 店铺背景图
                "store_logo": "https://s3.lexivip.com/20180913/4849FgzxNAZiToR482ksb89Pl2kOAQ8B.png",  // 店铺logo
                "store_name": "爱尚",  // 店铺名
                "store_rid": "95149076"  // 店铺rid
            },
            "owner_user": {  // 所属用户
                "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                "user_name": "蓝胖子",
                "user_sn": "10296157834"
            },
            'user_kind': 1  // 1、品牌馆  2、生活馆  3、普通用户
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


活动参与人
----------------------
活动参与人

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/users/<string:rid>``
* API接口请求方法：``GET``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
rid                    String        必需                      活动rid
page                   Number        可选         1            当前页码
per_page               Number        可选         50           每页数量
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 1,
            "next": false,
            "prev": false,
            "user_list": [  // 参与者
                {
                    "is_receive": false,  // 是否领奖
                    "is_win": false,  // 是否中奖
                    "receive_at": 0,  // 领奖时间
                    "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                    "user_name": "蓝胖子",
                    "user_sn": "10296157834"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



活动状态
-------------------------
活动状态

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/status/<string:rid>``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
rid              String      必需                    活动rid
===============  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "expired_receive": true,  // 是否可以领取奖励, 开奖5天不可领取
            "is_join": true,  // 是否参与
            "is_quit": false,  // 是否放弃领奖
            "is_receive": true,  // 是否领奖
            "is_winner": true,  // 是否中奖
            "people_count": 1, // 当前参与人数
            "status": 3,  // 活动状态 2、抽奖中 3、开奖成功 4、已失效
            "surplus_count": 49,  // 剩余人数
            "total_people_count": 50,  // 需要人数
            "winning_user": {  // 中奖用户
                "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                "user_name": "蓝胖子",
                "user_sn": "10296157834"
            }
            "user_list": [
                {
                    "is_receive": false,
                    "is_win": false,
                    "receive_at": 0,
                    "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                    "user_name": "蓝胖子",
                    "user_sn": "10296157834"
                }
            ],
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



查看领取我的礼物的人
-------------------------
查看领取我的礼物的人

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/product/receive``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
===============  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 1,
            "friend_list": [
                {
                    "receive_at": 0,  // 领取时间
                    "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                    "user_name": "蓝胖子",
                    "user_sn": "10296157834"
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



我参与的活动汇总
-------------------------
我参与的活动汇总

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/collect_activity``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "join_activity": 1,  // 我参与的抽奖
            "my_activity": 0,  // 我送出的礼物
            "receive_activity": 1  // 我收到的礼物
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


查看十个最热门的活动
-------------------------
查看十个最热门的活动

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/more``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "activity_list": [
                {
                    "activity_rid": "Y18112357682",  // 活动rid
                    "is_join": 1,  // 本人是否参与
                    "join_count": 1,  // 已参与人数
                    "full_count": 20,  // 需满足人数
                    "price": 189,  // 销售价
                    "product_name": "望北原创自制 2018年新款简约百搭休闲裤九分裤",  // 商品名
                    "product_rid": "8670312598",  // 商品rid
                    "real_price": 178,  // 商品真实价格
                    "sale_price": 178,  // 折扣价
                    "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                    "user_name": "蓝胖子",
                    "cover": "https://s3.lexivip.com/20181107/0618Fp2ThUtpaN-7O3N8f5BJ0_3eciIS.jpg",  // 商品图
                    "user_sn": "10296157834",
                    'user_kind': 1  // 1、品牌馆  2、生活馆  3、普通用户
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


我参与的抽奖
-------------------------
我参与的抽奖

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/join``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
s                Number      可选         0          0、全部 1、已中奖 2、未中奖 3、已失效
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "expired_receive": true,  // 是否可以领取奖励, 开奖5天不可领取
            "is_join": true,  // 是否参与
            "is_quit": false,  // 是否放弃领奖
            "is_receive": true,  // 是否领奖
            "is_winner": true,  // 是否中奖
            "status": 3,  // 活动状态 2、抽奖中 3、开奖成功 4、已失效
            "winning_user": {  // 中奖用户
                "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                "user_name": "蓝胖子",
                "user_sn": "10296157834"
            }
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


参与抽奖
-------------------------
参与抽奖

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/join``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
rid              String      必需                     活动rid
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "expired_receive": true,  // 是否可以领取奖励, 开奖5天不可领取
            "is_join": true,  // 是否参与
            "is_quit": false,  // 是否放弃领奖
            "is_receive": true,  // 是否领奖
            "is_winner": true,  // 是否中奖
            "people_count": 1, // 当前参与人数
            "status": 3,  // 活动状态 2、抽奖中 3、开奖成功 4、已失效
            "surplus_count": 49,  // 剩余人数
            "total_people_count": 50,  // 需要人数
            "can_join": true,  // true:可参与  false:不可参与
            "winning_user": {  // 中奖用户
                "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                "user_name": "蓝胖子",
                "user_sn": "10296157834"
            }
            "user_list": [
                {
                    "is_receive": false,
                    "is_win": false,
                    "receive_at": 0,
                    "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                    "user_name": "蓝胖子",
                    "user_sn": "10296157834"
                }
            ],
        },

        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


用户当前是否有活动
--------------------------------
用户当前是否有活动

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/having``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "is_having": 0  // 0、没有 1、有
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



我送出的礼物
-------------------------
我送出的礼物

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/send``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
s                Number      可选         0          0、全部 1、未领取 2、已领取 3、退款
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "activity_list": [
                {
                    "activity_rid": "Y18112728940",  // 活动编号
                    "created_at": 1543304292,  // 创建时间
                    "product_name": "清浅‖原创个性百搭纯手工紫光檀木镶银s925防过敏银耳钉自戴送礼【双鱼】",  // 商品名
                    "product_rid": "8635729480",  // 商品编号
                    "s_color": "黑色",  // 颜色
                    "s_model": "",  // 型号
                    "sku": "8035291864",  // sku
                    "status": 1,  // 1、未领取 2、已领取 3、退款
                    "user_info": {  // 发起者信息
                        "user_logo": "https://static.moebeast.com/image/static/default_user.png",
                        "user_name": "purpen.w",
                        "user_sn": "13978412506"
                    },
                    "view_url": "https://s3.lexivip.com/20181107/4307FolDdcJqUkBbTgiLBL6KLobQKSFb.jpg",  // 商品图
                    "winning_at": 1543329839  // 开奖时间
                }
            ],
            "count": 2,
            "next": false,
            "prev": false
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


领取奖励
-------------------------
领取奖励

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/grant``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
rid              String      必需                     活动rid
openid           String      必需                     openid
address_rid      String      必需                     地址rid
sync_pay         Number      可选             1       是否同步返回支付参数 0、否 1、是
auth_app_id      String      可选                     auth_app_id
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "activity_rid": "Y18112357682",  // 活动编号
            "actual_payment": 1,  // 实际支付金额
            "no_stock": false, // 是否没有官方库存
            "order_rid": "D214314253465", // 订单编号
            "pay_params": {}
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }



我收到的礼物
-------------------------
我收到的礼物

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/receive``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
s                Number      可选         0          0、全部 1、未发货 2、已发货
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "activity_list": [
                {
                    "activity_rid": "Y18112815074",  // 活动rid
                    "created_at": 1543406082,  // 创建时间
                    "order_rid": "D18112876054132",  // 订单编号
                    "order_type": 11,  // 11、可调换一元送礼订单
                    "product_name": "2018年新款男士休闲连帽夹克",  // 商品名
                    "product_rid": "8703186425",  // 商品rid
                    "s_color": "蓝色",  // 颜色
                    "s_model": "L",  // 型号
                    "sku": "8018239564",  // sku
                    "status": 1,  // 1、未发货 2、已发货
                    "user_info": {  // 发货人信息
                        "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                        "user_name": "蓝胖子",
                        "user_sn": "10296157834"
                    },
                    "view_url": "https://s3.lexivip.com/20181107/4917Fv-5K9wdFTXgV13g-nfMTvXrnNb1.jpg",  // 商品名
                    "winning_at": 1543406039  // 开奖时间
                },

            ],
            "count": 2,
            "next": false,
            "prev": false
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



品牌馆更多商品
-------------------------
品牌馆更多商品

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/product/store``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
store_rid        String      必需         0          店铺rid
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 38,
            "next": true,
            "prev": false,
            "product_list": [
                {
                    "cover": "https://s3.lexivip.com/20181023/1707FhnL7eK2IfSPpxoBeZ1o5hgS_fJc.jpeg",
                    "price": 328,  // 销售价
                    "product_name": "雪花 耳环 14kgf YUFUN原创设计 施华洛世奇水晶再设计",
                    "product_rid": "8736814295",
                    "real_price": 328,// 实际价
                    "sale_price": 0// 折扣价
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


商家发起送礼活动
---------------------
商家发起送礼活动

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/master``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
people_num             Number        必需                      最少人数
product_rid            String        必需                      商品rid
days                   Number        必需                      活动天数
blessing               String        可选                      祝福语
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

请求 **正确** 返回结果：

.. code-block:: javascript


    {
        "data": {
            "activity_rid": "Y18112928376"  // 活动编号
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }



分享一元商品卡片
----------------------
分享一元商品卡片

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/product_card``
* API接口请求方法：``POST``

请求参数
~~~~~~~~~~~~~~~

=============  ========  =========  ========  ====================================
名称            类型      是否必须    默认值     描述说明
=============  ========  =========  ========  ====================================
rid            String    必填                  商品编号
type           Number    必填                  类型 1、邀请 2、炫耀
=============  ========  =========  ========  ====================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


获取一元海报图片
----------------------
获取一元海报图片

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/product_poster``
* API接口请求方法：``POST``


请求参数
~~~~~~~~~~~~~~~

================  ========  =========  ========  ====================================
名称               类型      是否必须    默认值     描述说明
================  ========  =========  ========  ====================================
rid               String    必填                  商品编号
type              Number    必填                  类型 1、生活馆邀请 2、炫耀 3、用户邀请
auth_app_id       String    必需                  小程序id
path              String    必需                  访问路径
scene             String    必需                  场景参数
================  ========  =========  ========  ====================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://kg.erp.taihuoniao.com/20180314/Fk1vEAP_tIVwmPRfHRfl8jpn07CZ.png"
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



中奖用户
-------------------------
中奖用户

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/win``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 4,
            "next": false,
            "prev": false,
            "user_list": [
                {
                    "user_logo": "https://s3.lexivip.com/20181101/2251FgKdtFrFPWjJYew4aROzCOBB6IMP.jpg",
                    "user_name": "蓝胖子",
                    "user_sn": "10296157834",
                    "winning_at": 1543499243  // 中奖时间
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



更多礼物
-------------------------
更多礼物

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/product/more``
* API接口请求方法：``GET``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
page             Number      可选         1          当前页码
per_page         Number      可选         10         每页数量
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "count": 1,
            "next": false,
            "prev": false,
            "user_list": [
                {
                    "cover": "https://s3.lexivip.com/20181107/4917Fv-5K9wdFTXgV13g-nfMTvXrnNb1.jpg", // 商品图
                    "price": 252, // 价格
                    "product_name": "2018年新款男士休闲连帽夹克", // 商品名
                    "product_rid": "8703186425", // 商品rid
                    "real_price": 252,
                    "sale_price": 0
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


放弃领取奖励
-------------------------
放弃领取奖励

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/activity/quit``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
rid              String      必需                     活动rid
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



删除一元送礼订单
-------------------------
删除一元送礼订单

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/yiyuan/orders/delete``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  ========================================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  ========================================
order_rid        String      必需                     订单rid
===============  ==========  =========  ==========  ========================================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }

