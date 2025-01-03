export default async function sitemap() {
  let routes = ["", "/blog", "/resume"].map((route) => ({
    url: `https://naveenbasyal.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
