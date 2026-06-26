export function getUniqueValues(
  jobs: { [key: string]: string | null | undefined }[],
  field: string,
): string[] {
  return [
    ...new Set(
      jobs.map((job) => job[field]?.trim()).filter(Boolean) as string[],
    ),
  ].sort((a, b) => a.localeCompare(b));
}

export function getUniqueLocations(
  jobs: { location: string | null }[],
): string[] {
  return getUniqueValues(jobs, "location");
}
