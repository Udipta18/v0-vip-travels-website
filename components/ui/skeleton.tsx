import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Width of skeleton - can be Tailwind class or custom value */
    width?: string
    /** Height of skeleton - can be Tailwind class or custom value */
    height?: string
    /** Make skeleton circular */
    circle?: boolean
}

/**
 * Skeleton component for loading states with shimmer animation.
 * 
 * @example
 * // Basic usage
 * <Skeleton className="h-4 w-[200px]" />
 * 
 * // Circle avatar placeholder
 * <Skeleton circle className="w-12 h-12" />
 * 
 * // Card skeleton
 * <Skeleton className="h-[200px] w-full rounded-xl" />
 */
export function Skeleton({
    className,
    circle = false,
    ...props
}: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-shimmer",
                circle ? "rounded-full" : "rounded-md",
                className
            )}
            {...props}
        />
    )
}

/**
 * Pre-built skeleton for a Tour Card
 */
export function TourCardSkeleton() {
    return (
        <div className="bg-card rounded-2xl border shadow-lg overflow-hidden">
            {/* Image placeholder */}
            <div className="p-3">
                <Skeleton className="aspect-[4/3] rounded-xl" />
            </div>

            {/* Content */}
            <div className="p-6 pt-2 space-y-3">
                {/* Category */}
                <Skeleton className="h-3 w-20" />

                {/* Title */}
                <Skeleton className="h-6 w-3/4" />

                {/* Dates */}
                <div className="pt-4 border-t border-border/50 flex gap-2">
                    <Skeleton className="h-6 w-24 rounded-md" />
                    <Skeleton className="h-6 w-24 rounded-md" />
                </div>
            </div>
        </div>
    )
}

/**
 * Pre-built skeleton for text content
 */
export function TextSkeleton({ lines = 3 }: { lines?: number }) {
    return (
        <div className="space-y-2">
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    className={cn(
                        "h-4",
                        i === lines - 1 ? "w-2/3" : "w-full" // Last line is shorter
                    )}
                />
            ))}
        </div>
    )
}

/**
 * Pre-built skeleton for an image with text
 */
export function ImageWithTextSkeleton() {
    return (
        <div className="flex gap-4">
            <Skeleton className="w-16 h-16 rounded-lg flex-shrink-0" />
            <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
            </div>
        </div>
    )
}

/**
 * Pre-built skeleton for the Hero search results
 */
export function SearchResultSkeleton() {
    return (
        <div className="py-2 px-6 space-y-3">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                    <Skeleton className="w-12 h-12 rounded-lg flex-shrink-0" />
                    <div className="flex-1 space-y-1.5">
                        <Skeleton className="h-4 w-48" />
                        <Skeleton className="h-3 w-32" />
                    </div>
                </div>
            ))}
        </div>
    )
}
