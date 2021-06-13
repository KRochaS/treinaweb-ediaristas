import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SafeEnvironment } from '../components/feedback/SafeEnvironment/SafeEnvironment';
import { PageTitle } from '../components/data-display/PageTitle/PageTitle';

export default function Home() {
    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={'Preencha seu endereço e veja  todos os profissionais da sua localidade'}

            />
        </div>
    )
}
