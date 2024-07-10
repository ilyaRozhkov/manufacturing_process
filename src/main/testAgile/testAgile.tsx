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
import './testAgile.css'

  
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

export default function AgileTest(){
    const test = [
        {id:6,text:'Запуск приложения и сбор статистики' },
        {id:2,text:'Проработка требований и архитектуры нового функционала' },
        {id:1,text:'Общение с заказчиком или конечным потребителем' },
        {id:4,text:'Создание интерфейста' },
        {id:5,text:'Поиск и исправление ошибок на этапе разработки' },
        {id:3,text:'Разработка логики работы приложения' },
    ]
    const [items, setItems] = useState(test);
    const [see, setSee] = useState(false);
    const [answer, setAnswer] = useState('Не верно')
    const CheackAnswer = (arr) => {
        const test = [
            {id:1,text:'Общение с заказчиком или конечным потребителем' },
            {id:2,text:'Проработка требований и архитектуры нового функционала' },
            {id:3,text:'Разработка логики работы приложения' },
            {id:4,text:'Создание интерфейста' },
            {id:5,text:'Поиск и исправление ошибок на этапе разработки' },
            {id:6,text:'Запуск приложения и сбор статистики' },
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
        
        <div className='see'>
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
        <button style={{marginBottom: '18px'}}onClick={()=>CheackAnswer(items)}>
            <span className="transition"></span>
            <span className="gradient"></span>
            <span className="label">Проверить</span>
        </button>
      </div>
    );
  }