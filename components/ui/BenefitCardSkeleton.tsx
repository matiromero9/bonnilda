import React from 'react'
import Card from './Card'
import Skeleton from './Skeleton'

const BenefitCardSkeleton: React.FC = () => {
  return (
    <Card padding="md">
      <div className="space-y-4">
        {/* Icon skeleton */}
        <Skeleton variant="circular" width="32px" height="32px" />

        {/* Title skeleton */}
        <div className="space-y-2">
          <Skeleton variant="text" height="1.25rem" width="80%" />
          <Skeleton variant="text" height="1.5rem" width="40%" />
        </div>

        {/* Description skeleton */}
        <div className="space-y-2">
          <Skeleton variant="text" height="0.875rem" />
          <Skeleton variant="text" height="0.875rem" width="90%" />
        </div>
      </div>
    </Card>
  )
}

export default BenefitCardSkeleton

