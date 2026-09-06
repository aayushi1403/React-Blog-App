
const conf={
  appwriteurl:String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
//production grade approach
export default conf