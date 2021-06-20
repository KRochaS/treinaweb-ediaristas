import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'services/ValidationService';
import { ApiService } from 'services/ApiService';



export function useIndex() {
    const [CEP, setCEP] = useState(''),
        validCEP = useMemo(() => {
            return ValidationService.cep(CEP);
        }, [CEP]),
        [error, setError] = useState(''),
        [searchDone, setSearchDone] = useState(false),
        [loading, setLoading] = useState(false),
        [housekeepers, setHousekeepers] = useState([] as UserShortInterface[]),
        [remainingHousekeeper, setRemainingHousekeeper] = useState(0);


    async function profissionalsSearch(cep: string) {
        setSearchDone(false);
        setLoading(true);
        setError('');

        try {

            const { data } = await ApiService.get<{
                diaristas: UserShortInterface[],
                quantidade_diaristas: number;

            }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`)

            setHousekeepers(data.diaristas);
            setRemainingHousekeeper(data.quantidade_diaristas);
            setSearchDone(true);
            setLoading(false);

        } catch (error) {
            setError('CEP não encontrado');
            setLoading(false);
        }




    }

    return {
        CEP, setCEP, validCEP, profissionalsSearch,
        error, housekeepers, searchDone, loading, remainingHousekeeper
    }
}

