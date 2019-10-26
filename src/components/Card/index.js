import React, {useRef, useContext} from "react";
import {useDrag, useDrop} from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from "./styles";

export default function Card( {data, index, listIndex} ) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [{isHover}, dropRef] = useDrop({
    accept: 'CARD',
    collect: monitor => ({
      isHover: monitor.isOver({ shallow: true })
    }),
    hover(item, monitor){

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;


      // index do item que esta sendo arrastado
      const draggedIndex = item.index;
      // alvo onde está sendo arrastado
      const targetIndex = index;

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
        return;
      }

      // tamanho do elemento
      const targetSize = ref.current.getBoundingClientRect();
      // metade do tamanho do card
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      // distancia que o item foi arrastado (x, y)
      const draggedOffset = monitor.getClientOffset();

      // distancia que o item percorreu (y) - distância do card alvo do topo
      const draggedTop = draggedOffset.y - targetSize.top;
      

      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return;
      }

      if(draggedIndex > targetIndex && draggedTop > targetCenter){
        return;
      }
      
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      
      item.index = targetIndex;
      item.listIndex = targetListIndex;
      

    }
  });

  dragRef(dropRef(ref));
  
  return (
    <Container ref={ref} isDragging={isDragging} isHover={isHover}>
      <header>
        {data.labels.map( label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      {data.user && (
        <img src={data.user} alt="" />
      )}
    
     </Container>
  );
}