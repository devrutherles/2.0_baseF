import { databases, P, R ,Id ,client} from "./serve";
import { SERVICOS_COLLECTION_ID, DATABASE_ID } from "./constants";



export const getServicoList = async (filters, limit, offset) => {
  return databases.listDocuments(DATABASE_ID, SERVICOS_COLLECTION_ID, filters);
};

export const createServico = async (data, userId) => {
  return databases.createDocument(
    DATABASE_ID,
    SERVICOS_COLLECTION_ID,
    Id.unique(),
    data,
    [P.write(R.user(userId))]
  );
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
