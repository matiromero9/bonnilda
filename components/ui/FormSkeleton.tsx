import React from 'react'
import Card from './Card'
import Skeleton from './Skeleton'

const FormSkeleton: React.FC = () => {
  return (
    <Card padding="lg">
      <div className="space-y-6">
        {/* Field 1 */}
        <div>
          <Skeleton variant="text" height="1rem" width="120px" className="mb-2" />
          <Skeleton variant="rounded" height="48px" />
        </div>

        {/* Field 2 */}
        <div>
          <Skeleton variant="text" height="1rem" width="100px" className="mb-2" />
          <Skeleton variant="rounded" height="48px" />
        </div>

        {/* Field 3 */}
        <div>
          <Skeleton variant="text" height="1rem" width="140px" className="mb-2" />
          <Skeleton variant="rounded" height="48px" />
        </div>

        {/* Field 4 - Textarea */}
        <div>
          <Skeleton variant="text" height="1rem" width="80px" className="mb-2" />
          <Skeleton variant="rounded" height="120px" />
        </div>

        {/* Button */}
        <Skeleton variant="rounded" height="56px" />

        {/* Footer text */}
        <Skeleton variant="text" height="0.875rem" width="80%" className="mx-auto" />
      </div>
    </Card>
  )
}

export default FormSkeleton

