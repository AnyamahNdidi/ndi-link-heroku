import React from 'react'
import axios from "axios"

function Home() {
  const [data, setData] = React.useState([])

  const getData = async () => {
    const result = await axios.get("https://sheltered-reaches-05616.herokuapp.com/movie/api/movie")
    console.log(result.data)
    if (result.data) {
      setData(result.data)
    }
  }

  React.useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <center>
        <div>
          {
            data.map(({ Mname, id }) => (
              <div key={id}>
                {Mname}
              </div>
            ))
          }
        </div>

      </center>

    </div>
  )
}

export default Home
