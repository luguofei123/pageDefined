# pageDefined
simple example
1 美化分页标签的插件很多，但是有时候我们仅仅只需要分页标签一个功能；最好的方法就是自己写一个；
2 在实际的使用中只需要在翻页的函数里面添加一个请求，就可以正常使用了；
3 封装了一个分页的插件，调用时$("selector").pager({
                              page_number: xxx,  //页面数量
                              page_curr:xxx,    // 当前页数
})
