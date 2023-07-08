import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Session {
    user: {
      id: string
      email: string
      name: string
      image: string
      username: string?
    }
  }
}
//add more user params here to extend profile on db
