import { BasicChatMessage } from "@/interface/chat"

export const DEFAULT_CHAT_MESSAGE: BasicChatMessage = {
  id: "default",
  // 目前把 system 与系统预设绑定在一起，方便编程，后续可能需要独立设计
  role: "system",
  content: "您好，我是24小时陪伴您的健康助理",
  user: {
    id: "default",
    avatar: "/image/doctor.png",
  },
}
export const DEFAULT_PROMPTS = [
  "突然头疼是怎么回事",
  "阳了之后一直咳嗽，是肺炎了吗",
  "拉肚子3天了，诺氟沙星不管用，要换药吗",
  "血压有点高",
]
