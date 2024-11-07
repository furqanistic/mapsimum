import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { ChevronDown, ChevronUp, Eye, GripVertical, Plus } from 'lucide-react'
import React, { useState } from 'react'

const Avatar = ({ index, total }) => {
  if (index === total - 1) {
    return (
      <div className='w-7 h-7 rounded-full bg-[#1e3a8a] border-2 border-[#0b1425] flex items-center justify-center text-xs text-white font-medium'>
        2+
      </div>
    )
  }
  return (
    <div className='w-7 h-7 rounded-full bg-gray-300 border-2 border-[#0b1425] overflow-hidden'>
      <img
        src={`/api/placeholder/28/28`}
        alt={`Person ${index + 1}`}
        className='w-full h-full object-cover'
      />
    </div>
  )
}

const BinItem = ({ bin }) => (
  <div className='border-t border-[#1a2537] px-4 py-3'>
    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
      <div className='flex items-center gap-2'>
        <span className='text-gray-400 text-sm font-mono'>::</span>
        <span className='text-white text-sm'>Bin {bin.number}</span>
      </div>
      <div className='flex items-center justify-between sm:justify-end gap-6'>
        <span className='text-gray-400 text-sm'>{bin.pieces} pieces</span>
        <button className='text-[#4ade80] hover:text-[#22c55e] px-4 py-1.5 rounded border border-[#4ade80] hover:border-[#22c55e] flex items-center gap-2 transition-colors text-sm'>
          <Eye size={16} />
          View
        </button>
      </div>
    </div>
  </div>
)

const LaneSection = React.forwardRef(
  ({ lane, isOpen, onToggle, dragHandleProps, ...props }, ref) => (
    <div ref={ref} {...props} className='mb-3'>
      <div className='bg-[#0b1425] rounded-lg border border-[#1a2537]'>
        <div className='px-4 py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-4'>
          <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
            <div className='flex items-center gap-3'>
              <div {...dragHandleProps} className='cursor-move'>
                <GripVertical className='text-gray-400' size={20} />
              </div>
              <h2 className='text-white text-base font-medium'>
                LANE {lane.name}
              </h2>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-gray-400 text-sm whitespace-nowrap'>
                Personnel in Charge :
              </span>
              <div className='flex -space-x-2'>
                {lane.personnel.map((_, index) => (
                  <Avatar
                    key={index}
                    index={index}
                    total={lane.personnel.length}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex items-center gap-3 self-end lg:self-auto'>
            <button className='bg-[#4ade80] hover:bg-[#22c55e] text-white px-3 py-1.5 rounded text-sm flex items-center gap-1.5 transition-colors'>
              <Plus size={16} />
              Add Bin
            </button>
            <button
              onClick={onToggle}
              className='p-1 hover:bg-[#1a2537] rounded transition-colors'
            >
              {isOpen ? (
                <ChevronUp className='text-gray-400' size={20} />
              ) : (
                <ChevronDown className='text-gray-400' size={20} />
              )}
            </button>
          </div>
        </div>

        {isOpen &&
          lane.bins.map((bin, index) => <BinItem key={index} bin={bin} />)}
      </div>
    </div>
  )
)

LaneSection.displayName = 'LaneSection'

const LaneListView = () => {
  const [openLanes, setOpenLanes] = useState(new Set(['A', 'D', 'E']))
  const [lanes, setLanes] = useState([
    {
      id: 'lane-1',
      name: 'A',
      personnel: Array(4).fill(null),
      bins: [
        { number: 1, pieces: 312 },
        { number: 2, pieces: 312 },
        { number: 3, pieces: 312 },
        { number: 4, pieces: 312 },
      ],
    },
    {
      id: 'lane-2',
      name: 'B',
      personnel: Array(4).fill(null),
      bins: [],
    },
    {
      id: 'lane-3',
      name: 'C',
      personnel: Array(4).fill(null),
      bins: [],
    },
    {
      id: 'lane-4',
      name: 'D',
      personnel: Array(4).fill(null),
      bins: [
        { number: 1, pieces: 312 },
        { number: 2, pieces: 312 },
        { number: 3, pieces: 312 },
      ],
    },
    {
      id: 'lane-5',
      name: 'E',
      personnel: Array(4).fill(null),
      bins: [
        { number: 1, pieces: 312 },
        { number: 2, pieces: 312 },
      ],
    },
  ])

  const toggleLane = (laneName) => {
    const newOpenLanes = new Set(openLanes)
    if (newOpenLanes.has(laneName)) {
      newOpenLanes.delete(laneName)
    } else {
      newOpenLanes.add(laneName)
    }
    setOpenLanes(newOpenLanes)
  }

  const onDragEnd = (result) => {
    if (!result.destination) return

    const reorderedLanes = Array.from(lanes)
    const [removed] = reorderedLanes.splice(result.source.index, 1)
    reorderedLanes.splice(result.destination.index, 0, removed)

    setLanes(reorderedLanes)
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable-lanes'>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='max-w-7xl mx-auto space-y-3'
            >
              {lanes.map((lane, index) => (
                <Draggable key={lane.id} draggableId={lane.id} index={index}>
                  {(provided) => (
                    <LaneSection
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      dragHandleProps={provided.dragHandleProps}
                      lane={lane}
                      isOpen={openLanes.has(lane.name)}
                      onToggle={() => toggleLane(lane.name)}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className='flex justify-center items-center gap-1 mt-8'>
        <button className='px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors'>
          Previous
        </button>
        <button className='px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors'>
          1
        </button>
        <button className='px-4 py-2 text-sm bg-[#1e3a8a] text-white rounded'>
          2
        </button>
        <button className='px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors'>
          3
        </button>
        <button className='px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors'>
          Next
        </button>
      </div>
    </>
  )
}

export default LaneListView
