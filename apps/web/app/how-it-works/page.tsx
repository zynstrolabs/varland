'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Bell,
  CheckCircle2,
  FileText,
  Globe2,
  Menu,
  Shield,
  Wallet,
  X,
} from 'lucide-react'
import { useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Register your parcel',
    description: 'Create a record with basic information: location, size, ownership details, and supporting documents. Your claim becomes visible to the community.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Local verification',
    description: 'Community members and local authorities review your documents. They attest that the claim matches the ground truth based on their knowledge.',
    icon: Shield,
  },
  {
    number: '03',
    title: 'Build consensus',
    description: 'Independent attestations accumulate. When consensus is reached, your parcel moves from "pending" to "verified" status.',
    icon: CheckCircle2,
  },
  {
    number: '04',
    title: 'Transfer safely',
    description: 'Move ownership through a transparent, timestamped process. Both parties confirm the transaction; no hidden transfers possible.',
    icon: Wallet,
  },
]

const faqs = [
  {
    q: 'How long does verification take?',
    a: 'Most parcels are verified within 2-4 weeks once sufficient attestations are gathered. Simple, well-documented claims often move faster.',
  },
  {
    q: 'What if there&apos;s a dispute?',
    a: 'Disputed parcels remain flagged in the registry. Community members can review evidence and provide additional attestations. Disputes are resolved through transparent discussion.',
  },
  {
    q: 'Who can attest to my parcel?',
    a: 'Neighbors, local leaders, surveyors, and anyone with knowledge of the parcel can contribute attestations. The system weights attester credibility over time.',
  },
  {
    q: 'Is my data secure?',
    a: 'All records are stored on the Stellar blockchain with strong encryption. You control who can access sensitive documents. No central authority can alter history.',
  },
  {
    q: 'Can I transfer my parcel?',
    a: 'Yes, verified parcels can be transferred. Both parties must confirm the transfer in a visible, timestamped process within the registry.',
  },
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
          <Link href="/registry">Registry</Link>
          <Link href="/about">About</Link>
        </nav>
      )}
    </header>
  )
}

export default function HowItWorksPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <h1 className="text-4xl font-medium tracking-[-0.05em] text-gray-900 md:text-5xl">How Varland works</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">A step-by-step guide to registering, verifying, and transferring land with full transparency and community trust.</p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="space-y-8">
            {steps.map((step, idx) => {
              const IconComponent = step.icon
              return (
                <div key={idx} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  {idx % 2 === 0 ? (
                    <>
                      <div>
                        <div className="text-6xl font-bold text-blue-100 mb-2">{step.number}</div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">{step.title}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                      <div className="rounded-xl border border-blue-200 bg-blue-50 h-[300px] flex items-center justify-center">
                        <IconComponent className="size-24 text-blue-300" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="rounded-xl border border-blue-200 bg-blue-50 h-[300px] flex items-center justify-center">
                        <IconComponent className="size-24 text-blue-300" />
                      </div>
                      <div>
                        <div className="text-6xl font-bold text-blue-100 mb-2">{step.number}</div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">{step.title}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="mx-auto max-w-[1380px] px-5 py-14 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-blue-200 shadow-lg">
          <Image
            src="/images/varland-detail.png"
            alt="Land verification documents and process"
            width={1200}
            height={400}
            className="h-[280px] w-full object-cover"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-blue-50 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-medium text-gray-900 mb-12 text-center">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full text-left rounded-lg border border-blue-200 bg-white p-4 transition hover:border-blue-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-semibold text-gray-900">{faq.q}</p>
                  <span className="shrink-0 text-blue-600">{expandedFaq === idx ? '−' : '+'}</span>
                </div>
                {expandedFaq === idx && (
                  <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-lg text-gray-600 mb-8">Join the Varland community and register your first parcel today.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/registry" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Browse registry <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
