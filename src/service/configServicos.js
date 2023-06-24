import { databases } from "./server";
import { SERVICOS_COLLECTION_ID } from "./consts";

export const getServicoList = async (filters, limit, offset) => {
  return databases.listDocuments(SERVICOS_COLLECTION_ID, filters);
};

export const getServico = async (jobId) => {
  return databases.getDocument(SERVICOS_COLLECTION_ID, jobId);
};

export const updateServicoStatus = async (jobId, status) => {
  return databases.updateDocument(SERVICOS_COLLECTION_ID, jobId, {
    isEnabled: status,
  });
};

export const deleteServico = async (jobId) => {
  await databases.deleteDocument(SERVICOS_COLLECTION_ID, jobId);
};
