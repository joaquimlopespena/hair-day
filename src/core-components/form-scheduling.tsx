import InputCalendar from "../components/input-calendar";
import InputText from "../components/input-text";
import Text from "../components/text";
import TimeSelect from "../components/time-select";
import UserSquareIcon from "../assets/icons/user-square.svg?react";
import Button from "../components/button";

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
                <div className="mt-2">
                    <Text as="span" variant="text-md-regular" className="">Tarde</Text>
                    <div className="flex flex-wrap items-center gap-2">
                        <TimeSelect >13:00</TimeSelect>
                        <TimeSelect >14:00</TimeSelect>
                        <TimeSelect >15:00</TimeSelect>
                        <TimeSelect >16:00</TimeSelect>
                        <TimeSelect >17:00</TimeSelect>
                        <TimeSelect >18:00</TimeSelect>
                    </div>
                </div>
                <div className="mt-2">
                    <Text as="span" variant="text-md-regular" className="">Noite</Text>
                    <div className="flex flex-wrap items-center gap-2">
                        <TimeSelect >19:00</TimeSelect>
                        <TimeSelect >20:00</TimeSelect>
                        <TimeSelect >21:00</TimeSelect>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <Text as="label" htmlFor="client" variant="text-md-bold" >Cliente</Text>
                <InputText id="client" className="mt-2" icon={UserSquareIcon} placeholder="Helena Souza" />
            </div>
            <Button type="submit" variant={"button-primary"} className="mt-6 w-full py-4.5 px-6 text-gray-900">Agendar</Button>
        </form>
    </aside>
  )
}