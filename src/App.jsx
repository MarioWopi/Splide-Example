
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [totalSlides, setTotalSlides] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const carruselRef = useRef(null);
  const goNext = () => carruselRef.current?.splide.go(">");
  const goPrev = () => carruselRef.current?.splide.go("<");
  const goTo = (index) => carruselRef.current?.splide.go(index);


  useEffect(() => {
    setTotalSlides(carruselRef.current?.splide.length);
  }, [])

  const generaraPaginacion = () => {

    let paginas = []

    for (let i = 0; i < totalSlides; i++) {
      paginas.push(
        <div key={i} className={`flex-1 flex items-center justify-center hover:bg-[#cfcfcf93] hover:cursor-pointer duration-200 select-none ${activeSlide == i ? 'bg-[#e6e6e6a4] font-bold text-gray-600' : ''}`} onClick={() => goTo(i)}>
          {i + 1}
        </div>
      )
    }
    return paginas;
  }


  return (
    <>
      <div className='flex flex-col size-full items-center justify-center'>
        <div className='flex flex-row items-center gap-10'>
          <div onClick={() => goPrev()} className='bg-[#fadc55] p-5 rounded-2xl hover:cursor-pointer hover:bg-[#d8b104] duration-200 font-bold text-4xl select-none'>←</div>
          {/* tambien podemos poner onMount para cuando el splide se termine de montar*/}
          <Splide
            ref={carruselRef}
            options={{
              arrows: false,
              pagination: false,
              height: 300,
              autoplay: true,
              interval: 5000,
              rewind: true,
            }}
            onMove={(splide) => setActiveSlide(splide.index)}
            className='w-[300px]'>
            {/* Para hacerlo dinamico, crearia un map con el array de Slides */}
            <SplideSlide className="bg-amber-400 flex items-center justify-center text-5xl">
              1
            </SplideSlide>
            <SplideSlide className="bg-red-500 flex items-center justify-center text-5xl">
              2
            </SplideSlide>
            <SplideSlide className="bg-blue-300 flex items-center justify-center text-5xl">
              3
            </SplideSlide>

          </Splide>
          <div onClick={() => goNext()} className='bg-[#fadc55] p-5 rounded-2xl hover:cursor-pointer hover:bg-[#d8b104] duration-200 font-bold text-4xl select-none'>→</div>

        </div>

        <div className='w-50 bg-[#7a7a7a93] overflow-hidden rounded-2xl flex justify-between mt-10 border divide-x divide-black h-16'>
          {generaraPaginacion()}
        </div>

        <div onClick={() => goTo(2)} className="bg-[#fadc55] p-5 rounded-2xl mt-5 hover:bg-[#d8b104] hover:cursor-pointer duration-200  text-xl select-none">Ir al final</div>
      </div >
    </>
  )
}

export default App
