import mflixUserModel from '../../models/mflixUser';

const mflixUserResolver = {
  getAllUsers: async () => {
    return await mflixUserModel.find();
  },

  getUserByName: async ({ name }) => {
    return await mflixUserModel.findOne({ name });
  },
};

export default mflixUserResolver;