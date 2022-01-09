import { getMflixUserModel } from '../../mongo';


const UserResolver = {
  getAllUsers: async () => {
    const mflixDBConnection = getMflixUserModel();
    return await mflixDBConnection.find();
  },

  getUserByName: async ({ name }) => {
    const mflixDBConnection = getMflixUserModel();
    return await mflixDBConnection.findOne({ name });
  },
};

export default UserResolver;