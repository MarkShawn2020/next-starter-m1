import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const chatMessageRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        conversationId: z.string().optional(),
      }),
    )
    .query(({ ctx, input }) => {
      if (!input.conversationId) return []

      return ctx.db.message.findMany({
        where: {
          conversationId: input.conversationId,
        },
      })
    }),

  add: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        // conversation 可以发起的时候再创建
        conversationId: z.string(),
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.message.create({
        include: {
          conversation: true,
        },
        data: {
          role: input.role,
          content: input.content,
          conversation: {
            connect: {
              id: input.conversationId,
            },
          },
        },
      })
    }),
})
