import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Settings2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import crestImage from '../img/file_00000000f09c81f5b0eede2dc6f24358.png'
import shirtImage from '../img/file_00000000445c820e85663ee2bd9f12ea.png'
import stadiumImage from '../img/Screenshot_20260920_140315_Instagram.jpg'

const crest = crestImage
const shirt = shirtImage
const stadium = stadiumImage

const copy = {
  pt: {
    language: 'Idioma', settings: 'Configurações', theme: 'Tema', original: 'Original', dark: 'Escuro', gold: 'Dourado',
    nav: ['O time', 'Agenda', 'Comunidade', 'Estádio'], instagram: 'Instagram', club: 'Murilo Futebol Clube · MFC', heroBadge: '2025 • Clube amador • Rivalidade e união', heroTitle: <>TRADIÇÃO.<br /><em>FUTURO. GLÓRIA.</em></>, heroText: 'O uniforme representa a nossa identidade: união, dedicação e orgulho de vestir o escudo do Murilo Futebol Clube.', follow: 'Ver elenco', meet: 'Conheça o time', ticker: 'AVANTI MFC', tickerSub: 'TODOS JUNTOS POR UM SÓ', identity: 'Nossa identidade', identityTitle: <>O futebol fica<br /><em>melhor junto.</em></>, lead: 'Fundado em 15 de fevereiro de 2025, o MFC reúne talento, amizade e competição saudável em cada partida.', posts: 'Publicações', postsSub: 'na nossa história', followers: 'Seguidores', followersSub: 'na arquibancada', champion: 'Campeão', championSub: 'Copa Sucão', titles: 'Títulos', titlesTitle: <>Uma conquista.</>, firstTitle: 'Copa Sucão', firstTitleDetail: 'Campeão · 2026', comingSoon: 'Mais em breve', watch: 'Fique ligado', agendaTitle: <>Próximo capítulo<br /><em>em breve.</em></>, schedule: 'Agenda do time', matchText: 'Resultados, escalações, gols e novidades publicados no perfil oficial.', updates: 'Ver próximo jogo', join: 'Faça parte', communityTitle: <>A arquibancada<br />também <em>joga.</em></>, communityText: 'É no campo, na torcida e na resenha que o Murilo FC ganha força.', sponsor: 'Seja patrocinador', results: 'Ver resultados', footer: 'Futebol amador, feito por quem ama jogar.',
  },
  en: {
    language: 'Language', settings: 'Settings', theme: 'Theme', original: 'Original', dark: 'Dark', gold: 'Gold',
    nav: ['The team', 'Schedule', 'Community', 'Stadium'], instagram: 'Instagram', club: 'Murilo Football Club · MFC', heroBadge: '2025 • Amateur club • Rivalry and unity', heroTitle: <>TRADITION.<br /><em>FUTURE. GLORY.</em></>, heroText: 'The jersey represents our identity: unity, dedication and pride in wearing the Murilo Football Club crest.', follow: 'Follow on Instagram', meet: 'Meet the team', ticker: 'GO MFC', tickerSub: 'ALL TOGETHER AS ONE', identity: 'Our identity', identityTitle: <>Football is<br /><em>better together.</em></>, lead: 'Founded on February 15, 2025, MFC brings talent, friendship and healthy competition to every match.', posts: 'Posts', postsSub: 'in our story', followers: 'Followers', followersSub: 'in the stands', champion: 'Champions', championSub: 'Copa Sucão', titles: 'Titles', titlesTitle: <>One achievement.</>, firstTitle: 'Copa Sucão', firstTitleDetail: 'Champions · 2026', comingSoon: 'More coming soon', watch: 'Stay tuned', agendaTitle: <>Next chapter<br /><em>coming soon.</em></>, schedule: 'Team schedule', matchText: 'Results, lineups, goals and news published on the official profile.', updates: 'See updates', join: 'Join us', communityTitle: <>The stands<br />also <em>play.</em></>, communityText: 'On the field, in the stands and in the conversation, Murilo FC grows stronger.', footer: 'Amateur football, made by people who love to play.',
  },
  es: {
    language: 'Idioma', settings: 'Configuración', theme: 'Tema', original: 'Original', dark: 'Oscuro', gold: 'Dorado',
    nav: ['El equipo', 'Agenda', 'Comunidad'], instagram: 'Instagram', club: 'Murilo Fútbol Club · MFC', heroBadge: '2025 • Club amateur • Rivalidad y unión', heroTitle: <>TRADICIÓN.<br /><em>FUTURO. GLORIA.</em></>, heroText: 'El uniforme representa nuestra identidad: unión, dedicación y orgullo de vestir el escudo del Murilo Fútbol Club.', follow: 'Síguenos en Instagram', meet: 'Conoce al equipo', ticker: 'VAMOS MFC', tickerSub: 'TODOS JUNTOS COMO UNO', identity: 'Nuestra identidad', identityTitle: <>El fútbol es<br /><em>mejor juntos.</em></>, lead: 'Fundado el 15 de febrero de 2025, el MFC reúne talento, amistad y competencia saludable en cada partido.', posts: 'Publicaciones', postsSub: 'en nuestra historia', followers: 'Seguidores', followersSub: 'en la grada', champion: 'Campeones', championSub: 'Copa Sucão', titles: 'Títulos', titlesTitle: <>Un logro.</>, firstTitle: 'Copa Sucão', firstTitleDetail: 'Campeones · 2026', comingSoon: 'Más muy pronto', watch: 'Mantente atento', agendaTitle: <>Próximo capítulo<br /><em>muy pronto.</em></>, schedule: 'Agenda del equipo', matchText: 'Resultados, alineaciones, goles y novedades publicados en el perfil oficial.', updates: 'Ver novedades', join: 'Sé parte', communityTitle: <>La grada<br />también <em>juega.</em></>, communityText: 'En el campo, en la grada y en la conversación, Murilo FC gana fuerza.', footer: 'Fútbol amateur, hecho por quienes aman jugar.',
  },
}

const journeyCopy = {
  pt: {
    eyebrow: 'Nossa trajetória', title: <>Um clube jovem,<br /><em>uma história gigante.</em></>, text: 'Cada partida acrescenta uma nova página à história do Murilo FC.',
    milestones: [['2025', 'Fundação', 'O primeiro capítulo começa em 15 de fevereiro.'], ['2026', 'Copa Sucão', 'A primeira taça entra para a sala de troféus.'], ['Hoje', 'Sempre juntos', 'A torcida continua fazendo parte de cada jogo.']],
  },
  en: {
    eyebrow: 'Our journey', title: <>A young club,<br /><em>a giant story.</em></>, text: 'Every match adds a new page to Murilo FC history.',
    milestones: [['2025', 'Founded', 'The first chapter began on February 15.'], ['2026', 'Copa Sucão', 'The first trophy enters the cabinet.'], ['Today', 'Always together', 'The supporters remain part of every match.']],
  },
  es: {
    eyebrow: 'Nuestra trayectoria', title: <>Un club joven,<br /><em>una gran historia.</em></>, text: 'Cada partido suma una nueva página a la historia del Murilo FC.',
    milestones: [['2025', 'Fundación', 'El primer capítulo comenzó el 15 de febrero.'], ['2026', 'Copa Sucão', 'El primer trofeo entra en la vitrina.'], ['Hoy', 'Siempre juntos', 'La afición sigue siendo parte de cada partido.']],
  },
}

function stored(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    if (!value) return fallback
    if (key === 'mfc-theme' && !['original', 'dark', 'gold'].includes(value)) return fallback
    return value
  } catch {
    return fallback
  }
}

export default function App() {
  const [language, setLanguage] = useState(() => stored('mfc-language', 'pt'))
  const [theme, setTheme] = useState(() => stored('mfc-theme', 'original'))
  const [settingsOpen, setSettingsOpen] = useState(false)
  const t = copy[language]
  const journey = journeyCopy[language]

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language
    document.title = `Murilo FC | ${language === 'pt' ? 'Futebol amador' : language === 'en' ? 'Amateur football' : 'Fútbol amateur'}`
    document.body.dataset.theme = theme
    localStorage.setItem('mfc-language', language)
    localStorage.setItem('mfc-theme', theme)
  }, [language, theme])

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('show'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell min-h-screen text-ink transition-colors duration-300">
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-xl shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[1fr_auto] items-center gap-y-3 px-5 py-4 md:grid-cols-[1fr_auto_1fr] md:px-8 md:py-5">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Murilo FC - início">
          <span className="flex h-11 w-11 -skew-x-8 items-center justify-center overflow-hidden rounded-lg border-2 border-gold bg-ink shadow-[0_8px_20px_rgba(0,0,0,0.14)] transition-transform duration-200 group-hover:scale-105">
            <img className="h-full w-full skew-x-8 object-contain scale-110" src={crest} alt="Escudo do Murilo Futebol Clube" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-extrabold tracking-[.08em] md:text-base">MURILO <strong className="text-wine">FC</strong></span>
            <span className="mt-1 text-[9px] font-bold uppercase tracking-[.2em] text-muted">Futebol amador · 2025</span>
          </span>
        </a>
        <nav className="order-3 col-span-2 flex w-full items-center justify-center gap-1 rounded-full border border-line bg-ink/[0.03] p-1 text-[11px] font-bold sm:text-[12px] md:order-none md:col-span-1 md:col-start-2 md:w-auto" aria-label="Navegação principal">
          <a href="#time" className="rounded-full px-4 py-2 transition-colors hover:bg-gold/15 hover:text-wine">{t.nav[0]}</a>
          <a href="#agenda" className="rounded-full px-4 py-2 transition-colors hover:bg-gold/15 hover:text-wine">{t.nav[1]}</a>
          <a href="#comunidade" className="rounded-full px-4 py-2 transition-colors hover:bg-gold/15 hover:text-wine">{t.nav[2]}</a>
          <a href="#estadio" className="rounded-full px-4 py-2 transition-colors hover:bg-gold/15 hover:text-wine">{t.nav[3] || (language === 'es' ? 'Estadio' : language === 'en' ? 'Stadium' : 'Estádio')}</a>
        </nav>
        <div className="flex items-center justify-self-end gap-2 md:gap-3">
          <Sheet open={settingsOpen} onOpenChange={setSettingsOpen}>
            <SheetTrigger className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold bg-ink text-paper transition-colors hover:bg-gold hover:text-ink" aria-label={t.settings}><Settings2 size={17} /></SheetTrigger>
            <SheetContent className="!p-5">
              <SheetHeader>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-wine">Personalização</p>
                    <SheetTitle>{t.settings}</SheetTitle>
                  </div>
                </div>
              </SheetHeader>

              <div className="space-y-4 pb-2">
                <SettingsField
                  label={t.theme}
                  value={theme}
                  onChange={setTheme}
                  options={[
                    ['original', t.original, 'Clássico'],
                    ['dark', t.dark, 'Noite'],
                    ['gold', t.gold, 'Premium'],
                  ]}
                />

                <SettingsField
                  label={t.language}
                  value={language}
                  onChange={setLanguage}
                  options={[
                    ['pt', 'Português', 'BR'],
                    ['en', 'English', 'US'],
                    ['es', 'Español', 'ES'],
                  ]}
                />
              </div>

              <div className="mt-auto rounded-2xl border border-line bg-ink/[0.02] p-3.5">
                <p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-muted">Visual atual</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] font-bold text-ink">
                  <span className="rounded-full border border-line bg-paper px-2 py-1">{theme === 'original' ? t.original : theme === 'dark' ? t.dark : t.gold}</span>
                  <span className="text-muted">•</span>
                  <span className="rounded-full border border-line bg-paper px-2 py-1 text-ink">{language === 'pt' ? 'PT' : language === 'en' ? 'EN' : 'ES'}</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </header>

      <main id="inicio">
        <section className="hero-surface reveal mx-auto grid max-w-[1240px] items-center gap-8 px-5 py-8 md:grid-cols-[1.05fr_.95fr] md:px-16 md:py-10 lg:min-h-[480px]">
          <div className="relative z-10">
            <Eyebrow>{t.club}</Eyebrow>
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {['2025', 'Clube amador', 'Rivalidade e união'].map((item) => (
                <span key={item} className="badge-pill">{item}</span>
              ))}
            </div>
            <h1 className="max-w-[700px] font-display text-[clamp(4rem,17vw,7.25rem)] font-extrabold uppercase leading-[.86] tracking-[-.025em] md:text-[clamp(4rem,8vw,7.25rem)]">{t.heroTitle}</h1>
            <p className="mt-7 max-w-[430px] text-[15px] leading-7 text-muted md:text-base">{t.heroText}</p>
            <a className="mt-8 inline-block border-b border-ink pb-1 text-xs font-extrabold uppercase tracking-[0.12em] transition-colors hover:text-wine" href="#time">{t.meet} <ArrowDown className="inline" size={16} /></a>
          </div>
          <div className="relative mr-2 mt-10 md:mt-0 md:mr-0">
            <div className="hero-orb" />
            <div className="image-frame relative h-[min(78vw,330px)] overflow-hidden border-8 border-ink bg-ink shadow-gold md:h-[450px]">
              <img className="h-full w-full object-contain md:object-cover" src={shirt} alt="Camisa branca do MFC dentro de uma caixa preta personalizada" />
              <div className="absolute bottom-5 left-5 z-10 bg-gold px-3 py-2 font-display text-[17px] font-bold leading-[.8] tracking-[.1em] text-ink">MFC<br /><strong className="text-[28px]">2025</strong></div>
            </div>
          </div>
        </section>

        <div className="ticker-bar overflow-hidden py-3 font-display text-[18px] font-bold uppercase tracking-[.08em] md:text-[21px]"><div className="w-max -translate-x-16 md:mx-auto md:translate-x-0">{t.ticker} <span className="mx-5">✦</span> {t.tickerSub} <span className="mx-5">✦</span> {t.ticker} <span className="mx-5">✦</span> {t.tickerSub}</div></div>

        <section id="time" className="reveal mx-auto max-w-[1240px] px-5 py-12 md:px-16 md:py-16">
          <Eyebrow center>{t.identity}</Eyebrow>
          <h2 className="text-center font-display text-[clamp(3.2rem,12vw,5.1rem)] font-extrabold uppercase leading-[.88] tracking-[-.025em]">{t.identityTitle}</h2>
          <div className="identity-layout mt-8 flex flex-col items-center gap-6 text-center">
            <div className="identity-badge relative flex h-[190px] w-[190px] items-center justify-center overflow-hidden rounded-2xl bg-ink"><img className="h-[120px] w-[120px] object-contain" src={crest} alt="Escudo bordado do Murilo Futebol Clube" /><span className="absolute bottom-3 font-display text-xs font-bold tracking-[.12em] text-gold">15.02.2025</span></div>
            <p className="identity-lead max-w-[560px] text-xl font-semibold leading-[1.45] md:text-[22px]">{t.lead}</p>
            <div className="identity-stats grid w-full min-w-0 max-w-[760px] grid-cols-2 gap-4">
              <PremiumStat value="98" label={t.posts} sub={t.postsSub} />
              <PremiumStat value="129" label={t.followers} sub="" />
            </div>
          </div>
        </section>

        <section id="estadio" className="stadium-section reveal px-5 py-12 text-ink md:px-[max(64px,calc((100%-1112px)/2))] md:py-14">
          <div className="mx-auto grid max-w-[1240px] items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div className="relative z-10">
              <Eyebrow light>MFC</Eyebrow>
              <h2 className="font-display text-[clamp(3rem,8vw,5rem)] font-extrabold uppercase leading-[.9]">Onde o impossível<br /><em>vira história.</em></h2>
              <p className="mt-6 max-w-[560px] text-lg leading-8 text-ink/80 md:text-xl md:leading-9">
                O estádio do Murilo FC é o palco onde a tradição ganha forma, a torcida vibra e cada jogo vira uma memória que fica marcada no coração da comunidade.
              </p>
            </div>

            <div className="stadium-visual relative z-10" aria-label="Foto do estádio do Murilo FC">
              <div className="stadium-photo-frame">
                <img src={stadium} alt="Estádio do Murilo FC em noite de jogo" />
              </div>
            </div>
          </div>
        </section>

        <section id="agenda" className="agenda-surface reveal relative px-5 py-20 text-white md:px-[max(64px,calc((100%-1112px)/2))] md:py-24">
          <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
            <div>
              <Eyebrow light>{t.watch}</Eyebrow>
              <h2 className="font-display text-[clamp(3.2rem,10vw,5.1rem)] font-extrabold uppercase leading-[.88]">{t.agendaTitle}</h2>
              <p className="mt-5 max-w-[420px] text-base leading-7 text-white/85">{t.matchText}</p>
            </div>
            <div className="space-y-4">
              <div className="match-card">
                <div>
                  <p className="match-label">Novidades</p>
                  <h3 className="match-title">Escalação, gols e fotos no Instagram</h3>
                </div>
                <div className="match-meta">
                  <span>@murilo.fc2026</span>
                  <span>Atualizações</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="reveal mx-auto max-w-[1240px] px-5 py-16 md:px-16 md:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><Eyebrow>{journey.eyebrow}</Eyebrow><h2 className="font-display text-[clamp(3.2rem,9vw,5.1rem)] font-extrabold uppercase leading-[.88]">{journey.title}</h2></div>
            <p className="max-w-sm text-muted md:pb-1">{journey.text}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {journey.milestones.map(([year, title, text]) => <article key={year} className="premium-stat min-h-[160px] rounded-2xl border border-line bg-paper p-4"><p className="font-display text-4xl font-extrabold leading-none text-wine">{year}</p><h3 className="mt-5 text-lg font-extrabold text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>)}
          </div>
        </section>

        <section id="comunidade" className="reveal mx-auto max-w-[1240px] px-5 py-20 text-center md:px-16 md:py-32"><Eyebrow center>{t.join}</Eyebrow><h2 className="font-display text-[clamp(3.2rem,11vw,5.1rem)] font-extrabold uppercase leading-[.88]">{t.communityTitle}</h2><p className="mx-auto mb-7 mt-5 max-w-xl text-muted">{t.communityText}</p></section>
      </main>

      <footer className="mx-auto flex max-w-[1240px] flex-col gap-4 border-t border-line px-5 py-6 text-[11px] text-muted md:flex-row md:items-center md:justify-between md:px-8"><span className="font-bold tracking-[.08em] text-ink">MURILO <strong className="text-wine">FC</strong></span><span>{t.footer}</span><Button asChild><a href="https://www.instagram.com/murilo.fc2026/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={16} /></a></Button><span>© 2026</span></footer>
    </div>
  )
}

function SettingsField({ label, value, onChange, options, compact = false }) {
  return (
    <div className="rounded-2xl border border-line bg-ink/[0.02] p-3.5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-muted">{label}</p>
        <span className="rounded-full border border-line bg-paper px-2 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-ink">
          {options.find(([option]) => option === value)?.[1] ?? value}
        </span>
      </div>

      <div className={`grid gap-2 ${compact ? 'grid-cols-3' : 'grid-cols-1 sm:grid-cols-3'}`}>
        {options.map(([option, text, detail]) => (
          <button
            type="button"
            key={option}
            onClick={() => onChange(option)}
            className={[
              'group relative overflow-hidden rounded-xl border px-2.5 py-2.5 text-left transition-all duration-200',
              value === option
                ? 'border-gold bg-gold/10 shadow-[inset_0_0_0_1px_rgba(201,159,64,0.4)]'
                : 'border-line bg-paper/60 hover:border-gold/60 hover:bg-gold/[0.03]',
            ].join(' ')}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[12px] font-extrabold tracking-[.04em] text-ink">{text}</span>
              {value === option && (
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-black text-ink">
                  ✓
                </span>
              )}
            </div>
            {detail && <p className="mt-1 text-[10px] uppercase tracking-[.08em] text-muted">{detail}</p>}
          </button>
        ))}
      </div>
    </div>
  )
}

function Eyebrow({ children, light = false, center = false }) {
  return <p className={`mb-5 flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[.14em] ${light ? 'text-gold' : 'text-wine'} ${center ? 'justify-center' : ''}`}><span className="inline-block h-2 w-2 bg-gold" />{children}</p>
}

function PremiumStat({ value, label, sub }) {
  return (
    <div className="premium-stat flex h-full flex-col justify-between gap-3 rounded-2xl border border-line bg-paper p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
      <strong className="font-display text-[38px] leading-none text-wine">{value}</strong>
      <span className="text-base font-extrabold leading-tight text-ink">{label}{sub && <><br /><small className="block pt-1 text-[11px] font-semibold uppercase tracking-[.08em] text-muted">{sub}</small></>}</span>
    </div>
  )
}

function Stat({ value, label, sub }) {
  return <div className="flex items-center gap-8 border-b border-line py-5"><strong className="font-display text-[22px] text-wine">{value}</strong><span className="text-lg font-extrabold leading-tight">{label}{sub && <><br /><small className="text-xs font-medium text-muted">{sub}</small></>}</span></div>
}
