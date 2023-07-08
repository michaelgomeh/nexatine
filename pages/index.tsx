import { Stack, Text, Title } from "@mantine/core"
import { GetServerSidePropsContext } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)
  //check if user is signed in
  return { props: {} }
}
const Home = () => {
  const { data: session } = useSession()
  return (
    <Stack>
      <Title order={5} align="center">
        Welcome to Next.js | Mantine | Xata Template
      </Title>
      <Text align="center">
        {session ? `${session!.user.name} is signed in` : "Please sign in"}
      </Text>
    </Stack>
  )
}

export default Home
