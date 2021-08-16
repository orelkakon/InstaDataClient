import React from 'react';
import { SearchResult } from './index'

const Results = (props) => {

    const handleLinksUrl = (name, id) => {
        if (props.kind === "users")
            window.open(`https://www.instagram.com/${name}/`)
        else if (props.kind === "locations")
            window.open(`https://www.instagram.com/explore/locations/${id}/${name}/`)
        else if (props.kind === "hashtags")
            window.open(`https://www.instagram.com/explore/tags/${name}/`)
    }
    return (
        <div>
            {
                props.results.names.length !== 0 &&
                <h3 style={{ color: "white" }}> Results of search - {sessionStorage.getItem('inputSearch')}</h3>
            }
            {
                props.results.names.map((result, index) => {
                    return (<SearchResult key={index} onClick={() => handleLinksUrl(result, props.results.ids[index])}>{result} {props.results.privates && props.results.privates[index] && '🔒'}</SearchResult>)
                })
            }
        </div>
    );
};

export default Results;