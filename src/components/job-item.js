import React from "react"

const JobItem = ({ job }) => (
    <div className="job flex items-start mb-8 flex-wrap">
        <div className="w-full lg:w-1/6">
            { job.period && 
                <h3 className="with-background whitespace-no-wrap float-left lg:mb-0 mb-4 lg:float-right">{ job.period }</h3>
            }
        </div>
        <div className="flex-1 lg:ml-4 mr-16">
            <h3 className="mb-2">{ job.company }</h3>
            <p dangerouslySetInnerHTML={ { __html : job.text } }></p>
        </div>
    </div>
)

export default JobItem
