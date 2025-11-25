"use client";
import { useEffect, useState } from "react";
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";


export default function playerdash() {
  const users = [{ name: "Teddy", job: "Ambulance" }];
  const { user: session, loading, logout } = useAuth();

  const [formData, setFormData] = useState({
    eventParticipated: "",
    kills: "",
    lastLogin: "",
    totalPlayTime: "",
    totalMissions: "",
    missionsCompleted: "",
    user_id: session?.refId || "",
    totalDeath: 0,
    kdRatio: '0.00',
    inGamePayment: 0,
    timesArrested: 0,
    loginStreak: 0,
    totalMoneyEarned: 0,
    totalMoneySpent: 0,
  });

  function formatPlayTime(seconds: any) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours} ชม ${minutes} นาที`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Session Data:", session);
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/user/stats/${session?.refId}`);
        console.log("Player Stats Response:", response.data.data);
        const timestamp = response.data.data.userMetrics.lastLogin;

        const timeString = new Intl.DateTimeFormat('en-US', {
          day: '2-digit',
          year: 'numeric',
          month: '2-digit',
        }).format(new Date(timestamp));

        const formatedData = {
          eventParticipated: response.data.data.userMetrics.eventParticipated,
          kills: response.data.data.userMetrics.kills,
          lastLogin: timeString,
          totalPlayTime: formatPlayTime(response.data.data.userMetrics.totalPlayTime),
          totalMissions: response.data.data.userMetrics.totalMissions,
          missionsCompleted: response.data.data.userMetrics.missionsCompleted,
          user_id: session?.refId || "",
          totalDeath: response.data.data.userMetrics.totalDeath || 0,
          kdRatio: response.data.data.userMetrics.kdRatio || '0.00',
          inGamePayment: response.data.data.userMetrics.inGamePayment || 0,
          timesArrested: response.data.data.userMetrics.timesArrested || 0,
          loginStreak: response.data.data.userMetrics.loginStreak || 0,
          totalMoneyEarned: response.data.data.userMetrics.totalMoneyEarned || 0,
          totalMoneySpent: response.data.data.userMetrics.totalMoneySpent || 0,
        };
        setFormData(formatedData);
      } catch (error) {
        console.error("Error fetching player stats:", error);
      }
    };

    fetchData();
  }, [session]);

  console.log(session)

  return (
    <>
      <div className="bg-gradient-to-br from-[#1a1f2e] via-[#2D3648] to-[#1a1f2e] min-h-screen text-white">
        <div className="flex flex-col justify-center items-center pt-10 space-y-6 container mx-auto px-4">
          {users.map((user, index) => (
            <>
              <div className="relative">
                <img
                  src={`https://cdn.discordapp.com/avatars/${session?.id}/${session?.avatar}.png`}
                  alt="profile"
                  className="w-[268px] h-[268px] rounded-full object-cover border-8 border-[#4A5568] shadow-2xl ring-4 ring-purple-500/30"
                />

              </div>

              <div className="text-center space-y-3">
                <div key={index} className="space-y-2">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {session?.inGameName}
                  </h1>
                  <p className="text-xl text-gray-300 font-light flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    {session?.job}
                  </p>
                </div>
              </div>
            </>
          ))}

            <div className="py-16 w-full space-y-12 max-w-7xl">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-purple-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-purple-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Total Play Time</h3>
              <p className="text-4xl font-extrabold text-white">{formData.totalPlayTime}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-blue-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-blue-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">Total Kills</h3>
              <p className="text-4xl font-extrabold text-white">{formData.kills}</p>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-green-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-green-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-green-300 mb-2">Mission Completed</h3>
              <p className="text-4xl font-extrabold text-white">{formData.missionsCompleted}</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-orange-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-orange-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-orange-300 mb-2">Total Mission</h3>
              <p className="text-4xl font-extrabold text-white">{formData.totalMissions}</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-indigo-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-indigo-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-indigo-300 mb-2">Event Participated</h3>
              <p className="text-4xl font-extrabold text-white">{formData.eventParticipated}</p>
              </div>
              <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-pink-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-rose-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-pink-300 mb-2">Last Login</h3>
              <p className="text-4xl font-extrabold text-white">{formData.lastLogin}</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-red-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-red-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-red-300 mb-2">Total Death</h3>
              <p className="text-4xl font-extrabold text-white">{formData.totalDeath || '0'}</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-yellow-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-yellow-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-yellow-300 mb-2">Kill/Death Ratio</h3>
              <p className="text-4xl font-extrabold text-white">{formData.kdRatio || '0.00'}</p>
              </div>
              <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-teal-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-teal-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-teal-300 mb-2">In-game Payment</h3>
              <p className="text-4xl font-extrabold text-white">{formData.inGamePayment || '0'}</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-violet-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-violet-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-violet-300 mb-2">Times Arrested</h3>
              <p className="text-4xl font-extrabold text-white">{formData.timesArrested || '0'}</p>
              </div>
              <div className="bg-gradient-to-br from-sky-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-sky-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-sky-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-sky-300 mb-2">Login Streak</h3>
              <p className="text-4xl font-extrabold text-white">{formData.loginStreak || '0'} days</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-emerald-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-emerald-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-emerald-300 mb-2">Total Money Earned</h3>
              <p className="text-4xl font-extrabold text-white">${formData.totalMoneyEarned || '0'}</p>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-rose-600/20 to-red-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-rose-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-rose-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-rose-300 mb-2">Total Money Spent</h3>
              <p className="text-4xl font-extrabold text-white">${formData.totalMoneySpent || '0'}</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
