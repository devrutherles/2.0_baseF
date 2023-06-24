import { teams } from "./server";
import { INVITATION_CALLBACK_URL } from "./constants";

export const createTeam = async (name) => {
  return teams.create(name);
};

export const createTeamMembership = async (teamId, email ,userId) => {
  return await teams.createMembership('6443ea33c1a0fc12869f',['teste'],INVITATION_CALLBACK_URL,email,userId);
};

export const verifyMembership = async (
  teamId,
  membershipId,
  userId,
  secret
) => {
  return teams.updateMembershipStatus(teamId, membershipId, userId, secret);
};

export const getTeams = async () => {
  return teams.list();
};

export const getTeam = async (teamId) => {
  return teams.get(teamId);
};

export const getTeamMembers = async (teamId) => {
  return teams.getMemberships(teamId);
};
