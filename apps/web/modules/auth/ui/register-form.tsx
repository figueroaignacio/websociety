"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "@/config/i18n/routing";

// Utils
import { zodResolver } from "@hookform/resolvers/zod";

// Schema
import { createRegisterSchema, RegisterFormValues } from "../lib/schemas";

export function RegisterForm() {
  const t = useTranslations("register");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const registerSchema = createRegisterSchema(t);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: RegisterFormValues) {
    setIsLoading(true);

    try {
      // Here you would typically send the form data to your backend
      // For this example, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // toast({
      //   title: t("success.title"),
      //   description: t("success.description"),
      // });

      router.push("/login");
    } catch (error) {
      // toast({
      //   title: t("error.title"),
      //   description: t("error.description"),
      //   variant: "destructive",
      // });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("fields.name.label")}</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  {t("fields.name.description")}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("fields.email.label")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="johndoe@email.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {t("fields.email.description")}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("fields.password.label")}</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="***********" {...field} />
                </FormControl>
                <FormDescription>
                  {t("fields.password.description")}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? t("submitting") : t("submit")}
          </Button>
        </form>
      </Form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {t("haveAccount")}{" "}
          <Link href="/auth/login" className="text-blue-600 underline">
            {t("login")}
          </Link>
        </p>
      </div>
    </div>
  );
}
