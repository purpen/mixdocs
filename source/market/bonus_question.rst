====================
营销工具/猜题赢现金
====================


用户获取题目
----------------------
用户获取题目

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/question``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "question": [  // 问题列表
                {
                    "answers": [  // 答案列表
                        {
                            "answer": 1,  // 答案内容
                            "answer_id": 38, // 答案id
                            "question_id": 4  // 问题id
                        },
                    ],
                    "difficult": 1,  // 问题难度
                    "image": "http://0.0.0.0:9000/_uploads/photos/2"  // 问题图片
                    "question_id": 4,  // 问题id
                    "question": "第4题"  // 问题内容
                }
            ],
            "test_id": 18  // 试题id
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



判断答案是否正确
-----------------------
判断答案是否正确

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/answers``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
test_id                Integer       必需                      试题id
question_id            Integer       必需                      问题id
answer_id              Integer       必需                      答案id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "answer": true,  // 答案结果
            "answer_id": 10,  // 答案id
            "question_id": 4,  // 问题id
            "test_id": 17,  // 试题id
            "amount": 0,  // 现金金额
            "bonus_amount": 0, // 优惠券面值
            "min_amount": 0,  // 优惠券最低消费
            "right_answer_id": 101,  // 正确答案
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



试题结算
-----------------------
试题结算

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/test_settlement``
* API接口请求方法：``POST``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
test_id                Integer       必需                      试题id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "amount": 20,  // 获得现金
            "answer_date": 1533830400,  // 回答日期
            "bonus_amount": 35,  // 获得优惠券总金额
            "bonuses": [
                {
                    "amount": 5,
                    "code": "OUBMZRPJUTY",
                    "count": 1,
                    "created_at": 1533965615,
                    "end_date": 1534608000,
                    "min_amount": 5,
                    "pickup_count": 1,
                    "start_date": 1533916800,
                    "type_text": "满5减5元",
                    "use_count": 0
                },
            ],
            "created_at": 1533893802,
            "is_settlement": true,  // 是否结算
            "prize_pool": 200,  // 奖金池
            "right_count": 7,  // 回答正确个数
            "count": 10,  // 回答题数
            "test_id": 22  // 试题id
            "user_ranking": 1 // 用户排行

        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


获取可提现金额
----------------------
获取可提现金额

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/cash_price``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "cash_price": 140  // 可提现金额
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



获取优惠券数量
----------------------
获取优惠券数量

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/coupon_count``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "coupon_count": 3  // 数量
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



猜图-答案列表
----------------------
猜图-答案列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/answer_list``
* API接口请求方法：``GET``
* API接口用户授权：``token``


请求参数
~~~~~~~~~~~~~~~

=====================  ===========  ==========  ===========  ==============================
名称                    类型          是否必须      默认值        描述说明
=====================  ===========  ==========  ===========  ==============================
test_id                Integer       必需                      试题id
=====================  ===========  ==========  ===========  ==============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "product_list": [
                {
                    "answer_result": false,  // 是否回答正确
                    "price": 2,  // 零售价
                    "product_name": "汽车",  // 商品名
                    "product_path": "http://wx2.sinaimg.cn/large/005Pcwbtgy1fdqwmqs6fwj31kw10fk87.jpg",  // 商品图片
                    "product_rid": "2",  // 商品rid
                    "right_answer": 65,  // 正确答案id
                    "right_answer_name": "汽车",  // 正确答案名
                    "sale_price": 2,  // 折扣价
                    "use_coupon_price": 4  //券后价
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



猜图-获取用户所有奖励
-------------------------
猜图-获取用户所有奖励

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/all_rewards``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "amount": 0,  // 现金
            "bonus_amount": 40,  // 优惠券总额
            "bonus_quantity": 60  // 优惠券数量
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



猜图-世界榜
-------------------------
猜图-世界榜

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/world_ranking``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         30         每页数量
===============  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 1,
            "next": null,
            "prev": null,
            "user_amount": 24,  // 当前用户红包金额
            "user_coupon_amount": 190,  //当前用户优惠券金额
            "user_coupon_quantity": 38,  //当前用户优惠券数量
            "user_info": {
                "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",  // 用户头像
                "user_name": null,  // 用户名
                "user_sn": "15672098143"  // 用户编号
            },
            "user_ranking": 1,  // 当前用户排名  0、未上榜
            "ranking_list": [  // 排行榜
                {
                    "amount": 24,  //
                    "code": "W598013472",
                    "created_at": 1536052931,
                    "cumulative_amount": 24,  // 累计红包金额
                    "cumulative_coupon_amount": 190,  // 累计优惠券金额
                    "cumulative_coupon_quantity": 38,  // 累计优惠券数量
                    "mobile": null,
                    "ranking": 1,  // 排名
                    "updated_at": 1536055463,
                    "user_info": {
                        "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",  // 用户头像
                        "user_name": null,  // 用户姓名
                        "user_sn": "15672098143"  // 用户编号
                    }
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



猜图-好友榜
-------------------------
猜图-好友榜

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/friend_ranking``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         30         每页数量
===============  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "count": 1,
            "next": null,
            "prev": null,
            "user_amount": 24,  // 当前用户红包金额
            "user_coupon_amount": 190,  //当前用户优惠券金额
            "user_coupon_quantity": 38,  //当前用户优惠券数量
            "user_info": {
                "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",  // 用户头像
                "user_name": null,  // 用户名
                "user_sn": "15672098143"  // 用户编号

            },
            "user_ranking": 1,  // 当前用户排名  0、未上榜
            "ranking_list": [  // 排行榜
                {
                    "amount": 24,  //
                    "code": "W598013472",
                    "created_at": 1536052931,
                    "cumulative_amount": 24,  // 累计红包金额
                    "cumulative_coupon_amount": 190,  // 累计优惠券金额
                    "cumulative_coupon_quantity": 38,  // 累计优惠券数量
                    "mobile": null,
                    "ranking": 1,  // 排名
                    "updated_at": 1536055463,
                    "user_info": {
                        "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",  // 用户头像
                        "user_name": null,  // 用户姓名
                        "user_sn": "15672098143"  // 用户编号
                    }
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


猜图-用户被邀请同时添加游戏好友
--------------------------------------------------
猜图-用户被邀请同时添加游戏好友

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/add_friend``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

====================  ==========  =========  ==========  =============================
名称                   类型        是否必须     默认值       描述说明
====================  ==========  =========  ==========  =============================
source_user_sn        String      可选                    邀请人sn(发链接的人)
from_module           Integer     可选           1        来源功能 1、猜图赢现金
is_new                Integer     可选           0        是否新用户 0、否 1、是
====================  ==========  =========  ==========  =============================


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


猜图-我的好友列表
-------------------------
猜图-我的好友列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/friend_list``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         30         每页数量
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
                    "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",  // 头像
                    "user_name": "13260180689",  // 用户名
                    "user_sn": "15672098143"  // 用户编号
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




猜图-可能认识的人列表
-------------------------
猜图-可能认识的人列表

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/may_friend_list``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         30         每页数量
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
                    "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",  // 头像
                    "user_name": "13260180689",  // 用户名
                    "user_sn": "15672098143"  // 用户编号
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




猜图-偷红包
--------------------------------------------------
猜图-偷红包

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/steal_bouns``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

====================  ==========  =========  ==========  =============================
名称                   类型        是否必须     默认值       描述说明
====================  ==========  =========  ==========  =============================
sn                    String      必需                    好友用户编号
====================  ==========  =========  ==========  =============================


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "user_info": {
                "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png", //好友头像
                "user_name": '默默',  // 好友名称
                "user_sn": "15672098143" // 好友用户编号
            },
            "amount": 0.3,  // 偷现金金额
            "bouns_type": 1,  // 0、 未偷到 1、偷优惠券 2、偷现金
            "coupon": {
                "amount": 10,  // 优惠券金额
                "expired_at": 1538841600,  // 过期时间
                "min_amount": 100  // 最小金额
            },
            "status": 1  // 返回信息
            // 1、成功
            // 2、ta今天已经不不能在偷了了，先放过ta吧!
            // 3、你刚刚已经偷过ta了了，稍后在来吧!
            // 4、ta钱包已经被一群强盗偷光了了，去提醒一下好友吧!
        },
        "status": {
            "code": 201,
            "message": "All created."
        },
        "success": true
    }


猜图-偷我钱包的人
-------------------------
猜图-偷我钱包的人

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/steal_my_money``
* API接口请求方法：``GET``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

===============  ==========  =========  ==========  =============================
名称              类型        是否必须     默认值       描述说明
===============  ==========  =========  ==========  =============================
page             Number      可选         1          当前页码
per_page         Number      可选         30         每页数量
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
                    "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "15210062187",
                    "user_sn": "17160283459"
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


猜图-人数统计
-------------------------
猜图-人数统计

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/people_count``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "total_count": 5141  // 总人数
            "user_info": [  // 参与用户信息
                {
                    "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "13260180689",
                    "user_sn": "15672098143"
                },
                {
                    "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "18612963205",
                    "user_sn": "14987652130"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


猜图-获取猜图海报图片
--------------------------------------------------
猜图-获取猜图海报图片

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/wxa_poster``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

====================  ==========  =========  ==========  ===========================================================
名称                   类型        是否必须     默认值       描述说明
====================  ==========  =========  ==========  ===========================================================
type                  Integer     必需         11         11、带图片 图1  12、不带图片 图2
auth_app_id           String      必需                    小程序id
path                  String      必需                    访问路径
scene                 String      必需                    场景参数： 商品编号-店铺编号  例：8945120367-94395210
test_id               Integer     必需                    试题id
====================  ==========  =========  ==========  ===========================================================

返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "image_url": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpo0.jpg",  // 分享图片
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }


猜图-一小时内玩的次数
-------------------------
猜图-一小时内玩的次数

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/play_count``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "play_count": 2
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



猜图-奖励消息
-------------------------
猜图-奖励消息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/reward_message``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript

    {
        "data": {
            "reward_message": [
                {
                    "amount": 18,  // 红包金额
                    "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",  // 头像
                    "user_name": "默默",  // 用户名
                    "user_sn": "17160283459"  // 用户编号
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



猜图-猜图赢现金提现
--------------------------------------------------
猜图-猜图赢现金提现

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/cash_money``
* API接口请求方法：``POST``
* API接口用户授权：``token``

请求参数
~~~~~~~~~~~~~~~

====================  ==========  =========  ==========  ===========================================================
名称                   类型        是否必须     默认值       描述说明
====================  ==========  =========  ==========  ===========================================================
open_id               String      必需                    open_id
====================  ==========  =========  ==========  ===========================================================

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



猜图-偷我红包记录
-------------------------
猜图-偷我红包记录

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/steal_bouns_record``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "steal_bouns_count": 2,  // 偷我红包好友数量
            "steal_bouns_record": [
                {
                    "amount": 22,  // 现金金额
                    "bonus_amount": 0,  //  优惠券金额
                    "bouns_type": 2,  // 红包类型 1、优惠券 2、现金红包
                    "user_info": {
                        "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                        "user_name": null,
                        "user_sn": "15672098143"
                    }
                },
                {
                    "amount": 0,
                    "bonus_amount": null,
                    "bouns_type": 1,
                    "user_info": {
                        "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                        "user_name": null,
                        "user_sn": "15672098143"
                    }
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



猜图-记录是否分享
--------------------------------------------------
猜图-记录是否分享

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/is_share``
* API接口请求方法：``POST``
* API接口用户授权：``token``

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


猜图-邀请好友信息
-------------------------
猜图-邀请好友信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/invite_friend``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "invite_count": 1,  // 邀请人数
            "invite_name": "默默",  //被邀请人姓名
            "user_info": [  // 三个头像
                {
                    "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "默默",
                    "user_sn": "15672098143"
                }
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }



猜图-最新邀请好友登录信息
-----------------------------------
猜图-最新邀请好友登录信息

接口说明
~~~~~~~~~~~~~~

* API接口请求地址：``/guess_image/new_friend_info``
* API接口请求方法：``GET``
* API接口用户授权：``token``


返回示例
~~~~~~~~~~~~~~~~

JSON数据格式:

.. code-block:: javascript


    {
        "data": {
            "invite_count": 1,  // 邀请人数
            "invite_name": "默默",  //被邀请人姓名
            "user_info": [
                {
                    "user_logo": "http://kg.erp.taihuoniao.com/static/img/default-logo.png",
                    "user_name": "15210062187",
                    "user_sn": "17160283459"
                },
            ]
        },
        "status": {
            "code": 200,
            "message": "Ok all right."
        },
        "success": true
    }