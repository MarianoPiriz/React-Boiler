import fetchData from '@/components/Rest';

 const url = 'https://jsonplaceholder.typicode.com/posts';


export default async function ServicesPage() {
  const data = await fetchData(url);

  //console.log(data);

  return (
    <div>
      <h1>SERVICES</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h3>
            {item.id}_ {item.title}{' '}
          </h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
