export async function getMinecraftServerStatus() {
  const ip = "91.197.6.19";
  const port = 23801;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(`https://api.mcsrvstat.us/3/${ip}:${port}`, {
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) return { online: false };

    const data = await response.json();

    return {
      online: data.online ?? false,
      players: data.players?.online ?? 0,
      maxPlayers: data.players?.max ?? 0,
      motd: data.motd?.clean?.join(" ") ?? null,
      version: data.version ?? null,
    };
  } catch {
    return { online: false };
  }
}
