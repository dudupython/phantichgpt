import Stripe from "stripe"

// import { env } from "@/env.mjs"

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-08-16",
  typescript: true,
})
