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
    </div>
  )
}