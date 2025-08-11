import { useMemo, useState } from 'react'
import { useTextFieldStyles } from './helpers/useTextFieldStyles'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useAskAi } from '../hooks/useAskAi'

const AIChat = () => {
  const [message, setMessage] = useState('')
  const textFieldStyles = useTextFieldStyles()

  const { messages, status, stop, answerQuestion } = useAskAi()

  const aiResponse = useMemo(() => {
    const latest = messages
      .filter((message) => message.role === 'assistant')
      .pop()

    return latest?.parts
      .filter((part) => 'text' in part)
      .map((part) => (part as any).text)
      .join('')
  }, [messages])

  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <TextField
          sx={textFieldStyles}
          placeholder="Ask me anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setMessage('')
            answerQuestion(message)
          }}
        >
          Ask
        </Button>
      </Stack>
      <Stack direction="column" spacing={2} mt={2}>
        <Typography key={aiResponse}>{aiResponse}</Typography>
      </Stack>
    </Box>
  )
}

export default AIChat
