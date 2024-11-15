"use client";

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
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils/cn";
import { AlertCircle, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useFormState } from "react-dom";
import { signUp } from "../lib/auth";
import { FormState } from "../types";

export function SignUpForm() {
  const [state, action] = useFormState<FormState, FormData>(signUp, undefined);
  const [focused, setFocused] = useState<string | null>(null);

  const inputFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your Name",
      icon: User,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "your@email.com",
      icon: Mail,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••",
      icon: Lock,
    },
  ] as const;

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Create an account
        </CardTitle>
        <CardDescription className="text-center">
          Enter your details below to create your account and get started
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
              <Label htmlFor={field.id} className="text-sm font-medium">
                {field.label}
              </Label>
              <div className="relative">
                <field.icon
                  className={cn(
                    "absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200",
                    focused === field.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  size={18}
                />
                <Input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className={cn(
                    "pl-10 pr-10 transition-all duration-200",
                    focused === field.id
                      ? "border-primary ring-2 ring-primary/20"
                      : ""
                  )}
                  onFocus={() => setFocused(field.id)}
                  onBlur={() => setFocused(null)}
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
          {state?.error?.password && state.error.password.length > 1 && (
            <div className="error-text space-y-1">
              <p className="font-semibold flex items-center gap-1">
                Password must:
              </p>
              <ul className="pl-5 space-y-1">
                {state.error.password.slice(1).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton>Create Account</SubmitButton>
        </CardFooter>
      </form>
    </Card>
  );
}
