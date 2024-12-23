"use client";

// Hooks
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "@/config/i18n/routing";

// Utils
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

// Schema
import { createLoginSchema, LoginFormValues } from "../lib/schemas";

export function LoginForm() {
  const router = useRouter();
  const currentLang = useLocale();
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("login");

  const loginSchema = createLoginSchema(t);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    // setIsLoading(true);

    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    // Here you would typically send the login request to your backend
    // For this example, we'll just simulate a delay and a successful login
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    // setIsLoading(false);
    // router.push("/hub");
  }

  return (
    <div className="container mx-auto max-w-md">
      <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email.label")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="johndoe@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("password.label")}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t("password.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              {t("forgotPassword")}
            </Link>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? t("submitting") : t("submit")}
          </Button>
        </form>
      </Form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {t("noAccount")}{" "}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            {t("signUp")}
          </Link>
        </p>
      </div>
    </div>
  );
}
