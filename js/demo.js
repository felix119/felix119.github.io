/**
 * 这是一个简单的demo
 * Created by wang on 2017/8/31.
 */
$(document).ready(function(){
    $.wyf();
    id= $.GET('id');
    alert(id);
    time = $.myTime.CurTime();
    date_html = "";
    date_html += "时间戳："+time+"<br>" ;
    date_html += "格式化时间："+$.myTime.UnixToDate(time)+"<br>" ;
    date_html += "格式化时间："+$.myTime.UnixToDate(time,true)+"<br>" ;
    date_html += "格式化时间其它时区："+$.myTime.UnixToDate(time,true,9)+"<br>" ;
    date_html += "日期戳转换为时间戳：2017-01-01 00:00:00 -> "+$.myTime.DateToUnix("2017-01-01 00:00:00")+"<br>" ;
    date_html += "日期格式化：2017-01-01 00:00:00 -> "+$.myTime.DateStyle("2017-01-01 00:00:00")+"<br>" ;
    $(".date").html(date_html);
});