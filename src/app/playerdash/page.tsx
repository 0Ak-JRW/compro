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
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/user/stats/${2}`, {
          // params: {
          //   userId: "2", 
          // },
        });
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching player stats:", error);
      }
    };

    fetchData();
  }, []);

  return (
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
                {session?.username}
              </h1>
              <p className="text-xl text-gray-300 font-light flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                {user.job}
              </p>
            </div>
        </div>
        </>
        ))}

        <div className="py-16 w-full space-y-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-purple-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-purple-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Event Participated</h3>
              <p className="text-4xl font-extrabold text-white"> {formData.eventParticipated} </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-blue-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-blue-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Kills</h3>
              <p className="text-4xl font-extrabold text-white">{formData.kills}</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-green-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-green-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Last Login</h3>
              <p className="text-4xl font-extrabold text-white"> {formData.lastLogin} </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-orange-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-orange-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Total Play Time</h3>
              <p className="text-4xl font-extrabold text-white">{formData.totalPlayTime}</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-indigo-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-indigo-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Total Mission</h3>
              <p className="text-4xl font-extrabold text-white">{formData.totalMissions}</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-3xl w-full h-[220px] border border-pink-500/30 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-rose-500/50 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Mission Completed</h3>
              <p className="text-4xl font-extrabold text-white">{formData.missionsCompleted}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
