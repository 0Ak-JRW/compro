"use client";
import React, { useState, useEffect } from "react";
import { TbFileReport } from "react-icons/tb";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";


interface Report {
    id: number;
    subject: string;
    description: string;
    dateTime: string;
    player: string;
    status: string;
}


export default function RepDetail() {
    const [status, setStatus] = useState("Solved");
    const [feedback, setFeedback] = useState("");
    const [reportData, setReportData] = useState<Report | undefined>(undefined); // Default to first report
    const searchParams = useSearchParams();
    const { user: session, loading, logout } = useAuth();

    useEffect(() => {
        const reportId = searchParams.get('id');
        const fetchReport = async () => {
            if (reportId !== null) {
                const id = parseInt(reportId);
                // const report = reports.find(r => r.id === id);
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/reports/${id}`);

                const item = response.data.data[0];

                const mappedReport: Report = {
                    id: item.id,
                    subject: item.title,
                    description: item.detail,
                    dateTime: item.datetime,
                    player: item.reporterId,
                    status: item.status === "SOLVE" ? "Solved" : "In-Progress",
                };

                console.log("Mapped Report:", mappedReport);


                setReportData(mappedReport);
                setStatus(mappedReport.status);

            }
        }
        fetchReport();
    }, [searchParams]);


    const handleStatusChange = (newStatus: string) => {
        setStatus(newStatus);
    };

    const handleSubmit = () => {
        try {
            if (!reportData) return;

            console.log({ reportId: reportData.id, status, feedback });
            axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/admin/feedback`,
                {
                    reportId: reportData.id,
                    adminID: session?.refId,
                    status: status === "Solved" ? "SOLVE" : "IN-PROGRESS",
                    feedbackText: feedback
                }
            )

        } catch (error) {
            console.error("Error submitting report update:", error);
        }

    };

    return (
        <div className="pl-64 pt-10 min-h-screen bg-[var(--background)] text-[var(--on-surface)]">
            <div id="viewDash" className="min-h-screen container mx-auto">
                <div className="flex items-end justify-between">
                    <div className="flex items-end space-x-4">
                        <TbFileReport className="text-6xl" />
                        <h1 className="text-4xl font-bold">Report Detail</h1>
                    </div>
                </div>

                <div className="bg-[var(--surface)] border border-[var(--border-card)] rounded-lg w-full min-h-[600px] mt-8">
                    {reportData && (
                        <div className="p-8 space-y-6">
                            <div className="flex justify-between items-center pb-4 border-b border-[var(--border-card)]">
                                <div className="text-lg font-medium">Player : {reportData.player}</div>
                                <div className="text-lg font-medium">Date Time : {reportData.dateTime}</div>
                                <div className="text-lg font-medium">Subject : {reportData.subject}</div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">Description</h2>
                                <div className="bg-[var(--surface-variant)] border border-[var(--border-card)] rounded-lg p-6 min-h-[200px]">
                                    <p className="text-[var(--on-surface)] leading-relaxed">
                                        {reportData.description}
                                    </p>
                                </div>
                            </div>

                            {/* Feedback */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">Feedback</h2>
                                <textarea
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    placeholder="Input text"
                                    className="w-full h-32 p-4 bg-[var(--surface-variant)] border border-[var(--border-card)] rounded-lg resize-none text-[var(--on-surface)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end space-x-4 pt-6">
                                <div className="relative">
                                    <select
                                        value={status}
                                        onChange={(e) => handleStatusChange(e.target.value)}
                                        className="appearance-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-3 px-6 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 pr-10"
                                    >
                                        <option value="Solved">Solved</option>
                                        <option value="In-Progress">In Progress</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}