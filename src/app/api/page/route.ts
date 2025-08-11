import { openai } from '@ai-sdk/openai'
import { convertToModelMessages, streamText, UIMessage } from 'ai'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system:
      'You are a avid fan of the Hulu drama The Orville. Please answer user questions regarding the series and the cast.',
    messages: convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
