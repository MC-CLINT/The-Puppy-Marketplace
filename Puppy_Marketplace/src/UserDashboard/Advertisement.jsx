import add from '../assets/advert.png'

const Advertisement = () => {
    return (
        <div className="relative bg-gradient-to-r from-sky-900 to-sky-600 rounded-lg p-4 text-white h-80 flex flex-col items-center">
        <img src={add} className="h-80 w-96 " />
        <div className="absolute inset-0 flex flex-col justify-center -mt-20 items-center text-center text-black">
          <h2 className="text-xl font-bold">Flash Sales!</h2>
          <h2 className="text-xl font-bold">Announcements!</h2>
          <h2 className="text-xl font-bold">Discount Services!</h2>
         
        </div>
      </div>
      
    );
};

export default Advertisement;
