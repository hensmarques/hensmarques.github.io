import React from "react"

const Panel = ({ children, title, side }) => (
    <div className={ `panel ${( title && title !== '' ?'with-title':'' )} ${side}` }>
        <h2 className="panel-title">{ title }</h2>
        <div className="panel-content">
            { children }
        </div>
    </div>
)

export default Panel
