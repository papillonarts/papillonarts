import { Octokit } from '@octokit/rest'

export function NotAuthorized() {
  return <h1>You are not authorized to proceed!</h1>
}

export async function isUserAuthenticatedPapillonArtsOrganizationMember(personalAccessToken) {
  let collectedAccessToken = personalAccessToken

  if (!collectedAccessToken) {
    collectedAccessToken = window.prompt('Please authenticate with your personal token') // eslint-disable-line
  }

  if (!collectedAccessToken) {
    return null
  }

  const octokit = new Octokit({ auth: collectedAccessToken })

  try {
    // https://developer.github.com/v3/orgs/members/#list-organization-memberships-for-the-authenticated-user
    const { data } = await octokit.request('GET /user/memberships/orgs')

    const isActivePapillonArtsMember =
      data.filter(
        (membership) =>
          membership.organization.login === 'papillonarts' &&
          membership.organization_url === 'https://api.github.com/orgs/papillonarts' &&
          membership.role === 'admin' &&
          membership.state === 'active',
      ).length > 0

    return isActivePapillonArtsMember
  } catch (error) {
    return false
  }
}
