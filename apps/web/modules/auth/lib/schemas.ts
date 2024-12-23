import { z } from "zod";

export const createLoginSchema = (t: (key: string, params?: any) => string) =>
  z.object({
    email: z.string().email({
      message: t("email.error.invalid"),
    }),
    password: z.string().min(8, {
      message: t("password.error.min", { min: 8 }),
    }),
  });

export type LoginFormValues = z.infer<ReturnType<typeof createLoginSchema>>;

export const createRegisterSchema = (
  t: (key: string, params?: any) => string
) =>
  z.object({
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

export type RegisterFormValues = z.infer<
  ReturnType<typeof createRegisterSchema>
>;
