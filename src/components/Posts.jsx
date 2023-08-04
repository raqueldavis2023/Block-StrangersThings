const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
//import { useEffect } from 'react'
//import { useParams } from 'react-router-dom'

function Posts() {

    /*useEffect(() => {
        async function fetchdata() {

            try {
                const response = await fetch(`${BASE_URL}/posts`)
                const data = await response.json()

                setPosts(data.results)
            } catch ( err) {
                console.log('an error occurred while fetching posts')
            }
        }

        fetchdata()
    })*/



    console.log("Posts")
   
    return (
    <>
       
    <div>
     <h2>posts</h2>
    </div>
    </>
    )
}

export default Posts