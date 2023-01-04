
$('#add_user').submit(function (params) {
    alert("data inserted")
})

$('#update_user').submit(function (event) {
    event.preventDefault();

    var arr = $(this).serializeArray();

    var data = {};

    $.map(arr, function (n, i) {
        data[n['name']] = n['value'];
    })
    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function (response) {
        alert("User updated");
    })
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id");

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }

        if(confirm("Confirm delete")){
            $.ajax(request).done(function (response) {
                alert("User deleted");
                location.reload();
            })
        }
    })
}