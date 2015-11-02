$(document).ready(function(){
    $('#search').submit(function(event){

        event.preventDefault();

        $('#outputContainer').empty();

        var values = {};

        $.each($(this).serializeArray(), function(i, field){
            values[field.name] = field.value;
        });

        $.ajax({
            type: "GET",
            url: "/data",
            data: values,
            success: function(data){
                console.log(data);
                appendToDom(data);

            }
        });
    });
});

function appendToDom(data){
    for( var i = 0; i< data.length; i++){
        $('#outputContainer').append("<div class='data-box'></div>");
        var $el = $('#outputContainer').children().last();
        $el.append("<div class='people-container'><p class='people'>"  + data[i].name + "</p></div>").hide().slideDown("slow");
        $el.append("<div class='animal-container'><p class='animal'>"  + data[i].spiritAnimal + "</p></div>").hide().slideDown("slow");
    }

}