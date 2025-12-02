import { heroConfig, skillComponents } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';
import { USER } from '@/types/user';
import { FlipSentences } from '@/components/flip-sentences/index';
import { VerifiedIcon } from '@/components/verified-icon';
import { SOCIAL_LINKS } from '@/types/social-links';

import Container from '../common/Container';
import Skill from '../common/Skill';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { SocialLinkItem } from '../social-links/social-link-item';

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { skills, description, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <b key={part.key} className="whitespace-pre-wrap text-primary">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Container className="mx-auto max-w-5xl">
      <div className="relative flex flex-row before:absolute before:top-0 before:left-0 before:-z-1 before:h-px before:w-full before:bg-border after:absolute after:bottom-0 after:left-0 after:-z-1 after:h-px after:w-full after:bg-border border-x border-edge">
        {/* Image with flag overlay */}
        <div className="shrink-0 border-r border-edge">
          <div className="mx-auto my-4 sm:mx-0.5 sm:my-[3px]">
            <Image
              src={USER.avatar}
              alt={`${USER.displayName}'s avatar`}
              width={100}
              height={100}
              className="size-24 sm:size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="flex flex-1 flex-col">
          <div className="flex grow items-end pb-1">
            <div className="hidden sm:block line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
              {/* {"text-3xl "}
              <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span>
              {" font-medium"} */}
            </div>
          </div>

          <div className="border-t border-edge">
            <h1 className="flex items-center text-2xl sm:text-3xl font-semibold pl-4">
              {USER.displayName}
              &nbsp;
              <VerifiedIcon
                className="size-[0.6em] translate-y-px text-info select-none"
                aria-label="Verified"
              />
            </h1>

            <div className="h-auto border-t border-edge py-1">
              <FlipSentences className="font-mono text-sm text-balance text-muted-foreground pl-4">
                {USER.flipSentences}
              </FlipSentences>
            </div>
          </div>
        </div>
      </div>

      {/* Original Text Area */}
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm sm:text-base md:text-lg text-neutral-500 whitespace-pre-wrap">
          {renderDescription()}
        </div>
      </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          {buttons.map((button, index) => {
            const IconComponent =
          buttonIcons[button.icon as keyof typeof buttonIcons];
            const linkProps =
          index === 0 ? { target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
          <Button
            key={index}
            variant={button.variant as 'outline' | 'default'}
            className={cn(
              button.variant === 'outline' &&
            'inset-shadow-indigo-500',
              button.variant === 'default' &&
            'inset-shadow-indigo-500',
            )}
          >
            {IconComponent && <IconComponent />}
            <Link href={button.href} {...linkProps}>
              <span className="block sm:hidden">
            {button.text === 'Resume / CV' ? 'Resume' : 'Contact'}
              </span>
              <span className="hidden sm:block">{button.text}</span>
            </Link>
          </Button>
            );
          })}
        </div>

      {/* Social Links (aligned to flex-start) */}
      <div className="mt-8 flex flex-wrap items-start justify-start gap-2 md:gap-4">
        {SOCIAL_LINKS.map((link, index) => (
          <div key={index} className="w-auto">
        <SocialLinkItem {...link} />
          </div>
        ))}
      </div>
    </Container>
  );
}
