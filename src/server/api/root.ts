import { createTRPCRouter } from "@/server/api/trpc"
import { conversationRouter } from "@/server/api/routers/conversation"
import { chatMessageRouter } from "@/server/api/routers/chat-message"
import { userRouter } from "@/server/api/routers/user"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  conversation: conversationRouter,
  chatMessage: chatMessageRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
