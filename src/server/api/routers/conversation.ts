import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const conversationRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.conversation.findMany()
  }),

  add: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.conversation.create({
        data: {
          user: {
            connectOrCreate: {
              where: {
                id: input.userId,
              },
              create: {
                id: input.userId,
              },
            },
          },
        },
      })
    }),
})
