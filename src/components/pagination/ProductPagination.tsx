'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useParams, useSearchParams, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProductPagination = ({ 
  count, 
  pageSize, 
  defaultPage = 1 
}: { 
  count: number, 
  pageSize: number, 
  defaultPage?: number 
}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(defaultPage)
  
  // Hitung total halaman
  const totalPages = Math.ceil(count / pageSize)
  
  // Update current page dari URL
  useEffect(() => {
    const pageFromUrl = Number(searchParams?.get('page')) || defaultPage
    setCurrentPage(Math.min(Math.max(pageFromUrl, 1), totalPages))
  }, [searchParams, defaultPage, totalPages])

  // Fungsi untuk membuat URL dengan query params yang ada
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams?.toString())
    params.set('page', page.toString())
    return `${pathname}?${params.toString()}`
  }

  // Generate nomor halaman yang akan ditampilkan
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5 // Jumlah maksimal halaman yang ditampilkan
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    
    return pages
  }

  return (
    <Pagination>
      <PaginationContent>
        {/* Tombol Previous */}
        <PaginationItem>
          <PaginationPrevious 
            href={currentPage > 1 ? createPageUrl(currentPage - 1) : '#'} 
            aria-disabled={currentPage <= 1}
          />
        </PaginationItem>

        {/* Halaman pertama (jika tidak termasuk dalam range yang terlihat) */}
        {getPageNumbers()[0] > 1 && (
          <>
            <PaginationItem>
              <PaginationLink href={createPageUrl(1)}>1</PaginationLink>
            </PaginationItem>
            {getPageNumbers()[0] > 2 && <PaginationEllipsis />}
          </>
        )}

        {/* Nomor halaman utama */}
        {getPageNumbers().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink 
              href={createPageUrl(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Halaman terakhir (jika tidak termasuk dalam range yang terlihat) */}
        {getPageNumbers().at(-1)! < totalPages && (
          <>
            {getPageNumbers().at(-1)! < totalPages - 1 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationLink href={createPageUrl(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Tombol Next */}
        <PaginationItem>
          <PaginationNext 
            href={currentPage < totalPages ? createPageUrl(currentPage + 1) : '#'} 
            aria-disabled={currentPage >= totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default ProductPagination