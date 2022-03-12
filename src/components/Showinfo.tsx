type Show = {
    name: string,
    age: number,
}

const ShowinfoProps = (props: Show) => {
    return <div>
        {props.name}<br/>
        {props.age}
    </div>
}
export default ShowinfoProps;