import { exampleRouter } from "@/server/api/routers/example"
import { createTRPCRouter } from "@/server/api/trpc"
import { conversationRouter } from "@/server/api/routers/conversation"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  conversation: conversationRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
