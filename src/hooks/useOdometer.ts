import { useEffect, useState } from 'react';
import { Project, CustomerStatisfaction, CompanyEstablished } from '../data';

const useOdometer = () => {
	const [project, setProject] = useState(0);
	const [customerStatisfaction, setCustomerStatisfaction] = useState(0);
	const [companyEstablished, setCompanyEstablished] = useState(0);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setProject(Project);
			setCustomerStatisfaction(CustomerStatisfaction);
			setCompanyEstablished(CompanyEstablished);
		}, 700);

		return () => {
			clearTimeout(timeOut);
		};
	}, []);

	return { project, customerStatisfaction, companyEstablished };
};

export default useOdometer;
