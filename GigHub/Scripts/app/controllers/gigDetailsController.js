var GigDetailsController = function (followingSerivce) {
    var followButton;

    var init = function () {
        $(".js-toggle-follow").click(toggleFollowing);
    };

    var toggleFollowing = function (e) {
        followButton = $(e.target);
        var followeeId = followButton.attr("data-user-id");

        if (followButton.hasClass("btn-default"))
            followingSerivce.createFollowing(followeeId, done, fail);
        else
            followingSerivce.deleteFollowing(followeeId, done, fail);
    };

    var done = function () {
        var text = (followButton.text() == "Follow") ? "Following" : "Follow";

        followButton.toggleClass("btn-info").toggleClass("btn-default").text(text);
    };

    var fail = function () {
        alert("Something failed!");
    };

    return {
        init: init
    };
}(FollowingSerivce);