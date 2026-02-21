import InputCalendar from "../components/input-calendar";
import Text from "../components/text";
import TimeSelect from "../components/time-select";

export default function FormScheduling() {
  return (
    <aside className="p-20 bg-gray-700 rounded-xl max-w-124.5 h-full w-full flex flex-col gap-6">
        <div className="space-y-1 w-full">
            <Text as="h2" variant="text-h2-bold" className="text-white">Agende um atendimento</Text>
            <Text as="span" variant="text-md-regular">Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
        </div>

        <form className="flex flex-col gap-4 bg-gray-700 h-full rounded-lg">
            <div className="space-y-4">
                <Text as="label" htmlFor="calendar" variant="text-md-bold" >Data</Text>
                <InputCalendar id="calendar" className="mt-2" size="sm" />
            </div>
            <div className="mt-8">
                <Text as="label" htmlFor="time" variant="text-md-bold" >Horário</Text>
                <div className="mt-2">
                    <Text as="span" variant="text-md-regular" className="">Manhã</Text>
                    <div className="mt-2 flex gap-2">
                        <TimeSelect >09:00</TimeSelect>
                        <TimeSelect >10:00</TimeSelect>
                        <TimeSelect >11:00</TimeSelect>
                        <TimeSelect >12:00</TimeSelect>
                    </div>
                </div>
            </div>
        </form>
    </aside>
  )
}