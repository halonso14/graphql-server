import mflixUserModel from '../models/mflixUser';

const mflixUserResolver = {
  getUser: async ({ id }) => {
    console.log('from resolver', id);
    const result = await mflixUserModel.findOne({ id });
    console.log('from resolver check result', result);
    return await mflixUserModel.findOne({ id });
  },
};

export default mflixUserResolver;