import Button from "./components/button"
import Text from "./components/text"
import CaretRightIcon from "./assets/icons/caret-right.svg?react"
import CalendarIcon from "./assets/icons/calendar.svg?react"
import TrashIcon from "./assets/icons/trash.svg?react"
import Icon from "./components/icon"
import ButtonIcon from "./components/button-icon"
import InputText from "./components/input-text"
import TimeSelect from "./components/time-select"
import InputCalendar from "./components/input-calendar"
import Container from "./components/container"
import ScheduleCard from "./components/schedule-card"


export default function App() {
  return (
    <>
      <Container size="full">
        <div>
          <Text as="h1" variant="text-h2-bold">Hello World</Text>
          <Text as="h2" variant="text-md-bold">Hello World</Text>
          <Text as="h3" variant="text-md-regular">Hello World</Text>
          <Text as="h4" variant="text-sm-bold">Hello World</Text>
          <Text as="h5" variant="text-sm-regular">Hello World</Text>
        </div>
        <div>
          <Button variant="button-primary" icon={CaretRightIcon}>Click me</Button>
          <Button variant="button-secondary" icon={CaretRightIcon}>Click me</Button>
        </div>
        <div>
          <Icon svg={CalendarIcon} className="w-6 h-6" />
          <Icon svg={TrashIcon} className="w-6 h-6" />
          <Icon svg={CaretRightIcon} className="w-6 h-6" />
        </div>
        <div>
          <ButtonIcon icon={CalendarIcon} />
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={CaretRightIcon} />
        </div>
        <div>
          <InputText placeholder="Enter your email" />
          <InputText placeholder="Enter your email" icon={CalendarIcon} />
        </div>
        <div>
          <TimeSelect>10:00</TimeSelect>
          <TimeSelect selected>10:00</TimeSelect>
          <TimeSelect disabled>10:00</TimeSelect>
        </div>
        <div>
          <InputCalendar />
        </div>

        <div>
          <ScheduleCard period="morning" periodLabel="Morning" timeRange="10:00 - 12:00" icon={CalendarIcon} appointments={[{ time: "10:00", name: "John Doe" }]} />
        </div>
      </Container>
    </>
  )
}
