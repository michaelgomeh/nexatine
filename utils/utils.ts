import { useMediaQuery } from "@mantine/hooks"

export const useIsDesktop = () => useMediaQuery("(min-width: 30em)")
