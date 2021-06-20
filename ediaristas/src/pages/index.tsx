import { PageTitle } from '../components/data-display/PageTitle/PageTitle';
import { SafeEnvironment } from '../components/feedback/SafeEnvironment/SafeEnvironment';
import { UserInformation } from '../components/UserInformation/UserInformation';
import { TextFieldMask } from '../components/Inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container, CircularProgress } from "@material-ui/core";
import { FormElementContainer, ProfissionaisPaper, ProfissionaisContainer } from 'styles/pages/index.style';
import { useIndex } from 'hooks/pages/useIndex.page';


export default function Home() {
    const { CEP,
        setCEP,
        validCEP,
        profissionalsSearch,
        error,
        housekeepers,
        searchDone,
        loading,
        remainingHousekeeper
    } = useIndex();

    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={'Preencha seu endereço e veja  todos os profissionais da sua localidade'}

            />

            <Container>

                <FormElementContainer>
                    <TextFieldMask
                        mask={'99.999-999'}
                        label="Digite seu CEP"
                        fullWidth
                        variant="outlined"
                        value={CEP}
                        onChange={(event) => { setCEP(event.target.value) }}

                    />

                    {error &&
                        <Typography color="error">
                            {error}
                        </Typography>
                    }

                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ width: '220px' }}
                        disabled={!validCEP || loading}
                        onClick={() => profissionalsSearch(CEP)}
                    >
                        {loading ? <CircularProgress size="20" /> : 'Buscar'}
                    </Button>
                </FormElementContainer>


                {
                    searchDone && (

                        housekeepers.length > 0 ?
                            <ProfissionaisPaper>
                                <ProfissionaisContainer>
                                    {
                                        housekeepers.map((housekeeper, index) => {
                                            return (
                                                <UserInformation
                                                    key={index}
                                                    name={housekeeper.nome_completo}
                                                    picture={housekeeper.foto_usuario}
                                                    rating={housekeeper.reputacao}
                                                    description={housekeeper.cidade}
                                                />
                                            )
                                        })
                                    }
                                </ProfissionaisContainer>

                                <Container sx={{ textAlign: 'center' }}>

                                    {remainingHousekeeper > 0 && (
                                        <Typography sx={{ mt: 5 }}>
                                            ... e mais {remainingHousekeeper} {remainingHousekeeper > 1 ? 'profissionais atendem' : 'profissional atende'}  ao seu
                                            endereço.
                                        </Typography>
                                    )}

                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{ mt: 5 }}
                                    >
                                        Contratar um profissional
                                    </Button>
                                </Container>
                            </ProfissionaisPaper>
                            :
                            (
                                <Typography align="center" color="textPrimary">
                                    Ainda não temos nenhuma diarista disponível
                                    na sua região.
                                </Typography>
                            )


                    )




                }



            </Container>



        </div>
    )
}
