"use client";
import { useState } from "react";

type IssueMap = Record<string, string[]>;

const ISSUE_OPTIONS: IssueMap = {
    Player: ["Bug", "Cheat / Exploit", "Toxic / Harassment", "Other"],
    Server: ["Lag / Ping", "Crash", "Economy", "Other"],
    UI: ["Display bug", "Button not working", "Localization", "Other"],
};

export default function ReportPage() {
    const [category, setCategory] = useState("");
    const [issue, setIssue] = useState("");
    const [desc, setDesc] = useState("");

    const issuesForCategory = category ? ISSUE_OPTIONS[category] : [];

    const canSubmit = category && issue && desc.trim().length >= 10;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!canSubmit) return;

        // TODO: call your API here
        console.log({ category, issue, description: desc });

        // reset form
        setCategory("");
        setIssue("");
        setDesc("");
        alert("Report submitted. Thank you!");
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-start justify-center p-15">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md"
                autoComplete="off"
            >
                <h1 className="text-2xl font-semibold text-slate-900 mb-4">
                    Report System
                </h1>

                {/* Subject */}
                <label className="block text-slate-700 text-sm font-medium mb-2">
                    Subject
                </label>

                {/* Select: Category */}
                <div className="mb-3">
                    <select
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                            setIssue(""); // reset sub-issue
                        }}
                        className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded-sm px-3 py-3
                    focus:outline-none focus:ring-2 focus:ring-sky-500
                    placeholder-slate-400 appearance-none"
                    >
                        <option value="" disabled>
                            Select issue
                        </option>
                        {Object.keys(ISSUE_OPTIONS).map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Select: Issue (depends on Category) */}
                <div className="mb-5">
                    <select
                        value={issue}
                        onChange={(e) => setIssue(e.target.value)}
                        disabled={!category}
                        className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded-sm px-3 py-3
                    focus:outline-none focus:ring-2 focus:ring-sky-500
                    placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
                    >
                        <option value="" disabled>
                            {category ? "Select a type" : "Choose category first"}
                        </option>
                        {issuesForCategory.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Description */}
                <label className="block text-slate-700 text-sm font-medium mb-2">
                    Description
                </label>
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    rows={6}
                    placeholder="Please provide details of the problem"
                    className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded-sm px-3 py-3
                    placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />

                {/* Submit */}
                <button
                    type="submit"
                    disabled={!canSubmit}
                    className="mt-6 w-full bg-slate-700 hover:bg-slate-600 text-slate-100 font-medium py-2.5
                    rounded-sm disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                    Submit
                </button>

                {/* Small helper */}
                {!canSubmit && (
                    <p className="mt-2 text-xs text-slate-500">
                        เลือกหมวดหมู่, เลือกประเด็น และอธิบายอย่างน้อย 10 ตัวอักษร
                    </p>
                )}
            </form>
        </div>
    );
}
