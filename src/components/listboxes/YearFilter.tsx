import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Check, ArrowsVertical } from 'phosphor-react'
import './filters.css'

const years = [
  { name: '2022' },
  { name: '2021' },
  { name: '2020' },
  { name: '2019' },
  { name: '2018' },
]

export default function YearFilter({
  setYearName,
}: {
  setYearName: (yearName: string) => void
}) {
  const [selected, setSelected] = useState(years[0])
  useEffect(() => {
    setYearName(selected.name)
  }, [selected])
  return (
    <div className=" w-[5.5rem]">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="group relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500  sm:text-sm ">
            <span className="block truncate">{selected.name}</span>
            <span className=" pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
              <ArrowsVertical
                className="h-5 w-5 text-gray-400 group-hover:text-brand group-focus:text-brand"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="ListboxOptions">
              {years.map((year, yearIdx) => (
                <Listbox.Option
                  key={yearIdx}
                  className={({ active }) =>
                    `relative  cursor-default select-none py-2 pl-7 pr-1 ${
                      active ? 'bg-amber-100 text-brand' : 'text-gray-800'
                    }`
                  }
                  value={year}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-semibold' : 'font-normal'
                        }`}
                      >
                        {year.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-brand">
                          <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
