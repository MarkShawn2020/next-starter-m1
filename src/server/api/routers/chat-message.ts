import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const chatMessageRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        conversationId: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
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
        conversationId: z.string().optional(),
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.message.create({
        data: {
          role: input.role,
          content: input.content,
          conversation: {
            connectOrCreate: {
              where: {
                id: input.conversationId,
              },
              create: {
                user: {
                  connect: {
                    id: input.userId,
                  },
                },
              },
            },
          },
        },
      })
    }),
})
