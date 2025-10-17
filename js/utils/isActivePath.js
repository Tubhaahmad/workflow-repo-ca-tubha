export function isActivePath(currentPath, href) {
  const current = currentPath.startsWith("/") ? currentPath : `/${currentPath}`;
  const link = href.startsWith("/") ? href : `/${href}`;

  if (link === "/" && (currentPath === "/" || currentPath === "/index.html")) {
    return true;
  }

  if (link === "/" && (current === "/" || current === "/index.html"))
    return true;

  if (current === link) return true;
  if (current.includes(link)) return true;
  return false;
}
