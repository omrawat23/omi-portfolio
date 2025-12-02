"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import { LIBRARY_BOOKS, LIBRARY_META } from "@/config/Library";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type FilterStatus = 'all' | 'reading' | 'read' | 'read-later';

export default function LibraryPage() {
  const [filter, setFilter] = useState<FilterStatus>('all');

  const filteredBooks = filter === 'all' 
    ? LIBRARY_BOOKS 
    : LIBRARY_BOOKS.filter(book => book.status === filter);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      reading: { label: 'reading', variant: 'default' as const, className: 'tag-inner-shadow' },
      read: { label: 'read', variant: 'secondary' as const, className: 'tag-inner-shadow' },
      'read-later': { label: 'read later', variant: 'default' as const, className: 'bg-green-600 hover:bg-green-700 text-white tag-inner-shadow' },
    };
    return statusConfig[status as keyof typeof statusConfig];
  };

  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {LIBRARY_META.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {LIBRARY_META.subtitle}
          </p>
          {/* <p className="text-sm text-muted-foreground">
            Total read: {LIBRARY_META.totalRead}
          </p> */}
        </div>

        <Separator />

        {/* Filter Tabs */}
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Filter by Status</h2>
            {filter !== 'all' && (
              <button
                onClick={() => setFilter('all')}
                className="text-sm text-muted-foreground hover:text-foreground underline"
              >
                Clear filter
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className="transition-colors"
            >
              <Badge
                variant={filter === 'all' ? 'default' : 'outline'}
                className="capitalize cursor-pointer hover:bg-accent hover:text-accent-foreground tag-inner-shadow"
              >
                All ({LIBRARY_META.totalBooks})
              </Badge>
            </button>
            <button
              onClick={() => setFilter('reading')}
              className="transition-colors"
            >
              <Badge
                variant={filter === 'reading' ? 'default' : 'outline'}
                className="capitalize cursor-pointer hover:bg-accent hover:text-accent-foreground tag-inner-shadow"
              >
                Reading ({LIBRARY_META.totalReading})
              </Badge>
            </button>
            <button
              onClick={() => setFilter('read')}
              className="transition-colors"
            >
              <Badge
                variant={filter === 'read' ? 'default' : 'outline'}
                className="capitalize cursor-pointer hover:bg-accent hover:text-accent-foreground tag-inner-shadow"
              >
                Read ({LIBRARY_META.totalRead})
              </Badge>
            </button>
            <button
              onClick={() => setFilter('read-later')}
              className="transition-colors"
            >
              <Badge
                variant={filter === 'read-later' ? 'default' : 'outline'}
                className="capitalize cursor-pointer hover:bg-accent hover:text-accent-foreground tag-inner-shadow"
              >
                Read Later ({LIBRARY_META.totalReadLater})
              </Badge>
            </button>
          </div>
        </div>

        {/* Books Grid */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredBooks.map((book) => {
              const statusBadge = getStatusBadge(book.status);
              return (
                <div
                  key={book.id}
                  className="group relative space-y-3"
                >
                  {/* Book Cover */}
                  <div className="relative aspect-2/3 overflow-hidden rounded-lg border border-border bg-muted">
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                    {/* Status Badge */}
                    <div className="absolute top-2 left-2">
                      <Badge 
                        variant={statusBadge.variant} 
                        className={`text-xs capitalize ${statusBadge.className}`}
                      >
                        {statusBadge.label}
                      </Badge>
                    </div>
                    {/* Rating Badge */}
                    {book.rating && (
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="secondary" className="text-xs tag-inner-shadow">
                          {book.rating}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Book Info */}
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm leading-tight line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {book.author}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
