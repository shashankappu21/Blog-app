function BlogSkeleton() {
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl pt-5">
          {/* Main Content Skeleton */}
          <div className="col-span-8">
            <div className="font-extrabold text-5xl text-center animate-pulse">
              <div className="h-12 bg-slate-200 rounded w-3/4 mx-auto"></div>
            </div>
            <div className="pt-10 text-xl animate-pulse space-y-4">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              <div className="h-4 bg-slate-200 rounded w-4/6"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
            </div>
          </div>
  
          {/* Author Info Skeleton */}
          <div className="ml-20 col-span-4 pt-7 text-lg text-center font-semibold animate-pulse">
            <div className="text-slate-500 text-md">
              <div className="h-4 bg-slate-200 rounded w-1/3 mx-auto"></div>
            </div>
            <div className="flex justify-center pt-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="pl-1 flex-1">
                <div className="h-4 bg-slate-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BlogSkeleton;
  