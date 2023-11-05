

const Scroll = (props) => {
    return (
        // u can use {{}} to style. {} is a js expression & adding the second indside means u are returning 
        // an object. then th obj can have a css style
        /*u must camelCase for jsx  */
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;