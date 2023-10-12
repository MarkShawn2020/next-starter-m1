import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const userRouter = createTRPCRouter({
  get: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.user.findUnique({
        where: {
          id: input.userId,
        },
      })
    }),
  register: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          id: input.userId,
        },
      })
    }),
})
