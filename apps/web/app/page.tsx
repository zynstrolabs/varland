'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Bell,
  ChevronDown,
  CircleHelp,
  FileCheck2,
  FileText,
  Globe2,
  Layers3,
  MapPin,
  Menu,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Wallet,
  X,
} from 'lucide-react'

const parcels = [
  { id: 'VL-2048-AX91', location: 'Kampala, Central', size: '2.4 ha', owner: 'K. Namanya', status: 'Verified', color: 'bg-blue-600', shape: 'shape-one', x: '22%', y: '24%' },
  { id: 'VL-2048-BQ12', location: 'Wakiso, Kyaliwajjala', size: '0.8 ha', owner: 'J. Okello', status: 'Pending', color: 'bg-blue-400', shape: 'shape-two', x: '56%', y: '28%' },
  { id: 'VL-2048-CR44', location: 'Mukono, Seeta', size: '1.7 ha', owner: 'A. Nabwire', status: 'Disputed', color: 'bg-red-500', shape: 'shape-three', x: '70%', y: '62%' },
  { id: 'VL-2048-DM05', location: 'Entebbe Road', size: '3.1 ha', owner: 'M. Ssenyonga', status: 'Verified', color: 'bg-blue-600', shape: 'shape-four', x: '34%', y: '68%' },
]

const statusStyles = {
  Verified: 'bg-blue-100 text-blue-900',
  Pending: 'bg-amber-100 text-amber-900',
  Disputed: 'bg-red-100 text-red-900',
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [connected, setConnected] = useState(false)

  return (
    <header className="border-b border-blue-200 bg-white/95 px-5 py-4 backdrop-blur md:px-10">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Varland home">
            <span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-white"><Globe2 className="size-5" /></span>
            <span className="text-[19px] font-semibold tracking-[-0.04em] text-gray-900">varland</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-gray-600 md:flex">
            <Link className="font-medium text-gray-900" href="/#explore">Explore</Link>
            <Link href="/how-it-works" className="transition-colors hover:text-gray-900">How it works</Link>
            <Link href="/about" className="transition-colors hover:text-gray-900">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="hidden size-9 place-items-center rounded-full border border-gray-300 text-gray-600 transition hover:bg-gray-50 sm:grid" aria-label="Notifications"><Bell className="size-4" /></button>
          <button onClick={() => setConnected(!connected)} className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
            <Wallet className="size-4" /> {connected ? 'G7...K2Q' : 'Connect wallet'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-9 place-items-center rounded-full border border-gray-300 md:hidden" aria-label="Open navigation">{menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}</button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mx-auto mt-4 flex max-w-[1380px] flex-col gap-3 border-t border-gray-300 pt-4 text-sm">
          <Link href="/#explore">Explore</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/about">About</Link>
        </nav>
      )}
    </header>
  )
}

export default function Page() {
  const [activeParcel, setActiveParcel] = useState(parcels[0])
  const [search, setSearch] = useState('')

  const filteredParcels = parcels.filter((parcel) =>
    `${parcel.id} ${parcel.location} ${parcel.owner}`.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section with Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-5" />
        <div className="mx-auto grid max-w-[1380px] gap-10 px-5 pb-16 pt-14 md:px-10 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700"><Sparkles className="size-3.5" /> Built for trust</div>
            <h1 className="max-w-[650px] text-[clamp(3.2rem,7vw,6.6rem)] font-medium leading-[0.93] tracking-[-0.075em] text-gray-900">Land you can <em className="font-serif font-normal text-blue-600">believe</em> in.</h1>
            <p className="mt-7 max-w-[525px] text-lg leading-8 text-gray-600">A transparent, community-verified land registry. Know who owns what, where it is, and why you can trust it.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#explore" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Explore the registry <ArrowUpRight className="size-4" /></Link>
              <Link href="/how-it-works" className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">Learn how it works <CircleHelp className="size-4" /></Link>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-gray-200 pt-6">
              <Stat value="12,480" label="verified parcels" />
              <Stat value="3,206" label="community attestations" />
              <Stat value="0" label="hidden transfers" />
            </div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden rounded-[28px] border border-blue-200 bg-blue-50 p-5 shadow-lg" id="explore">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#3b82f6_1px,transparent_1px),linear-gradient(90deg,#3b82f6_1px,transparent_1px)] [background-size:42px_42px]" />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">Live registry</p>
                <p className="mt-1 text-sm text-blue-700">Greater Kampala, Uganda</p>
              </div>
              <div className="flex gap-1.5 rounded-full border border-blue-200 bg-white p-1">
                <span className="size-2 rounded-full bg-blue-600" />
                <span className="size-2 rounded-full bg-blue-400" />
                <span className="size-2 rounded-full bg-red-500" />
              </div>
            </div>
            <div className="relative mt-4 h-[280px] overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-100 to-blue-50">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#3b82f6_0.8px,transparent_0.8px)] [background-size:16px_16px]" />
              {filteredParcels.map((parcel) => (
                <button
                  key={parcel.id}
                  onClick={() => setActiveParcel(parcel)}
                  className={`parcel-shape ${parcel.shape} absolute ${parcel.color} shadow-lg transition hover:scale-105`}
                  style={{ left: parcel.x, top: parcel.y }}
                  aria-label={`View ${parcel.id}`}
                />
              ))}
              <div className="absolute bottom-3 left-3 rounded-lg border border-blue-200 bg-white/90 px-2.5 py-1.5 text-[10px] font-medium text-blue-700">Tap a parcel to inspect</div>
            </div>
            <div className="relative mt-4 flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-3 py-2.5">
              <Search className="size-4 text-blue-500" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search parcel ID, owner or place" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400" />
              <kbd className="hidden rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-600 sm:block">⌘ K</kbd>
            </div>
            <div className="relative mt-3 flex items-center justify-between text-xs text-gray-600">
              <span>{filteredParcels.length} parcels in view</span>
              <Link href="/registry" className="font-semibold text-blue-600 hover:text-blue-700">Open full registry <ArrowUpRight className="inline size-3" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Field */}
      <section className="mx-auto max-w-[1380px] px-5 py-14 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-blue-200 shadow-lg">
          <Image
            src="/images/varland-field.png"
            alt="Lush green farmland parcels in Uganda with clear boundary lines"
            width={1200}
            height={400}
            className="h-[280px] w-full object-cover"
          />
        </div>
      </section>

      {/* Registry Section */}
      <section id="registry" className="border-y border-blue-200 bg-blue-50 px-5 py-14 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">A clearer picture</p>
              <h2 className="mt-2 text-3xl font-medium tracking-[-0.05em] text-gray-900 md:text-4xl">The registry, at a glance.</h2>
            </div>
            <Link href="/registry" className="flex items-center gap-2 self-start rounded-full border border-blue-300 bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 sm:self-auto">View all parcels <ArrowUpRight className="size-4" /></Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-blue-200 bg-white p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <Layers3 className="size-4 text-blue-600" /> Recent activity
                </div>
                <button className="text-xs text-gray-600 hover:text-gray-900">Last 30 days <ChevronDown className="inline size-3" /></button>
              </div>
              <div className="flex flex-col">
                {parcels.map((parcel, index) => (
                  <Link
                    key={parcel.id}
                    href={`/registry/${parcel.id}`}
                    className="flex items-center gap-4 border-t border-gray-200 py-4 text-left transition hover:bg-gray-50"
                  >
                    <div className={`grid size-9 shrink-0 place-items-center rounded-xl ${index === 2 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                      <MapPin className="size-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-gray-900">{parcel.id}</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusStyles[parcel.status as keyof typeof statusStyles]}`}>
                          {parcel.status}
                        </span>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-600">{parcel.location} · {parcel.size}</p>
                    </div>
                    <ArrowUpRight className="size-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">Ownership breakdown</h3>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-600">Verified claims</div>
                  <div className="text-sm font-semibold text-gray-900">67%</div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-2/3 bg-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-600">Pending review</div>
                  <div className="text-sm font-semibold text-gray-900">24%</div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-1/4 bg-amber-400" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-600">Disputed</div>
                  <div className="text-sm font-semibold text-gray-900">9%</div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-1/12 bg-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Community */}
      <section className="mx-auto max-w-[1380px] px-5 py-14 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-blue-200 shadow-lg">
          <Image
            src="/images/varland-community.png"
            alt="East African community members reviewing a land map together"
            width={1200}
            height={400}
            className="h-[280px] w-full object-cover"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="mx-auto max-w-[1380px] px-5 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Simple by design</p>
            <h2 className="mt-3 max-w-sm text-4xl font-medium leading-tight tracking-[-0.06em] text-gray-900">A stronger foundation for every transfer.</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">Varland brings the people, documents, and proof around a parcel into one public record.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Step number="01" icon={<FileText />} title="Register" text="Create a permanent record for a parcel and its supporting documents." />
            <Step number="02" icon={<ShieldCheck />} title="Attest" text="Independent local roles verify the claim before it becomes trusted." />
            <Step number="03" icon={<Wallet />} title="Transfer" text="Move ownership with a visible, protected escrow process." />
          </div>
        </div>
      </section>

      {/* Image Section - Survey */}
      <section className="mx-auto max-w-[1380px] px-5 py-14 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-blue-200 shadow-lg">
          <Image
            src="/images/varland-survey.png"
            alt="Land surveyor with surveying equipment in field"
            width={1200}
            height={400}
            className="h-[280px] w-full object-cover"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-medium text-white md:text-4xl">Ready to verify your land?</h2>
          <p className="mt-4 text-lg text-blue-100">Join thousands of landowners building a more transparent system.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/registry" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">Browse registry <ArrowUpRight className="size-4" /></Link>
            <Link href="/how-it-works" className="inline-flex items-center gap-2 rounded-full border border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Learn more <CircleHelp className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t border-blue-200 bg-gray-50 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-4 text-xs text-gray-600 sm:flex-row">
          <span>© 2026 Varland Registry</span>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-gray-900">About us</Link>
            <Link href="/how-it-works" className="hover:text-gray-900">How it works</Link>
            <span>Built for communities. Secured on Stellar.</span>
          </div>
        </div>
      </footer>

      {/* Selected Parcel Panel */}
      <div className="fixed bottom-5 right-5 z-10 w-[min(340px,calc(100vw-40px))] rounded-2xl border border-blue-200 bg-white/95 p-4 shadow-lg backdrop-blur">
        <div className="flex items-start gap-3">
          <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-600">
            <MapPin className="size-4" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">Selected parcel</p>
            <p className="mt-1 font-mono text-sm font-semibold text-gray-900">{activeParcel.id}</p>
            <p className="mt-1 truncate text-xs text-gray-600">{activeParcel.location} · owned by {activeParcel.owner}</p>
          </div>
          <button onClick={() => setActiveParcel(parcels[0])} className="text-gray-400 hover:text-gray-600" aria-label="Close parcel preview">
            <X className="size-4" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3">
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusStyles[activeParcel.status as keyof typeof statusStyles]}`}>
            {activeParcel.status}
          </span>
          <Link href={`/registry/${activeParcel.id}`} className="text-xs font-semibold text-blue-600 hover:text-blue-700">
            View details <ArrowUpRight className="inline size-3" />
          </Link>
        </div>
      </div>
    </main>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-xl font-semibold tracking-[-0.04em] text-gray-900">{value}</p>
      <p className="mt-1 text-xs text-gray-600">{label}</p>
    </div>
  )
}

function Step({ number, icon, title, text }: { number: string; icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="flex items-center justify-between text-blue-600">
        <span className="text-xs font-bold tracking-[0.12em]">{number}</span>
        <span className="grid size-9 place-items-center rounded-xl bg-blue-100">
          {icon}
        </span>
      </div>
      <h3 className="mt-9 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  )
}
