import type { GetServerSidePropsContext } from "next"
import { signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"
import { Button, Card, Stack, Title } from "@mantine/core"
import { IconBrandGoogle } from "@tabler/icons-react"

export default function SignIn() {
  return (
    <Card withBorder={true}>
      <Stack align="center">
        <Title>Welcome!</Title>
        <Button
          variant="outline"
          leftIcon={<IconBrandGoogle />}
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </Button>
      </Stack>
    </Card>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return { redirect: { destination: `/users/${session.user.id}` } }
  }

  return {
    props: {},
  }
}
