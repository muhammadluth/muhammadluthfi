import axios from 'axios'

import { GITHUB_API_GRAPHQL_BASE_URL, GITHUB_ACCOUNTS, GITHUB_USER_QUERY } from '@/lib/constants/github'


export const getGitHubContributionsData = async (
  username: string | undefined,
  token: string | undefined
) => {
  const response = await axios.post(
    GITHUB_API_GRAPHQL_BASE_URL,
    {
      query: GITHUB_USER_QUERY,
      variables: {
        username: username
      }
    },
    {
      headers: {
        Authorization: `bearer ${token}`
      }
    }
  )

  const status: number = response.status;
  const responseJson = response.data;
  if (status > 400) {
    return { status, data: {} };
  }
  return { status, data: responseJson.data.user };
}


export const getGitHubUser = async (id: number) => {
  const account = GITHUB_ACCOUNTS.find(
    (account) => account.id === id
  );
  if (!account) {
    throw new Error('Invalid user type');
  }
  const { username, token } = account;
  const response = await getGitHubContributionsData(username, token);
  return { account, contribution: response }
};