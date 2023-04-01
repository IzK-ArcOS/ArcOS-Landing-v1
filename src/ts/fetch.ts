export async function getReleases(): Promise<GitHubRelease[]> {
  try {
    const req = await (
      await fetch(
        "https://api.github.com/repos/IzK-ArcOS/ArcOS-Frontend/releases"
      )
    ).json();

    return req as GitHubRelease[];
  } catch {
    return [];
  }
}
