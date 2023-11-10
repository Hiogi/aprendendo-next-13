'use client';
import DashboardMenu from "@/components/layout/dashboardMenu";
import { useSession } from "next-auth/react";

export default function DashBoardPage() {
  
  return (
    <>
      <DashboardMenu />
    </>
  );
}
  
