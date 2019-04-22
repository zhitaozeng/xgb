/**
Family editable input.
Internally value stored as {name: "Moscow", relation: "Lenina", telnum: "15"}

@class family
@extends abstractinput
@final
@example
<a href="#" id="family" data-type="family" data-pk="1">awesome</a>
<script>
$(function(){
    $('#family').editable({
        url: '/post',
        title: 'Enter name, relation and telnum #',
        value: {
            name: "Moscow", 
            relation: "Lenina", 
            telnum: "15"
        }
    });
});
</script>
**/
(function ($) {
    "use strict";
    
    var Family = function (options) {
        this.init('family', options, Family.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Family, $.fn.editabletypes.abstractinput);

    $.extend(Family.prototype, {
        /**
        Renders input from tpl

        @method render() 
        **/        
        render: function() {
           this.$input = this.$tpl.find('input');
        },
        
        /**
        Default method to show value in element. Can be overwritten by display option.
        
        @method value2html(value, element) 
        **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return; 
            }
            var html = $('<div>').text(value.name).html() + ', ' + $('<div>').text(value.relation).html() + ' st., bld. ' + $('<div>').text(value.telnum).html();
            $(element).html(html); 
        },
        
        /**
        Gets value from element's html
        
        @method html2value(html) 
        **/        
        html2value: function(html) {        
          /*
            you may write parsing method to get value by element's html
            e.g. "Moscow, st. Lenina, bld. 15" => {name: "Moscow", relation: "Lenina", telnum: "15"}
            but for complex structures it's not recommended.
            Better set value directly via javascript, e.g. 
            editable({
                value: {
                    name: "Moscow", 
                    relation: "Lenina", 
                    telnum: "15"
                }
            });
          */ 
          return null;  
        },
      
       /**
        Converts value to string. 
        It is used in internal comparing (not for sending to server).
        
        @method value2str(value)  
       **/
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';  
               }
           }
           return str;
       }, 
       
       /*
        Converts string to value. Used for reading value from 'data-value' attribute.
        
        @method str2value(str)  
       */
       str2value: function(str) {
           /*
           this is mainly for parsing value defined in data-value attribute. 
           If you will always set value by javascript, no need to overwrite it
           */
           return str;
       },                
       
       /**
        Sets value of input.
        
        @method value2input(value) 
        @param {mixed} value
       **/         
       value2input: function(value) {
           if(!value) {
             return;
           }
           this.$input.filter('[name="name"]').val(value.name);
           this.$input.filter('[name="relation"]').val(value.relation);
           this.$input.filter('[name="telnum"]').val(value.telnum);
       },       
       
       /**
        Returns value of input.
        
        @method input2value() 
       **/          
       input2value: function() { 
           return {
              name: this.$input.filter('[name="name"]').val(), 
              relation: this.$input.filter('[name="relation"]').val(), 
              telnum: this.$input.filter('[name="telnum"]').val()
           };
       },        
       
        /**
        Activates input: sets focus on the first field.
        
        @method activate() 
       **/        
       activate: function() {
            this.$input.filter('[name="name"]').focus();
       },  
       
       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode
        
        @method autosubmit() 
       **/       
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });
       }       
    });

    Family.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="editable-family"><label><span>姓名: </span><input type="text" name="name" class="form-control input-small"></label></div>'+
             '<div class="editable-family"><label><span>关系: </span><input type="text" name="relation" class="form-control input-small"></label></div>'+
             '<div class="editable-family"><label><span>联系方式: </span><input type="text" name="telnum" class="form-control input-small"></label></div>',
             
        inputclass: ''
    });

    $.fn.editabletypes.family = Family;

}(window.jQuery));