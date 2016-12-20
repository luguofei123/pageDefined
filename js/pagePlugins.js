
//$.fn.extend相当于给jquery增加了一个方法，俗称静态方法；使用的时候直接$("selector").bold();
;(function ($) {
  $.fn.extend({
    "bold": function () {
      ///<summary>
      /// 加粗字体
      ///</summary>
      return this.css({ fontWeight: "bold" });
    }
  });
})(jQuery);

//插件编写的常用模式；先定义一个闭包函数，并传递系统变量$, window, document, undefined；

; (function ($, window, document, undefined) {
    "use strict";
    //定义默认值总页数和当前页数
    var defaults = {
           page_number: 15,
           page_curr:11,

    };

    function Pager($ele, options) {
        this.$ele = $ele;
        this.options = options = $.extend({},defaults, options);
        this.init();
    }
    Pager.prototype = {
        constructor: Pager,
        init: function () {
            this.renderHtml();
            //this.bindEvent();
        },
        renderHtml: function () {
            var options = this.options;
            var   page_curr=options.page_curr;
            var page_number =options.page_number;
                        var page_html = [];
            if(page_curr ==1||page_curr==0){ 
                  page_html.push('<a href="javascript:void(0);"  class="first_page" style="background:#dedede;border:1px solid #dedede;cursor:default">首页</a>');
                  page_html.push('<a href="javascript:void(0);"  class="pre"        style="background:#dedede;border:1px solid #dedede;cursor:default">上一页</a>');

            } 
            else {
                  page_html.push('<a href="javascript:void(0);" onclick="gotoPage(1)" class="first_page">首页</a>');
                  page_html.push('<a href="javascript:void(0);" onclick="gotoPage(page_curr-1)" class="pre">上一页</a>');
                 }  
            if(page_number <10||page_number===10){
            
                      for(var i=1;i<=page_number;i++){

                        if(page_curr !=i){

                            page_html.push('<a href="javascript:void(0);" onclick="gotoPage('+i+')">'+i+'</a>');
                        }

                        else {page_html.push('<a href="javascript:void(0);" onclick="gotoPage('+i+')" class="on">'+i+'</a>');}
                               

                      }
       
          
              }


           else if(page_number>10){

               if(parseInt((page_curr-1)/10) === 0){


                  for(var i=1;i<=10;i++){

                     if(page_curr!=i){

                    page_html.push('<a href="javascript:void(0);" onclick="gotoPage('+i+')">'+i+'</a>');
                     }

                    else{
                    page_html.push('<a href="javascript:void(0);" onclick="gotoPage('+i+')" class="on">'+i+'</a>');
                       }
                               

              }
          } 


          else if(parseInt((page_curr-1)/10) === parseInt(page_number/10)){

            for (i=parseInt(page_number/10)*10+1;i<=page_number;i++) {

                if(page_curr !=i){

                    page_html.push('<a href="javascript:void(0);" onclick="gotoPage('+i+')">'+i+'</a>');
                }

                else{
                    page_html.push('<a href="javascript:void(0);" onclick="gotoPage('+i+')" class="on">'+i+'</a>');
                }

              
                }


          }

         else{
             for (i=parseInt((page_curr-1)/10)*10+1;i<=parseInt((page_curr-1)/10)*10+10;i++) {


                 if(i!=page_curr) {
                    page_html.push('<a href="javascript:void(0);" onclick="gotoPage('+i+')">'+i+'</a>');
                 }

                 else{
                    page_html.push('<a href="javascript:void(0);" onclick="gotoPage('+i+')" class="on">'+i+'</a>');
                 }
             }
         }
                 

      }

        if(page_curr === page_number){

            page_html.push('<a href="javascript:void(0);"  class="next" style="background:#dedede;border:1px solid #dedede;cursor:default">下一页</a>');
            page_html.push('<a href="javascript:void(0);"  class="last_page" style="background:#dedede;border:1px solid #dedede;cursor:default">末页</a>');


         }

         else {

            page_html.push('<a href="javascript:void(0);" onclick="gotoPage(page_curr+1)" class="next">下一页</a>');
            page_html.push('<a href="javascript:void(0);" onclick="gotoPage(page_number)" class="last_page">末页</a>'); 
         }
       

            

        
        

       


            this.$ele.html(page_html.join(""));

           }
      
    };


    $.fn.pager = function (options) {
        options = $.extend({},defaults, options);

        return new Pager($(this), options);
    }

})(jQuery, window, document);