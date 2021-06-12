import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SafeEnvironment } from '../components/feedback/SafeEnvironment/SafeEnvironment';


export default function Home() {
	return (
		<SafeEnvironment />
	)
}
