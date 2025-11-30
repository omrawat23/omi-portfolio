'use client';

import { githubConfig } from '@/config/Github';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import dayjs from 'dayjs';

import Container from '../common/Container';
import GithubIcon from '../svgs/Github';
import { Button } from '../ui/button';

import type { Activity } from '@/components/contribution-graph';
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from '@/components/contribution-graph';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | 'NONE'
    | 'FIRST_QUARTILE'
    | 'SECOND_QUARTILE'
    | 'THIRD_QUARTILE'
    | 'FOURTH_QUARTILE';
};

// Helper function to filter contributions to past year
function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return contributions.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= oneYearAgo;
  });
}

export default function Github() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Restore the original-ish defaults so the UX matches prior dimensions
  const [blockSize, setBlockSize] = useState<number>(12); // was 7
  const blockMargin = 4; // was 3

  // Helper to compute number of week-columns from contributions
  function getWeekStartKey(dateStr: string) {
    const d = new Date(dateStr);
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`,
        );
        const data: { contributions?: unknown[] } = await response.json();

        if (data?.contributions && Array.isArray(data.contributions)) {
          // Flatten the nested array structure
          const flattenedContributions = data.contributions.flat();

          // Convert contribution levels to numbers
          const contributionLevelMap = {
            NONE: 0,
            FIRST_QUARTILE: 1,
            SECOND_QUARTILE: 2,
            THIRD_QUARTILE: 3,
            FOURTH_QUARTILE: 4,
          };

          // Transform to the expected format
          const validContributions = flattenedContributions
            .filter(
              (item: unknown): item is GitHubContributionResponse =>
                typeof item === 'object' &&
                item !== null &&
                'date' in item &&
                'contributionCount' in item &&
                'contributionLevel' in item,
            )
            .map((item: GitHubContributionResponse) => ({
              date: String(item.date),
              count: Number(item.contributionCount || 0),
              level: (contributionLevelMap[
                item.contributionLevel as keyof typeof contributionLevelMap
              ] || 0) as ContributionItem['level'],
            }));

          if (validContributions.length > 0) {
            // Calculate total contributions
            const total = validContributions.reduce(
              (sum, item) => sum + item.count,
              0,
            );
            setTotalContributions(total);

            // Filter to show only the past year
            const filteredContributions = filterLastYear(validContributions);
            setContributions(filteredContributions);
          } else {
            setHasError(true);
          }
        } else {
          setHasError(true);
        }
      } catch (err) {
        console.error('Failed to fetch GitHub contributions:', err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  useLayoutEffect(() => {
    // calculate number of columns (weeks)
    const columns =
      contributions && contributions.length > 0
        ? Math.max(
            1,
            new Set(contributions.map((c) => getWeekStartKey(c.date))).size,
          )
        : 53; // fallback to typical 53 weeks for a year

    function calculate() {
      const containerWidth = wrapperRef.current?.clientWidth ?? 0;
      if (!containerWidth || columns <= 0) return;

      const padding = 24; // account for container padding/margins
      const available = Math.max(0, containerWidth - padding);
      // Solve for blockSize: columns * blockSize + (columns - 1) * blockMargin <= available
      let newBlockSize = Math.floor(
        (available - (columns - 1) * blockMargin) / columns,
      );

      // Tighten min/max so visual size stays similar to original calendar
      const minSize = 8;  // slightly larger minimum
      const maxSize = 14; // keep reasonable maximum
      if (newBlockSize > maxSize) newBlockSize = maxSize;
      if (newBlockSize < minSize) newBlockSize = minSize;

      setBlockSize(newBlockSize);
    }

    calculate();
    const ro = new ResizeObserver(calculate);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [contributions]);

  // Define contribution color variables (exact GitHub colors, theme-aware).
  // These are applied inline so the ContributionGraph uses the same colors.
  const THEME_COLORS = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };
  const colors = theme === 'dark' ? THEME_COLORS.dark : THEME_COLORS.light;
  const contribColorVars = {
    '--contrib-0': colors[0],
    '--contrib-1': colors[1],
    '--contrib-2': colors[2],
    '--contrib-3': colors[3],
    '--contrib-4': colors[4],
  } as React.CSSProperties;

  return (
    <Container className="mt-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {githubConfig.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              <b>{githubConfig.username}</b>&apos;s {githubConfig.subtitle}
            </p>
            {!isLoading && !hasError && totalContributions > 0 && (
              <p className="text-sm text-primary font-medium mt-1">
                Total:{' '}
                <span className="font-black">
                  {totalContributions.toLocaleString()}
                </span>{' '}
                contributions
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">
                {githubConfig.loadingState.description}
              </p>
            </div>
          </div>
        ) : hasError || contributions.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <GithubIcon className="w-8 h-8" />
            </div>
            <p className="font-medium mb-2">{githubConfig.errorState.title}</p>
            <p className="text-sm mb-4">
              {githubConfig.errorState.description}
            </p>
            <Button variant="outline" asChild>
              <Link
                href={`https://github.com/${githubConfig.username}`}
                className="inline-flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                {githubConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div
              className="relative bg-background/50 backdrop-blur-sm rounded-lg border border-dashed dark:border-white/10 border-black/20 p-3"
              // apply color vars to this container; ContributionGraph's CSS should consume them
              style={contribColorVars}
            >
              {/* Responsive wrapper used for ResizeObserver */}
              <div ref={wrapperRef} className="w-full max-w-full">
                {/* Use the project's ContributionGraph layout for improved UX (tooltips, footer, legend) */}
                <ContributionGraph
                  className="mx-auto py-2 w-full"
                  data={contributions as unknown as Activity[]}
                  blockSize={blockSize}
                  blockMargin={blockMargin}
                  blockRadius={2}
                  colors={colors}
                >
                  <ContributionGraphCalendar
                    className="no-scrollbar px-2"
                    title="GitHub Contributions"
                  >
                    {({ activity, dayIndex, weekIndex }) => (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <g>
                            <ContributionGraphBlock
                              activity={activity}
                              dayIndex={dayIndex}
                              weekIndex={weekIndex}
                            />
                          </g>
                        </TooltipTrigger>

                        <TooltipContent className="font-sans" sideOffset={0}>
                          <p className="whitespace-nowrap">
                            {activity.count} contribution
                            {activity.count !== 1 ? 's' : ''} on{' '}
                            {dayjs(activity.date).format('DD.MM.YYYY')}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </ContributionGraphCalendar>

                  <ContributionGraphFooter className="px-2">
                    <ContributionGraphTotalCount>
                      {({ totalCount, year }) => (
                        <div className="text-muted-foreground">
                          {totalCount.toLocaleString()} contributions in {year}{' '}
                          on{' '}
                          <a
                            className="font-medium underline underline-offset-4"
                            href={`https://github.com/${githubConfig.username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                          .
                        </div>
                      )}
                    </ContributionGraphTotalCount>

                    <ContributionGraphLegend />
                  </ContributionGraphFooter>
                </ContributionGraph>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}