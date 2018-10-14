﻿using System.Web.Mvc;
using GigHub.Core;
using Microsoft.AspNet.Identity;

namespace GigHub.Controllers
{
    public class FolloweesController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public FolloweesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public ActionResult Index()
        {
            var artists = _unitOfWork.Followings.GetUsers(User.Identity.GetUserId());

            return View(artists);
        }
    }
}