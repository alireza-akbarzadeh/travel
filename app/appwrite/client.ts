import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_KEY,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  tripsCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
  endpointUrl: import.meta.env.VITE_APPWRITE_APY_ENDPOINT,
  api_key: import.meta.env.VITE_APPWRITE_APY_KEY,
};

const client = new Client()
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId);

const account = new Account(client);

const database = new Databases(client);

const storage = new Storage(client);

export { account, database, storage, client };
