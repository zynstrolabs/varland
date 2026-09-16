'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Bell,
  ChevronDown,
  Globe2,
  MapPin,
  Menu,
  Search,
  Wallet,
  X,
} from 'lucide-react'

const allParcels = [
  { id: 'VL-2048-AX91', location: 'Kampala, Central', size: '2.4 ha', owner: 'K. Namanya', status: 'Verified', verified: '2024-08-15' },
  { id: 'VL-2048-BQ12', location: 'Wakiso, Kyaliwajjala', size: '0.8 ha', owner: 'J. Okello', status: 'Pending', verified: '2024-09-01' },
  { id: 'VL-2048-CR44', location: 'Mukono, Seeta', size: '1.7 ha', owner: 'A. Nabwire', status: 'Disputed', verified: '-' },
  { id: 'VL-2048-DM05', location: 'Entebbe Road', size: '3.1 ha', owner: 'M. Ssenyonga', status: 'Verified', verified: '2024-07-20' },
  { id: 'VL-2048-EP89', location: 'Nansana', size: '0.5 ha', owner: 'R. Kutcher', status: 'Verified', verified: '2024-08-10' },
  { id: 'VL-2048-FQ76', location: 'Mityana', size: '2.2 ha', owner: 'E. Nakimuli', status: 'Pending', verified: '2024-09-05' },
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

export default function RegistryPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filtered = allParcels.filter((parcel) => {
    const matchesSearch = `${parcel.id} ${parcel.location} ${parcel.owner}`.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'all' || parcel.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-12 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <h1 className="text-4xl font-medium tracking-[-0.05em] text-gray-900">Browse the registry</h1>
          <p className="mt-3 max-w-2xl text-lg text-gray-600">Search through {allParcels.length} verified and pending land parcels. View ownership records, documents, and verification timelines.</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="border-b border-blue-200 px-5 py-8 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label htmlFor="search" className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-600">Search</label>
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-2.5">
                <Search className="size-4 text-blue-500" />
                <input
                  id="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Parcel ID, location, or owner name..."
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="status" className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-600">Status</label>
              <select
                id="status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="mt-2 flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-2.5 text-sm outline-none"
              >
                <option value="all">All statuses</option>
                <option value="Verified">Verified</option>
                <option value="Pending">Pending</option>
                <option value="Disputed">Disputed</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Parcels List */}
      <section className="px-5 py-12 md:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-600">Showing <span className="font-semibold text-gray-900">{filtered.length}</span> of <span className="font-semibold text-gray-900">{allParcels.length}</span> parcels</p>
          </div>

          <div className="grid gap-3 md:gap-4">
            {filtered.map((parcel) => (
              <Link
                key={parcel.id}
                href={`/registry/${parcel.id}`}
                className="group rounded-xl border border-blue-200 bg-white p-5 transition hover:border-blue-400 hover:shadow-md md:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-mono text-sm font-bold text-gray-900">{parcel.id}</h3>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusStyles[parcel.status as keyof typeof statusStyles]}`}>
                        {parcel.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{parcel.location}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                      <span>Size: <span className="font-semibold text-gray-900">{parcel.size}</span></span>
                      <span>Owner: <span className="font-semibold text-gray-900">{parcel.owner}</span></span>
                      <span>Verified: <span className="font-semibold text-gray-900">{parcel.verified}</span></span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-semibold">View</span>
                    <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-xl border border-blue-200 bg-blue-50 py-12 text-center">
              <p className="text-gray-600">No parcels found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
