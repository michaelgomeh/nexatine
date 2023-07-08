import {
  AppShell,
  Burger,
  useMantineTheme,
  Drawer,
  Group,
  Button,
  List,
  NavLink,
  Header,
  Flex,
  ActionIcon,
  Menu,
  Navbar,
  Image,
  Text,
  ScrollArea,
  Card,
} from "@mantine/core"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import {
  IconHome,
  IconInbox,
  IconLetterA,
  IconList,
  IconMoonStars,
  IconSun,
  IconTrees,
  IconUser,
  IconUserOff,
} from "@tabler/icons-react"
import { useIsDesktop } from "@utils/utils"
import { useAtom } from "jotai"
import { darkModeAtom } from "@utils/atoms"
import { useDisclosure } from "@mantine/hooks"
import { MAX_WIDTH as MAX_NAV_WIDTH } from "@utils/constants"
import * as React from "react"
import Fab from "@components/global/Fab"

const Layout = ({ children }) => {
  const theme = useMantineTheme()
  const [opened, { open, close }] = useDisclosure(false)
  const { data: session } = useSession()

  const isDesktop = useIsDesktop()

  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  const id = session?.user.id
  const user = session?.user
  const Nav = () => {
    return (
      <List>
        <Link href="/">
          <NavLink label="Home" icon={<IconHome />} />
        </Link>
        {session && (
          <Link href={`/users/${id}`}>
            <NavLink label="Profile" icon={<IconUser />} />
          </Link>
        )}
        <Link href={`/demo`}>
          <NavLink label="More links..." icon={<IconList />} />
        </Link>
      </List>
    )
  }

  return (
    <AppShell
      padding={isDesktop ? "md" : 0}
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[2],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <Header height={60}>
          <Flex justify="space-between" align="center" h={60} px="md">
            <Group>
              {isDesktop ? (
                <IconTrees />
              ) : (
                <Burger
                  opened={opened}
                  onClick={open}
                  size="sm"
                  color={theme.colors.gray[6]}
                />
              )}
              <Link href="/">IndieDevsHub</Link>
            </Group>

            <ActionIcon onClick={toggleDarkMode}>
              {darkMode ? <IconSun /> : <IconMoonStars />}
            </ActionIcon>
            <ActionIcon>
              <IconInbox />
            </ActionIcon>
            {user ? (
              <Menu shadow="md">
                <Menu.Target>
                  <Image
                    src={user.image!}
                    alt="user"
                    width={37}
                    height={37}
                    radius={37}
                  />
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>User</Menu.Label>
                  <Menu.Item icon={<IconUser size={14} />}>
                    <Link href={`/users/${id}`}>My Profile</Link>
                  </Menu.Item>
                  <Menu.Item icon={<IconUserOff size={14} />}>
                    <Text onClick={() => signOut()}>sign Out</Text>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : (
              <Button variant="subtle" onClick={() => signIn()}>
                Sign In
              </Button>
            )}
          </Flex>
        </Header>
      }
      navbar={
        <Navbar
          p="xs"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{
            sm: MAX_NAV_WIDTH,
          }}
        >
          <Nav />
        </Navbar>
      }
    >
      <main className={"App"} style={{ height: "100%" }}>
        <Card maw="600px" mx="auto" p="sm" style={{ height: "100%" }}>
          <ScrollArea>{children}</ScrollArea>
          {session && <Fab />}
        </Card>
      </main>
      <Drawer opened={opened} onClose={close}>
        <Nav />
      </Drawer>
    </AppShell>
  )
}

export default Layout
