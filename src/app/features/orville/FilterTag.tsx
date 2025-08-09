import { Tag } from '@/app/components/tag'

interface FilterTagProps {
  label: string
  onClick: () => void
}

export const FilterTag = ({ label, onClick }: FilterTagProps) => {
  return (
    <Tag
      label={label}
      variant="default"
      onClick={onClick}
      sx={{
        backgroundColor: 'primary.main',
        border: '1px solid',
        borderColor: 'primary.light',
        height: '35px',
        width: '100px',
        color: 'white',
        '&:hover': {
          backgroundColor: 'spaceShuttleBlue',
          color: 'white',
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease',
        },
      }}
    />
  )
}
