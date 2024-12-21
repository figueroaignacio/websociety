"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

export function RegisterForm() {
  const t = useTranslations("register");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: t("fields.name.errors.minCharacters") })
      .max(30, { message: t("fields.name.errors.maxCharacters") })
      .regex(/^[a-zA-Z\s]+$/, {
        message: t("fields.name.errors.allowedCharacters"),
      }),
    email: z.string().email({ message: t("fields.email.errors.validEmail") }),
    password: z
      .string()
      .min(8, { message: t("fields.password.errors.minCharacters") })
      .max(50, { message: t("fields.password.errors.maxCharacters") })
      .regex(/[a-zA-Z]/, {
        message: t("fields.password.errors.shouldIncludeOneLetter"),
      })
      .regex(/\d/, {
        message: t("fields.password.errors.shouldIncludeOneNumber"),
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
