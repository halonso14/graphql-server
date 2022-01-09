import createtDBConnection from './connection';
import userSchema from './schema/userSchema';

export function getMflixUserModel() {
    const mflixDBConnection = createtDBConnection('mflix');
    mflixDBConnection.model('users', userSchema);
    return mflixDBConnection.model('users');
}