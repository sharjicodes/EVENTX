import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import list from "../../public/list.json"

function List() {
    const filterData = list.filter((data)=> data.category === "free");
    
//   const [book, setBook] = useState([]);
//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");

//         const data = res.data.filter((data) => data.category === "Free");
//         console.log(data);
//         setBook(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getBook();
//   }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Comprehensive Solutions for Every Occasion</h1>
          <p>
          Our event management services offer a seamless blend of creativity, precision, and excellence to make every event unforgettable. From corporate conferences to intimate gatherings, we provide tailored solutions to meet your unique needs. Our experienced team ensures every detail is handled with care, allowing you to enjoy your event without any stress. Whether it's a wedding, baby shower, or house warming, we are here to bring your vision to life with impeccable execution and unparalleled service.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item)=>(
                <Cards item={item} key={item.id} />
            ))}
            {/* {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))} */}
          </Slider>
        </div>
      </div>
  );
}
export default List;