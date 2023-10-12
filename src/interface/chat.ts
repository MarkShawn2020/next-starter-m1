/**
 * chatgpt 的原生数据结构
 */
export interface ChatgptMessage {
  role: "system" | "user" | "assistant"
  content: string
}

/**
 * UI 组件
 */
export interface BasicChatMessage extends ChatgptMessage {
  id: string

  // 前期可以mock，后期需要基于prisma钻取
  user: {
    id: string
    avatar: string
  }
}

/**
 * 可能的病因
 */
export type Disease = {
  name: string
  probability: number
}

/**
 * 回复时的数据结构
 */
export interface RepliedChatMessage extends BasicChatMessage {
  parsedContent: {
    // 基础的、追问的回答
    basic: string

    // 解析出来的病因
    diseases?: Disease[]
  }
}
