/**
 * Created by wang on 2017/8/28.
 */
(function ($) {
    $.extend({
        wyf:function(){
            //单选框 滑动
            if($('.radio_slide').length && $('.radio_slide').length>0){
                $('.radio_slide').each(function(){
                    order_name = $(this).attr("name");
                    order_value = 0;
                    if($(this).hasClass('xz')){ order_value=1; }
                    if(order_name.length>0){
                        $(this).html('<input name="'+order_name+'" class="hide" type="radio" value="'+order_value+'"><i></i>');
                    } else {
                        $(this).html('<input name="radio_slide" class="hide" type="radio" value="'+order_value+'"><i></i>');
                    }
                });
                $('.radio_slide').click(function(){
                    radio_status =  $(this).children("input[type='radio']").val();
                    if($(this).hasClass('xz')){
                        $(this).removeClass("xz");
                        $(this).children("input[type='radio']").val(0);
                    } else {
                        $(this).addClass("xz");
                        $(this).children("input[type='radio']").val(1);
                    }
                });
            }
            //复选框 滑动
            if($('.checkbox_slide').length && $('.checkbox_slide').length>0){
                $('.checkbox_slide').each(function(){
                    order_name  = $(this).attr("name");
                    order_value = $(this).attr("value");
                    order_checked = "";
                    if($(this).hasClass('xz')){ order_checked=' checked="checked" '; }
                    if(order_name.length>0){
                        $(this).html('<input name="'+order_name+'" class="hide" '+order_checked+' type="checkbox" value="'+order_value+'"><i></i>');
                    } else {
                        $(this).html('<input name="checkbox_slide" class="hide" '+order_checked+' type="checkbox" value="'+order_value+'"><i></i>');
                    }
                });
                $('.checkbox_slide').click(function(){
                    radio_status =  $(this).children("input[type='checkbox']").val();
                    if($(this).hasClass('xz')){
                        $(this).removeClass("xz");
                        $(this).children("input[type='checkbox']").removeAttr('checked');
                    } else {
                        $(this).addClass("xz");
                        $(this).children("input[type='checkbox']").attr('checked','checked');
                    }
                });
            }
            if($('footer').length && $('footer').length>0){
                if($('footer').hasClass('fixed')){
                    footer_height = $('footer').height()/parseFloat($("html").css("font-size"))+0.4;
                    //alert(footer_height);
                    $(".body").css({"margin-bottom":footer_height+"em"});
                }
            }
        },
        /**
         *  获取GET参数
         *  <code>
         *      var GET = $.Get(); //获取URL的Get参数
         *      var id = GET['id']; //取得id的值
         *  </code>
         **/
        GET:function(name){
            var aQuery = window.location.href.split("?");//取得Get参数
            var aGET = new Array();
            if(aQuery.length > 1){
                var aBuf = aQuery[1].split("&");
                for(var i=0, iLoop = aBuf.length; i<iLoop; i++)
                {
                    var aTmp = aBuf[i].split("=");//分离key与Value
                    aGET[aTmp[0]] = decodeURI(aTmp[1]); //encodeURI()
                }
            }
            if(name){
                return aGET[name];
            } else {
                return aGET;
            }
        },
        /**
         *
         *  <code>
         *      var GET = $.myTime.CurTime(); //获取当前时间戳
         *  </code>
         **/
        myTime: {
            /**
             * 当前时间戳
             * @return <int>    unix时间戳(秒)
             **/
            CurTime: function(){
                return Date.parse(new Date())/1000;
            },
            /**      
             * 日期 转换为 Unix时间戳
             * @param <string> 2014-01-01 20:20:20 日期格式      
             * @return <int>    unix时间戳(秒)      
             **/
            DateToUnix: function(string) {
                var f = string.split(' ', 2);
                var d = (f[0] ? f[0] : '').split('-', 3);
                var t = (f[1] ? f[1] : '').split(':', 3);
                return (new Date(
                        parseInt(d[0], 10) || null,
                        (parseInt(d[1], 10) || 1) - 1,
                        parseInt(d[2], 10) || null,
                        parseInt(t[0], 10) || null,
                        parseInt(t[1], 10) || null,
                        parseInt(t[2], 10) || null
                    )).getTime() / 1000;
            },
            /**      
             * 时间戳转换日期      
             * @param <int> unixTime  待时间戳(秒)
             * @param <bool> isFull  返回完整时间(Y-m-d 或者 Y-m-d H:i:s)
             * @param <int> timeZone  时区
             **/
            UnixToDate: function(unixTime, isFull, timeZone) {
                if (typeof (timeZone) == 'number')
                {
                    unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
                }
                var time = new Date(unixTime * 1000);
                var ymdhis = "";
                ymdhis += time.getUTCFullYear() + "-";
                ymdhis += (time.getUTCMonth()+1) + "-";
                ymdhis += time.getUTCDate();
                if (isFull === true)
                {
                    ymdhis += " " + time.getUTCHours() + ":";
                    ymdhis += time.getUTCMinutes() + ":";
                    ymdhis += time.getUTCSeconds();
                }
                return ymdhis;
            },
            /**
             * 时间格式化
             * @param <string> 2014-01-01 20:20:20 日期格式 
             * @param <bool> isFull  返回完整时间(Y-m-d 或者 Y-m-d H:i:s)
             * @param <int> timeZone  时区
             **/
            DateStyle:function(string, isFull, timeZone){
                return $.myTime.UnixToDate($.myTime.DateToUnix(string), isFull, timeZone);
            }
        }
    });
})(jQuery);
