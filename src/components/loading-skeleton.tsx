import { cn } from "@/lib/utils";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted",
        className
      )}
      {...props}
    />
  );
}

export function ProjectSkeleton() {
  return (
    <div className="space-y-28">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row justify-center gap-10"
        >
          <section className="lg:w-1/2">
            <Skeleton className="h-[300px] w-full rounded-3xl" />
          </section>

          <section className="flex gap-4 pt-3 lg:w-1/2">
            <div className="space-y-4 lg:space-y-8 w-full">
              <div className="space-y-4">
                <Skeleton className="h-8 w-2/3" />
                <Skeleton className="h-24 w-full" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-6 w-1/4" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-8 w-20" />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <Skeleton className="h-6 w-1/4" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-8 w-24" />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export function TechStackSkeleton() {
  return (
    <div className="py-6">
      <div className="flex gap-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="text-center">
            <Skeleton className="w-20 h-20 rounded-2xl" />
            <Skeleton className="w-16 h-4 mt-2 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
