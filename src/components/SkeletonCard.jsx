const SkeletonCard = () => {
  return (
    <div className="card bg-base-200 w-96 shadow-xl animate-pulse">

      {/* Image Skeleton */}
      <div className="skeleton h-80 w-full rounded-t-xl"></div>

      <div className="card-body">

        {/* Name */}
        <div className="skeleton h-8 w-48"></div>

        {/* Age & Gender */}
        <div className="skeleton h-5 w-24 mt-2"></div>

        {/* About */}
        <div className="space-y-2 mt-4">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
          <div className="skeleton h-4 w-3/4"></div>
        </div>

        {/* Skills */}
        <div className="flex gap-2 mt-5">
          <div className="skeleton h-8 w-20 rounded-full"></div>
          <div className="skeleton h-8 w-24 rounded-full"></div>
          <div className="skeleton h-8 w-20 rounded-full"></div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <div className="skeleton h-10 w-28 rounded-lg"></div>
          <div className="skeleton h-10 w-28 rounded-lg"></div>
        </div>

      </div>
    </div>
  );
};

export default SkeletonCard;