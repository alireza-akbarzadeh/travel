import React from "react";

export function DiscoverPro() {
  return (
    <div className="mb-6 mx-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-slate-800">Discover Pro</h3>
          <p className="text-xs text-slate-600">Upgrade for more features</p>
        </div>
        <button className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-blue-600 shadow-sm">
          Upgrade
        </button>
      </div>
    </div>
  );
}
