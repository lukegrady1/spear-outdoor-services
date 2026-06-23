/**
 * Custom next/image loader for static export on GitHub Pages.
 *
 * On a project Pages site everything lives under /<repo>, but next/image does
 * not prepend basePath to image `src` when exporting. This loader prefixes the
 * base path (NEXT_PUBLIC_BASE_PATH, inlined at build) and otherwise returns the
 * file path unchanged — there is no optimization server on Pages.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string }): string {
  // Leave absolute/remote URLs untouched.
  if (/^https?:\/\//.test(src)) return src;
  return `${basePath}${src}`;
}
