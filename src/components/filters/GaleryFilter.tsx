'use client'
import React, { FormEvent, useCallback } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const FormInput = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <div className="w-full md:w-[27%] flex flex-col items-start gap-3">
      <label htmlFor={label.replace(' ', '-')} className="capitalize text-md font-bold">
        {label}
      </label>
      {children}
    </div>
  )
}

const GaleryFilter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // Handler untuk submit form
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const params = new URLSearchParams(searchParams?.toString())
    
    // Reset semua parameter sebelumnya
    params.delete('page') // Reset pagination saat filter berubah
    
    // Tambahkan parameter baru dari form
    formData.forEach((value, key) => {
      if (value && typeof value === 'string') {
        params.set(key, value.trim())
      } else {
        params.delete(key)
      }
    })
    
    router.push(`${pathname}?${params.toString()}`)
  }, [router, pathname, searchParams])

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full p-5 border shadow-md rounded-md flex flex-col md:flex-row flex-wrap items-end justify-between gap-5"
    >
      {/* Search galery */}
      <FormInput label="cari produk">
        <input
          type="text"
          name="search" // Nama parameter untuk query string
          id="galery-name"
          defaultValue={searchParams?.get('search') || ''}
          placeholder="Cari Galeri"
          className="p-3 border rounded-md w-full"
        />
      </FormInput>

      {/* Kategori produk */}
      <FormInput label="kategori">
        <select
          name="category"
          id="galery-category"
          defaultValue={searchParams?.get('category') || ''}
          className="w-full p-3 border rounded-md bg-white min-w-[200px]"
        >
          <option value="">Semua Kategori</option>
          <option value="elektronik">Elektronik</option>
          <option value="fashion">Fashion</option>
          <option value="makanan">Makanan</option>
        </select>
      </FormInput>

      {/* Rating */}
      <FormInput label="tipe">
        <select
          name="type"
          id="galery-type"
          defaultValue={searchParams?.get('rating') || ''}
          className="w-full p-3 border rounded-md bg-white"
        >
          <option value="">Semua Rating</option>
          <option value="5">5 Bintang</option>
          <option value="4">4 Bintang ke atas</option>
          <option value="3">3 Bintang ke atas</option>
        </select>
      </FormInput>

      {/* Tombol Submit dan Reset */}
      <div className="flex items-end h-full">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Cari
        </button>
      </div>
    </form>
  )
}

export default GaleryFilter