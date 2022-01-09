import { getMflixDBConnection } from '../../mongo';


const UserResolver = {
  getAllUsers: async () => {
    const mflixDBConnection = getMflixDBConnection();
    return await mflixDBConnection.model('users').find();
  },

  getUserByName: async ({ name }) => {
    const mflixDBConnection = getMflixDBConnection();
    return await mflixDBConnection.odel('users').findOne({ name });
  },
};

export default UserResolver;