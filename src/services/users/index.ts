export async function getUsers() {
  const queryResultsLength = 10;
  const url = `https://randomuser.me/api?results=${queryResultsLength}`;
  const response = await fetch(url);

  if (!response.ok) {
    return {}
  }

  const { results, info } = await response.json();

  return {
    users: results,
    meta: info,
  }
}