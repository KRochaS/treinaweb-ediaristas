import { SafeEnvironmentContainer } from './SafeEnvironment.style';
import { Container } from '@material-ui/core';

export function SafeEnvironment() {
    return (
        <SafeEnvironmentContainer>
            <Container>
                Ambiente Seguro
            </Container>
        </SafeEnvironmentContainer>
    )
}