//$(function () {
//    var jsonData = [];
//    $.getJSON('Data/SampleData.json', function (data) {
//        $.each(data, function (index, element) {
//            jsonData.push(element);
//        });
//   });
//    console.log(jsonData);
//});

//$(function () {
//    var jsonData = {};
//    $.getJSON('Data/SampleData.json', function (data) {
//        console.log(jQuery.parseJSON(JSON.stringify(data)));
//    });
//    console.log(jsonData);
//});


//$(function () {
//    var dataModel = []
//    $.getJSON('Data/SampleData.json', function (data) {
//        dataModel.push(jQuery.parseJSON(JSON.stringify(data)));
//    });
//    console.log(dataModel);

//});

//$(function () {
//    var dataModel = []
//    $.getJSON('Data/SampleData.json').done(function (data) {
//        console.log(data);
//    });
//    console.log(dataModel);

//});

//var dataModel = [];
//$.getJSON('Data/SampleData.json', function (data) {
//    dataModel.push(data);
//});
//$.each(dataModel, function (key, val) {
//    debugger;
//    console.log(key + ' ' + val);
//});
////console.log(dataModel);


//----------------------------------------------




//var actual_JSON;

//    function loadJSON(callback) {

//        var xobj = new XMLHttpRequest();
//        xobj.overrideMimeType("application/json");
//        xobj.open('GET', 'Data/SampleData.json', true); // Replace 'my_data' with the path to your file
//        xobj.onreadystatechange = function () {
//            if (xobj.readyState == 4 && xobj.status == "200") {
//                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//                callback(xobj.responseText);
//            }
//        };
//        xobj.send(null);
//    };


//    loadJSON(function(response) {
//        // Parse JSON string into object
//        actual_JSON = JSON.parse(response);
//        console.log(actual_JSON);

//    });



//var jsonData = jsonData || {};
//    $.getJSON('Data/SampleData.json', function (data) {
//        jsonData = jQuery.parseJSON(JSON.stringify(data));
//    });

//https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=table-with-add-and-delete-row-feature