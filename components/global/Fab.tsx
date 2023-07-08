import { ActionIcon, Affix } from "@mantine/core"
import { IconPlus } from "@tabler/icons-react"
import { useMantineTheme } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"
import { useIsDesktop } from "@utils/utils"
import { MAX_WIDTH } from "@utils/constants"

const Fab = () => {
  const { width } = useViewportSize()
  const isDesktop = useIsDesktop()
  const submit = async () => {}
  return (
    <Affix
      position={{
        bottom: 32,
        right: isDesktop ? (width - MAX_WIDTH) / 2 - MAX_WIDTH + 16 : 16,
      }}
    >
      <ActionIcon size={48} variant="gradient" radius={32} onClick={submit}>
        <IconPlus />
      </ActionIcon>
    </Affix>
  )
}

export default Fab
