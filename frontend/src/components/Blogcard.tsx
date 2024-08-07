interface BlogcardProps{
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}
export default function Blogcard({
    authorName,
    title,
    content,
    publishedDate
}: BlogcardProps){
    return (
        <div className="border-b pb-4 border-slate-200 p-4 ">
            <div className="flex">
                <div className="flex justify-center flex-col"><Avatar name={authorName} size="small"/></div>
                <div className="font-extralight pl-2">{authorName}</div>
                <div className="flex justify-center flex-col">
                    <Circle />
                </div>
                <div className="pl-1 font-thin text-slate-400">{publishedDate}</div>
            </div>
            <div className="text-xl font-bold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.length > 100?content.slice(0,100)+"...":content}
            </div>
            <div className="text-slate-400 text-sm font-thin">
                {`${Math.ceil(content.length/100)} min(s) read`}
            </div>
            {/* <div className="bg-slate-200 h-1 w-full"></div> */}
        </div>
    );
}

function Circle(){
    return (
        <div className="h-1 w-1 rounded-full bg-slate-400 ml-1"></div>
    );
}

export function Avatar({name, size = "small"} : {name: string, size: "small"|"big"}){
    return (
        <div className={`relative inline-flex items-center justify-center ${size==="small"?"w-6 h-6":"w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`text-${size==="small"?"xs":"md"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>
    );
}