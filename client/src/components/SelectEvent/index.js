import { Fragment, useState, useEffect } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { getEvents } from '../../utils/API'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const SelectEvent = () => {
  const [selected, setSelected] = useState({
    _id: '',
    eventName: '',
  })
  const [events, setEvents] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    runGetEventsAPI()
  })

  const runGetEventsAPI = async () => {
    try {
      const response = await getEvents()

      if (!response.ok) {
        throw new Error('something went wrong!')
      }

      const events = await response.json()
      setEvents(events)
    } catch (err) {
      console.error(err)
    }
  }

  const filteredEvents =
    query === ''
      ? events
      : events.filter((event) => {
          return event.eventName.toLowerCase().startsWith(query.toLowerCase())
        })

  return (
    <div className="mt-1 relative w-full lg:max-w-xl mx-auto">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 lg:text-lg">
          <Combobox.Input
            onChange={(e) => setQuery(e.target.value)}
            className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>
        </div>

        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>
          <Combobox.Options className="z-10 mt-1 w-full bg-white shadow-lg max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none lg:text-lg">
            {filteredEvents.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">No events found</div>
            ) : (
              filteredEvents.map((event) => (
                <Combobox.Option
                  key={event._id}
                  className={({ active }) => classNames(active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')}
                  value={event.eventName}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center">
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>{event.eventName}</span>
                      </div>

                      {selected ? (
                        <span className={classNames(active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4')}>
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  )
}
