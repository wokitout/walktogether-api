/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/
export const sessionSecret = process.env.SESSION_SECRET || 'Your Session Secret goes here';
export const google = {
  clientID: process.env.GOOGLE_CLIENTID || '310379758706-34ejn5bcgljn556lddurafsukc0vj0r4.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET || 'Sxc-iHO-limVCPlL2K9VU-ws',
  callbackURL: process.env.GOOGLE_CALLBACK || '/auth/google/callback'
};
export const linkedin = {
  clientID: process.env.GOOGLE_CLIENTID || '75wzppnyhi0dxn',
  clientSecret: process.env.GOOGLE_SECRET || 'j22z0BkjqisTm1ZF',
  callbackURL: process.env.GOOGLE_CALLBACK || '/auth/linkedin/callback'
}


export default {
  sessionSecret,
  google,
  linkedin
};
