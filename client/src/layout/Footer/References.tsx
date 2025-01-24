

import archive from '../../assets/archive-screenshot.png';
import ExternalLink from '../../components/ExternalLink';

export default function References(){


    return(
        <div>
             <h1 className="text-blue-500 text-2xl font-bold">
                References and Provenance
            </h1>
            <p>No commentary at this stage, but after hearing about this arbitrary removal of vital infomation I thought I would just whip up a
                simple website
            </p>
            <br />
            <h2 className="text-xl font-semibold text-blue-800">Source</h2>
            <br />
            <span className="inline text-blue-800 hover:text-blue-400 font-semibold"><ExternalLink label="Archive.is" path="https://archive.is" /></span>
            <a ></a>
            <p>Archive.is regularly takes snapshots of the internet in the aim of trying to keep a permanent record of information. reatly indebted to their work.</p>
            <br />
            <p className="text-sm text-gray-800">Screenshot taken 22nd January 2025 AEDT (Im Australian!)</p>
            <img src={archive} alt="Screenshot taken from Archive.is" className="w-1/2 h-auto" />

            <div className="w-full bg-blue-300 p-12">
                <p>Re-created by Kirabo for Borrowed Lines Media. &copy;2025</p>

            </div>
        
        </div>
    )
}