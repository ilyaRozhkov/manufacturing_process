import { useEffect, useState } from 'react';
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
  sortableKeyboardCoordinates,
  arrayMove,
} from '@dnd-kit/sortable';
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import './testWaterfall.css'

  
const SortableItem = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: props.id });
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      border: '1px solid',
      padding: '1em',
      margin: '1em 0',
      width: ' 33%',
    };
    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <p>
        {props.text}
        </p>
      </div>
    );
  };

export default function WaterfallTest(){
  const test = [
    {id:3,text:'Разработка архитектуры приложения' },
    {id:1,text:'Изучение проблематики запроса' },
    {id:4,text:'Разработка приложения, отлов ошибок и их исправление' },
    {id:5,text:'Запуск приложения и сбор статистики' },
    {id:2,text:'Анализ требуемых разработок' },
  ]
  const [items, setItems] = useState(test);
  const [see, setSee] = useState(false);
  const [answer, setAnswer] = useState('Не верно')
  const CheackAnswer = (arr) => {
      const test = [
          {id:1,text:'Изучение проблематики запроса' },
          {id:2,text:'Анализ требуемых разработок' },
          {id:3,text:'Разработка архитектуры приложения' },
          {id:4,text:'Разработка приложения, отлов ошибок и их исправление' },
          {id:5,text:'Запуск приложения и сбор статистики' },
      ]
      setSee(true);
      setAnswer(JSON.stringify(arr) == JSON.stringify(test) ? 'Верно' : 'Не верно')

    };
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );
  useEffect(()=>{
    if(see){
        setTimeout(()=>setSee(false), 2500)
    }
  },[see])
    const handleDragEnd = ({ active, over }) => {
      if (!over) {
        return;
      }
  
      if (active.id == over.id) {
        return;
      }
  
      setItems((items) => {
        return arrayMove(
          items,
          items.findIndex((it) => it.id == active.id),
          items.findIndex((it) => it.id == over.id)
        );
      });
    };
  
    return (
      <div className='test_agile'>
        {see && 
        
        <div className='see_right'>
            <p>
            {answer}
            </p>
        </div>
        }
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext items={items} strategy={rectSortingStrategy}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id} text={item.text} />
            ))}
          </SortableContext>
        </DndContext>
        <button onClick={()=>CheackAnswer(items)}>
            <span className="transition"></span>
            <span className="gradient"></span>
            <span className="label">Проверить</span>
        </button>
      </div>
    );
  }