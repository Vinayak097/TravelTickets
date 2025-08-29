
import Filltrain from '../components/filltrain'


export const Home = () => {
    
  return (
    <div className="text-center mt-12 ">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
          Compare Travel Tickets
          <span className="block text-primary-light opacity-40">Find Your Best Route</span>
        </h1>
        <p className="text-xl text-white w-sm md:w-md mt-2 mx-auto text-balance">
          Search and compare flights, trains, and buses to find the perfect travel option for your journey.
        </p>
          <Filltrain></Filltrain> 
         
      
      </div>
  )
}
