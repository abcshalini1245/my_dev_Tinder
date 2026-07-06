import { FaCheckCircle } from "react-icons/fa";

const ProfileCompletion = ({ user }) => {
  const fields = [
    { label: "Photo", completed: !!user.photourl },
    { label: "About", completed: !!user.about },
    { label: "Skills", completed: user.skills?.length > 0 },
    { label: "Education", completed: !!user.education },
    { label: "Company", completed: !!user.company },
    { label: "Location", completed: !!user.location },
    { label: "GitHub", completed: !!user.github },
    { label: "LinkedIn", completed: !!user.linkedin },
    { label: "Portfolio", completed: !!user.portfolio },
  ];

  const completed = fields.filter(f => f.completed).length;

  const percentage = Math.round(
    (completed / fields.length) * 100
  );

  const missing = fields.filter(f => !f.completed);

  return (
    <div className="card bg-base-200 shadow-xl">

      <div className="card-body">

        <div className="flex justify-between items-center">

          <h2 className="font-bold text-lg">
            🚀 Profile Completion
          </h2>

          <span className="badge badge-primary">
            {percentage}%
          </span>

        </div>

        <progress
          className="progress progress-primary mt-2"
          value={percentage}
          max="100"
        />

        {missing.length > 0 && (
          <>
            <p className="mt-3 font-semibold">
              Missing:
            </p>

            <div className="space-y-2">

              {missing.slice(0, 3).map(item => (
                <div
                  key={item.label}
                  className="flex items-center gap-2"
                >
                  <FaCheckCircle className="text-error" />

                  <span>Add {item.label}</span>

                </div>
              ))}

            </div>
          </>
        )}

      </div>

    </div>
  );
};

export default ProfileCompletion;