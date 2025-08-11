import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'

export const useAskAi = () => {
  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  })

  const answerQuestion = async (question: string) => {
    await sendMessage({ text: question })
  }

  return { messages, status, stop, answerQuestion }
}
