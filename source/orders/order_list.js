{
    "data": {
        "count": 2,  // 总个数
        "next": "http://0.0.0.0:9000/api/v1.0/orders?status=2&page=2",  // 下一页链接
        "orders": [
            {
                "buyer_address": "朝阳区",  // 买家地址
                "buyer_city": "北京",  // 买家城市
                "buyer_country": "中国",  // 买家国家
                "buyer_name": "田帅",  // 买家姓名
                "buyer_phone": "13278989898",  // 买家手机
                "buyer_province": "北京",  // 买家省
                "buyer_remark": null,  // 买家备注
                "buyer_tel": null,  // 买家电话
                "buyer_zipcode": null,  // 买家邮政编码
                "created_at": 1528620896,  // 订单时间
                "customer_order_id": null,  // 关联分销商订单编号
                "discount_amount": 0,  // 优惠金额
                "express_at": 0,  // 发货时间
                "express_name": "",  // 快递公司
                "express_no": null,  // 运单号
                "freight": 0,  // 运费
                "items": [
                    {
                        "cost_price": "1.00",  // 采购价
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",  // 商品图片
                        "deal_price": 999.1,  // 交易单价
                        "discount_amount": 0,  // 优惠金额
                        "id_code": "1",  // 商品编码
                        "mode": "1 1",  // 型号
                        "price": "1.00",  // 零售价
                        "product_name": "摩托",  // 商品名
                        "quantity": 3,  // 购买数量
                        "rid": "1",  // sku_serial_no
                        "s_color": "1",  // 颜色
                        "s_model": "1",  // 型号
                        "s_weight": "1.00",  // 重量
                        "sale_price": "1.00",  // 促销价
                        "stock_count": 11089  // 库存
                    },
                    {
                        "cost_price": "2.00",
                        "cover": "http://0.0.0.0:9000/_uploads/photos/1",
                        "deal_price": 999.1,
                        "discount_amount": 0,
                        "id_code": "1",
                        "mode": "2 2",
                        "price": "2.00",
                        "product_name": "汽车",
                        "quantity": 1,
                        "rid": "2",
                        "s_color": "2",
                        "s_model": "2",
                        "s_weight": "2.00",
                        "sale_price": "2.00",
                        "stock_count": 22106
                    }
                ],
                "outside_target_id": "D18061062954387",  // 第三方平台订单编号
                "pay_amount": 3996.4,  // 支付金额
                "received_at": 0,  // 收货时间
                "remark": null,  // 卖家备注
                "rid": "D18061062954387",  // 订单编号
                "ship_mode": 1,  // 物流方式 1、快递；2、自提；
                "status": 40,  // 订单状态
                "store_name": "第一家(None)",  // 店铺名称
                "total_amount": 3996.4,  // 总金额
                "total_quantity": 4  // 总数量
            }
        ],
        "prev": null  // 上一页链接
    },
    "status": {
        "code": 200,
        "message": "Ok all right."
    },
    "success": true
}


