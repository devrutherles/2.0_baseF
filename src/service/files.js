import { storage } from "./server";

export const uploadFile = async (file) => {
  return storage.createFile(file);
};

export const getFileView = async (fileId) => {
  return storage.getFileView(fileId);
};
