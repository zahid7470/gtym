import { useState } from "react"
import { motion } from "framer-motion"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const scheduleData = {
  "Monday": [
    { time: "06:00 AM", class: "CrossFit", trainer: "Marcus Cole" },
    { time: "08:00 AM", class: "Powerlifting", trainer: "Sarah Jenkins" },
    { time: "05:00 PM", class: "HIIT", trainer: "Elena Rodriguez" },
    { time: "07:00 PM", class: "Yoga", trainer: "David Chen" },
  ],
  "Tuesday": [
    { time: "07:00 AM", class: "HIIT", trainer: "Elena Rodriguez" },
    { time: "12:00 PM", class: "Yoga", trainer: "David Chen" },
    { time: "06:00 PM", class: "CrossFit", trainer: "Marcus Cole" },
  ],
  "Wednesday": [
    { time: "06:00 AM", class: "CrossFit", trainer: "Marcus Cole" },
    { time: "08:00 AM", class: "Powerlifting", trainer: "Sarah Jenkins" },
    { time: "05:00 PM", class: "HIIT", trainer: "Elena Rodriguez" },
    { time: "07:00 PM", class: "Yoga", trainer: "David Chen" },
  ],
  "Thursday": [
    { time: "07:00 AM", class: "HIIT", trainer: "Elena Rodriguez" },
    { time: "12:00 PM", class: "Yoga", trainer: "David Chen" },
    { time: "06:00 PM", class: "CrossFit", trainer: "Marcus Cole" },
  ],
  "Friday": [
    { time: "06:00 AM", class: "CrossFit", trainer: "Marcus Cole" },
    { time: "08:00 AM", class: "Powerlifting", trainer: "Sarah Jenkins" },
    { time: "05:00 PM", class: "Open Gym", trainer: "Staff" },
  ],
  "Saturday": [
    { time: "09:00 AM", class: "Community WOD", trainer: "All Coaches" },
    { time: "11:00 AM", class: "Mobility", trainer: "David Chen" },
  ]
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState("Monday")

  return (
    <section id="schedule" className="py-24 bg-background-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-2 block">Timetable</span>
          <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase leading-tight">
            Class Schedule
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-full font-condensed font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                activeDay === day
                  ? "bg-brand-primary text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-background-base rounded-2xl border border-white/5 overflow-hidden"
        >
          <div className="grid grid-cols-1 divide-y divide-white/5">
            {scheduleData[activeDay as keyof typeof scheduleData]?.map((session, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full md:w-auto mb-4 md:mb-0">
                  <div className="text-brand-primary font-condensed font-bold text-2xl w-32">
                    {session.time}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-1">{session.class}</h4>
                    <p className="text-zinc-500 text-sm">{session.trainer}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border border-white/10 text-white rounded-md font-condensed uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors w-full md:w-auto">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
