import UserSchema from '../../mongo/schema/UserSchema';

const UserResolver = {
  getAllUsers: async () => {
    return await UserSchema.find();
  },

  getUserByName: async ({ name }) => {
    return await UserSchema.findOne({ name });
  },
};

export default UserResolver;