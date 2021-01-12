$(function() {
    $(".eat-it").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/:id" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
            console.log("changed devoured state to:", newDevoured);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("burger").val().trim(),
            devoured: $("[name=devoured]: checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");
            location.reload();
        });
    });
});