'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Bell,
  Globe2,
  Menu,
  Wallet,
  X,
} from 'lucide-react'
import { useState } from 'react'

const teamMembers = [
  { name: 'Sarah Okwenje', role: 'Co-founder & Vision', desc: 'Land rights advocate with 15 years in community development across East Africa.' },
  { name: 'James Mutua', role: 'Co-founder & Tech', desc: 'Blockchain engineer passionate about decentralized infrastructure for emerging markets.' },
  { name: 'Alice Nambi', role: 'Operations', desc: 'Leads community partnerships and field validation across Uganda.' },
  { name: 'David Ssebuwufu', role: 'Legal', desc: 'Ensures Varland compliance with land law and local regulations.' },
]

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
            <Link href="/registry" className="transition-colors hover:text-gray-900">Registry</Link>
            <Link href="/how-it-works" className="transition-colors hover:text-gray-900">How it works</Link>
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
          <Link href="/registry">Registry</Link>
          <Link href="/how-it-works">How it works</Link>
        </nav>
      )}
    </header>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <h1 className="text-4xl font-medium tracking-[-0.05em] text-gray-900 md:text-5xl">About Varland</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">Building transparent land registries where community trust, not central authority, is the foundation.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Land disputes cost millions in legal fees and lost economic opportunity. Families lose homes they thought were secure. Communities fracture over unclear boundaries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Varland exists to end this. We&apos;re building a decentralized registry where truth emerges from community consensus, not bureaucratic authority.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every parcel is verified by the people who know it best. Every transfer is transparent. No hidden disputes. No central point of failure.
              </p>
            </div>
            <div className="rounded-xl border border-blue-200 overflow-hidden shadow-lg">
              <Image
                src="/images/varland-community.png"
                alt="Community gathering around land map"
                width={600}
                height={400}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-blue-50 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Transparency', desc: 'Every transaction, every claim, every attestation is visible and timestamped.' },
              { title: 'Community', desc: 'Trust emerges from local knowledge, not distant authorities.' },
              { title: 'Immutability', desc: 'History cannot be rewritten. Records are permanent and cryptographically secured.' },
              { title: 'Accessibility', desc: 'Simple to use for everyone, regardless of technical skill or literacy.' },
            ].map((value, idx) => (
              <div key={idx} className="rounded-xl border border-blue-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">Our team</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                <div className="size-12 rounded-lg bg-blue-200 mb-4" />
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-blue-600 mt-1">{member.role}</p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Our impact</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">12,480</p>
              <p className="text-blue-100">Parcels registered</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">3,206</p>
              <p className="text-blue-100">Community attestations</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">0</p>
              <p className="text-blue-100">Hidden transfers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Built on Stellar</h2>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Varland uses the Stellar blockchain to ensure immutability, transparency, and global accessibility. Stellar&apos;s low transaction costs make it practical for on-the-ground land registration in emerging markets. All parcel records, attestations, and transfers are cryptographically secured and publicly verifiable.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              This is not a private database. It&apos;s a shared, global ledger that no single entity can control or corrupt.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">Join the registry</h2>
          <p className="text-lg text-gray-600 mb-8">Help build a more transparent future for land ownership across East Africa.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/registry" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Explore parcels <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/how-it-works" className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
              Learn how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200 bg-gray-50 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-4 text-xs text-gray-600 sm:flex-row">
          <span>© 2026 Varland Registry</span>
          <span>Built for communities. Secured on Stellar.</span>
        </div>
      </footer>
    </main>
  )
}
