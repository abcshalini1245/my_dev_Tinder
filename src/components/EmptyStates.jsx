import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">

      <div className="text-7xl mb-6">
        🎉
      </div>

      <h1 className="text-3xl font-bold mb-3">
        You're all caught up!
      </h1>

      <p className="text-center text-base-content/70 max-w-md mb-8">
        No more developers match your current preferences.
        Check back later or try changing your filters.
      </p>

      <Link to="/profile">
        <button className="btn btn-primary">
          Update My Profile
        </button>
      </Link>

    </div>
  );
};

export default EmptyState;