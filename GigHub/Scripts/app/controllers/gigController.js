﻿var GigsController = function (attendanceSerivce) {
    var button;

    var init = function () {
        $(".js-toggle-attendance").click(toggleAttendance);
    };

    var toggleAttendance = function (e) {
        button = $(e.target);
        var gigId = button.attr("data-gig-id");
        if (button.hasClass("btn-default"))
            attendanceSerivce.createAttendance(gigId, done, fail);
        else
            attendanceSerivce.deleteAttendance(gigId, done, fail);
    };

    var done = function () {
        var text = (button.text() == "Going") ? "Going?" : "Going";

        button.toggleClass("btn-info").toggleClass("btn-default").text(text);
    };

    var fail = function () {
        alert("Something failed!");
    };

    return {
        init: init
    };
}(AttendanceSerivce);