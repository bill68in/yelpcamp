function previewMultiple(event) {
    var images = document.getElementById("image");
    var number = images.files.length;
    var fileNames = images.files.name;

    for (i = 0; i < number; i++) {
        var urls = URL.createObjectURL(event.target.files[i]);
        document.getElementById("formFile").innerHTML += '<img src="' + urls + '">';
    }

    //$("input[type=file]").change(function () {
    //    var $el = $(this),
    //        files = $el[0].files,
    //        label = files[0].name;
    //    if (files.length > 1) {
    //        label = label + " and " + String(files.length - 1) + " more files"
    //    }
    //    $el.next('#formFileMultiple').html(label);
    //});

    //$('.form-control').change(function (event) {
    //    var files = document.getElementsByName("image");
    //    for (var i = 0; i < event.target.files.length; i++) {
    //        files.push(event.target.files[i].name);
    //        console.log(event.target.files[i].name);
    //    }
    //    event.target.next('.form-label').html(files.join(', '));
    //});
}
