import CardAgenda from "../core-components/card-agenda";
import FormScheduling from "../core-components/form-scheduling";
import Logo from "../assets/logo/logo.svg?react";

export default function Home() {

  return (
    <main className="relative h-screen overflow-hidden p-3 flex gap-3 flex-col md:flex-row max-w-360">
      <div className="py-3 px-5 bg-gray-600 rounded-br-xl absolute top-0 left-0">
        <Logo className="h-9 md:h-12" />
      </div>
      <FormScheduling />
      <CardAgenda />
    </main>
  )
}