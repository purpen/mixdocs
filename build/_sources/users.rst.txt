=========
用户模板
=========

*注意：所有用户请求无状态的*

**认证身份**

新增用户
---------

``get_user``

用户登录
---------

| 这是一段的换行
| 这是内部 ``代码``
| 普通换行符不会显示 **加粗**

用户注册
---------

#. item1
#. item2
#. item3
#. item4

* item
* item
* item

FOO
    this is constant.


代码示例 ::

    void foo()
    {
        int i;

        for (i=0; i<10; i++)
            printf("i: %d\n", a);
    }

你也可以这样，代码示例

.. code-block:: c
    :linenos:
    :emphasize-lines: 3, 6

    void foo()
    {
        int i;

        for(i=0; i<10; i++)
            printf("i: %d\n", a);
    }

超链接

visit `baidu <http://www.baidu.com>`_

visit `baidu`_

.. _baidu: http://www.baidu.com


图片

文件icon:

.. image:: http://images2015.cnblogs.com/blog/520290/201601/520290-20160103173505448-2105847043.png
    :width: 100px


表格

=====  =====  ======
    Inputs    Output
------------  ------
A      B      A or B
=====  =====  ======
True   False  True
False  True   False
=====  =====  ======


引用

Tt is methioned by [jd]_ that C++ is good.

.. [jd] 《jd books》