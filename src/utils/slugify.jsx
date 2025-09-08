export const createSlug = (movieTitle) => {
  return movieTitle?.toLowerCase()
                    .trim()
                    .replace(/&/g, 'and')        // & → and
                    .replace(/'/g, '')           // Remove apostrophes
                    .replace(/[^\w\s-]/g, '')    // Remove special chars
                    .replace(/\s+/g, '-')        // Spaces → hyphens
                    .replace(/-+/g, '-')         // Multiple hyphens → single
                    .replace(/^-+|-+$/g, '');    // Remove leading/trailing hyphens
}