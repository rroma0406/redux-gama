import React, {useState, useEffect, useCallback} from 'react';
import {IState, IUser} from "../store/modules/user/types";
import {useDispatch, useSelector} from "react-redux";
import api from "../service/api";
import {addNewUser} from "../store/modules/user/actions";

const Home: React.FC = () => {

	const dispatch = useDispatch()
	const [users, setUsers] = useState<IUser[]>([])

	useEffect(() => {
		api.get('students')
				.then(response => {
					setUsers(response.data)
				})
	}, [])

	const handleAddUsers = useCallback((user: IUser) => {
		dispatch(addNewUser(user))
	}, [dispatch])

	return (
			<div>
				<h1>Hello!</h1>
				{users.map(user => (
						<div key={user.id}>
							<article>
								<p>{user.name} {user.email} {user.age}</p>
								<button onClick={() => handleAddUsers(user)}>Adicionar</button>
							</article>
						</div>
				))}
			</div>
	)
}

export default Home;
