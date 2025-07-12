// src/app/sitemap.ts
import fs from "fs";
import path from "path";
import { casinos } from "@/constants/casinos";

const BASE_URL = "https://mystikopaixnidi.gr";

interface SitemapEntry {
  url: string;
  lastModified: string;
}

/**
 * Рекурсивно собираем все папки в src/app,
 * в которых лежит файл page.tsx — это наш статический маршрут.
 * Пропускаем папки с динамическими сегментами ([...]).
 */
function collectStaticRoutes(dir: string, baseRoute = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("(")) continue;      // опционально: папки-«группировки»
    if (entry.name.includes("[")) continue;       // динамические сегменты пропускаем

    const subdir = path.join(dir, entry.name);
    const pageFile = path.join(subdir, "page.tsx");
    if (fs.existsSync(pageFile)) {
      // маршрут вида / + baseRoute + entry.name
      routes.push(path.posix.join(baseRoute, entry.name));
    }
    // можно рекурсивно углубляться, если есть вложенные статические страницы
    const deeper = collectStaticRoutes(subdir, path.posix.join(baseRoute, entry.name));
    routes = routes.concat(deeper);
  }

  return routes;
}

export default function sitemap(): SitemapEntry[] {
  const appDir = path.join(process.cwd(), "src", "app");
  // Собираем все статические маршруты
  const staticRoutes = collectStaticRoutes(appDir);
  // Добавляем корневую страницу
  staticRoutes.unshift("");

  // Динамические казино-страницы из вашего константного файла
  const casinoRoutes = casinos.map((c) => `${c.slug}`);

  const allRoutes = Array.from(new Set([...staticRoutes, ...casinoRoutes]));

  return allRoutes.map((route) => ({
    url: `${BASE_URL}/${route}`,           
    lastModified: new Date().toISOString(),
  }));
}
