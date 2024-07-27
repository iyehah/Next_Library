import Book from './Book';

const Books = ({ data, searchString = '' }) => {
  const checkCondition = (elem) => {
    return elem && elem.toLowerCase().includes(searchString.toLowerCase());
  }

  return (
    <section className="grid justify-items-center gap-4">
      {
        data.map((book, index) => {
          const title = book.title || '';
          const author = book.author || '';

          if (checkCondition(title) || checkCondition(author)) {
            return (
              <div key={index} className="border border-gray-100 mt-1">
                <Book book={book} />
              </div>
            )
          } else {
            return null;
          }
        })
      }
    </section>
  )
}

export default Books;
