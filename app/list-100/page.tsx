"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import { LIST_100_ITEMS, LIST_100_META } from "@/config/List100";
import { Separator } from "@/components/ui/separator";

export default function List100Page() {
  const [items] = useState(LIST_100_ITEMS);
  const completedCount = items.filter(item => item.completed).length;
  const progressPercentage = Math.round((completedCount / LIST_100_META.totalItems) * 100);

  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {LIST_100_META.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {LIST_100_META.subtitle}
          </p>
          {/* <p className="text-sm text-muted-foreground">
            Created on: {LIST_100_META.createdDate}
          </p> */}
        </div>

        <Separator />

        {/* Progress Bar */}
        <div className="mx-auto max-w-4xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">
              Completed {completedCount} of {LIST_100_META.totalItems} ({progressPercentage}%)
            </span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-foreground transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Grid of Items */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className={`
                  relative rounded-lg border border-border p-4 transition-all duration-200
                  ${item.completed 
                    ? 'bg-muted/50 border-foreground/20' 
                    : 'bg-background hover:bg-accent/50'
                  }
                `}
              >
                <div className="flex items-start gap-3">
                  {/* Checkbox */}
                  <div className={`
                    mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${item.completed 
                      ? 'bg-foreground border-foreground' 
                      : 'border-border bg-background'
                    }
                  `}>
                    {item.completed && (
                      <svg
                        className="w-3 h-3 text-background"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>

                  {/* Item Text */}
                  <p className={`
                    text-sm leading-relaxed
                    ${item.completed 
                      ? 'text-muted-foreground line-through' 
                      : 'text-foreground'
                    }
                  `}>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
