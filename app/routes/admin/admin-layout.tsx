import React from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AdminLayout() {
  return (
    <SidebarProvider className="bg-white">
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-col w-full">
          <header className="flex items-center justify-between p-4 shadow-sm bg-white">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="rounded-md border p-2 hover:bg-slate-100 transition" />
              <h1 className="text-lg font-semibold text-slate-700">
                Welcome Alireza 👏
              </h1>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-600">
              <Plus />
              Create a Trip
            </Button>
          </header>
          <div className="flex-1 overflow-y-auto p-6 bg-[#F9FBFC]">
              <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
