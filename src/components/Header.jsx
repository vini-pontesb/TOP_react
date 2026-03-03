const HeaderTrue = () => {
    return(
        <>
            <h1>I'm conditionally rendered!</h1>
        </>
    )
}
const HeaderFalse = () => {
    return (
        <>
            <h1>I'm not conditionally rendered!</h1>
        </>
    )
}

export {HeaderTrue, HeaderFalse};
