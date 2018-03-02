MixDocs
=========


Install
---------

sphinx-bootstrap-theme
------------------------
Installation from PyPI is fairly straightforward:

1. Install the package:

    `$ pip install sphinx_bootstrap_theme`

2. Edit the 'conf.py' configuration file to point to bootstrap theme:

.. code-block:: python

    # At the top
    import sphix_bootstrap_theme

    # ...

    # Activate the theme.
    html_theme = 'bootstrap'
    html_theme_path = sphinx_bootstrap_theme.get_html_theme_path()

3. 测试环境启动服务：

    `python3 -m http.server 9527`

4. 编译文档

    `sphinx-build -b html source build`




Sphinx参考资料
---------------
1. `sphinx-doc <http://www.sphinx-doc.org/>`_
2. `sphinx-bootstrap-theme <http://ryan-roemer.github.io/sphinx-bootstrap-theme/index.html>`_
3. `Sphinx 使用手册 <http://zh-sphinx-doc.readthedocs.io/en/latest/contents.html>`_