import React from 'react'
import Card from './Card'
import Skeleton from './Skeleton'

const TestimonialSkeleton: React.FC = () => {
  return (
    <Card padding="lg" className="border-2 border-text-primary/5">
      <div className="space-y-5">
        {/* Rating stars skeleton */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} variant="circular" width="20px" height="20px" />
          ))}
        </div>

        {/* Quote text skeleton */}
        <div className="space-y-3">
          <Skeleton variant="text" height="1rem" />
          <Skeleton variant="text" height="1rem" width="95%" />
          <Skeleton variant="text" height="1rem" width="90%" />
        </div>

        {/* Author info skeleton */}
        <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-border-light">
          <Skeleton variant="circular" width="48px" height="48px" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" height="1rem" width="60%" />
            <Skeleton variant="text" height="0.875rem" width="50%" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialSkeleton

