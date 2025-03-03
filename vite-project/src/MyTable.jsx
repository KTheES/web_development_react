
function MyTable() {

  const data = [
    {id: 1, brand: 'Ford', model: 'Mustang'},
    {id: 2, brand: 'VW', model: 'Beetle'},
    {id: 3, brand: 'Tesla', model: 'Model S'},
  ];
  
  return(
    <table>
      <tbody>
        {
          data.map(item =>
           
            <tr key={item.id}>
              <td>{item.brand} </td> <td>{item.model}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}

 // item은 data의 자료형입니다. 그러기에 이 안에서 data가 아닌 item이라는 명칭을 씁니다. (data 내부 안에 있는 객체들을 표현) 

export default MyTable;