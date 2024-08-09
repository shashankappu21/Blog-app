export default function SkeletonBlogCard() {
    return (
      <div className="border-b pb-4 border-slate-200 p-4 max-w-xl w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded w-1/2"></div> {/* Increased width */}
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded w-full"></div>
            </div>
          </div>
        </div>
        <div className="h-2 bg-slate-200 rounded mt-3 w-1/4"></div> {/* Increased width */}
      </div>
    );
  }
  
  