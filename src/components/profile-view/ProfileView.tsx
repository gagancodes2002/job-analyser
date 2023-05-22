const ProfileInfo = (props: any) => {
  return (
    <div className="max-w-md bg-gray-700 text-white flex flex-col item-start p-4 space-y-4 rounded-md">
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold mb-3">Availability</h1>
        <span className="rounded-md px-2 py-1 bg-green-300 text-sm text-white w-fit">
          Available for work
        </span>
      </div>
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold mb-3">Connect & Amount</h1>
        <span className="rounded-md px-1 py-0.5 text-sm text-green-600 w-fit">
          18 Available Connects
        </span>
        <span className="rounded-md px-1 py-0.5 text-sm text-green-600 w-fit">
          2 Submitted Proposal
        </span>
      </div>
      <div className="skills-n-expertise">
        <h1 className="py-2 font-bold mb-3">Skills and Expertise</h1>
        <div className="flex flex-wrap gap-2 max-sm:flex-wrap float-left">
          <div className="tag rounded-md p-1 !bg-slate-400 text-xs text-gray-800 font-bold">
            UI Designer
          </div>
          <div className="tag rounded-md p-1 !bg-slate-400 text-xs text-gray-800 font-bold">
            UI Designer
          </div>
          <div className="tag rounded-md p-1 !bg-slate-400 text-xs text-gray-800 font-bold">
            UI Designer
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="max-w-sm bg-green-300 py-2 !px-8 rounded-md text-sm">
          View Profile
        </button>
      </div>
    </div>
  );
};
export default ProfileInfo;
