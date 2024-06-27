import 
    { 
        FormContainer,  
        MinutesAmountInput, 
        TaskInput 
} from "./styles";

export function NewCycleForm() {
    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput 
                id="task" 
                list="task-suggestions"
                type="text" 
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
                {...register('task')}
            />

            <datalist id="task-suggestions">
                <option value="Projeto 1" />
                <option value="Projeto 2" />
                <option value="Projeto 3" />
                <option value="Teste" />
            </datalist>


            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput 
                id="minutesAmount" 
                type="number" 
                placeholder="00"
                step={5}
                min={5}
                max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormContainer>
    )
}