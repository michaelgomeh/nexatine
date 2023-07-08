import {
  Box,
  Group,
  Image,
  Button,
  List,
  Card,
  Divider,
  ActionIcon,
  Overlay,
  Stack,
  Title,
  Text,
} from "@mantine/core"

import { getXataClient } from "@db/xata"
import { GetServerSidePropsContext } from "next"

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const xata = getXataClient()
  const id = context!.params!.id as string

  const profile = JSON.parse(
    JSON.stringify(await xata.db.nextauth_users.read(id))
  )

  return { props: { profile } }
}

const ProfilePage = ({ profile }) => {
  if (!profile) {
    return <Text>User Not Found...</Text>
  }

  const ProfileImage = () => (
    <Box w="20vw" h="20vw" maw={200} mah={200} mt="lg">
      <Image src={profile.image} mx="auto" radius="20vw" alt="profile image" />
    </Box>
  )

  return (
    <>
      <Stack w="100%" align="center">
        <ProfileImage />
        <Title order={5} mx="auto" align="center">
          {profile.name}
        </Title>
        <Text c="dimmed">{profile.email}</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          placeat, tempore numquam inventore molestiae minus et corrupti
          consectetur facere pariatur sint suscipit sit excepturi natus dolor
          corporis quam iure, sequi neque optio error laboriosam aliquam. Ab
          voluptatem ex doloremque officiis. Ex cumque aliquid quam, aperiam
          dolorum sit! Totam, cum culpa.
        </Text>
      </Stack>
    </>
  )
}

export default ProfilePage
