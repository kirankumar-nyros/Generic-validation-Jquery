$(document).ready(function()
{
    // onfocus function start
  	$( "input" ).focus(function() 
    {
    		if(this.value.length==0)
    			{
    				$(this).siblings("i").hide();
    				$(this).parent().append("<i>Enter "+this.name+"</i>");  		
            $( this ).addClass("wrong");
    			}
          else if(this.type=='radio')
           {
            $(this).siblings("i").hide();
            $(this).siblings().removeClass("wrong");
           }
           else if(this.type=='checkbox')
           {
            $(this).siblings("i").hide();
            $(this).siblings().removeClass("wrong");
           }
            else if(this.value.length>=0)
              {
                $(this).addClass("wrong2");
              }

  	});
    //on blur function start
  	$( "input" ).blur(function() {
    		$( this ).removeClass("correct");
        $( this ).removeClass("wrong");
        if(this.value.length==0)
    			{
    				$(this).siblings("i").hide();
    				$(this).parent().append("<i>Enter "+this.name+"</i>");
    			}
  	});

     //text validation 
    $('input[type="text"]').on('keyup',function()
    { // When blur
      var len=(this).value.length;
      var nameExp = /^[A-Za-z0-9 ]/ ;

      if(len==0)
        {
          $(this).siblings("i").hide();
         $(this).parent().append("<i class='invalid'>&#10006; Not empty</i>");
        }
        else if(len>0 && nameExp.test(this.value)==false)
          {
            $(this).siblings("i").hide();
            $(this).parent().append("<i class='invalid'> &#10006;</i>");
          } 
          else if(nameExp.test(this.value)==true)
            {
              $(this).siblings("i").hide();
              $(this).parent().append("<i class='valid'>&#10004;</i>");
            }
      });

    //password validation 
      $("input:password").keyup(function()
      {
        var len= (this).value.length;
        var pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/; 
        if(len==0)
          {
            $(this).siblings("i").hide();
            $(this).parent().append("<i class='invalid'>&#10006; Not empty</i>");
          }
        else if(len>0 && pwdRegex.test(this.value)==false)
          {
            $(this).siblings("i").hide();
            $(this).parent().append("<i class='invalid'>At least 1char,1 special sym & 1digit</i>");
         } 
        else if(len>0 && pwdRegex.test(this.value)==true)
          {
            $(this).siblings("i").hide();
            $(this).parent().append("<i class='valid'>&#10004;</i>");
          }
      });


      //mobile validation 
      $('input[type="number"]').keyup(function()
      {
        var len= (this).value.length;
        var maxLength=10;
        var numRegex = /^[0-9]{1,10}$/ ; 
        if(len==0 || len<maxLength)
          {
           $(this).siblings("i").hide();
           $(this).parent().append("<i class='invalid'>Allows only 10 numbers </i>");
          }
          else if(len>maxLength)
          {
           $(this).siblings("i").hide();
           $(this).parent().append("<i class='invalid'>not exceed 10 numbers </i>"); 
          }          
          else if( len==maxLength && len<=maxLength && numRegex.test(this.value)==true)
          {
            $(this).siblings("i").hide();
            $(this).parent().append("<i class='valid'>&#10004;</i>");
          }
      }); 

    //email validation 
  	$('input[type="email"]').on('keyup',function()
    { // When blur
  		var len=(this).value.length;
  	 	var emailRegex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  	 	if(len==0)
        {$(this).siblings("i").hide();
      $(this).parent().append("<i class='invalid'>&#10006; Not Empty!</i>");
        }
  			else if(len>0 && emailRegex.test(this.value)==false)
          {
            $(this).siblings("i").hide();
            $(this).parent().append("<i class='invalid'>&#10006; Enter a valid email address </i>");
          } 
  				else if(emailRegex.test(this.value)==true)
            {
              $(this).siblings("i").hide();
              $(this).parent().append("<i class='valid'>&#10004;</i>");
            }
      });
          
       $("input:submit").click(function(){ 
        return GenericValidation();
      });//end of submit button


     
function GenericValidation()
 {
          var check;         
          var numRegex = /^[0-9]{1,10}$/ ; 
          var nameRegex  = /^[A-Za-z0-9 ]/ ;
          var emailRegex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          var pwdRegex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
 
          $("form input,form select,form option, file").each(function()
          {       
            if(this.type=="text")        
            {
                 var maxLength=this.max;
                 var minLength=this.min;
                 if(maxLength=="") maxLength=15;
                 if(minLength=="") minLength=2;
                 var i=this.value;
                 var len=i.length;
                 if(len<minLength || len>maxLength )
                  {
                    this.focus();
                    check=0;
                    return false;
                  }                
                 else if(len>=minLength && len<=maxLength && nameRegex.test(i)==false)
                  {
                    alert("invalid");
                    check=0;
                    return false;
                  }
            }
            else if(this.type=="number")
            {
                var i=this.value;
                var len=i.length;
                var maxLength= this.max;             
                if(maxLength=="") maxLength=10;

                  if(len==0 || len<maxLength)
                    {
                      this.focus();
                      check=0;
                      return false;
                    }                 
                  else if(len>maxLength && numRegex.test(i)==false )
                    {
                      this.focus();
                      check=0;
                      return false;
                    }
                     else if(len<maxLength && numRegex.test(i)==false )
                    {
                      this.focus();
                      check=0;
                      return false;
                    }
            }
            else if(this.type=="email" && this.required==true)
            {
                    var i=this.value;
                    var len=i.length;
                    if(len==0)
                      {
                        this.focus();
                        check=0;
                        return false;
                      }
                    else if(len>0 && emailRegex.test(i)==false)
                      {
                        this.focus();
                        check=0;
                        return false;
                      }
             }     
            else if(this.type=="password")
            {
                    i=this.value;
                    len=i.length;                   
                    var minLength=this.min;
                    var maxLength=this.max;                    
                    if(minLength=="") minLength=6;
                    if(maxLength=="") maxLength=12;

                    if(len<minLength)
                      {
                        this.focus();
                        check=0;
                        return false;
                      }
                    else if(len>maxLength)
                      {
                        this.focus();
                        check=0;
                        return false;
                      }
                    else if(len>=minLength && len<=maxLength && pwdRegex.test(i)==false)
                      {
                        this.focus();
                        check=0;
                        return false;
                      }                
              }    
              else if($("option:selected").val()=="")
             {
                $('select').focus();
                check=0;
                return false;
              }  
              else if(!$("input:radio").is(':checked'))
             {
                 $('input:radio:first').focus();
                 check=0;
                 return false;
             }    
              else if(!$("input:checkbox").is(':checked'))
             {
                 $('input:checkbox:first').focus();
                 check=0;
                 return false;
             } 
          
          }); // .each(function ()) end

          if(check==0)
            return false;
          else
            {
              alert("Thank you for choosing IT Software Solutions");              
             }
      } //GenericValidation() end

}); //  ready function() ending
