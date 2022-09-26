import NextAuth from 'next-auth';
import UserSchema from '../../../Backend/model/User';
import CredentialsProvider from 'next-auth/providers/credentials';
import { comparePassword } from '../../../Backend/utils/Auth';
import ConnectDB from '../../../Backend/lib/ConnectDB';

const authOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.id = user.id;
        token.username = user.username;
        console.log(token);
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.id = token.id;
      session.username = token.username;
      console.log(session);
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const body = req.body;

        await ConnectDB();

        const user = await UserSchema.findOne({ username: body.username });

        if (!user) {
          throw new Error('User not Exists');
        }
        const isMatch = await comparePassword(body.password, user.password);
        if (!isMatch) {
          throw new Error('Wrong Credentials');
        }

        await user.save();

        console.log('log detail', user);

        return {
          id: user._id,
          username: user.username,
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
