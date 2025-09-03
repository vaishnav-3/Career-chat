// src/trpc/react.ts
"use client";
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/trpc/root";

export const api = createTRPCReact<AppRouter>();
 