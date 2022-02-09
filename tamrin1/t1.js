$(document).ready(function($)
  {
    
    $(document).on('click',"btn_row_below_clone", function(e)
    {
      var tableBody = $(document).find('.table-bordered').find("tbody");
      var trLast = tableBody.find("row");
      var trNew = trLast.clone();
      trLast.after(trNew);
    });
  
    $(document).on('click',"#addbtn", function(e)
    {
      var r = $(this).closest('tr').clone();

      $.each(r.find('td'), function(i1,v1)
      {
       
        $(this).html('');
      });

      $(this).closest('tr').after(r);
    });
  
    $(document).on('click',".btn_row_below_clone", function(e)
    {
      var r = $(this).closest('tr').clone();
      $(this).closest('tr').after(r);
    });
   
    $(document).on('click',".btn_row_delete", function(e)
    {
      var r = $(this).closest('tr').remove();
    });
    
    
  });