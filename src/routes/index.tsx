import { createFileRoute } from "@tanstack/react-router";
import {
  IconBolt,
  IconBrandTelegram,
  IconCheck,
  IconChevronRight,
  IconMessageCircleHeart,
  IconPlus,
  IconRobot,
  IconSparkles,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chelsie — Mes bots" },
      { name: "description", content: "Ajoutez et gérez vos bots connectés avec Chelsie." },
      { property: "og:title", content: "Chelsie — Mes bots" },
      { property: "og:description", content: "Ajoutez et gérez vos bots connectés avec Chelsie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Bot = {
  name: string;
  handle: string;
  members: string;
  features: string[];
};

const initialBots: Bot[] = [
  {
    name: "Luna Assistant",
    handle: "@luna_helper_bot",
    members: "1 248 membres",
    features: ["Réponses auto", "Bienvenue"],
  },
  {
    name: "Bloom Community",
    handle: "@bloom_circle_bot",
    members: "632 membres",
    features: ["Modération", "Statistiques"],
  },
];

function Index() {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [token, setToken] = useState("");
  const [bots, setBots] = useState(initialBots);

  function addBot(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token.trim()) return;
    setBots((current) => [
      ...current,
      {
        name: "Nouveau bot",
        handle: "@chelsie_new_bot",
        members: "Prêt à démarrer",
        features: ["Connecté"],
      },
    ]);
    setToken("");
    setIsFormOpen(false);
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-12 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="glass-control flex size-11 items-center justify-center rounded-2xl shadow-sm">
              <IconMessageCircleHeart className="size-6 text-foreground" stroke={1.7} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Chelsie</h1>
              <p className="text-sm text-muted-foreground">Vos bots, tout simplement.</p>
            </div>
          </div>
          <div className="glass-control flex size-10 items-center justify-center rounded-full" aria-label="Profil">
            <span className="text-sm font-bold text-foreground">C</span>
          </div>
        </header>

        <section className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
              <IconSparkles className="size-4" stroke={1.8} /> Espace bots
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Mes compagnons</h2>
          </div>
          {!isFormOpen && (
            <Button variant="chelsie" size="icon" onClick={() => setIsFormOpen(true)} aria-label="Ajouter un bot" className="size-11 rounded-full">
              <IconPlus className="size-5" />
            </Button>
          )}
        </section>

        {isFormOpen && (
          <section className="glass-panel mb-8 rounded-[20px] p-5 sm:p-7" aria-labelledby="add-bot-title">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <div className="glass-control flex size-11 shrink-0 items-center justify-center rounded-2xl">
                  <IconBrandTelegram className="size-6 text-foreground" stroke={1.7} />
                </div>
                <div>
                  <h3 id="add-bot-title" className="text-lg font-bold text-foreground">Ajouter un bot</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">Connectez-le avec son token Telegram.</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsFormOpen(false)} aria-label="Fermer" className="size-9 rounded-full text-muted-foreground">
                <IconX />
              </Button>
            </div>
            <form onSubmit={addBot} className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="bot-token">Token du bot</label>
              <input
                id="bot-token"
                value={token}
                onChange={(event) => setToken(event.target.value)}
                className="glass-control h-12 min-w-0 flex-1 rounded-2xl px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/40"
                placeholder="Collez le token de votre bot"
                autoComplete="off"
              />
              <Button variant="chelsie" size="lg" type="submit" className="h-12 rounded-2xl px-6">
                <IconPlus /> Connecter le bot
              </Button>
            </form>
          </section>
        )}

        <section aria-labelledby="connected-bots-title">
          <div className="mb-4 flex items-center justify-between">
            <h3 id="connected-bots-title" className="text-lg font-bold text-foreground">Bots connectés</h3>
            <span className="glass-control rounded-full px-3 py-1 text-xs font-semibold text-muted-foreground">{bots.length} actifs</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {bots.map((bot, index) => (
              <article key={`${bot.handle}-${index}`} className="glass-panel group rounded-[20px] p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="glass-control relative flex size-14 shrink-0 items-center justify-center rounded-2xl">
                    <IconRobot className="size-7 text-foreground" stroke={1.6} />
                    <span className="absolute -bottom-1 -right-1 size-3.5 rounded-full border-2 border-glass bg-success" aria-label="En ligne" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-bold text-foreground">{bot.name}</h4>
                    <p className="truncate text-sm text-muted-foreground">{bot.handle}</p>
                  </div>
                  <Button variant="ghost" size="icon" aria-label={`Ouvrir ${bot.name}`} className="size-9 rounded-full text-muted-foreground">
                    <IconChevronRight />
                  </Button>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="glass-control inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                    <IconUsers className="size-3.5" /> {bot.members}
                  </span>
                  {bot.features.map((feature, featureIndex) => (
                    <span key={feature} className="glass-control inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                      {featureIndex === 0 ? <IconBolt className="size-3.5" /> : <IconCheck className="size-3.5" />}
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
