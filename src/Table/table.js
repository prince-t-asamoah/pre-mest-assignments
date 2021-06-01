
function Table(props) {

    return (
        <table border="3">
            <thead>
                <th>Username</th>
                <th>Fullname</th>
                <th>Email</th>
            </thead>

            <tbody>
                {
                    props.data.map((data, key) => <tr key={key}>
                        <td>{data.username}</td>
                        <td>{data.fullname}</td>
                        <td>{data.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Table;