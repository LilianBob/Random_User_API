$(document).ready(function(){
    $('.btn').click(function(){
        $.get("https://randomuser.me/api/?results=20", function(res){
            $('.randomUsers thead').html(`
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Address</th>
            </tr>`)
            var user;
            $.each(res.results, function(i, value){
                user = '<tr>' + '<td>' + value.name.first + "  " + value.name.last +  
                '</td>'+ '<td>' + value.dob.age + '</td>' + '<td>' + value.email + 
                '</td>'+ '<td>' + value.location.street.number + "  " + value.location.street.name+ 
                " , " + value.location.city+ "  " + value.location.postcode+'</td>' + '</tr>'
                $(user).appendTo('.randomUsers tbody');
            });
            
        }, "json");
    })
})