import { useDraggable } from "@dnd-kit/core";

export function Draggable(props: { children: React.ReactNode }) {
  const { transform, listeners, setNodeRef, attributes } = useDraggable({
    'id': 'draggable'
  });
  const style = transform ? {
    transform: `translate2d(${transform.x}px, ${transform.y}px)`
  } : undefined;

  return (
    <button ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.children}
    </button>
  )
}