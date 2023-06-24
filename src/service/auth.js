import { account, teams , avatars} from "./serve";
import { OAUTH_CALLBACK_URL ,INVITATION_CALLBACK_URL } from "./constants";

const _loginUsingOAuthProvider = (provider) => {
  account.createOAuth2Session(provider, OAUTH_CALLBACK_URL, OAUTH_CALLBACK_URL);
};


export const createTeamMembership = async () => {
  return await teams.createMembership('6443ea33c1a0fc12869f',['teste'],INVITATION_CALLBACK_URL,'fretemebr@gmail.com');
};

export const loginUsingGithub = () => {
  _loginUsingOAuthProvider("github");
};

export const loginUsingGoogle = () => {
  _loginUsingOAuthProvider("google");
};

export const loginUsingCredentials = async (email, password) => {
  return await account.createSession(email, password);
};

export const getAccount = async () => {
  return await account.get();
};

export const getAvatar =  () => {
  return  avatars.getInitials();
};

export const logout = async () => {
  await account.deleteSession("current");
  window.location.replace("/auth/login");
};

export const loginAnonymously = async () => {
  return await account.createAnonymousSession();
};

export const updateEmail = async (email, password) => {
  return await account.updateEmail(email, password);
};

export const updateUserPrefs = async (prefs) => {
  const existingPrefs = await account.getPrefs();
  return account.updatePrefs({ ...existingPrefs, ...prefs });
};
