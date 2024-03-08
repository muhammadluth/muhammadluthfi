import { GitHubConfigData } from "@/lib/types/github"

export const GITHUB_API_GRAPHQL_BASE_URL = process.env.GITHUB_API_GRAPHQL_BASE_URL || "https://api.github.com/graphql"
export const GITHUB_ACCOUNTS: GitHubConfigData[] = [
  {
    id: 1,
    username: process.env.GITHUB_USERNAME,
    token: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
    endpoint: '/api/github?type=personal',
    type: 'personal',
    is_active: true
  }
]
export const GITHUB_USER_QUERY = `query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          colors
          totalContributions
          months {
            firstDay
            name
            totalWeeks
          }
          weeks {
            contributionDays {
              color
              contributionCount
              date
            }
            firstDay
          }
        }
      }
    }
  }`
