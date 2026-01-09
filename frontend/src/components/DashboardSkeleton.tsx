"use client";

import { DashboardHeader } from "@/components/DashboardHeader";

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <DashboardHeader user={null} onTransactionAdded={() => {}} />
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Skeleton Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-pulse"
            >
              <div className="flex justify-between mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl"></div>
                <div className="w-20 h-6 bg-white/10 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="w-32 h-8 bg-white/10 rounded"></div>
                <div className="w-full h-1 bg-white/10 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skeleton Filters */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 animate-pulse">
          <div className="w-32 h-6 bg-white/10 rounded mb-4"></div>
          <div className="flex gap-4">
            <div className="w-32 h-10 bg-white/10 rounded"></div>
            <div className="w-48 h-10 bg-white/10 rounded"></div>
            <div className="w-48 h-10 bg-white/10 rounded"></div>
          </div>
        </div>

        {/* Skeleton Table */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-pulse">
          <div className="w-32 h-6 bg-white/10 rounded mb-6"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                  <div className="w-1/2 h-3 bg-white/10 rounded"></div>
                </div>
                <div className="w-24 h-6 bg-white/10 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
