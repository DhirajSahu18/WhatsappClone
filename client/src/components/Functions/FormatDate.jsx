const FormatDate = (props) => {

    const hours = new Date(props.createdAt).getHours();
    const minutes = new Date(props.createdAt).getMinutes();
    return (`${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes}`)
}

export default FormatDate