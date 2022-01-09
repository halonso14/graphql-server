import createtDBConnection from './connection';
import userSchema from './schema/userSchema';

// Connect to mongoDB 
export function getMflixDBConnection() {
    const mflixDBConnection = createtDBConnection('mflix');
    mflixDBConnection.model('users', userSchema);
    return mflixDBConnection.model('users');
}