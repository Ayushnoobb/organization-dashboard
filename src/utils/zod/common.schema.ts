import { ReactNode } from "react";
import { z } from "zod"


export type RootLayoutSchema = {
  children: ReactNode
}

export type ChildrenSchema = {
  children?: ReactNode;
}

export const passwordField = (
  name: string,
  min: number = 8,
  max: number = 32
) =>
  z
    .string({
      required_error: `${name} is required`,
      invalid_type_error: `${name} type is invalid`,
    })
    .min(min, { message: `${name} is too short` })
    .max(max, { message: `${name} is too long` })
    .refine(
      (password) => {
        if (!/[a-z]/.test(password)) return false;
        if (!/[A-Z]/.test(password)) return false;
        if (!/\d/.test(password)) return false;
        if (!/[!@#$%^&*()-_=+{};:'",<.>\/?[\]\\]/.test(password)) return false;
        return true;
      },
      { message: "Invalid password format" }
    );

export const NumberField = (
  name: string,
  length: number = 0
) => z
  .number({
    required_error: `${name} is required`,
    invalid_type_error: `Provide valid type`,
  })
  .min(length, { message: `invalid ${name}` });


export const emailField = (val: string) =>
  z
    .string({
      required_error: `${val} is required`,
      invalid_type_error: "Provide valid type",
    })
    .min(1, { message: `${val} is too short` })
    .email("Invalid email address");

export const stringField = (val: string, min: number = 1, max?: number) =>
  z
    .string({
      required_error: `${val} is required`,
      invalid_type_error: `Provide ${val} valid type`,
    })
    .min(min, { message: `${val} is too short` })
    .refine((data) => (max ? data.length <= max : true), `${val} is too long`);

export const ISODateTimeString = (name: string) =>
  z
    .string()
    .refine(
      (value) =>
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/.test(
          value
        ),
      {
        message: `${name} must be a valid ISO date-time string.`,
      }
    );

export const genderField = (name: string) =>
  z.string().refine((value) => value.toUpperCase() === "Male".toUpperCase() || value.toUpperCase() === "Female".toUpperCase() || value.toUpperCase() === 'Others'.toUpperCase(), {
    message: `${name} must be either 'male' or 'female' or 'Others'`,
  });


