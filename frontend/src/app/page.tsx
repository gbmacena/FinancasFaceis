import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Bem-vindo</CardTitle>
          <CardDescription>Escolha uma opção para continuar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Link href="/login" className="w-full">
              <Button className="w-full" variant="default">
                Login
              </Button>
            </Link>
            <Link href="/register" className="w-full">
              <Button className="w-full" variant="outline">
                Cadastro
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
