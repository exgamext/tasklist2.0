//Add & Remove task function
$(".txtb").on("keyup",function(e){
    //13 = Enter button
    if(e.keyCode == 13 && $(".txtb").val() != "")
    {
        //Add & Remove task
        let task = $("<div class='task'></div>").text($(".txtb").val())
        let del = $("<i class='material-icons'>delete_outline</i>").click(function(){
            let p = $(this).parent()
            p.fadeOut(function(){
                p.remove()
            })
        })

        //Check task
        let check = $("<i class='material-icons'>done</i>").click(function(){
            let p = $(this).parent()
            p.fadeOut(function(){
                $(".comp").append(p)
                p.fadeIn()
            });
            $(this).remove()
        });

        task.append(del,check)
        $(".notcomp").append(task)

        //Clear input
        $(".txtb").val("")
    }
})