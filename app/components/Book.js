const Book = ({ book }) => {
    const qr = book.url;
    const qrCode = "https://api.qrserver.com/v1/create-qr-code/?data="+qr+"&size=70x70"
    return (
      <div className="text-center flex flex-col items-center bg-white md:flex-row md:max-w-3xl hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img 
              className="transform hover:scale-110 rounded-t-lg md:h-auto md:w-48 sm:h-auto sm:w-48"
              src={book.img}
              alt="Image could not load"
          />
          <div className="content flex flex-col justify-space-around items-center p-4 cursor-pointer">
              <div>
                  <div className='no-underline hover:underline hover:text-blue-800 dark:hover:text-blue-400'>
                      <a href={book.url}>{book.title}</a>
                  </div>
                  <div style={{paddingTop: '1rem'}}>{book.author}</div>
                  <div className="mt-2">{book.overview}</div>
                  <div className={`state mt-3 ${book.free ? 'free' : 'paid'}`} style={{paddingBottom: '1rem'}}><h1>{book.free ? "مجاني" : "مدفوع"}</h1></div>
              </div>
              <button
                  className="w-38 mt-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                      window.open(book.url);
                  }}
              >
                  Visit Website
              </button>
              <img 
              className="qr-code"
              src={qrCode}
              alt="Image could not load"
              />
          </div>
      </div>
    )
  }
  
  export default Book;