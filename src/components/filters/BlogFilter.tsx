'use client'
import React, { FormEvent, useCallback } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const BlogFilter = () => {
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
      className="w-full p-5 border shadow-md rounded-md flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-between gap-5"
    >
      {/* Search article */}
      <input
        type="text"
        name="search" // Nama parameter untuk query string
        id="job-name"
        defaultValue={searchParams?.get('search') || ''}
        placeholder="Cari artikel"
        className="w-full lg:w-[70%] p-3 border rounded-md"
      />

      {/* category */}
        <select
          name="category"
          id="category"
          defaultValue={searchParams?.get('category') || ''}
          className="p-3 border rounded-md bg-white min-w-[200px]"
        >
          <option value="">Semua kategory</option>
          <option value="technologi-trends">Technology Trends</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-development">Mobile Development</option>
          <option value="digital-business">Digital Business</option>
          <option value="ui-design">UI/UX Design</option>
        </select>

      {/* Tombol Submit dan Reset */}
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Cari
      </button>
    </form>
  )
}

export default BlogFilter