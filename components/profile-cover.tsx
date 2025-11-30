import { OmMark } from "@/components/om-mark";
import { cn } from "@/lib/utils";
import Container from "./common/Container";

export function ProfileCover() {
  return (
    <Container className="mt-[-65px]">
      {/* <div
        className={cn(
          "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
        )}
      > */}
            <div
        className={cn(
          "border-x border-edge select-none",
          "h-28 sm:h-36 md:h-40",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
        )}
      >
        
        <OmMark
          id="js-cover-mark"
          className="h-16 w-56 ml-8"
        />
      </div>
    </Container>
  );
}
