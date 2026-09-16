'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  MapPin,
  Menu,
  Shield,
  Wallet,
  X,
} from 'lucide-react'
import { useState } from 'react'

const parcelData = {
  'VL-2048-AX91': {
    id: 'VL-2048-AX91',
    location: 'Kampala, Central',
    size: '2.4 ha',
    owner: 'K. Namanya',
    status: 'Verified',
    coordinates: '0.3476° N, 32.5825° E',
    registered: '2024-08-15',
    attestations: 5,
    documents: ['Land deed', 'Survey certificate', 'Tax clearance', 'Boundary agreement'],
  },
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

export default function ParcelDetailPage({ params }: { params: { id: string } }) {
  const parcel = parcelData[params.id as keyof typeof parcelData] || parcelData['VL-2048-AX91']

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Breadcrumb */}
      <section className="border-b border-blue-200 px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-[1380px] items-center gap-3 text-sm text-gray-600">
          <Link href="/registry" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="size-4" />
            Registry
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-900">{parcel.id}</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 py-12 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Parcel Header */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-4xl font-medium text-gray-900">{parcel.id}</h1>
                    <p className="mt-2 text-lg text-gray-600">{parcel.location}</p>
                  </div>
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900 flex items-center gap-2">
                    <CheckCircle2 className="size-4" />
                    {parcel.status}
                  </span>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600">Size</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">{parcel.size}</p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600">Owner</p>
                  <p className="mt-2 truncate text-base font-bold text-gray-900">{parcel.owner}</p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600">Verified</p>
                  <p className="mt-2 text-base font-bold text-gray-900">{parcel.registered}</p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600">Attestations</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">{parcel.attestations}</p>
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="rounded-xl border border-blue-200 overflow-hidden bg-blue-50 h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="size-12 text-blue-400 mx-auto mb-3" />
                  <p className="text-gray-600">{parcel.coordinates}</p>
                  <p className="text-sm text-gray-500 mt-2">Interactive map would display here</p>
                </div>
              </div>

              {/* Documents Section */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supporting documents</h2>
                <div className="space-y-3">
                  {parcel.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 rounded-lg border border-blue-200 bg-white p-4 transition hover:shadow-md"
                    >
                      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue-100">
                        <FileText className="size-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{doc}</p>
                        <p className="text-xs text-gray-500">Uploaded and verified</p>
                      </div>
                      <span className="text-xs font-semibold text-green-600">✓ Verified</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification Timeline */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verification timeline</h2>
                <div className="space-y-4">
                  <div className="relative pl-8 pb-4 border-l-2 border-blue-300">
                    <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-blue-600" />
                    <p className="font-semibold text-gray-900">Claimed by owner</p>
                    <p className="text-xs text-gray-600 mt-1">K. Namanya · 15 Aug 2024</p>
                  </div>
                  <div className="relative pl-8 pb-4 border-l-2 border-blue-300">
                    <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-blue-600" />
                    <p className="font-semibold text-gray-900">Attested by local authority</p>
                    <p className="text-xs text-gray-600 mt-1">Kampala Land Office · 18 Aug 2024</p>
                  </div>
                  <div className="relative pl-8 pb-4 border-l-2 border-blue-300">
                    <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-blue-600" />
                    <p className="font-semibold text-gray-900">Verified by community</p>
                    <p className="text-xs text-gray-600 mt-1">5 independent attestations · 20 Aug 2024</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-blue-600" />
                    <p className="font-semibold text-gray-900">Published to registry</p>
                    <p className="text-xs text-gray-600 mt-1">Publicly visible · 22 Aug 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Ownership Card */}
              <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="size-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Ownership verified</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">This parcel is registered to:</p>
                <p className="text-xl font-bold text-gray-900">{parcel.owner}</p>
                <button className="mt-4 w-full rounded-lg border border-blue-300 bg-white py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                  View owner profile
                </button>
              </div>

              {/* Status Card */}
              <div className="rounded-xl border border-blue-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-green-600" />
                    <span className="text-sm text-gray-600">All documents verified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-green-600" />
                    <span className="text-sm text-gray-600">Community consensus reached</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="size-5 text-blue-600" />
                    <span className="text-sm text-gray-600">No active disputes</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="rounded-xl border border-blue-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Actions</h3>
                <div className="space-y-2">
                  <button className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                    Initiate transfer
                  </button>
                  <button className="w-full rounded-lg border border-blue-300 bg-white py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                    Report issue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
