import {
  Client,
  Account,
  Databases,
  Teams,
  Storage,
  Permission,
  Role,
  Avatars,
  ID,
  Query
  
} from "appwrite";

export const client = new Client();

client.setEndpoint("https://painel.freteme.com/v1").setProject("643e4bf0bc8152ff08e5")


export const account = new Account(client);
export const teams = new Teams(client);
export const storage = new Storage(client);
export const databases = new Databases(client);
export const P =  Permission
export const R =  Role
export const Id =  ID
export const Q =  Query



export const avatars = new Avatars(client);

