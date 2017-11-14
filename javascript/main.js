$(".checkbox").click(function () {
    $("#agequestion").addClass('hidden');
    $("#emailform").removeClass('hidden');
    $("#button1").addClass('hidden');
    $("#button2").removeClass('hidden');
    $("#progresstext").text("Your Progress 50%")
    $("#innerbar").animate({ width: '50%' }, 1000);
});

$("#button1").click(function () {
    swal("Missing Field!", "Please select your age.", "error");
});


var splitUrl = function () {
    var vars = [], hash;
    var url = document.URL.split('?')[0];
    var p = document.URL.split('?')[1];
    if (p != undefined) {
        p = p.split('&');
        for (var i = 0; i < p.length; i++) {
            hash = p[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
    }
    vars['url'] = url;
    return vars;
};

var data = splitUrl();
var string = 'F0123456'; // just an example
data[0] = data[0].replace(/_/g, ' ');
data[1] = data[1].replace(/\+/g, " ");
data[2] = data[2].replace(/%40/g, '@');

var message = "Age: " + data[0] + ", Name: " + data[1] + ", Email: " + data[2];


if (data[0] != undefined) {
    swal("Form Submitted!", message, "success", {
        button: "Okey",
    });
}





