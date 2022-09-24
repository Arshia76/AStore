import NextAuth from 'next-auth';
import UserSchema from '../../../Backend/model/User';
import CredentialsProvider from 'next-auth/providers/credentials';
import { comparePassword } from '../../../Backend/utils/Auth';
import ConnectDB from '../../../Backend/lib/ConnectDB';

const authOptions = {
  session: {
    strategy: 'jwt',
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
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
