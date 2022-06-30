var date = Date($.now());
var projectFormEl = $("#project-form");

var form = $('form')
var lead = $('.lead')
var input = $('input')
var projectType = $('#projectType')
var projectName = $('#projectName')

setInterval(function () {
    var date = Date($.now());
    lead.text(date)
}, 1000)


var inputValue = input.val()

    .submit(projectType.val());
projectName.val()