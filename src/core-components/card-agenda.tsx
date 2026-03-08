import InputCalendar from "../components/input-calendar";

export default function CardAgenda() {

    return (
        <div className="w-full h-dvh p-20 text-white">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-h2-bold">Sua agenda</h2>
                    <span className="text-md-regular">Consulte os seus cortes de cabelo agendados por dia</span>
                </div>
                <div>
                    <InputCalendar size="sm" />
                </div>
            </div>
            <div className="space-y-3">
                <div className="border rounded-lg border-gray-600">
                    <div className="px-5 py-3 flex items-center justify-between gap-6 border-b border-gray-600">
                        <span className="text-md-regular">Manhã</span>
                    </div>
                    <ul>
                        <li className="px-5 py-3 flex items-center justify-between gap-6 border-b border-gray-600">
                            <span className="text-md-regular">09:00 - Helena Souza</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}