'use client'
import React, { FormEvent, useCallback } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const FormInput = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <label htmlFor={label.replace(' ', '-')} className="capitalize text-md font-bold">
        {label}
      </label>
      {children}
    </div>
  )
}

const ProductFilter = () => {
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
      className="w-full p-5 border shadow-md rounded-md flex flex-wrap items-center justify-between gap-5"
    >
      {/* Search product */}
      <FormInput label="cari produk">
        <input
          type="text"
          name="search" // Nama parameter untuk query string
          id="product-name"
          defaultValue={searchParams?.get('search') || ''}
          placeholder="Nama produk atau brand"
          className="p-3 border rounded-md w-full"
        />
      </FormInput>

      {/* Kategori produk */}
      <FormInput label="kategori">
        <select
          name="category"
          id="product-category"
          defaultValue={searchParams?.get('category') || ''}
          className="p-3 border rounded-md bg-white min-w-[200px]"
        >
          <option value="">Semua Kategori</option>
          <option value="elektronik">Elektronik</option>
          <option value="fashion">Fashion</option>
          <option value="makanan">Makanan</option>
        </select>
      </FormInput>

      {/* Harga minimum */}
      <FormInput label="harga minimum">
        <input
          type="number"
          name="min_price"
          id="min-price"
          defaultValue={searchParams?.get('min_price') || ''}
          placeholder="Rp 0"
          min="0"
          className="p-3 border rounded-md"
        />
      </FormInput>

      {/* Harga maksimum */}
      <FormInput label="harga maksimum">
        <input
          type="number"
          name="max_price"
          id="max-price"
          defaultValue={searchParams?.get('max_price') || ''}
          placeholder="Rp 1.000.000"
          min="0"
          className="p-3 border rounded-md"
        />
      </FormInput>

      {/* Rating */}
      <FormInput label="rating">
        <select
          name="rating"
          id="product-rating"
          defaultValue={searchParams?.get('rating') || ''}
          className="p-3 border rounded-md bg-white"
        >
          <option value="">Semua Rating</option>
          <option value="5">5 Bintang</option>
          <option value="4">4 Bintang ke atas</option>
          <option value="3">3 Bintang ke atas</option>
        </select>
      </FormInput>

      {/* Tombol Submit dan Reset */}
      <div className="flex gap-3 w-full md:w-auto">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Cari Produk
        </button>
        <button
          type="button"
          onClick={() => router.push(pathname)}
          className="px-6 py-3 border rounded-md hover:bg-gray-100 transition-colors"
        >
          Reset
        </button>
      </div>
    </form>
  )
}

export default ProductFilter