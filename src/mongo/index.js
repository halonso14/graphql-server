import { createMflixDBConnection } from './connection';
import userSchema from './schema/userSchema';

// Connect to mongoDB 
export function getMflixDBConnection() {
    const mflixDBConnection = createMflixDBConnection();
    mflixDBConnection.model('users', userSchema);
    return mflixDBConnection;
}