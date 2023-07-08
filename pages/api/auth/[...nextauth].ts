import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { XataClient, getXataClient } from "../../../db/xata"
import { XataAdapter } from "@next-auth/xata-adapter"

const xata: XataClient = getXataClient()

var user: any = undefined

export const authOptions: NextAuthOptions = {
  adapter: XataAdapter(xata),
  pages: {
    signIn: "/auth/signin",
    // signOut: "/auth/signout",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      if (user) return user
      else {
        const sessionUser = await xata.db.nextauth_users
          .filter("email", session.user.email)
          .getFirst()

        let { id } = sessionUser!

        session.user = {
          ...session.user,
          id: id,
        }
        user = session
        return session
      }
    },
    async signIn({ user, account, profile, email, credentials }) {
      try {
        //validate sign in
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
  },
}

export default NextAuth(authOptions)
