import React from 'react';
import {useSelector} from "react-redux";
import {IState} from "../store/modules/user/types";

const AboutUs: React.FC = () => {
	const state = useSelector((state: IState) => state.users)

	// useEffect(() => {
	// 	setUsers(user)
	// }, [])

	// console.log(user)

	return (
			<div>
				<h2>Alunos Matriculados:</h2>
				{state.map((user, index) => (
						<div key={index}>
							<ul>
								<li>{user.name}</li>
							</ul>
						</div>
				))}
			</div>
	)
}

export default AboutUs;
