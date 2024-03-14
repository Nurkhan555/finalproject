import styles from "./styles.module.css"

export const Table = () => {
    return (
        <table className={styles.table}>
            <thead className={styles.head}>
                <tr>
                    <th>Name</th>
                    <th>Cards</th>
                    <th>Last Updated</th>
                    <th>Created by</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className={styles.body}>
                <tr>
                    <td>Pack Name</td>
                    <td>4</td>
                    <td>18.03.2021</td>
                    <td>Ivan Ivanov</td>
                    <td>
                     <button>Delete</button>
                     <button>Edit</button>
                     <button>Learn</button>
                   </td>
            </tr>
            <tr>
                <td>Name Pack</td>
                <td>37</td>
                <td>19.03.2021</td>
                <td>Petr Petrov</td>
                <td>
                    <button>Learn</button>
                </td>
            </tr>

                <tr>
                    <td>Name Pack</td>
                    <td>37</td>
                    <td>19.03.2021</td>
                    <td>Petr Petrov</td>
                    <td>
                        <button>Learn</button>
                    </td>
                </tr>
                <tr>
                    <td>Pack Name</td>
                    <td>37</td>
                    <td>19.03.2021</td>
                    <td>Petr Petrov</td>
                    <td>
                        <button>Learn</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

