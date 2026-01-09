"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOutIcon, WalletIcon } from "lucide-react";
import { TransactionDialog } from "@/components/TransactionDialog";
import { User } from "@/types";

interface DashboardHeaderProps {
  user: User | null;
  onTransactionAdded: () => void;
}

export function DashboardHeader({
  user,
  onTransactionAdded,
}: DashboardHeaderProps) {
  const router = useRouter();

  const firstName = useMemo(() => {
    return user?.name.split(" ")[0] ?? "";
  }, [user?.name]);

  const handleLogout = useCallback(() => {
    try {
      localStorage.clear();
      router.push("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }, [router]);

  return (
    <header className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 mb-8">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <WalletIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <Link
                href="/dashboard"
                className="text-xl font-bold text-white hover:text-emerald-400 transition-colors"
              >
                FinançasFáceis
              </Link>
              {user && (
                <p className="text-xs text-slate-400">Olá, {firstName}!</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <TransactionDialog onTransactionAdded={onTransactionAdded} />
            <Button
              variant="ghost"
              size="icon"
              className="text-red-400 hover:text-white hover:bg-red-500/20"
              title="Sair"
              onClick={handleLogout}
            >
              <LogOutIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
