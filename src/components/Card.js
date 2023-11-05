// import React from 'react';

const card = (props) => {
    return (
        // bg-background,br-border,pa-padding,ma-margin,grow-animation
        <div className="tc bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5 ">
            {/* not that after the ? the 200x200 is the size for the robot */}
            {/* ``always wrap a template string which means it si a javascript expression */}
            <img alt='robot' src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                {/* always wrap javascript expression in a {} */}
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            </div>
        </div>
    )
}

export default card;