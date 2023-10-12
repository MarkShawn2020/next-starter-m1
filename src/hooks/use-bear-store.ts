import { create, StateCreator } from "zustand"
import { persist } from "zustand/middleware"

// 不要用lodash的capitalize，因为它会把其他字符都变小写
export const capitalize = (s: string) => s[0]?.toUpperCase() + s.substring(1)

export type BearSlice<K extends string, V extends any> = {
  [P in K]: V
} & {
  [P in `set${Capitalize<K>}`]: (v: V) => void
}

const createBearSlice =
  <K extends string, V extends any>(
    k: K,
    defaultValue: V,
  ): StateCreator<
    BearSlice<K, V>,
    //todo: persist
    [],
    [],
    BearSlice<K, V>
  > =>
  (set) => {
    return {
      [k]: defaultValue,
      [`set${capitalize(k)}`]: (v: V) =>
        set({ [k]: v } as Partial<BearSlice<K, V>>),
    } as BearSlice<K, V>
  }

/**
 * 不能命名为useBearStore，这样会违反 react-hook 不能在 top level 调用的规则
 */
export const createBearStore =
  <V extends any>() =>
  <K extends string>(k: K, defaultValue: V, persistEnabled?: boolean) => {
    const f = (...a: any[]) => ({
      // @ts-ignore
      ...createBearSlice<K, V>(k, defaultValue)(...a),
    })
    return persistEnabled
      ? create<BearSlice<K, V>>()(
          // middlewares
          persist(f, {
            name: "bc-persistence",
          }),
        )
      : create<BearSlice<K, V>>()(f)
  }

export const useUserId = createBearStore<string | undefined>()(
  "userId",
  undefined,
  true,
)
export const useConversationId = createBearStore<string | undefined>()(
  "conversationId",
  undefined,
  true,
)
