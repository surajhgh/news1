import { ID, ImageGravity } from "appwrite"
import { appwriteConfig, storage } from "./config"

// Upload File
export async function uploadFile(file) {
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    )

    if (!uploadedFile) {
      throw new Error('Failed to upload file')
    }

    return uploadedFile
  } catch (error) {
    console.error('Upload error:', error)
    throw error // Re-throw the error so it can be handled by the caller
  }
}

// Get File Url
export function getFilePreview(fileId) {
  try {
    if (!fileId) {
      throw new Error('File ID is required')
    }

    // Get the file URL
    const fileUrl = storage.getFileView(
      appwriteConfig.storageId,
      fileId
    )

    if (!fileUrl) {
      throw new Error('Failed to get file preview')
    }

    return fileUrl.toString()
  } catch (error) {
    console.error('Preview error:', error)
    throw error // Re-throw the error so it can be handled by the caller
  }
}
