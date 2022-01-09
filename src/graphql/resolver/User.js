import { getMflixDBConnection } from '../../mongo';


const UserResolver = {
  getAllUsers: async () => {
    const mflixDBConnection = getMflixDBConnection();
    return await mflixDBConnection.find();
  },

  getUserByName: async ({ name }) => {
    const mflixDBConnection = getMflixDBConnection();
    return await mflixDBConnection.findOne({ name });
  },
};

export default UserResolver;