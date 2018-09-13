{
    "data"
:
    {
        "count"
    :
        2,  // 总个数
            "next"
    :
        "http://0.0.0.0:9000/api/v1.0/orders?status=2&page=2",  // 下一页链接
            "orders"
    :
        [
            {
                "buyer_address": "青年路",  // 买家地址
                "buyer_city": "淄博",  //买家市
                "buyer_country": "中国",  // 买家国家
                "buyer_name": "ZT-2",
                "buyer_phone": "13260180689",  // 买家电话
                "buyer_province": "山东",  // 买家省
                "buyer_remark": null,  // 买家备注
                "buyer_tel": "13260180689",  // 买家手机
                "buyer_zipcode": "255300",  // 买家邮编
                "coupon_amount": 0,  // 优惠券金额
                "created_at": 1530608616,  // 创建时间
                "current_time": 1533813725,  // 当前时间
                "customer_order_id": null,  // 分销商订单编号
                "discount_amount": 0,  // 店铺优惠金额 = 首单优惠 + 满减 + 优惠券
                "first_discount": 0,  // 首单优惠
                "freight": 14,  // 运费
                "official_order_id": null,  // 官方平台订单号
                "outside_target_id": "D18070316803529",  // 第三方平台订单号
                "pay_amount": 17,  // 支付金额
                "reach_minus": 0,  // 满减金额
                "received_at": 0,  // 收货时间
                "distributed": false,  // 分销订单
                "remark": null,  // 卖家备注
                "rid": "D18070316803529",  // 订单编号
                "ship_mode": 1,  // 运送方式
                "status": 5,  // 订单状态
                "store": {  // 店铺
                    "store_logo": {  // logo
                        "created_at": 1,
                        "filename": "1",
                        "filepath": "180523/8f51855eedae984.jpg",
                        "id": 1,
                        "type": 1,
                        "view_url": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg"
                    },
                    "store_name": "第一家",  // 店铺名称
                    "store_rid": "2"  // 店铺编号
                },
                "total_amount": 3,  // 商品金额
                "total_quantity": 3,  // 商品总数量
                "is_many_express": false, // 是否多物流公司发货
                "items": [
                    {
                        "bgcover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "city": "",
                        "commission_price": null,
                        "commission_rate": 10,
                        "country": "",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "cover_id": 1,
                        "deal_price": 30,
                        "delivery_city": "北京",
                        "delivery_country": "",
                        "delivery_country_id": null,
                        "delivery_province": "北京",
                        "distribution_type": 1,
                        "express": 4,  // 快递公司ID
                        "express_at": 0,  // 发货时间
                        "express_no": null,  // 运单号
                        "express_code": "ZJS",
                        "express_name": "宅急送",
                        "fans_count": 1,
                        "freight": 590,
                        "mode": "1 1",
                        "order_sku_commission_price": 6,// 分销佣金
                        "order_sku_commission_rate": 5,// 佣金比例
                        "price": 33,
                        "product_name": "摩托",  // 商品名
                        "product_rid": "3",
                        "province": "",
                        "quantity": 3,  // 数量
                        "rid": "1",  // sku
                        "s_color": "1",
                        "s_model": "1",
                        "s_weight": 1,
                        "sale_price": 30,
                        "stock_count": 32033,
                        "stock_quantity": 32033,
                        "store_logo": "http://0.0.0.0:9000/_uploads/photos/180523/8f51855eedae984.jpg",
                        "store_name": "第2家",
                        "store_rid": "3",
                        "tag_line": "1",
                        "town": ""
                    }
                ],
            },
        ],
            "prev"
    :
        null  // 上一页链接
    }
,
    "status"
:
    {
        "code"
    :
        200,
            "message"
    :
        "Ok all right."
    }
,
    "success"
:
    true
}


