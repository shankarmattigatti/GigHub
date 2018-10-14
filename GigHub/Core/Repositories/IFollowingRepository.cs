using System.Collections.Generic;
using GigHub.Core.Models;

namespace GigHub.Core.Repositories
{
    public interface IFollowingRepository
    {
        void Add(Following following);
        void Remove(Following following);
        Following GetFollowing(string userId, string id);
        bool CheckFollowing(string artistId, string userId);
        IEnumerable<ApplicationUser> GetUsers(string userId);
    }
}