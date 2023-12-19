"use client"
import { useMediaQuery } from 'react-responsive';
export default function tss(){
const MyComponent = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
      {isMobile ? <p>Estou em um dispositivo móvel!</p> : <p>Estou em um desktop!</p>}
    </div>
  );
};}