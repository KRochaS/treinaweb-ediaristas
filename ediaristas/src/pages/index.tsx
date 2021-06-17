import { PageTitle } from '../components/data-display/PageTitle/PageTitle';
import { SafeEnvironment } from '../components/feedback/SafeEnvironment/SafeEnvironment';
import { UserInformation } from '../components/UserInformation/UserInformation';


export default function Home() {
    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={'Preencha seu endereço e veja  todos os profissionais da sua localidade'}

            />

            <UserInformation 
                name="Karine" 
                picture="https://avatars.githubusercontent.com/u/27026831?v=4"
                rating={3}
                description="Porto Alegre"

                
                />
        </div>
    )
}
