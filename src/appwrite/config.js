import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
  client =new Client();
  databases;
  bucket;

  constructor(){
    this.client
    .setEndpoint(conf.appwriteurl)
    .setProject(conf.appwriteProjectId);
    this.databases=new Databases(this.client);
    this.bucket=new Storage(this.client);
  }
  async createPost({title,slug,content,featuredImage,status,userId}){
  try {
    return await this.databases.createDocument(
      conf.appwriteDatabseId,
      conf.appwriteCollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
        userId

      }
    )
  } catch (error) {
    console.log("appwrite service:: createpost :: error",error)
  }
  }
  async updatePost(slug,{title,content,featuredImage,status}){
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabseId,
        conf.appwriteCollectionId,
        slug ,//slug here is document id
      {
        title,
        content,
        featuredImage,
        status,
      }
      )
    } catch (error) {
      console.log("appwrite service:: updatePost :: error",error)
    }
  }
  
  async deletePost(slug){
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabseId,
        conf.appwriteCollectionId,
        slug ,//slug here is document id
      )
      return true;
    } catch (error) {
      console.log("appwrite service:: deletPost :: error",error)
      return false;
    }
  }
 
  async getPost(slug){
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabseId,
        conf.appwriteCollectionId,
        slug ,//slug here is document id
      )
      
    } catch (error) {
      console.log("appwrite service:: getPost :: error",error)
      
    }
  }


  async getPosts(queries=[Query.equal("status","active")]){
   try {
    return await this.databases.listDocuments(
      conf.appwriteDatabseId,
        conf.appwriteCollectionId,
        queries,
    )
   } catch (error) {
     console.log("appwrite service:: getposts :: error",error);
     return false;
   }
  }

  //file upload service
  async uploadFile(file){
    try {
       return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
       )
    } catch (error) {
       console.log("appwrite service:: uploadFile :: error",error)
       return false
      }

  }
  
  async deleteFile(fileId)
  {
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId);
      return true;    
    } catch (error) {
      console.log("appwrite service:: delete File :: error",error)
      return false
    }
  }
  
  getFilePreview(fileId){
    return this.bucket.getFileView(
      conf.appwriteBucketId,
      fileId
    )
  }

}
const service = new Service()
export default service