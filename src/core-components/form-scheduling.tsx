import Text from "../components/text";

export default function FormScheduling() {
  return (
    <aside className="p-20 bg-gray-700 rounded-xl max-w-124.5 h-full w-full flex flex-col gap-6">
        <div className="space-y-1 w-full">
            <Text as="h2" variant="text-h2-bold" className="text-white">Agende um atendimento</Text>
            <Text as="span" variant="text-md-regular">Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
        </div>

        {/* <form className="flex flex-col gap-4 bg-gray-700 h-full py-3 px-5 rounded-lg">
            <div className="p-20 ">
                <Text variant="text-md-bold">Schedule your appointment</Text>
            </div>
        </form> */}
    </aside>
  )
}