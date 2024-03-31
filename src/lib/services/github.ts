import { GITHUB_API_GRAPHQL_BASE_URL, GITHUB_ACCOUNTS, GITHUB_USER_QUERY } from '@/lib/constants/github'

export const getGitHubContributionsData = async (
  username: string | undefined,
  token: string | undefined
) => {
  const requestBody = {
    query: GITHUB_USER_QUERY,
    variables: { username }
  };
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(requestBody),
    next: { revalidate: 3600 }
  };
  const response = await fetch(GITHUB_API_GRAPHQL_BASE_URL, options)
  const status: number = await response.status;
  const responseBody = await response.json();
  if (status > 400) {
    return { status, data: {} };
  }
  return { status, data: responseBody.data.user };
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