import { RegisterForm } from "@/components/register-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Cadastro</CardTitle>
          <CardDescription>Crie sua conta para continuar</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="text-primary underline underline-offset-4 hover:text-primary/90"
            >
              Faça login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
