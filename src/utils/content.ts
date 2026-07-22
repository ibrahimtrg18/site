/**
 * Content files whose name starts with `_` are treated as drafts: they are
 * excluded from listings, sitemaps, and routing until renamed without the
 * prefix.
 *
 * Besides being a handy draft workflow, this lets an otherwise-empty content
 * directory keep at least one `.mdx` file on disk. The blog and project pages
 * load content with a dynamic `import(`.../${slug}.mdx`)`, and the Turbopack
 * build (default in Next 16) can only resolve that import when the directory
 * contains at least one matching `.mdx` file.
 */
export const isPublishedMdx = (fileName: string) =>
  /\.mdx?$/.test(fileName) && !fileName.startsWith("_");

/** True when a route slug points at a draft (see {@link isPublishedMdx}). */
export const isDraftSlug = (slug: string) => slug.startsWith("_");
