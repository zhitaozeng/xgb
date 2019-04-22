$(function () {
   $("#submit").click(function () {
       var id = $("#building_id").val();
       var name = $("#building_name").val();
       var note = $("#building_note").val();

       $.ajax({
           url: "/dorm/updateById?id="+id+"&name="+name+"&note="+note,
           context: document.body,
           success: function(data){
                    alert("保存成功！");
               }
       });

   }) ;


});