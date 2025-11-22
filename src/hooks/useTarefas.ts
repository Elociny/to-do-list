import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "../api/api"
import type { ITarefa } from "../types/ITarefa"


export const useTarefas = () => {
    const queryClient = useQueryClient() 

    const query = useQuery({
        queryKey: ['tarefas'],
        queryFn: async () => {
            const response = await api.get<ITarefa[]>('/tarefas')
            return response.data
        },
        retry: 1
    })

    const createMutation = useMutation({
        mutationFn: async (novaTarefa: ITarefa) => { 
            const response = await api.post('/tarefas', novaTarefa)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tarefas'] })
        },
    })

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            await api.delete(`/tarefas/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tarefas'] })
        }
    })

    const updateMutation = useMutation({
        mutationFn: async (tarefaEditar: ITarefa) => {
            const response = await api.put(`/tarefas/${tarefaEditar.id}`, tarefaEditar)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tarefas'] })
        }
    })

    return {
        tarefas: query.data,
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
        
        criarTarefa: createMutation.mutate,
        excluirTarefa: deleteMutation.mutate,
        alterarTarefa: updateMutation.mutate
    };
}