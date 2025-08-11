import { useEffect, useRef } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'

export function useGetCrewBio(crewMember: string) {
  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  })

  const lastCrewMember = useRef<string>('')

  useEffect(() => {
    if (crewMember && crewMember !== lastCrewMember.current) {
      lastCrewMember.current = crewMember
      const prompt = `
      You are a helpful assistant that can answer questions about the Hulu drama The Orville.
      You are given a crew member's name, in this instance, ${crewMember} please return a bio for them. Keep it short and concise. If possible under 200 words.
      `
      sendMessage({ text: prompt })
    }
  }, [crewMember, sendMessage])

  return { messages, status, stop, sendMessage }
}
