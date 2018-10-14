using System.Collections.Generic;
using GigHub.Core.Models;

namespace GigHub.Core.Repositories
{
    public interface IAttendanceRepository
    {
        bool CheckAttendance(int gigId, string userId);
        IEnumerable<Gig> GetGigsUserAttending(string userId);
        IEnumerable<Attendance> GetAttendances(string userId);
        Attendance GetAttendance(int gigId, string userId);
        void Add(Attendance attendance);
        void Remove(Attendance attendance);
    }
}