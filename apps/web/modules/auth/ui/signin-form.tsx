"use client";

// Hooks
import { useFormState } from "react-dom";

// Components
import { SubmitButton } from "@/components/shared/submit-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "@/config/i18n/routing";
import { Label } from "@radix-ui/react-label";

// Utils
import { cn } from "@/lib/utils/cn";
import { AlertCircle } from "lucide-react";
import { signIn } from "../lib/auth";

export function SignInForm() {
  const [state, action] = useFormState(signIn, undefined);

  const inputFields = [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "your@email.com",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••",
    },
  ] as const;

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-muted-foreground">
          Sign in to your account
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter your credentials below to access your account
        </CardDescription>
      </CardHeader>
      <form action={action}>
        <CardContent className="space-y-4">
          {state?.message && (
            <div
              className="bg-destructive/15 border-l-4 border-destructive error-text p-4 rounded"
              role="alert"
            >
              <p className="font-bold">Error</p>
              <p>{state.message}</p>
            </div>
          )}
          {inputFields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id}>{field.label}</Label>
              <div className="relative">
                <Input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className={cn("pr-10 transition-all duration-200")}
                />
                {state?.error && field.id in state.error ? (
                  <AlertCircle
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 error-text"
                    size={18}
                  />
                ) : null}
              </div>
              {state?.error && field.id in state.error && (
                <p className="error-text flex items-center gap-1">
                  {state.error[field.id as keyof typeof state.error]?.[0]}
                </p>
              )}
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex-col items-start gap-3">
          <SubmitButton>Sign In</SubmitButton>
          <div className="flex text-xs w-full justify-between">
            <p>Forgot your password?</p>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground underline"
            >
              Come here
            </Link>
          </div>
          <div className="flex text-xs w-full justify-between">
            <p>Do not have an account?</p>
            <Link
              href="/auth/signup"
              className="text-muted-foreground hover:text-foreground underline"
            >
              Sign Up here
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
